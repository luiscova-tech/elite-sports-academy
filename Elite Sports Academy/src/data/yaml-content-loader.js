(function attachEliteSportsAcademyDataLoader(root) {
  "use strict";

  const DATABASES = [
    {
      key: "countries",
      path: "data/countries.yaml",
      required: ["id", "name", "region"],
      normalize: normalizeCountry
    },
    {
      key: "sports",
      path: "data/sports.yaml",
      required: ["id", "name", "category"],
      normalize: normalizeSport
    },
    {
      key: "buildings",
      path: "data/buildings.yaml",
      required: ["id", "name", "category", "currency"],
      normalize: normalizeBuilding
    }
  ];

  function parseYaml(text) {
    const errors = [];
    const lines = prepareLines(text, errors);
    if (!lines.length) return { data: {}, errors };
    const parsed = parseBlock(lines, 0, lines[0].indent, errors);
    return { data: parsed.value || {}, errors };
  }

  function prepareLines(text, errors) {
    return String(text || "")
      .replace(/\r\n?/g, "\n")
      .split("\n")
      .map((line, index) => {
        if (line.includes("\t")) errors.push(`Line ${index + 1}: tabs are not supported in YAML indentation.`);
        const withoutComment = stripComment(line);
        if (!withoutComment.trim()) return null;
        const indent = withoutComment.match(/^ */)[0].length;
        return { indent, text: withoutComment.trimEnd().trimStart(), line: index + 1 };
      })
      .filter(Boolean);
  }

  function stripComment(line) {
    let quote = "";
    for (let i = 0; i < line.length; i += 1) {
      const ch = line[i];
      if ((ch === "\"" || ch === "'") && line[i - 1] !== "\\") {
        quote = quote === ch ? "" : quote || ch;
      }
      if (ch === "#" && !quote) return line.slice(0, i).trimEnd();
    }
    return line;
  }

  function parseBlock(lines, index, indent, errors) {
    const line = lines[index];
    if (!line) return { value: null, index };
    if (line.text.startsWith("-")) return parseSequence(lines, index, line.indent, errors);
    return parseMap(lines, index, indent, errors);
  }

  function parseMap(lines, index, indent, errors) {
    const output = {};
    let cursor = index;
    while (cursor < lines.length) {
      const line = lines[cursor];
      if (line.indent < indent || line.text.startsWith("-")) break;
      if (line.indent > indent) {
        errors.push(`Line ${line.line}: unexpected indentation.`);
        cursor += 1;
        continue;
      }
      const pair = splitPair(line.text);
      if (!pair) {
        errors.push(`Line ${line.line}: expected key/value pair.`);
        cursor += 1;
        continue;
      }
      if (Object.prototype.hasOwnProperty.call(output, pair.key)) {
        errors.push(`Line ${line.line}: duplicate key "${pair.key}".`);
      }
      if (pair.value === "") {
        const next = lines[cursor + 1];
        if (!next || next.indent <= line.indent) {
          output[pair.key] = null;
          cursor += 1;
        } else {
          const parsed = parseBlock(lines, cursor + 1, next.indent, errors);
          output[pair.key] = parsed.value;
          cursor = parsed.index;
        }
      } else {
        output[pair.key] = parseScalar(pair.value);
        cursor += 1;
      }
    }
    return { value: output, index: cursor };
  }

  function parseSequence(lines, index, indent, errors) {
    const output = [];
    let cursor = index;
    while (cursor < lines.length) {
      const line = lines[cursor];
      if (line.indent < indent || line.indent !== indent || !line.text.startsWith("-")) break;
      const rest = line.text.slice(1).trim();
      if (!rest) {
        const parsed = parseBlock(lines, cursor + 1, indent + 2, errors);
        output.push(parsed.value);
        cursor = parsed.index;
        continue;
      }

      const pair = splitPair(rest);
      if (!pair) {
        output.push(parseScalar(rest));
        cursor += 1;
        continue;
      }

      const item = {};
      item[pair.key] = pair.value === "" ? null : parseScalar(pair.value);
      cursor += 1;
      while (cursor < lines.length && lines[cursor].indent > indent) {
        const parsed = parseBlock(lines, cursor, lines[cursor].indent, errors);
        if (parsed.value && typeof parsed.value === "object" && !Array.isArray(parsed.value)) {
          Object.assign(item, parsed.value);
        } else {
          errors.push(`Line ${lines[cursor].line}: expected nested object for list item.`);
        }
        cursor = parsed.index;
      }
      output.push(item);
    }
    return { value: output, index: cursor };
  }

  function splitPair(text) {
    const index = text.indexOf(":");
    if (index <= 0) return null;
    return {
      key: text.slice(0, index).trim(),
      value: text.slice(index + 1).trim()
    };
  }

  function parseScalar(value) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (value === "null") return null;
    if ((value.startsWith("\"") && value.endsWith("\"")) || (value.startsWith("'") && value.endsWith("'"))) {
      return value.slice(1, -1);
    }
    if (/^-?\d+(?:\.\d+)?$/.test(value)) return Number(value);
    return value;
  }

  async function loadContentDatabases(options = {}) {
    const fetchImpl = options.fetchImpl || (typeof fetch === "function" ? fetch.bind(root) : null);
    const sources = options.sources || DATABASES;
    const baseUrl = options.baseUrl || ".";
    const result = createResult();

    if (!fetchImpl) {
      result.status = "fallback";
      result.errors.push("No fetch implementation is available for YAML loading.");
      return result;
    }

    await Promise.all(sources.map(async database => {
      const source = createSourceResult(database);
      result.sources[database.key] = source;
      try {
        const text = await fetchText(fetchImpl, joinPath(baseUrl, database.path), options.timeoutMs || 3000);
        const parsed = parseYaml(text);
        source.parseErrors.push(...parsed.errors);
        const entries = parsed.data && parsed.data[database.key];
        if (!Array.isArray(entries)) {
          source.errors.push(`Missing root list "${database.key}".`);
          return;
        }
        source.items = entries.map(item => database.normalize ? database.normalize(item) : item);
        validateEntries(database, source);
      } catch (error) {
        source.errors.push(error && error.message ? error.message : String(error));
      }
    }));

    sources.forEach(database => {
      const source = result.sources[database.key];
      if (!source) return;
      result.data[database.key] = source.items;
      result.errors.push(...source.errors.map(error => `${database.key}: ${error}`));
      result.errors.push(...source.parseErrors.map(error => `${database.key}: ${error}`));
      result.warnings.push(...source.warnings.map(warning => `${database.key}: ${warning}`));
    });
    result.loadedAt = Date.now();
    result.status = result.errors.length ? (loadedAny(result) ? "partial" : "fallback") : "ready";
    return result;
  }

  function createResult() {
    return {
      status: "loading",
      loadedAt: 0,
      data: { countries: [], sports: [], buildings: [] },
      sources: {},
      errors: [],
      warnings: []
    };
  }

  function createSourceResult(database) {
    return {
      key: database.key,
      path: database.path,
      count: 0,
      items: [],
      errors: [],
      parseErrors: [],
      warnings: []
    };
  }

  async function fetchText(fetchImpl, url, timeoutMs) {
    const request = fetchImpl(url);
    const response = await withTimeout(request, timeoutMs, `Timed out loading ${url}.`);
    if (!response || !response.ok) {
      const status = response ? `${response.status} ${response.statusText || ""}`.trim() : "No response";
      throw new Error(`Could not load ${url}: ${status}.`);
    }
    return response.text();
  }

  function withTimeout(promise, timeoutMs, message) {
    if (!timeoutMs) return promise;
    let timeoutId = 0;
    const timeout = new Promise((_, reject) => {
      timeoutId = setTimeout(() => reject(new Error(message)), timeoutMs);
    });
    return Promise.race([promise, timeout]).finally(() => clearTimeout(timeoutId));
  }

  function validateEntries(database, source) {
    const ids = new Set();
    source.items.forEach((item, index) => {
      if (!item || typeof item !== "object" || Array.isArray(item)) {
        source.errors.push(`Entry ${index + 1} is not an object.`);
        return;
      }
      database.required.forEach(field => {
        if (item[field] === undefined || item[field] === null || item[field] === "") {
          source.errors.push(`${database.key}[${index + 1}] is missing "${field}".`);
        }
      });
      if (typeof item.id === "string") {
        if (!/^[a-z0-9_]+$/.test(item.id)) source.errors.push(`${item.id} does not follow id standards.`);
        if (ids.has(item.id)) source.errors.push(`Duplicate id "${item.id}".`);
        ids.add(item.id);
      }
    });
    source.count = source.items.length;
  }

  function loadedAny(result) {
    return Object.values(result.sources).some(source => source.items && source.items.length);
  }

  function normalizeCountry(raw) {
    return {
      ...raw,
      signature_sports: asList(raw.signature_sports),
      shared_sports: asList(raw.shared_sports),
      competition_circuits: asList(raw.competition_circuits)
    };
  }

  function normalizeSport(raw) {
    const unlockRequirement = raw.unlock_requirement || (raw.campus_unlock ? { type: "campus", id: raw.campus_unlock } : null);
    const rosterSize = raw.team_size || raw.competition_roster || raw.min_roster || 1;
    return {
      ...raw,
      unlock_requirement: unlockRequirement,
      seasons: asList(raw.seasons),
      training_focus: asList(raw.training_focus),
      min_roster: raw.min_roster || rosterSize,
      max_roster: raw.max_roster || rosterSize,
      competition_roster: raw.competition_roster || rosterSize
    };
  }

  function normalizeBuilding(raw) {
    return {
      ...raw,
      bonuses: asList(raw.bonuses)
    };
  }

  function asList(value) {
    if (Array.isArray(value)) return value;
    if (value === undefined || value === null || value === "") return [];
    return [value];
  }

  function joinPath(baseUrl, path) {
    if (!baseUrl || baseUrl === ".") return path;
    return `${String(baseUrl).replace(/\/$/, "")}/${path}`;
  }

  const api = {
    parseYaml,
    loadContentDatabases,
    databases: DATABASES
  };

  root.EliteSportsAcademyDataLoader = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof globalThis !== "undefined" ? globalThis : window);

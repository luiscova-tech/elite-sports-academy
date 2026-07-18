# 📐 SCHEMA_REFERENCE.md

# Purpose

This document defines the schema used by each data file.

It is the reference for both developers and Codex.

---

# countries.yaml

```yaml
id:
name:
region:

tagline:

campus_bonus:

signature_sports:

shared_sports:

competition_circuits:

global_icon:
```

---

# sports.yaml

```yaml
id:
name:
category:

unlock_requirement:

athlete_type:

training_focus:

seasons:

min_roster:

max_roster:

competition_roster:

indoor:
```

---

# buildings.yaml

```yaml
id:

name:

category:

currency:

unlock_requirement:

base_cost:

max_level:

bonuses:
```

---

# competitions.yaml

```yaml
id:

name:

sport:

level:

reward:

requirements:
```

---

# sponsors.yaml

```yaml
id:

name:

tier:

requirements:

bonuses:
```

---

# achievements.yaml

```yaml
id:

name:

description:

requirements:

reward:
```

---

# research.yaml

```yaml
id:

name:

department:

cost:

requirements:

effect:
```

---

# Rule

If a schema changes, update this document first before creating new entries.
# 📋 DATA_STANDARD.md

# Purpose

This document defines the standards used by every data file in Elite Sports Academy.

These rules should be followed unless there is a compelling gameplay reason not to.

---

# General Rules

- Data is stored in YAML.
- One object per entry.
- Every object has a unique `id`.
- IDs never change after release.

---

# ID Standards

IDs are:

- lowercase
- words separated by underscores
- never contain spaces
- never contain special characters

Examples

```yaml
id: south_korea
id: field_hockey
id: world_championship
```

---

# Display Names

Use `name` for player-facing text.

Example

```yaml
id: south_korea
name: South Korea
```

---

# References

Always reference IDs.

Correct

```yaml
country: japan
sport: swimming
```

Incorrect

```yaml
country: Japan
sport: Swimming
```

---

# Booleans

Always use

```yaml
true
false
```

Never

```yaml
yes
no
```

---

# Numbers

Percentages are decimals.

Example

```yaml
0.10
0.25
1.00
```

Never

```yaml
10%
25%
```

---

# Lists

Use lists whenever multiple values are possible.

Example

```yaml
signature_sports:
  - Swimming
  - Cycling
```

---

# Field Order

When practical, use this order:

1. id
2. name
3. category
4. unlock_requirement
5. gameplay
6. economy
7. progression
8. visual
9. notes

---

# Comments

Comments explain why.

Never explain what the code already says.

---

# Future Proofing

New fields may be added.

Existing field names should not change unless absolutely necessary.

---

# Philosophy

Data should be:

- Easy to read
- Easy to edit
- Easy to validate
- Easy to convert into game data
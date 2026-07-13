# 🏗 IMPLEMENTATION_PLAN.md

# Status

Design Status: Approved

Version:
1.0

Owner:
Engineering + Game Director

Implementation Status:
Planning Only

---

# Purpose

This document defines the engineering roadmap for transforming Elite Sports Academy from a single academy progression system into a global academy organization with multiple international campuses.

This plan exists to protect player progress, preserve save compatibility, and ensure that future systems are implemented in the correct order.

---

# Implementation Philosophy

Engineering follows the approved design documents.

The implementation should:

- preserve the current playable game
- avoid unnecessary rewrites
- migrate systems gradually
- maintain save compatibility
- prioritize stability over speed

The goal is evolution, not replacement.

---

# Current Architecture

The current game contains:

- One global Training Point economy
- Global facilities
- Global coaches
- Global athletes
- Global competitions
- Country chapters
- Prestige system
- Academy identity
- World Tour presentation

The current architecture does not yet support:

- Multiple campuses
- Local economies
- Local athletes
- Global coaches
- Headquarters systems

---

# Target Architecture

Future structure:

```
Global Academy

├── Headquarters
│
├── Academy Funding
│
├── Reputation
│
├── Sponsors
│
├── Global Coaches
│
├── Hall of Fame
│
└── Country Campuses

    ├── USA Campus
    │
    ├── Japan Campus
    │
    ├── Brazil Campus
    │
    └── Future Campuses
```

---

# Phase 1

## Global Academy Save Architecture

Priority:

HIGH

Goal:

Create the foundation for global and local data separation.

Introduce:

Global Academy object

Country Campus objects

Future-compatible save structure

Example:

```
academy

├── identity

├── reputation

├── medals

├── trophies

├── funding

├── coaches

└── campuses

    ├── USA

    ├── Japan

    └── Future
```

Do not change gameplay yet.

Do not remove existing systems.

Create adapters between old and new structures.

---

# Phase 2

## USA Campus Migration

Priority:

HIGH

Goal:

Move current USA progress into the new campus structure.

USA becomes:

- first campus
- headquarters location
- existing player progress

Migrate:

- facilities
- Training Points
- athletes
- competitions
- chapter progress

Validate:

Existing players lose nothing.

---

# Phase 3

## Japan Campus Migration

Priority:

HIGH

Goal:

Convert Japan from a chapter into a real campus.

Japan receives:

- local economy
- local athletes
- local facilities
- local competitions

Japan remains permanently accessible.

---

# Phase 4

## Global Coach System

Priority:

MEDIUM

Goal:

Move coaches from local records into a global coach pool.

Add:

Coach assignment

Coach transfer

Coach specialization

Do not redesign coach mechanics initially.

---

# Phase 5

## Local Economy

Priority:

MEDIUM

Goal:

Separate:

Training Points

from

Academy Funding

Training Points:

Used locally.

Academy Funding:

Used globally.

Do not implement sponsors yet.

---

# Phase 6

## Regional Expansion Framework

Priority:

MEDIUM

Goal:

Create region-based expansion.

Regions:

- North America
- South America
- Europe
- Asia
- Africa
- Oceania

Support:

Country selection

Campus creation

Regional competitions

---

# Phase 7

## Brazil Campus

Priority:

MEDIUM

Goal:

Create the first new campus using the new architecture.

Brazil should not be built using the old country chapter system.

Brazil should demonstrate:

- local athletes
- local sports
- local competitions
- unique identity

---

# Phase 8

## Visual Campus Expansion

Priority:

MEDIUM

Goal:

Replace placeholder visuals with richer campus experiences.

Includes:

SVG buildings

Campus themes

Regional architecture

Country identity

---

# Testing Strategy

Every phase requires:

## Save Testing

Verify:

- old saves load
- no progress is lost
- migrations work

---

## Gameplay Testing

Verify:

- player progression remains understandable
- economy remains balanced
- systems interact correctly

---

## Playtesting

Review:

- clarity
- enjoyment
- emotional attachment
- confusion points

---

# Major Risks

## Risk 1

Save corruption.

Solution:

Always use migrations.

Never replace old save structures directly.

---

## Risk 2

Too much complexity.

Solution:

Implement one architecture layer at a time.

---

## Risk 3

Losing the current fun gameplay loop.

Solution:

Keep the current game playable after every milestone.

---

# Definition of Done

A major architecture milestone is complete when:

- code works
- saves are preserved
- documentation is updated
- screenshots are reviewed
- player testing is completed

---

# Final Goal

Transform Elite Sports Academy from:

"A sports idle game"

into:

"A global Olympic academy management game where players build, develop, and expand an international organization."

---

# Design Approval

Approved by:

Game Director

Creative Director

Status:

Ready for implementation planning.
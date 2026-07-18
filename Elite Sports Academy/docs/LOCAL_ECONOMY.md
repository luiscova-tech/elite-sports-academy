# 💰 LOCAL_ECONOMY.md

# Status

Design Status: Approved

Version:
1.0

Owner:
Game Director

Implementation Status:
Foundation Implemented

---

# Purpose

Elite Sports Academy uses a dual-layer economy.

Every campus manages its own local operations while contributing to the long-term growth of the Global Academy.

The economy should encourage players to make strategic decisions instead of simply accumulating one universal currency.

---

# Design Philosophy

Every campus should feel independent.

Every campus should contribute to the success of the Global Academy.

Players should decide how each campus supports the organization.

The economy should reward both expansion and specialization.

---

# Local Resources

## 🟦 Training Points (TP)

Training Points belong only to the active campus.

Training Points represent the daily operating budget of a campus.

They are used for:

- Facilities
- Local athletes
- Local coaches
- Local upgrades
- Campus improvements
- Training programs

Training Points never move between campuses.

Every campus owns its own TP balance.

Current implementation:

- USA, Japan, and Brazil own local TP through `state.campuses.*.localTrainingPoints`.
- The legacy root `state.tp` remains an active-campus compatibility mirror.
- Active campus travel saves TP into the old campus and loads TP from the selected unlocked campus.
- Existing facility, coach, athlete, competition, prestige, and click formulas continue to spend and award the active campus TP through compatibility helpers.
- Brazil uses local TP for its Football, Volleyball, and Futsal facilities, athletes, and local competitions.

---

# Global Resources

## 💰 Academy Funding

Academy Funding belongs to Headquarters.

Academy Funding represents:

Government support

Private donations

Sponsor income

Campus contributions

International recognition

Academy Funding is used for:

Research

Coach Education

Headquarters

Global Equipment

Campus Expansion

Operations

Future Systems

Academy Funding never belongs to an individual campus.

Current implementation:

- Academy Funding is stored at `state.academy.headquarters.academyFunding`.
- Academy Funding can be earned through campus contributions and approved chapter rewards.
- Academy Funding spending is not implemented yet.
- Academy Funding is displayed as a read-only Headquarters resource until Headquarters gameplay is approved.

---

## 🏅 Reputation

Reputation measures the academy's prestige.

Reputation is earned through:

Competitions

Regional Championships

World Championships

Olympic Medals

Campus development

Sponsors

Reputation unlocks:

Regions

Sponsors

Research

Facilities

Academy Rank

Future Headquarters upgrades

---

# Campus Strategies

Every campus can operate under one strategic focus.

Players choose the strategy.

Strategies can be changed later.

Current implementation:

- Strategy is saved per campus.
- Strategy currently changes the campus contribution rate only.
- Local growth, athlete development, and competition effects are stored as future metadata and do not rebalance the current game yet.

---

## 🏗 Local Development

Focus:

Grow this campus.

Effects:

Higher local investment

Faster campus growth

Lower Headquarters contribution

Best for new campuses.

---

## ⚖ Balanced

Focus:

Balanced growth.

Effects:

Average local growth.

Average Headquarters contribution.

Recommended default.

---

## 🌍 Global Contribution

Focus:

Support the academy.

Effects:

Higher Academy Funding.

Slower local growth.

Ideal for mature campuses.

---

## ⭐ High Performance

Focus:

Develop elite athletes.

Effects:

Improved athlete development.

Reduced Academy Funding.

Higher competition potential.

Ideal before major championships.

---

# Campus Contributions

Every mature campus contributes to Headquarters.

Contribution depends on:

Campus strategy

Campus level

Campus success

Sponsors

Future Headquarters upgrades

Players decide how much each campus contributes through its chosen strategy.

Current implementation:

- Contributions generate Academy Funding as a sidecar from earned local TP.
- Contributions do not reduce local TP.
- Contribution history is tracked per campus.

---

# Offline Operations

Every campus continues operating while inactive.

Inactive campuses never stop completely.

However, offline production is limited.

Headquarters can improve offline performance through future Operations upgrades.

Offline production should never completely replace active gameplay.

Current implementation:

- Offline progress still applies to the active campus only.
- Inactive campus background operation and Operations Capacity limits are not implemented yet.

---

# Operations Capacity

Operations Capacity limits how long a campus can operate efficiently while the player is away.

Operations Capacity can be upgraded later through Headquarters.

Example progression:

2 hours

4 hours

8 hours

12 hours

24 hours

Operations Capacity is global.

---

# Economy Flow

Player

↓

Active Campus

↓

Training Points

↓

Campus Growth

↓

Campus Contribution

↓

Academy Funding

↓

Headquarters

↓

Research

↓

Better Campuses

↓

Stronger Athletes

↓

Greater Success

---

# Future Expansion

Not planned for Version 1.

Possible future additions:

Maintenance

Operating Costs

Equipment Depreciation

Energy Systems

Staff Salaries

Regional Funding

Emergency Grants

International Scholarships

Academy Endowment

Media Revenue

---

# Core Design Rule

Training Points grow campuses.

Academy Funding grows the organization.

Players should never confuse the two.

Both resources should always have a clear and meaningful purpose.

---

# Design Approval

Approved by:

Game Director

Creative Director

Status:

Ready for implementation when scheduled.

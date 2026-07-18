# Elite Sports Academy Balance Ledger

This file records the current economy and progression values.

Visual Identity 1.0 is an experience and presentation milestone. It improves screen personality, silhouettes, iconography, visual hierarchy, and the feeling of being inside an academy, but does not change economy, progression rewards, output formulas, country gameplay, athlete systems, or competition mechanics.

World Tour 3.0 is a design and documentation milestone. It defines one global academy with future local country campuses, but does not change current balance values, save data, formulas, country gameplay, athlete systems, coach mechanics, or competition mechanics.

Phase 1 - Global Academy Save Architecture updates the save shape to version 9 with additive academy, campus, and migration metadata. It does not change economy values, formulas, reward amounts, country gameplay, athlete systems, coach effects, or competition mechanics.

Phase 2 - USA Campus Migration updates the save shape to version 10 with USA-owned campus records and legacy adapters. It does not change economy values, formulas, reward amounts, country gameplay, athlete systems, coach effects, or competition mechanics.

Phase 3 - Japan Campus Migration updates the save shape to version 11 with Japan-owned campus records and active-campus legacy adapters. It does not change economy values, formulas, reward amounts, country gameplay, athlete systems, coach effects, or competition mechanics.

Phase 4 - Global Coach Assignment Foundation updates the save shape to version 12 with global coach assignment metadata. It does not change coach levels, costs, effects, slot rules, output formulas, country gameplay, athlete systems, or competition mechanics.

Phase 5 - Local Economy Foundation updates the save shape to version 13 with campus-local Training Point ownership, Headquarters-owned Academy Funding, campus strategy metadata, campus contribution tracking, Headquarters support metadata, and initial competition circuit metadata. Existing local TP income, costs, rewards, prestige, coach effects, athlete effects, and competition formulas remain unchanged. Academy Funding currently accrues as a sidecar from earned local TP and does not reduce local TP.

Phase 6 - Campus Travel & Brazil Expansion updates the save shape to version 14 with Brazil as a migrated playable campus and manual travel between unlocked campuses. Brazil adds new local facilities, coaches, athlete archetypes, competitions, chapter goals, and a chapter reward. Academy Funding remains read-only and Headquarters remains non-playable.

Future balance work should follow `WORLD_TOUR.md`: academy identity, reputation, medals, trophies, rank, Hall of Fame, future research, and future sponsors are global; Training Points, facilities, local athletes, competitions, buildings, local progress, visual theme, chapter progress, and country bonuses should eventually be campus-local.

## Global Values
- Save version: 14
- Offline progress cap: 8 hours
- Facility cost multiplier: 1.15 per level
- Prestige unlock: 100,000 season TP
- Trophy multiplier: 1.10x per trophy
- Sponsorship event boost: 5x TP for 5 seconds
- Momentum boost after competition win: 1.5x for 15 seconds

## Local Economy
Training Points are owned by the active campus through `state.campuses[countryId].localTrainingPoints.value`. The legacy root `state.tp` remains as the active-campus compatibility mirror for current gameplay and UI helpers.

Academy Funding is owned by Headquarters through `state.academy.headquarters.academyFunding.value`. Headquarters spending is not implemented yet.

Campus contributions currently generate Academy Funding as a sidecar from TP earned. This does not reduce local TP and does not change income, costs, or rewards.

| Campus Strategy | Contribution Rate From Earned TP | Current Gameplay Effect | Future Metadata |
| --- | ---: | --- | --- |
| Local Development | 0.10% | Lower Funding contribution only | Faster local campus growth |
| Balanced | 0.20% | Default Funding contribution | Standard local and global balance |
| Global Contribution | 0.40% | Higher Funding contribution only | Slower local growth, higher HQ support |
| High Performance | 0.15% | Reduced Funding contribution only | Athlete development and competition focus |

## Academy Identity
Academy rank is based on saved Reputation and does not provide a gameplay multiplier.

| Rank | Reputation Required |
| --- | ---: |
| Local Club | 0 |
| Regional Academy | 50 |
| National Academy | 150 |
| International Academy | 300 |
| Elite Academy | 500 |
| Olympic Academy | 800 |

## Academy Orientation
Onboarding flags track whether the player has seen, skipped, or completed first-time guidance. These flags do not provide gameplay multipliers, TP rewards, discounts, or unlocks.

Academy identity choices made during onboarding use the same saved identity fields available in World settings and do not affect gameplay balance.

## Click Progression
Base click power is `1 + sum(click upgrade levels * power per level)`.

Session Drill reward is direct click value plus passive sync:
- Direct value: base click power multiplied by permanent, coach, facility milestone, and athlete click multipliers.
- Passive sync: TP/sec without temporary event boosts multiplied by click passive seconds.

| Upgrade | Base Cost | Growth | Max Level | Power / Level | Passive Sync / Level | Unlock |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Basic Drill | 8 | 1.38 | 10 | 0.8 | 0.010s | Starting upgrade |
| Technique Drill | 85 | 1.45 | 10 | 3.5 | 0.020s | Basic Drill level 5 |
| Elite Form | 900 | 1.52 | 10 | 14 | 0.035s | Technique Drill level 5 |
| National Standard | 8,500 | 1.58 | 10 | 60 | 0.055s | Elite Form level 5 |
| Championship Routine | 70,000 | 1.65 | 10 | 250 | 0.080s | National Standard level 5 |

## Facilities
Facility cost is `baseCost * 1.15 ^ currentLevel` per level purchased.

Facility income is `level * baseIncome * multipliers`.

| Facility | Sport | Base Cost | Base Income / sec | Coach Slot Pace | Athlete Capacity Rate | Milestone Effect |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| Track & Field Complex | Track | 10 | 0.2 | every 5 levels | 1.00 | click multiplier +5% per 10 levels |
| Aquatics Swimming Center | Swimming | 50 | 1 | every 6 levels | 1.25 | athlete XP +5% per 10 levels |
| Cycling Velodrome | Cycling | 250 | 5 | every 8 levels | 1.50 | competition rewards +5% per 10 levels |
| Soccer Stadium Pitch | Soccer | 1,500 | 20 | every 10 levels | 2.00 | academy output +5% per 10 levels |
| Football Performance Center | Football | 1,200 | 16 | every 9 levels | 1.80 | academy output +4% per 10 levels |
| Volleyball Training Center | Volleyball | 850 | 11 | every 8 levels | 1.70 | athlete XP +4% per 10 levels |
| Futsal Skills Court | Futsal | 2,200 | 28 | every 10 levels | 1.60 | click multiplier +4% per 10 levels |

## Coaches
Coach cost is `baseCost * growth ^ currentLevel`.

Coach tier labels are presentation over existing levels:

| Tier | Level Required |
| --- | ---: |
| Unrecruited | 0 |
| Junior | 1 |
| Senior | 4 |
| Elite | 8 |
| Olympic | 12 |

These tiers do not add separate multipliers, discounts, automation, or unlocks in the current milestone.

| Coach | Base Cost | Growth | Max Level | Effects |
| --- | ---: | ---: | ---: | --- |
| Sprint Coach | 150 | 2.15 | 12 | Track output +25% per level; Drill +6% per level |
| Pool Coach | 400 | 2.25 | 12 | Aquatics output +22% per level; Drill +3% per level |
| Endurance Coach | 900 | 2.35 | 12 | Cycling output +18% per level; Soccer output +14% per level; Drill +3% per level |
| Football Manager | 2,600 | 2.32 | 12 | Football output +20% per level; Futsal output +14% per level; Drill +2.5% per level |
| Goalkeeper Coach | 3,800 | 2.38 | 12 | Football output +18% per level; Drill +2% per level |
| Volleyball Specialist | 3,200 | 2.34 | 12 | Volleyball output +22% per level; Drill +2% per level |

## Athletes
Manual athlete training cost is `trainCost * 1.42 ^ (skill - 1)`.

Automatic XP needed per skill is `75 * skill ^ 1.35`.

Japan country bonus adds +15% Athlete Experience while Japan is the active country.

| Athlete | Sport | Rarity | Recruit Cost | Train Cost | Potential | Effects |
| --- | --- | --- | ---: | ---: | ---: | --- |
| Sprinter | Track | Common | 120 | 80 | 24 | Drill +5% per skill; Track +3% per skill |
| Swimmer | Swimming | Uncommon | 480 | 260 | 28 | Aquatics +4% per skill; athlete XP +2% per skill |
| Pursuit Rider | Cycling | Rare | 1,800 | 900 | 32 | Cycling +4% per skill; competitions +2% per skill |
| Striker | Soccer | Elite | 7,000 | 2,800 | 36 | Soccer +3.5% per skill; prizes +4% per skill |
| Football Prospect | Football | Elite | 5,200 | 2,100 | 38 | Football +3.5% per skill; competitions +2.5% per skill |
| Volleyball Prospect | Volleyball | Rare | 3,600 | 1,500 | 34 | Volleyball +4% per skill; athlete XP +1.8% per skill |
| Futsal Creator | Futsal | Uncommon | 2,400 | 980 | 32 | Futsal +4.5% per skill; Drill +1.8% per skill |

## Competitions
Competition win chance is clamped between 18% and 95%:
`0.35 + ((competitionPower - targetPower) / targetPower) * 0.28`

Rewards:
- Win: `baseReward * competitionRewardMultiplier * (1 + chance)`
- Loss/entry: `baseReward * competitionRewardMultiplier * 0.28`
- Japan country bonus adds +10% Competition Rewards while Japan is the active country.

The latest competition result is saved as presentation state so the UI can explain the most recent outcome after the active offer disappears. It does not change reward math.

| Competition | Unlock TP/sec | Base Reward | Target Power | Sports |
| --- | ---: | ---: | ---: | --- |
| Regional Time Trial | 1 | 300 | 18 | Track, Cycling |
| Invitational Swim Fest | 8 | 1,200 | 60 | Swimming |
| Academy Cup Derby | 35 | 6,000 | 180 | Track, Swimming, Cycling, Soccer |
| Brazil Nationals | 10 | 2,200 | 90 | Football, Volleyball |
| Rio Invitational | 22 | 5,200 | 170 | Football, Futsal |
| São Paulo Cup | 42 | 9,600 | 280 | Football |
| Copa da Academia | 70 | 18,000 | 430 | Football, Volleyball, Futsal |
| Futsal Masters | 34 | 7,400 | 220 | Futsal |

## Country Progression
Current implementation note: USA and Japan are playable with the current transitional prototype economy. Future countries should not be implemented as fully playable campuses until the save and economy architecture can support local country Training Points, local facilities, local athletes, local competitions, and return travel while preserving existing saves.

USA active completion goals:
- Track Facility reaches level 10
- Swimming Facility reaches level 10
- Win 3 competitions
- Earn 25,000 TP during the USA chapter

USA reward:
- +1 Medal
- +100 Reputation
- Unlock Japan

Japan active completion goals:
- Swimming Center reaches level 15
- Cycling Velodrome reaches level 15
- Win 5 competitions during the Japan chapter
- Train any athlete to Skill Level 10

Japan country bonuses:
- +15% Athlete Experience
- +10% Competition Rewards

Japan reward:
- +2 Medals
- +200 Reputation
- Unlock Brazil as a playable campus

Brazil active completion goals:
- Football Performance Center reaches level 15
- Volleyball Training Center reaches level 12
- Futsal Skills Court reaches level 8
- Win 5 Brazilian competitions during the Brazil chapter
- Train any Brazil athlete to Skill Level 12

Brazil country bonus:
- Creative Athlete Development is saved and shown as campus identity metadata only. Named traits are not implemented yet.

Brazil reward:
- +3 Medals
- +300 Reputation
- +500 Academy Funding

Australia, Kenya, and Norway remain future or preview destinations unless a later milestone implements them.

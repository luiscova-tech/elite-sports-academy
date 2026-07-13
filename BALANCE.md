# Elite Sports Academy Balance Ledger

This file records the current economy and progression values.

Visual Identity 1.0 is an experience and presentation milestone. It improves screen personality, silhouettes, iconography, visual hierarchy, and the feeling of being inside an academy, but does not change economy, progression rewards, output formulas, save shape, country gameplay, athlete systems, or competition mechanics.

World Tour 3.0 is a design and documentation milestone. It defines one global academy with future local country campuses, but does not change current balance values, save data, formulas, country gameplay, athlete systems, coach mechanics, or competition mechanics.

Future balance work should follow `WORLD_TOUR.md`: academy identity, reputation, medals, trophies, rank, Hall of Fame, future research, and future sponsors are global; Training Points, facilities, local athletes, competitions, buildings, local progress, visual theme, chapter progress, and country bonuses should eventually be campus-local.

## Global Values
- Save version: 8
- Offline progress cap: 8 hours
- Facility cost multiplier: 1.15 per level
- Prestige unlock: 100,000 season TP
- Trophy multiplier: 1.10x per trophy
- Sponsorship event boost: 5x TP for 5 seconds
- Momentum boost after competition win: 1.5x for 15 seconds

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
- Unlock Brazil as a preview destination

Brazil, Australia, Kenya, and Norway remain future or preview destinations unless a later milestone implements them.

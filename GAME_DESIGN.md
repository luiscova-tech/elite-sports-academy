# Elite Sports Academy — GAME_DESIGN.md

## Project Vision
Build a mobile-first sports academy management game with idle and clicker mechanics. The player should feel like they are running an elite academy across countries or chapters, not just grinding one endless currency.

The game should reward short sessions, support long-term progression, and make every system feed into a larger academy loop.

`VISION.md` is the high-level creative source of truth. Every feature should support the fantasy of building a small local training center into the world's greatest Olympic training academy.

The five creative pillars are:
- Build
- Develop
- Compete
- Progress
- Feel Proud

Core design rule: if a feature does not strengthen the fantasy of running the world's greatest Olympic training academy, it should not be implemented.

## Core Design Pillars
- Mobile-first, dark modern UI
- Single-file prototype now, modular design later
- Data-driven systems for easy expansion
- Clicking remains relevant for the whole game
- Coaches and athletes are meaningful progression layers
- Countries/chapters give the game a sense of advancement and completion
- Academy identity should make the player feel ownership and pride, not only progression efficiency

## Player Guidance Principle
At any moment, the player should be able to answer these three questions within five seconds:

1. What am I currently working toward?
2. What is the best thing to do next?
3. What exciting reward or destination comes after this?

Every future UI and gameplay decision should support this principle.

## Main Loop
1. Tap to train and earn Training Points.
2. Spend TP on upgrades that improve click power, automation, and academy output.
3. Recruit coaches to automate or strengthen sport-specific training.
4. Recruit athletes to improve sports, competitions, and country goals.
5. Complete the current country or chapter to unlock the next one.
6. Reset or prestige for long-term bonuses and replayability.

## Country / Chapter Structure
The game should use countries as stages or chapters.

Each country should:
- have a unique sport lineup
- have completion goals
- reward the player for finishing it
- unlock the next country
- optionally change the available coaches, athletes, or facilities

Examples:
- USA: Track, Swimming, Soccer
- Japan: Swimming, Cycling
- Kenya: Track, Distance Events, Cycling
- Brazil: Soccer, Track, Volleyball

A country completion should feel like a milestone, not a simple reset.

Current foundation decision:
- Countries exist in the content registry before chapter completion mechanics.
- USA is the first complete chapter and includes Track & Field, Swimming, Cycling, and Soccer so the existing prototype loop remains intact.
- USA chapter goals are Track Facility Level 10, Swimming Facility Level 10, 3 competition wins, and 25,000 TP earned during the USA chapter.
- Claiming the USA completion reward grants 1 Medal, +100 Reputation, unlocks Japan, and switches the current country to Japan.
- Japan is the second playable chapter. Its theme is Precision & Technique, with Swimming and Cycling as preferred sports.
- Japan chapter goals are Swimming Center Level 15, Cycling Velodrome Level 15, 5 competitions won during the Japan chapter, and any athlete reaching Skill Level 10.
- Japan country bonuses are +15% Athlete Experience and +10% Competition Rewards.
- Claiming the Japan completion reward grants 2 Medals, +200 Reputation, and unlocks Brazil as the next preview destination without implementing Brazil gameplay.
- Kenya and Brazil exist as data-driven future countries with unlock requirements and future reward data, but their playable chapter goals are not implemented yet.
- Medals and Reputation are real saved progression values. They are awarded by chapter completion and are no longer derived from total TP.

## Clicker System
The clicker must stay useful past the opening minutes.

Requirements:
- Base click reward should be upgradeable
- Click value should increase through upgrades, coaches, athletes, and chapter bonuses
- Clicking should remain relevant throughout the game
- Add click power upgrades with clear names and milestones

Suggested click progression examples:
- Basic Drill
- Technique Drill
- Elite Form
- National Standard
- Championship Routine

## Coaches
Coaches are a major progression system, not just flat buffs.

Requirements:
- Coaches should be recruitable
- Coaches should automate or boost specific sports
- Coaches should be upgradable
- Coaches should feel distinct from one another
- Facilities or chapters can unlock coach slots or coach capacity
- Coaches should work well in a data-driven structure

Suggested coach roles:
- Sprint Coach
- Pool Coach
- Endurance Coach
- Tactical Coach
- Talent Scout

Coach effects can include:
- increasing sport output
- reducing drill time
- improving athlete training
- improving competition rewards
- improving click value for a specific sport

## Athletes
Athletes should feel collectible and upgradable.

Requirements:
- Athletes are recruitable units
- Athletes have sport, rarity, potential, skill, and level or XP
- Athletes can be assigned to a sport, facility, or chapter
- Athletes improve over time
- Duplicate athletes can become upgrade material if that helps the design
- Athlete assignment should matter strategically

Suggested athlete stats:
- name
- sport
- rarity
- potential
- skill
- experience
- assigned sport or facility
- specialty

Suggested athlete roles:
- Sprinter
- Swimmer
- Pursuit Rider
- Striker
- Jumper
- Diver
- Playmaker

## Sports / Training System
Each sport should have its own training loop.

Requirements:
- Sports can be manually trained
- Coaches can automate or boost them
- Athletes can be assigned to them
- Sports should contribute to country completion and competition strength

Current foundation decision:
- `sportId` is a first-class concept used by facilities, coaches, athletes, and competitions.
- Facilities remain the visible upgrade cards for now, but their output is routed through sport-based helpers.
- Coach and athlete bonuses should be expressed as data-driven effects where possible instead of hard-coded id checks.

## Competitions
Add a simple competition layer that uses the academy systems.

Requirements:
- Competitions should appear periodically or under conditions
- Competitions should benefit from athlete assignment and coach bonuses
- Competitions should reward TP, boosts, or chapter progress
- Competitions should feel different from passive income
- Keep version 1 simple, but clearly separate from the idle loop

## Prestige / Reset Layer
Keep a prestige-style layer, but theme it to sports seasons or championship cycles.

Requirements:
- Reset the current run or country progress
- Keep trophies, medals, reputation, or other meta currency
- Give a permanent multiplier or other long-term reward
- Make the reset feel like progress, not punishment

Suggested naming:
- Championship Trial
- Olympic Cycle
- Season Reset
- National Rebuild

## UI / UX
- Dark modern theme
- Centered mobile layout
- Clear cards and panels
- Easy-to-read upgrade buttons
- Clear country progression
- Large touch targets
- Strong visual hierarchy
- Smooth but lightweight animations

Current UI direction:
- The top of the screen should feel like a World Tour headquarters dashboard, not a plain clicker header.
- The active country should be visible at all times in the sticky header.
- The sticky World Tour chapter area should stay compact by default so Home remains play-first.
- Country progress should keep current country, completion percent, and next-country path visible in compact form, with fuller details available by expanding the header or visiting World.
- Persistent mini-stat cards should not be pinned above Home; broader dashboard readouts belong inside the World tab or another non-primary management view.
- Primary navigation should use a mobile bottom bar with Home, Sports, Academy, Competitions, and World sections.
- Home is the play-first screen. It should focus on Session Drill, click progression, live events, active competitions, current country, and quick stats.
- Sports owns facility and sport management.
- Academy owns coaches, athletes, roster, and staff management.
- Competitions owns competition offers and sponsorship event context.
- World owns country progress, prestige, achievements, statistics, and preferences.
- World should act as the campaign map: current country, unlocked countries, completed countries, future countries, country progress, medals, and reputation live there.
- Home should gradually evolve into the Academy Hub with a prominent mission card, one recommended next action, a reward preview, and large navigation cards to major academy sections.
- Home now begins the Academy Campus direction: the Mission Card and Session Drill stay primary, followed by large building-style navigation panels for Sports Center, Academy Offices, Competitions Hall, and World Tour.
- The Mission Card should remain detailed enough to show every active chapter goal, but it should stay compact on mobile so Session Drill and the Academy Campus are visible quickly.
- A compact persistent Resource Bar should remain visible in the sticky header and show current country, TP, and TP/sec without returning to large fixed dashboard cards.
- Country flags are part of country identity in the UI and should be used prominently in the Resource Bar, Mission context, Reward Preview, and World route.
- Academy Campus panels should feel like recognizable headquarters buildings, with clear structure, light depth, subtle motion, and distinct identity per section while remaining readable on mobile.
- Academy Campus panels can show small activity indicators such as upgrade availability, athlete readiness, competition availability, and chapter reward readiness.
- Academy Campus 3.0 direction: Home should feel like a living headquarters, not a stack of menu cards. The primary flow should move from Mission to Session Drill to Campus to Current Event, with secondary guidance below.
- Academy Campus 4.0 direction: Home should feel like the player is standing inside the academy. Campus buildings should read as places, departments, and destinations rather than ordinary menu cards.
- The Mission Card should be compact by default with current mission, progress, reward, and next unlock visible. Full objective details should be available through expansion.
- Campus building markup should stay organized so future SVG illustrations can replace CSS building treatments without changing tab navigation or gameplay logic.
- Subtle micro-animations are allowed when they support place and responsiveness, such as flag movement, gentle glow, light pulse, or elevation. They must remain lightweight and respect the animations setting.
- Academy Campus 5.0 direction: the campus should feel alive without changing gameplay systems. Each Home building should communicate current activity, such as Upgrade Available, Training Active, Athlete Ready, Coach Available, Competition Ready, Event In Progress, Ready To Travel, Chapter Complete, or Awaiting Qualification.
- Campus buildings and Sports facilities can visually evolve from existing level/progress data by showing larger structures, additional windows, banners, flags, and lighting. These visual changes are presentation only and must not imply new upgrade systems until approved.
- The Resource Bar remains compact and limited to current country, TP, and TP/sec. Broader resource dashboards remain outside the Home header.
- Academy Identity 1.0 direction: the sticky header should represent the player's academy with crest, academy name, reputation-based academy rank, motto, and current country. The academy identity layer should be editable from World/Preferences and should support emotional attachment without changing gameplay balance.
- Academy Profile should collect the academy's story in one place: founded date, countries completed, current country, competitions won, medals, reputation, championship trophies, academy rank, favorite sport, highest facility, athletes trained, and coaches recruited.
- Hall of Fame exists as a framework only until athlete history is implemented. It should create anticipation for honoring future academy legends without adding athlete-history mechanics early.
- The World tab should keep the same premium campaign identity by using route order, destination flags, current/completed/locked states, and future-country previews without implementing those future countries early.
- Future countries should remain preview-only in the World tab until their chapter gameplay is intentionally implemented.
- Japan remains a Swimming/Cycling-only playable chapter for the current design direction.
- Players can optionally pin a small Session Drill button from Preferences so tapping remains available from non-Home tabs.
- Sports facilities remain the core upgrade cards, but they should carry stronger sport identity and show coach/athlete connections.

Current screen-purpose direction:
- Home answers: What should I do right now?
- Sports answers: How do I make my academy stronger?
- Academy answers: Who am I developing?
- Competitions answers: What can I win today?
- World answers: Where am I going next?

## Data Model Priority
Use a data-driven structure so new content can be added without rewriting the core engine.

Design the systems so that adding new:
- countries
- sports
- coaches
- athletes
- competitions
- upgrades

is mostly a matter of adding data, not rewriting logic.

Current implementation direction:
- Maintain a central content registry for countries, sports, facilities, click upgrades, coaches, athletes, competitions, and achievements.
- Countries should define chapter goals, chapter rewards, unlock requirements, future country paths, themes, and descriptions as data.
- Chapter progress should be stored per country so completed goals and claimed rewards survive later resets.
- Use id maps and lookup helpers instead of repeated array searches.
- Preserve single-file delivery during the prototype phase, but keep system boundaries clear enough for a later file split.

## Version 1 Priority Order
1. Core click loop
2. Upgradeable click power
3. Content registry and sport foundation
4. World Tour UI, academy dashboard, country progress, and bottom navigation
5. Play-first Home, tabbed management, pinned Session Drill, and Preferences
6. Country / chapter system
7. Coaches
8. Athletes
9. Competitions
10. Offline progress
11. Prestige / reset
12. Achievements
13. Stats and settings

## Version 1 Scope Guidance
Keep the first version manageable:
- one polished country or a small set of countries
- a few sports
- a few coaches
- a few athlete types
- one prestige layer
- one competition loop

The goal is a strong foundation that can grow into a deeper sports management game later.

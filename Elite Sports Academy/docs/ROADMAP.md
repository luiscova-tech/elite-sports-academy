# Elite Sports Academy Roadmap

## Completed Milestones

### Core Playable Prototype
- Built the single-file mobile-first idle/sports management prototype.
- Added Training Points, Session Drill, facilities, coaches, athletes, competitions, offline progress, sponsorship events, prestige, achievements, stats, and settings.

### Upgradeable Click Power + Stabilization Fixes
- Added Basic Drill, Technique Drill, Elite Form, National Standard, and Championship Routine.
- Added save versioning and migration to version 2.
- Replaced capped tick handling with catch-up simulation.
- Awarded offline progress for any elapsed time.

### Content Registry + Sport Foundation
- Added a central content registry for countries, sports, facilities, click upgrades, coaches, athletes, competitions, and achievements.
- Added id maps and lookup helpers.
- Introduced `sportId` across facilities, coaches, athletes, and competitions.
- Routed facility output, coach bonuses, athlete bonuses, and competition power through sport-based helpers.
- Added additive save migration to version 3 for country foundation state.

### UI Upgrade - World Tour / Academy Dashboard / Country Progress / Bottom Navigation
- Reworked the sticky header into a World Tour command center.
- Added live country progress, medals, reputation, coaches, athletes, TP, TP/sec, and trophies to the dashboard.
- Added a mobile bottom navigation bar for Academy, Sports, Competitions, Roster, and World.
- Split facilities into a Sports section and moved country progress details into Academy/World views.
- Polished facility cards with sport identity and coach/athlete connection signals.

### UI Refactor - Play-First Home / Tabbed Management / Preferences
- Added a dedicated Home tab focused on Session Drill, compact country status, click progression, and live play opportunities.
- Moved facility management to Sports, coach/athlete management to Academy, competition systems to Competitions, and country/meta systems to World.
- Added an optional pinned Session Drill preference for non-Home tabs.
- Expanded Preferences with pinned drill, floating numbers, animations, confirm prestige, export save, import save, and reset save controls.
- Added save version 4 migration for new preferences and legacy tab placement.

### UI Fix - Compact World Tour Chapter Header
- Reduced the sticky World Tour chapter area so it no longer dominates the Home screen.
- Made the header collapsed by default with current country, chapter progress, and next-country path visible.
- Added tap-to-expand details without changing country progression or gameplay values.

### UI Cleanup - Remove Persistent Home Mini-Stats
- Removed the sticky mini-stat card grid from the top header.
- Kept Home focused on Session Drill, click progression, current country context, and live play.
- Relocated dashboard readouts to the World tab as a non-pinned Academy Dashboard section.

### Country / Chapter Progression - USA Chapter Complete
- Added data-driven USA chapter goals for Track Level 10, Swimming Level 10, 3 competition wins, and 25,000 USA chapter TP.
- Added saved country progress records with completed goals, chapter TP, completion state, and reward claim state.
- Added real saved Medals and Reputation progression values.
- Added USA completion reward claiming: +1 Medal, +100 Reputation, Japan unlock, and automatic switch to Japan.
- Expanded World into a campaign map with current, unlocked, completed, and future countries.
- Added save version 5 migration for country progress, medals, and reputation.

### Academy Mission Hub & Player Guidance
- Added a prominent Home mission card showing current country, chapter goals, goal progress bars, overall completion, rewards, and next unlock.
- Added a dynamic recommended next action card that points players toward the best immediate action.
- Added Home reward preview for the next destination, sports, coaches, facilities, and reward.
- Added Academy Hub navigation cards for Sports Center, Academy Offices, Competitions, and World Tour.
- Added locked future destination previews in World for Australia and Norway without implementing them as gameplay countries.

### Academy Campus UI + Persistent Resource Bar
- Added a compact persistent Resource Bar in the sticky header with current country, TP, TP/sec, medals, and reputation.
- Added country flags to country and future-destination data for consistent UI identity.
- Reordered Home so Academy Mission leads into Session Drill, then campus navigation.
- Upgraded Home navigation into larger building-style Academy Campus panels for Sports Center, Academy Offices, Competitions Hall, and World Tour.
- Improved World route readability with prominent country flags for completed, current, locked, and future destinations.
- Created `UI_VISION.md` as the long-term UI blueprint.

### Academy Campus Phase 2 - Visual Buildings, Flags, and Stronger Headquarters Feel
- Upgraded the Home campus panels with stronger building silhouettes, roof shapes, window structures, section identities, depth, and lightweight hover polish.
- Renamed the World campus destination to World Tour Gate to better fit the headquarters map concept.
- Added a compact flag-driven World Tour route strip above the campaign destination rows.
- Strengthened Resource Bar country identity with a subtle country accent and flag treatment.
- Created `PARKING_LOT.md` and `BALANCE.md` as standing project documentation files.

### Japan Chapter - Precision & Technique
- Implemented Japan as the second playable chapter focused on Swimming and Cycling.
- Added Japan chapter goals for Swimming Center Level 15, Cycling Velodrome Level 15, 5 Japan chapter competition wins, and any athlete reaching Skill Level 10.
- Added data-driven country bonuses for Japan: +15% Athlete Experience and +10% Competition Rewards.
- Added Japan reward claiming: +2 Medals, +200 Reputation, and Brazil unlock as a preview destination.
- Added save version 6 migration for per-country competition wins.
- Added subtle Academy Campus activity indicators and tightened the Resource Bar to country, TP, and TP/sec only.
- Created `STYLE_GUIDE.md` as the visual reference for UI decisions.

### Academy Campus 3.0 - Living Headquarters
- Reworked Home flow so Mission, Session Drill, Academy Campus, and Current Event form the primary play path.
- Strengthened the Academy Campus into a shared plaza with larger visual buildings, architectural depth, subtle glows, and light motion.
- Improved World Tour route stops so destinations feel more like a journey than a list.
- Added screenshot checkpoints for Home, Sports, Academy, Competitions, and World.
- Updated visual documentation to describe living headquarters, motion rules, and the current Home hierarchy.

### Academy Campus 4.0 - From UI to World
- Made the Home Mission Card collapsible by default while keeping current mission, progress, reward, and next unlock visible.
- Reworked Academy Campus navigation into building-style departments inside a shared campus grounds layout.
- Added building level/status indicators for Sports Center, Academy Offices, Competition Hall, and World Tour Gate.
- Prepared campus building markup for future SVG illustration replacement without changing navigation logic.
- Improved the World Tour route strip with a stronger journey line and destination-stop presentation.

### Academy Campus 5.0 - A Living Academy
- Added state-driven activity badges for Sports Center, Academy Offices, Competition Hall, and World Tour Gate.
- Added subtle micro-animations for mission progress, campus lights, office windows, competition banners, world flags, and ready badges.
- Added visual evolution stages for campus buildings using existing facility level, staff count, competition wins, and chapter progress.
- Improved Resource Bar readability while keeping it limited to country, TP, and TP/sec.
- Improved Sports facility presentation so facilities begin reading as academy departments with level-based visual stages.
- Added lightweight coach and athlete portrait placeholders and polished competition card presentation.
- Improved the World Tour route strip with route steps and clearer current/completed/future destination states.

### Academy Identity 1.0 - Make It My Academy
- Created `VISION.md` as the high-level creative source of truth.
- Added saved academy identity fields for academy name, motto, crest, color theme, and founded date.
- Replaced the generic header identity with academy crest, academy name, reputation-based academy rank, motto, and current country.
- Added Academy Profile in World with founded date, countries completed, current country, competitions won, medals, reputation, trophies, rank, favorite sport, highest facility, athletes trained, and coaches recruited.
- Added editable Academy Identity controls in World settings.
- Added Hall of Fame framework as a Coming Soon profile section.
- Added save version 7 migration for academy identity.

### Academy Orientation - First-Time Experience
- Added a coach-led first-run welcome that frames the player as the owner of a small academy growing toward Olympic greatness.
- Added a saved, skippable Home orientation card that guides identity confirmation, Session Drill, first facility upgrade, first coach, first athlete, Mission review, and World Tour review.
- Added first competition guidance so early meets feel optional, low-pressure, and useful even before strong win odds.
- Added save version 8 migration for onboarding flags while preserving existing saves.
- Created `FIRST_TIME_EXPERIENCE.md` as the onboarding blueprint.

### Quality of Life 1.0 - Orientation, Drill Choices, Competition Results, and Coach Tiers
- Added real academy identity choices to the first-run welcome and Home orientation card.
- Changed recommendation and orientation management guidance to navigate to existing screens and highlight the relevant target instead of auto-completing actions.
- Reworked Click Training so every named drill program is visible with status, unlock requirement, per-level effects, and upgrade actions for unlocked programs.
- Added latest competition result presentation with outcome, reward, chance, academy power, and target power.
- Added coach tier presentation for Unrecruited, Junior, Senior, Elite, and Olympic stages without changing coach balance.
- Created `PLAYTEST_JOURNAL.md` from current game-director feedback only.

### Visual Identity 1.0 - From Prototype to Game
- Merged Home orientation and mission into one Welcome Coach ceremony and mission board.
- Kept first-run identity editing available behind a compact ceremony expander so Session Drill remains closer to Home's play path.
- Replaced generic campus emoji/text placeholders with a consistent inline SVG academy icon language.
- Improved Academy Campus building silhouettes so Sports Center, Academy Offices, Competition Hall, and World Tour Gate feel more distinct.
- Improved Sports facility cards with sport-specific department silhouettes.
- Improved Academy coach presentation with office-board styling and premium SVG iconography.
- Improved Competitions with event-board and ticket styling.
- Improved World Tour with passport/travel-card destination styling.
- Moved the World campaign route before profile and dashboard details.
- Preserved all gameplay systems, economy values, countries, and save compatibility.

### World Tour 3.0 - Global Academy Architecture
- Created `WORLD_TOUR.md` as the blueprint for future countries, country campuses, competition cycles, continental events, World Championships, and Olympic Games.
- Locked the long-term decision that the player owns one global academy that expands through permanent country campuses.
- Defined global academy progression as permanent identity, reputation, medals, trophies, rank, Hall of Fame, future research, and future sponsors.
- Defined future country campuses as local branches with their own Training Points, facilities, athletes, competitions, buildings, progress, visual theme, chapter progress, and country bonus.
- Defined coaches as global academy resources that can eventually be assigned or transferred between campuses.
- Defined athletes as local country-campus recruits with no Version 1 transfer plan.
- Established the future country template: 2 core sports, 2 shared sports, and 1 wildcard sport.
- Preserved current gameplay, economy values, save version, and Brazil preview-only status.

### Implementation Planning - Version 2 Engineering Roadmap
- Created `IMPLEMENTATION_PLAN.md` as the engineering implementation roadmap for Version 2.
- Organized the next development phase into nine engineering phases from Global Academy save architecture through future Headquarters systems.
- Documented dependencies, save migration order, suggested milestones, engineering risks, and validation gates.
- Confirmed that Brazil, sponsors, SVG art, Headquarters systems, local athlete generation, competition redesign, and save migration wait for their planned implementation phases.

### Phase 1 - Global Academy Save Architecture
- Increased the save version to 9 with an additive migration layer.
- Added a future-compatible Global Academy container that keeps academy identity while preparing global progression, planned Headquarters metadata, global coach pool metadata, and campus references.
- Added USA and Japan campus placeholders through `state.campuses` while preserving existing live gameplay fields.
- Added migration logging, save validation helpers, and hidden developer migration export tools.
- Hardened import/export so imported saves normalize and validate before being committed.
- Preserved current gameplay, country progression, TP, facilities, coaches, athletes, competitions, prestige, and settings behavior.

### Phase 2 - USA Campus Migration
- Increased the save version to 10 with an additive USA campus migration.
- Moved USA Training Points, facilities, athletes, competition state, chapter progress, and migration metadata into `state.campuses.usa`.
- Kept legacy root fields as compatibility adapters so the current UI and gameplay loop behave the same.
- Migrated existing TP to the current active campus when available, otherwise USA.
- Assigned global coach metadata to the current active campus during migration, otherwise USA.
- Extended hidden developer diagnostics with active campus, USA migration status, legacy adapter status, global coach assignment, and campus validation.
- Preserved current gameplay, economy values, country progression, prestige behavior, and Brazil preview-only status.

### Phase 3 - Japan Campus Migration
- Increased the save version to 11 with an additive Japan campus migration.
- Moved Japan facilities, athletes, competition state, chapter progress, local TP bridge data, and migration metadata into `state.campuses.japan`.
- Generalized legacy adapters so root gameplay fields mirror the active migrated campus instead of always mirroring USA.
- Preserved current Japan-active progress through a temporary compatibility bridge until the Local Training Point Economy milestone.
- Kept competitions globally surfaced in the current UI while storing active competition state on the active migrated campus.
- Preserved Japan Swimming/Cycling focus, bonuses, chapter goals, Brazil preview unlock, prestige behavior, and current economy values.

### Phase 4 - Global Coach Assignment Foundation
- Increased the save version to 12 with additive global coach assignment metadata.
- Prepared the Global Academy coach pool with per-coach coach id, current assignment, current campus, future Headquarters reference, transfer-ready metadata, and future specialty metadata.
- Assigned existing coaches to the active campus during migration while keeping transfer gameplay disabled.
- Preserved current coach levels, costs, tiers, effects, slot behavior, and balance formulas through the legacy `state.coaches` adapter.
- Extended hidden developer diagnostics and save validation to report coach assignment readiness, Headquarters references, transfer status, and assignment campus ids.
- Preserved USA and Japan campus migration behavior, prestige, reset, export/import, and current gameplay.

### Academy Illustration Pass 1
- Added a Home current-campus arrival vista so the first screen feels like entering the academy rather than opening a dashboard.
- Activated inline SVG illustration layers in existing campus-building and facility-department slots.
- Added location headers for Sports Center, Academy Offices, Competitions Hall, and Passport Office.
- Added lightweight campus atmosphere details such as walkways, flags, benches, trees, venue boards, office boards, and passport/travel art.
- Made USA and Japan visual styles diverge through country-ready campus styling without changing country gameplay.
- Refreshed Home, Sports, Academy, Competitions, and World screenshot checkpoints.
- Preserved gameplay, economy values, save version, country availability, and Headquarters non-playable status.

### Phase 5 - Local Economy Foundation
- Increased the save version to 13 with an additive Local Economy migration.
- Confirmed Training Points as campus-local through `state.campuses.*.localTrainingPoints`, while keeping `state.tp` as the active-campus compatibility mirror.
- Added Headquarters-owned Academy Funding with lifetime earned tracking and no spending actions yet.
- Added campus strategies: Local Development, Balanced, Global Contribution, and High Performance.
- Added campus contribution tracking that generates Academy Funding from earned local TP without reducing local TP or changing costs.
- Added preparatory Headquarters support metadata for future Operations Capacity.
- Added an initial Competition Circuit framework for campus, regional, world, Olympic, winter, and future sport-specific circuits.
- Added a World-tab Local Economy panel with local TP, Academy Funding, strategy selection, contribution rate, campus contribution, and eligible circuits.
- Updated active-campus switching so TP stays with the campus that earned it when Japan becomes active.
- Preserved current USA/Japan gameplay, production formulas, costs, prestige, export/import, reset, and Brazil preview-only status.

### Phase 6 - Campus Travel & Brazil Expansion
- Increased the save version to 14 with an additive Brazil campus and travel migration.
- Implemented manual travel between unlocked playable campuses from the World tab.
- Added campus overview cards for USA, Japan, and Brazil with local TP, Academy Funding contribution, strategy, assigned coach count, athlete count, sports, and facility progress.
- Implemented Brazil as the first expansion campus with Football, Volleyball, and Futsal.
- Added Brazil facilities, coach archetypes, athlete archetypes, local competitions, chapter goals, campus identity, local TP ownership, and competition circuit metadata.
- Added Brazil completion reward: +3 Medals, +300 Reputation, and +500 Academy Funding.
- Kept Academy Funding read-only with a World-tab explanation of its future Headquarters purpose.
- Kept Headquarters gameplay, sponsor redesign, youth development, named athletes, winter sports, sport-specific championship gameplay, and additional countries out of scope.

## Upcoming Milestones

### Next Recommended: Phase 7 - Regional Expansion Framework
- Add region data helpers and route milestone support after Brazil without implementing another playable country.
- Prepare campus opening state and regional route milestones for future expansion.
- Keep existing USA/Japan/Brazil local economies, Funding, strategies, and circuits stable through compatibility adapters.
- Validate that competition circuits can reference regions and future sport-specific events without changing current competition gameplay.

### Parallel Review: Visual Identity QA + Fresh Save Playtest
- Review the refreshed Home, Sports, Academy, Competitions, and World screenshots with the Game Director.
- Play through a fresh save and confirm Home still feels playable with the arrival vista, welcome ceremony, Mission board, and Session Drill in the first viewport.
- Tune illustration density, text spacing, and campus atmosphere from real feedback only.
- Keep country availability, Headquarters playability, and post-Brazil gameplay unchanged.

### Later Milestones
- Regional Route Framework.
- Campus Visual Art Pass.
- Headquarters Systems Foundation.
- Visual Identity QA + fresh save playtest.
- Brazil balance polish and post-Japan travel guidance under the Global Academy Architecture.
- Coach automation and deeper coach roles.
- Athlete roster expansion and assignment strategy.
- Country-aware competitions and chapter rewards.
- Prestige/meta-currency tuning after countries exist.
- Formal regression tests for save migration and core gameplay loops.

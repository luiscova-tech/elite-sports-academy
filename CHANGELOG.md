# Elite Sports Academy Changelog

## 2026-07-14 - Phase 4: Global Coach Assignment Foundation

### Added
- Save version 12 with additive global coach assignment metadata.
- Per-coach assignment records with coach id, current assignment, current campus, future Headquarters reference, transfer-ready metadata, and future specialty metadata.
- Hidden developer diagnostics for coach assignment version, assignment campus ids, Headquarters reference, transfer model, transfer gameplay status, and per-coach metadata.
- Save validation checks for coach assignment records, invalid campus references, missing Headquarters references, and accidentally enabled transfer gameplay.

### Changed
- Existing coach assignment metadata now migrates to the active campus.
- Headquarters metadata now reflects preparation through the Global Coach Assignment Foundation while remaining non-playable.
- Chapter reward travel syncs coach metadata to the new active campus without adding transfer controls or changing coach effects.
- `index.html` was synced to the updated single-file game implementation.

### Fixed
- Legacy coach assignment diagnostics now report the full metadata record instead of only a campus id.

### Unchanged
- No coach levels, costs, tiers, effects, slot behavior, economy formulas, country availability, athlete mechanics, competition rules, UI layout, Brazil gameplay, SVG art, sponsors, local TP economy, playable Headquarters systems, or coach transfer gameplay were added or changed.

## 2026-07-13 - Phase 3: Japan Campus Migration

### Added
- Save version 11 with additive Japan campus migration.
- Japan campus-owned records for facilities, athletes, competition state, chapter progress, local Training Point bridge data, and migration metadata.
- Japan migration diagnostics in the hidden developer migration payload.
- Active-campus adapter diagnostics that identify whether legacy root fields are backed by USA or Japan.

### Changed
- Legacy `state.facilities`, `state.athletes`, active competition fields, and active TP now mirror the active migrated campus instead of always mirroring USA.
- Japan-active progress is preserved through a temporary compatibility bridge until the Local Training Point Economy milestone.
- Competition state is stored on the active migrated campus while the current Competitions UI remains globally surfaced.
- Headquarters metadata now reflects preparation through Japan migration while remaining non-playable.
- `index.html` was synced to the updated single-file game implementation.

### Fixed
- Japan campus validation now checks owned facilities, athletes, competitions, and chapter progress.
- USA migration validation remains active after Japan migration.

### Unchanged
- No gameplay values, economy formulas, country availability, coach effects, athlete mechanics, competition rules, UI layout, Brazil gameplay, SVG art, sponsors, local TP split, coach transfers, or Headquarters gameplay were added or changed.

## 2026-07-13 - Phase 2: USA Campus Migration

### Added
- Save version 10 with additive USA campus migration.
- USA campus-owned records for Training Points, facilities, athletes, competition state, chapter progress, and migration metadata.
- Active-campus Training Point migration rule: existing TP migrates to the current active campus if it exists, otherwise USA.
- Global coach assignment migration rule: initial coach assignments move to the current active campus if it exists, otherwise USA.
- Legacy adapter diagnostics for active campus, USA migration status, legacy adapter status, global coach assignment, and campus validation.

### Changed
- USA facility, athlete, chapter-progress, and competition compatibility paths now mirror through `state.campuses.usa`.
- TP earning and spending now route through active-campus adapter helpers while preserving the existing root `state.tp` compatibility field.
- Prestige now rebuilds operational campus data from the reset state so USA facilities, athletes, and TP still reset as before.
- `index.html` was synced to the updated single-file game implementation.

### Fixed
- USA campus validation now checks owned facilities, athletes, competitions, and chapter progress.
- Hidden migration diagnostics now show whether legacy root fields are attached to the migrated USA campus records.

### Unchanged
- No gameplay values, economy formulas, country availability, coach effects, athlete mechanics, competition rules, UI layout, Brazil gameplay, SVG art, sponsors, local TP split, coach transfers, or Headquarters gameplay were added or changed.

## 2026-07-13 - Phase 1: Global Academy Save Architecture

### Added
- Save version 9 with additive migration support for the Version 2 Global Academy architecture.
- Future-compatible `state.academy` container for academy identity, global progression references, planned Headquarters metadata, global coach pool metadata, and campus references.
- `state.campuses` with USA and Japan placeholder records that reference the current live gameplay fields.
- Migration helpers: `migrateSave()`, `validateSave()`, and `logMigration()`.
- Hidden developer migration inspection through `window.EliteSportsAcademyDebug` and the non-visible `#migrationDebugInfo` JSON node, including a compact legacy compatibility summary for TP, countries, facilities, coaches, and athletes.

### Changed
- Save loading now routes through the new migration framework while preserving existing gameplay data.
- Import save flow now normalizes and validates architecture containers before committing imported data.
- Export/import text now persists across World tab re-renders so the save box is usable during normal play.
- Prestige reset now preserves the new academy, campus, and migration metadata.
- `index.html` was synced to the updated single-file game implementation.

### Fixed
- Exported saves now include migration validation data and the new architecture shells.
- Existing academy identity edits now preserve the full academy container instead of temporarily collapsing to identity-only data.
- The Preferences save textarea no longer clears immediately during periodic World tab renders.

### Unchanged
- No gameplay values, economy formulas, country availability, coach effects, athlete mechanics, competition mechanics, UI layout, Brazil gameplay, SVG art, sponsors, or Headquarters gameplay were added or changed.

## 2026-07-13 - Implementation Planning: Version 2 Engineering Roadmap

### Added
- `IMPLEMENTATION_PLAN.md` as the engineering roadmap for Version 2 implementation.
- Phase-by-phase implementation order from Global Academy save architecture through future Headquarters systems.
- Save migration strategy for Global Academy, Headquarters, country campuses, local TP, global coaches, and local athletes.
- Engineering validation, gameplay validation, playtest goals, and regression risks for every implementation phase.

### Changed
- Roadmap now recommends Phase 1: Global Academy Save Architecture as the next engineering milestone.
- TODO now prioritizes save shells, compatibility helpers, and migration assertions before Brazil or other gameplay implementation.

### Fixed
- Clarified that Implementation Planning is not a gameplay, UI, save migration, SVG, sponsor, athlete generation, or Brazil milestone.

## 2026-07-12 - World Tour 3.0: Global Academy Architecture

### Added
- `WORLD_TOUR.md` as the design blueprint for future countries, global academy progression, local country campuses, competition cycles, continental events, World Championships, and Olympic Games.
- Documentation for the global academy model: permanent academy identity, reputation, medals, trophies, rank, Hall of Fame, future research, and future sponsors.
- Documentation for future country campuses: local Training Points, facilities, athletes, competitions, buildings, local progress, visual theme, chapter progress, and country bonus.

### Changed
- Future countries are now defined as permanent academy campuses instead of isolated country resets.
- Coaches are documented as future global academy resources that can eventually be assigned or transferred between campuses.
- Athletes are documented as local country-campus recruits with no Version 1 transfer plan.
- Future country design now follows the 2 core sports, 2 shared sports, and 1 wildcard sport template.

### Fixed
- Clarified that Brazil and later countries should remain preview-only until they support the Global Academy Architecture.
- Clarified that Olympic Games are a long-term culmination layer, not an ordinary competition or endpoint.

## 2026-07-12 - Visual Identity 1.0: From Prototype to Game

### Added
- Welcome Coach ceremony and mission board on Home.
- Shared inline SVG academy icon language for navigation, campus, sports, coaches, athletes, and World/competition surfaces.
- Sport-specific facility department silhouettes.
- Passport/travel styling for World Tour destinations.
- Event-board and ticket styling for Competitions.

### Changed
- Home orientation and mission now render as one cohesive experience instead of separate checklist and mission cards.
- First-run identity setup now opens as a compact ceremony summary with optional edit controls so Session Drill stays closer to the first viewport.
- The first-run orientation path now stays behind an optional expander instead of reading as a permanent checklist.
- The welcome ceremony now includes a compact Session Drill call-to-action while preserving the full Session Drill panel below.
- Academy Campus buildings now have more distinct department silhouettes.
- Coach cards now feel more like premium staff boards while preserving tier behavior.
- Sports, Academy, Competitions, and World now use more distinct visual language.
- World now leads with the passport-style campaign route before profile and dashboard details.

### Fixed
- Reduced the prototype/web-app feel caused by repeated generic rounded rectangles and placeholder icons.

## 2026-07-12 - Quality of Life 1.0: Orientation, Drill Choices, Competition Results, and Coach Tiers

### Added
- Real academy identity choices in the first-run welcome and Home orientation card.
- Guided recommendation navigation with highlighted target areas for Sports, Academy, Competitions, World, Session Drill, and Click Training.
- Latest competition result card showing outcome, TP reward, win chance, academy power, target power, and result explanation.
- Coach tier presentation with Unrecruited, Junior, Senior, Elite, and Olympic stages.
- `PLAYTEST_JOURNAL.md` using current game-director feedback only.

### Changed
- Recommendation and onboarding management actions now route the player to the correct screen instead of auto-completing facility, coach, athlete, competition, or world actions.
- Click Training now displays every named drill program with status, unlock requirement, per-level power/sync gains, and per-program upgrade buttons.
- Competition offer cards now identify meet type and relevant sports more clearly.
- Coach cards now show specialty path, current tier, next tier, and tier progress while preserving existing upgrade behavior.

### Fixed
- New players now make actual academy identity choices instead of only confirming default text.
- Competition outcomes are no longer visible only as a brief toast.
- Drill progression no longer reads as a single opaque upgrade path.

## 2026-07-12 - Academy Orientation: First-Time Experience

### Added
- Coach-led first-run welcome modal focused on academy ownership, Session Drill, Mission Card guidance, recruiting, competitions, and World Tour travel.
- Saved Home orientation card for fresh saves with a checklist for identity confirmation, first drill, first facility upgrade, first coach, first athlete, Mission review, and World Tour review.
- First competition briefing in the Competitions tab for players who have not entered a competition yet.
- Save version 8 migration for onboarding flags.
- `FIRST_TIME_EXPERIENCE.md` as the dedicated onboarding blueprint.

### Changed
- The old generic tutorial now uses the academy coach voice and starts the first-time orientation.
- Existing saves that already completed the old tutorial are treated as onboarding-complete so veteran players are not interrupted.
- Documentation now tracks first-time experience, onboarding presentation rules, future social/account ideas, and save version 8.

### Fixed
- New players now get a clearer opening path instead of relying on the generic tutorial and scattered management panels.

## 2026-07-11 - Academy Identity 1.0: Make It My Academy

### Added
- `VISION.md` with the creative vision statement, five pillars, core design rule, and milestone philosophy.
- Saved academy identity fields for academy name, motto, crest, color theme, and founded date.
- Academy Identity editor in World settings with built-in crests, color themes, and motto presets.
- Academy Profile section with founded date, countries completed, current country, competitions won, medals, reputation, championship trophies, academy rank, favorite sport, highest facility, athletes trained, and coaches recruited.
- Hall of Fame framework as a Coming Soon section.
- Save version 7 migration for academy identity.

### Changed
- The sticky header now presents the player's academy crest, academy name, reputation-based academy rank, motto, and current country instead of a generic game title.
- Mission, primary buttons, Campus, highlights, and progress bars now pick up the selected academy color theme subtly.
- Documentation now references `VISION.md`, the Five Pillars, and the Core Design Rule.

### Fixed
- The top identity now supports player ownership and emotional attachment instead of only showing generic World Tour branding.

## 2026-07-11 - Academy Campus 5.0: A Living Academy

### Added
- State-driven campus activity labels for Sports Center, Academy Offices, Competition Hall, and World Tour Gate.
- Visual evolution stages for campus buildings using existing level, staff, win, and chapter-progress data.
- Subtle micro-animations for mission progress, building lights, office windows, competition banners, world flags, and ready badges.
- Department-style facility visuals with future SVG replacement slots.
- Coach and athlete portrait placeholders for future roster art.

### Changed
- Resource Bar typography and spacing are clearer while still showing only country, TP, and TP/sec.
- World Tour route stops now show route order and clearer Complete, Current, Open, and Future states.
- Sports, Academy, and Competitions tabs received presentation polish without changing gameplay behavior.
- Documentation now defines living-campus states, visual evolution rules, and motion boundaries.

### Fixed
- Campus panels no longer feel static when upgrades, staff actions, competitions, or chapter rewards are available.

## 2026-07-11 - Academy Campus 4.0: From UI to World

### Added
- Collapsible Home Mission Card with current mission, progress, reward, next unlock, and expandable objective details.
- Campus building components with roof, body, wings, door, banner, light, level indicator, status badge, and future SVG slot structure.
- Stronger World Tour journey strip with route line and destination-stop styling.

### Changed
- Academy Campus now reads more like shared academy grounds with departments instead of a grid of menu cards.
- Resource and mission surfaces remain compact so Home still prioritizes Session Drill and campus navigation.
- Documentation now defines screen-purpose rules and future SVG preparation.

### Fixed
- Reduced Home vertical pressure from always-expanded mission objectives.

## 2026-07-10 - Academy Campus 3.0: Living Headquarters

### Added
- Living Academy Campus treatment with shared plaza grounding, stronger building depth, and subtle CSS motion.
- Flag, glow, building, and status pulse micro-animations that respect the existing animations setting.
- Screenshot checkpoints for Home, Sports, Academy, Competitions, and World.

### Changed
- Home now flows from Mission to Session Drill to Academy Campus to Current Event before secondary guidance.
- World Tour route stops now look more like destination cards along a journey.
- Documentation now describes the living headquarters direction and motion rules.

### Fixed
- Reduced the feeling that Home is only a collection of navigation cards.

## 2026-07-10 - Japan Chapter: Precision & Technique

### Added
- Japan as the second playable chapter with Swimming/Cycling focus.
- Japan chapter goals for Swimming Center Level 15, Cycling Velodrome Level 15, 5 Japan chapter competition wins, and any athlete reaching Skill Level 10.
- Data-driven Japan bonuses: +15% Athlete Experience and +10% Competition Rewards.
- Japan completion reward: +2 Medals, +200 Reputation, and Brazil unlock as a preview destination.
- Save version 6 migration for per-country competition win tracking.
- Subtle Academy Campus activity indicators.
- `STYLE_GUIDE.md` as the project visual reference.

### Changed
- Resource Bar now shows only country flag, country name, TP, and TP/sec.
- Recommendation priority now better follows chapter goals: facilities, competitions, athletes, coaches, then click upgrades.
- World route order now highlights USA, Japan, Brazil, Australia, Kenya, and Norway.

### Fixed
- Japan competition wins now count per country instead of relying on the global competition win stat.

## 2026-07-10 - Academy Campus Phase 2: Visual Buildings, Flags, and Stronger Headquarters Feel

### Added
- Stronger Academy Campus building visuals with roof shapes, window structures, depth, section accents, and lightweight hover polish.
- World Tour route strip using country flags and route order.
- `PARKING_LOT.md` for future ideas that are not currently scheduled.
- `BALANCE.md` for current economy numbers, multipliers, rewards, and progression formulas.

### Changed
- Home campus navigation now reads more like a headquarters map and less like a flat menu.
- World Tour campus navigation is now labeled World Tour Gate.
- Resource Bar country identity has a stronger active-country flag/accent treatment.
- World Campaign destination rows now share the premium flag/route visual direction.

### Fixed
- Improved the visual weight of the Home campus without adding dashboard clutter or changing gameplay.

## 2026-07-10 - Academy Campus UI + Persistent Resource Bar

### Added
- Compact persistent Resource Bar with current country, TP, TP/sec, medals, and reputation.
- Country flag data for current and future destinations.
- Building-style Academy Campus navigation panels for Sports Center, Academy Offices, Competitions Hall, and World Tour.
- `UI_VISION.md` as the long-term UI direction document.

### Changed
- Home now flows from Academy Mission to Session Drill to Academy Campus navigation before secondary guidance panels.
- World Campaign destination rows now use prominent country flags.
- Japan documentation is clarified as a Swimming/Cycling-only planned chapter for the current scope.

### Fixed
- Restored always-visible TP and TP/sec without bringing back large fixed dashboard cards.

## 2026-07-10 - Academy Mission Hub & Player Guidance

### Added
- Home Academy Mission card with current country, chapter goals, progress bars, overall completion, chapter rewards, and next unlock.
- Dynamic Recommended Next Action card.
- Home Reward Preview card for the next destination, sports, coaches, facilities, and reward.
- Academy Hub navigation cards for Sports Center, Academy Offices, Competitions, and World Tour.
- Locked future destination previews in World for Australia and Norway.

### Changed
- Home now more clearly communicates what the player is working toward, what to do next, and what reward comes after.
- World Campaign now includes display-only future destinations without implementing new gameplay countries.

### Fixed
- Reduced the need to search through tabs to understand current chapter objectives.

## 2026-07-10 - Country / Chapter Progression: USA Chapter Complete

### Added
- Data-driven USA chapter goals: Track Facility Level 10, Swimming Facility Level 10, 3 competition wins, and 25,000 TP earned during the USA chapter.
- Saved per-country progress records for completed goals, chapter TP earned, completion time, and reward claim state.
- Real saved Medals and Reputation progression values.
- USA chapter completion modal with reward summary and Continue to Japan action.
- World Campaign map showing current, unlocked, completed, and future countries.
- Save version 5 migration for country progress, medals, and reputation.

### Changed
- Medals and Reputation are no longer derived from total TP.
- World tab now carries expanded campaign information while Home remains play-first.
- Claiming USA completion grants +1 Medal, +100 Reputation, unlocks Japan, and switches the current country to Japan.

### Fixed
- Existing saves now receive country progress fields without resetting gameplay progress.

## 2026-07-10 - UI Cleanup: Remove Persistent Home Mini-Stats

### Added
- Academy Dashboard section in the World tab for relocated live readouts.

### Changed
- Removed the persistent mini-stat card grid from the sticky top header.
- Home now has more open space for Session Drill, click training, and live play context.

### Fixed
- The top of Home no longer appears crowded by frozen stat squares.

## 2026-07-10 - UI Fix: Compact World Tour Chapter Header

### Added
- Tap-to-expand World Tour chapter details in the sticky header.

### Changed
- The World Tour chapter header now defaults to a compact summary with current country, chapter progress, and next-country path.
- Home keeps more vertical room for Session Drill and active play.

### Fixed
- The oversized chapter card no longer visually dominates the top of the Home layout.

## 2026-07-10 - UI Refactor: Play-First Home / Tabbed Management / Preferences

### Added
- Dedicated Home tab for active play with compact country status, Session Drill, click progression, and live event/competition context.
- Optional pinned Session Drill preference for drilling from non-Home tabs.
- Preferences controls for pinned drill, floating numbers, animations, confirm prestige, export save, import save, and reset save.
- Save version 4 migration for new UI preferences and legacy tab mapping.

### Changed
- Management panels now live in dedicated tabs: Sports for facilities, Academy for coaches and athletes, Competitions for competitions and sponsorship context, and World for country progress, prestige, statistics, achievements, and preferences.
- Prestige moved from the old Academy view into World as a meta-progression system.
- Existing gameplay economy, click upgrades, coaches, athletes, competitions, offline progress, and prestige rewards remain intact.

### Fixed
- Prestige reset now guards against direct reset attempts before the unlock threshold, even when confirmation is disabled.

## 2026-07-10 - UI Upgrade: World Tour / Academy Dashboard / Country Progress / Bottom Navigation

### Added
- World Tour header with active country and chapter goal progress.
- Headquarters-style dashboard stats for TP, TP/sec, country, medals, reputation, trophies, coaches, and athletes.
- Country progress cards with goals, percent complete, unlock reward, and next-country path.
- Bottom navigation for Academy, Sports, Competitions, Roster, and World.
- Facility sport marks and coach/athlete connection pills.

### Changed
- Moved facilities into a dedicated Sports section.
- Moved progress, achievements, and settings into the World section.
- Kept the existing gameplay loop and save format intact.

## 2026-07-10 - Content Registry + Sport Foundation

### Added
- Central `CONTENT` registry for all major content categories.
- `BY_ID` lookup maps for content id access.
- Country data entries for USA, Japan, Kenya, and Brazil.
- Sport data entries for Track & Field, Swimming, Cycling, and Soccer.
- `sportId` metadata for facilities, coaches, athletes, and competitions.
- Save version 3 migration for country foundation fields.

### Changed
- Facility income now rolls up through sport income helpers.
- Coach output bonuses now use data-driven effect definitions.
- Athlete output, click, XP, and competition reward bonuses now use data-driven effect definitions.
- Competition power now uses sport-linked facility and athlete helpers.
- Academy UI now shows the current country foundation panel.
- Existing visible gameplay loop remains intact.

### Fixed
- Removed repeated `.find(...)` lookups in active gameplay paths in favor of id-map helpers.

## 2026-07-10 - Upgradeable Click Power + Stabilization Fixes

### Added
- Click upgrade progression: Basic Drill, Technique Drill, Elite Form, National Standard, Championship Routine.
- Click income and drill upgrade stats.
- Save version 2 migration for click upgrades.

### Changed
- Session Drill scales with click upgrades, coach bonuses, athlete bonuses, and passive-income sync.
- Offline progress awards for any elapsed time.
- Tick handling uses catch-up simulation instead of a 5-second cap.

### Fixed
- Short offline absences no longer produce zero earnings when passive income exists.

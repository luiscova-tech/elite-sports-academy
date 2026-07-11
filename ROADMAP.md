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

## Upcoming Milestones

### Next Recommended: Brazil Preview + Post-Japan Guidance
- Polish Brazil as an unlocked preview destination without gameplay.
- Clarify post-Japan player guidance when no next playable chapter exists yet.
- Keep Home play-first and avoid adding Brazil systems until approved.
- Review Academy Identity 1.0 screenshots for header clarity, profile usefulness, and customization emotional impact.

### Later Milestones
- Coach automation and deeper coach roles.
- Athlete roster expansion and assignment strategy.
- Country-aware competitions and chapter rewards.
- Prestige/meta-currency tuning after countries exist.
- Formal regression tests for save migration and core gameplay loops.

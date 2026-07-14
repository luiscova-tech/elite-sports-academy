# Elite Sports Academy Playtest Journal

This journal records real player or game-director feedback only. Do not invent ratings, play time, quotes, or bugs.

## Entry - 2026-07-14 - Academy Illustration Pass 1 Direction

### Version / Milestone
Academy Illustration Pass 1

### Date
2026-07-14

### Play Time
Not provided.

### Reviewer
Game Director feedback from the current milestone request, plus implementation QA screenshots.

### Overall Ratings
Not provided.

### Biggest Win
- The refreshed Home screenshot now reads as an academy entrance: the current-campus arrival vista, Welcome Coach ceremony, Mission board, and Session Drill are all visible in the first viewport at 480px width.
- Sports, Academy, Competitions, and World now each open with a distinct location identity instead of beginning as similar management cards.

### Biggest Friction
- Fresh-save Home remains visually dense because the arrival vista, first-run orientation, Mission board, and Session Drill all appear together.
- The first illustration pass establishes recognizable locations, but country-specific architecture still needs director review before deeper art detail is added.

### Design Insights
- Visual identity can improve the fantasy without changing gameplay, economy, saves, country availability, or Headquarters playability.
- Inline SVG slots are a good bridge between the current single-file prototype and future richer campus art.
- USA and Japan should continue diverging visually as future country/campus work expands.

### What Felt Good
- Home, Sports, Academy, Competitions, and World each gained a clearer screen personality.
- The visual pass used existing state-driven cards, navigation, and activity indicators rather than creating new gameplay surfaces.

### What Was Confusing
- Full-page stitched screenshots repeated the sticky header; viewport screenshots were used instead for the refreshed screenshot set.

### Bugs Reported
- No gameplay bugs were reported.
- Browser QA reported no console errors during the screenshot pass.

### UX Improvements Requested
- Continue reviewing whether the Home first viewport feels inspiring without becoming crowded.
- Refine screen illustrations from real feedback before adding deeper SVG detail or country-specific art systems.

### Ideas
- A second illustration pass could focus on country-specific campus architecture, especially making Japan visually distinct when active.
- Future World work can evolve the Passport Office into a larger route/map view after travel systems are ready.

### Priority
High for experience and visual identity. Gameplay redesign, Brazil, local TP economy, sponsors, coach transfers, Headquarters gameplay, and competition redesign remain out of scope for this milestone.

### Would The Player Keep Playing?
Not provided.

## Entry - 2026-07-14 - Phase 4 Global Coach Assignment Foundation Direction

### Version / Milestone
Phase 4 - Global Coach Assignment Foundation

### Date
2026-07-14

### Play Time
Not provided.

### Reviewer
Game Director feedback from the current milestone request.

### Overall Ratings
Not provided.

### Design Insights
- Coaches should become Global Academy resources while current coach gameplay remains unchanged.
- Existing coach effects, bonuses, costs, and levels must remain unchanged.
- Existing coaches should migrate to the active campus.
- Headquarters remains metadata only.
- Coach assignment is metadata only.
- Coach transfer gameplay is not implemented yet.

### What Felt Good
- The milestone should be architecture-first and ideally invisible to players.
- The current gameplay, balance, saves, and coach progression should remain stable before gameplay expansion resumes.

### What Was Confusing
- The previous Phase 4 label, Coach Transfer System, could imply player-facing transfer gameplay too early.
- The implementation needs diagnostics proving coaches are assignment-ready without enabling transfers.

### Bugs Reported
- No explicit gameplay bugs were reported in this feedback.

### UX Improvements Requested
- No visible UI redesign was requested for this milestone.

### Ideas
- Use this phase as the final architecture checkpoint before local TP and later gameplay expansion.
- Keep coach transfer design for a later approved milestone after the metadata foundation is stable.

### Priority
High for save safety and Version 2 architecture. Headquarters gameplay, coach transfers, Brazil, SVG art, local TP economy, regional competitions, and sponsors remain out of scope for this milestone.

### Would The Player Keep Playing?
Not provided.

## Entry - 2026-07-13 - Phase 3 Japan Campus Migration Direction

### Version / Milestone
Phase 3 - Japan Campus Migration

### Date
2026-07-13

### Play Time
Not provided.

### Reviewer
Game Director feedback from the current milestone request.

### Overall Ratings
Not provided.

### Design Insights
- Keep the current `state.campuses` container name.
- Japan should become the second true campus.
- Japan-active progress should be preserved only as a temporary compatibility bridge until the Local Economy milestone.
- Competitions remain globally surfaced for now.
- Headquarters remains non-playable.
- Save compatibility, prestige, reset, import/export, and current gameplay behavior must be preserved.

### What Felt Good
- The milestone should be invisible or nearly invisible to players.
- Japan should keep its Swimming/Cycling focus, bonuses, chapter goals, and Brazil preview unlock while the architecture underneath becomes safer.

### What Was Confusing
- Japan migration must not accidentally implement local TP economy, coach transfers, Headquarters gameplay, Brazil, SVG art, competition redesign, or athlete redesign.
- Compatibility diagnostics need to prove USA migration still works while Japan becomes campus-owned.

### Bugs Reported
- No explicit gameplay bugs were reported in this feedback.

### UX Improvements Requested
- No visible UI redesign was requested for this milestone.

### Ideas
- Use Japan as the second proof that campus-owned data can coexist with legacy active-campus adapters before moving to coach transfer and local economy phases.

### Priority
High for save safety and Version 2 architecture. Coach transfers are next; Brazil, Headquarters gameplay, SVG artwork, sponsors, local TP split, and system redesigns remain out of scope.

### Would The Player Keep Playing?
Not provided.

## Entry - 2026-07-13 - Phase 2 USA Campus Migration Direction

### Version / Milestone
Phase 2 - USA Campus Migration

### Date
2026-07-13

### Play Time
Not provided.

### Reviewer
Game Director feedback from the current milestone request.

### Overall Ratings
Not provided.

### Design Insights
- Keep the current `state.campuses` container name.
- Existing TP should migrate to the current active campus when available, otherwise USA.
- Global coaches should initially assign to the current active campus when available, otherwise USA.
- USA should become the first true campus owner for operational gameplay data.
- Headquarters remains non-playable.
- Legacy fields remain compatibility adapters until migration is complete.

### What Felt Good
- The milestone should be invisible or nearly invisible to players.
- Current TP, facilities, coaches, athletes, competitions, prestige, and country progression should continue behaving the same.

### What Was Confusing
- USA migration must not accidentally implement Japan migration, local TP split, coach transfers, Brazil, or Headquarters gameplay.
- Legacy adapter status needs developer diagnostics so future migrations can be validated safely.

### Bugs Reported
- No explicit gameplay bugs were reported in this feedback.

### UX Improvements Requested
- No visible UI redesign was requested for this milestone.
- Developer diagnostics should show active campus, USA migration status, adapter status, coach assignment, and campus validation.

### Ideas
- Use USA as the first proof that campus-owned data can coexist with legacy root adapters before moving Japan.

### Priority
High for save safety and Version 2 architecture. Japan migration is next; Brazil, Headquarters gameplay, SVG artwork, sponsors, coach transfers, local TP split, and system redesigns remain out of scope.

### Would The Player Keep Playing?
Not provided.

## Entry - 2026-07-13 - Phase 1 Architecture Direction

### Version / Milestone
Phase 1 - Global Academy Save Architecture

### Date
2026-07-13

### Play Time
Not provided.

### Reviewer
Game Director feedback from the current milestone request.

### Overall Ratings
Not provided.

### Design Insights
- Phase 1 should prepare the Global Academy architecture without changing gameplay.
- Headquarters should be prepared structurally but not become a playable location yet.
- Migration tooling should be developer-safe, traceable, and validation-oriented.
- Coaches should prepare for a future global pool and simple one-campus assignment model without implementing transfer gameplay.

### What Felt Good
- The current playable game should remain functionally identical while the architecture becomes safer for Version 2.
- Existing saves, academy identity, TP, facilities, coaches, athletes, competitions, prestige, and settings should remain intact.

### What Was Confusing
- Future campus migration could corrupt saves if global and local data are moved too quickly.
- USA and Japan need clear migration steps before Brazil, local TP, Headquarters systems, sponsors, or SVG work begins.

### Bugs Reported
- No explicit gameplay bugs were reported in this feedback.

### UX Improvements Requested
- No visible UI redesign was requested for this milestone.
- Developer migration inspection should remain hidden from normal players.

### Ideas
- Use migration logging, validation helpers, save version tracking, and export/import compatibility checks to reduce risk in later phases.

### Priority
High for save safety and future campus migration. Brazil, Headquarters gameplay, SVG artwork, sponsors, local athlete generation, and economy redesign remain out of scope.

### Would The Player Keep Playing?
Not provided.

## Entry - 2026-07-12 - World Tour 3.0 Design Feedback

### Version / Milestone
World Tour 3.0 - Global Academy Architecture

### Date
2026-07-12

### Play Time
Not provided.

### Reviewer
Game Director feedback from the current milestone request.

### Overall Ratings
Not provided.

### Design Insights
- Countries should become unique sporting ecosystems.
- The academy should expand internationally instead of replacing previous countries.
- Country campuses should use local athletes.
- Coaches should become global academy resources.
- Training Points should become local to each country campus.
- Academy progression should remain global.

### What Felt Good
- The long-term fantasy should focus on building the world's greatest Olympic training academy.
- The player should own one global academy that expands around the world.

### What Was Confusing
- Country progression needed stronger architectural direction before Brazil and future countries are implemented.
- The game should avoid implying that previous countries are abandoned after unlocking the next destination.

### Bugs Reported
- No explicit technical bugs were reported in this feedback.

### UX Improvements Requested
- Document future World Tour architecture before implementing Brazil.
- Make future countries feel like permanent campuses.
- Preserve clear separation between global academy values and local country-campus values.

### Ideas
- Continental events, World Championships, and Olympic Games can become major future milestones.
- Winning Olympic gold should be a historic academy milestone, not the end of the game.

### Priority
High for future country, save architecture, and long-term progression planning. Brazil gameplay remains out of scope.

### Would The Player Keep Playing?
Not provided.

## Entry - 2026-07-12 - Quality of Life 1.0 Feedback

### Version / Milestone
Quality of Life 1.0 - Academy Orientation Fixes, Drill Progression Fixes, Competition Results, Coach Tiers, and Playtest Journal

### Date
2026-07-12

### Play Time
Not provided.

### Reviewer
Game Director feedback from the current milestone request.

### Overall Ratings
Not provided.

### What Felt Good
- The current Home direction should remain play-first.
- The compact World Tour header, Mission Card, Recommended Next Action, Resource Bar, bottom navigation, and dark modern mobile style should be preserved.

### What Was Confusing
- Onboarding should feel like real academy orientation, not a checklist of buttons.
- The player should make actual academy identity choices rather than only confirming default identity text.
- Drill progression needed clearer upgrade choices and more sensible named-program presentation.
- Tutorial guidance should send the player to the correct screen instead of auto-completing management actions.
- Competition results needed to be more visible, rewarding, and understandable.
- Coach progression needed clearer tiered presentation by sport or specialty.

### Bugs Reported
- No explicit technical bugs were reported in this feedback.

### UX Improvements Requested
- Add real academy identity choices during first-run orientation.
- Replace automatic tutorial shortcuts with navigation guidance and visual target highlights.
- Make every named drill program visible with progress, unlocks, and upgrade choices.
- Show a persistent latest-result presentation after competitions.
- Present coaches as tiered progression paths without redesigning the coach system.

### Ideas
- Keep future countries preview-only until their gameplay is approved.
- Continue evolving Home into an Academy Headquarters without reintroducing fixed dashboard cards.
- Use playtest feedback to decide whether richer coach automation, richer competition design, or Brazil preview polish should come next.

### Priority
High for current player guidance and first-session clarity. New countries, athlete redesign, competition redesign, usernames, and leaderboards remain out of scope.

### Would The Player Keep Playing?
Not provided.

## Entry - 2026-07-12 - Visual Identity 1.0 Feedback

### Version / Milestone
Visual Identity 1.0 - From Prototype to Game

### Date
2026-07-12

### Play Time
Not provided.

### Reviewer
Game Director feedback from the current milestone request.

### Overall Ratings
Not provided.

### Biggest Win
- The existing direction is worth preserving: Home remains play-first, Session Drill remains the hero interaction, Academy Identity, World Tour, Academy Campus, and the compact Resource Bar should all stay intact.

### Biggest Friction
- The game still needed to feel less like an HTML application and more like a polished mobile sports management game inside a living academy.
- The Home orientation/mission area risked feeling like a checklist instead of a welcome ceremony.
- Repeated rounded rectangles, placeholder circles, generic icons, and similar card shapes reduced the sense of place between departments.

### What Felt Good
- The core academy structure, play-first Home, Session Drill focus, Academy Identity, World Tour, Academy Campus, and Resource Bar were explicitly preserved by direction.

### What Was Confusing
- Screen personality needed to be stronger so Sports, Academy, Competitions, and World feel like distinct academy departments.
- Generic placeholder icons and emoji-style department marks did not support a coherent academy visual language.

### Bugs Reported
- No explicit technical bugs were reported in this feedback.

### UX Improvements Requested
- Merge Orientation and Mission into one cohesive Home welcome ceremony.
- Make buildings feel more like real academy departments with different architectural styles.
- Improve Sports, Academy, Competitions, and World presentation without changing gameplay.
- Replace generic placeholder iconography with consistent CSS/SVG academy-themed icons.
- Improve typography, spacing, hierarchy, touch feedback, depth, lighting, glow, and subtle animation.

### Ideas
- Future richer SVG artwork can replace the current CSS/SVG placeholders after the direction is validated.

### Priority
High for experience and visual identity. Gameplay systems, economy redesign, new countries, athlete redesign, and competition redesign remain out of scope.

### Would The Player Keep Playing?
Not provided.

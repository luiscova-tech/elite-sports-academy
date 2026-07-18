# Elite Sports Academy Implementation Plan

## Status

Planning Status: Approved roadmap

Implementation Status: Phase 6 implemented; Phase 7 is next

This document is the Version 2 engineering roadmap. It translates the approved Blue Book architecture into implementation phases without redesigning the game vision.

## Source Documents

Engineering should follow these approved documents:

- `VISION.md`
- `GAME_DESIGN.md`
- `HEADQUARTERS.md`
- `WORLD_TOUR.md`
- `# 🌍 CAMPUS_SYSTEM.md`
- `# 👤 ATHLETE_SYSTEM.md`
- `# 🤝 SPONSOR_SYSTEM.md`
- `# 🏅 COMPETITION_SYSTEM.md`
- `ROADMAP.md`

The Blue Book documents define the design. This implementation plan defines order, dependencies, migration strategy, risks, and validation.

## Implementation Principles

- Keep the game playable after every phase.
- Use additive migrations only.
- Preserve existing saves.
- Build adapters before moving gameplay reads and writes.
- Separate global academy state from local campus state gradually.
- Keep future countries after Brazil preview-only until the Global Academy architecture can support them safely.
- Avoid implementing sponsors, SVG art, athlete generation, or competition redesign before their dependencies exist.
- Prefer data-driven content and small helpers over hard-coded country logic.
- Do not remove current systems until the replacement path is live, migrated, and validated.

## Target Architecture

Version 2 moves the game from one global progression blob toward:

```text
Global Academy
  Headquarters
    Academy Identity
    Academy Rank
    Reputation
    Medals
    Championship Trophies
    Academy Funding
    Global Research
    Sponsors
    Hall of Fame
    Global Coach Pool
    World Tour Progress
  Country Campuses
    USA Campus
    Japan Campus
    Brazil Campus
    Future Campuses
```

Global systems answer: what kind of academy is the player building?

Local campus systems answer: how is this country branch developing?

## Save Migration Strategy

Do not implement migration during this planning milestone.

When implementation begins, use a staged migration strategy:

1. Add a new save version with `academy`, `headquarters`, and `state.campuses` shells while leaving old fields in place.
2. Add read helpers that can resolve data from either old or new locations.
3. Write new data to the new structure while mirroring critical old fields during the transition.
4. Migrate USA data first because it represents the original active academy progress.
5. Migrate Japan second because it is the existing second playable country.
6. Move coaches into a global pool after campus state exists.
7. Split Training Points into local campus TP only after USA/Japan campus reads are stable. Complete in Phase 5 through active-campus compatibility adapters.
8. Move athletes into local campus records after each campus can own local progression safely.
9. Add migration assertions and debug summaries for every version step.
10. Remove legacy compatibility only in a later cleanup milestone after multiple releases of stable migrated saves.

### Current Save To Target Save Mapping

| Current Data | Future Location | Migration Rule |
| --- | --- | --- |
| Academy name, crest, motto, theme | `academy.identity` or `headquarters.identity` | Copy directly and preserve edit behavior |
| Reputation | `headquarters.reputation` | Copy current value |
| Medals | `headquarters.medals` | Copy current value |
| Trophies | `headquarters.championshipTrophies` | Copy current value |
| Current country id | `worldTour.currentCampusId` | Preserve active location |
| Unlocked/completed countries | `worldTour.unlockedCampusIds`, `worldTour.completedCampusIds` | Copy ids and normalize names as campus ids |
| Global Training Points | Transitional, then active campus local TP | Initially map to USA campus unless active country context requires Japan |
| Facilities | `state.campuses[countryId].facilities` | USA first, Japan second; avoid duplication |
| Athletes | `state.campuses[countryId].athletes` | Assign existing athletes to their sport's current or original campus during migration planning |
| Coaches | `headquarters.coaches` | Preserve levels and unlock state before adding assignments |
| Competition result state | `state.campuses[countryId].competitions` | Keep current result visible for the active campus |
| Chapter progress | `state.campuses[countryId].chapterProgress` | Copy existing per-country progress |
| Preferences/settings | `settings` | Preserve as global preferences |

## Phase 1 - Global Academy Save Architecture

Goal: create the save foundation for global and local data separation without changing gameplay.

Status: Complete as of 2026-07-13.

Implemented foundation:

- Save version 9.
- Additive `state.academy` container with identity, global progression references, planned Headquarters metadata, global coach pool metadata, and campus references.
- Additive `state.campuses` container with USA and Japan placeholders that reference existing legacy gameplay fields.
- Migration helpers: `migrateSave()`, `validateSave()`, and `logMigration()`.
- Hidden developer inspection through `window.EliteSportsAcademyDebug`.
- Import/export validation checks for architecture-compatible saves.

Major tasks:

- Add new save version. Complete.
- Add Global Academy and campus containers. Complete.
- Add migration diagnostics for old and new saves. Complete.
- Keep current gameplay reads wired through compatibility helpers. Complete through reference containers; deeper read/write adapters wait for Phase 2.
- Keep old fields available during transition. Complete.

Dependencies:

- Current save migration layer.
- Existing content registry and country ids.

Engineering validation:

- Old saves load without data loss.
- Fresh saves initialize both legacy-compatible and new architecture shells.
- Import/export round trips preserve all new containers.
- No gameplay value changes.

Gameplay validation:

- Fresh save first minute still works.
- Existing USA/Japan saves still show the same TP, facilities, coaches, athletes, and World progress.

Playtest goals:

- Player should notice no gameplay change.
- No confusion from hidden architecture work.

Regression risks:

- Save corruption.
- Incorrect active country.
- Broken import/export.
- Missing default campus shell.

Phase 1 follow-up notes:

- The implementation intentionally uses `state.campuses` rather than fully migrating to a final `campusesByCountryId` gameplay model.
- Phase 2 replaced USA reads/writes first; Phase 3 should do the same for Japan.
- Headquarters remains metadata only and is not playable.

## Phase 2 - USA Campus Migration

Goal: move current USA operational progress into `state.campuses.usa`.

Status: Complete as of 2026-07-13.

Implemented foundation:

- Save version 10.
- USA campus-owned records for Training Points, facilities, athletes, competitions, chapter progress, and migration metadata.
- Active-campus Training Point migration rule: existing TP migrates to the current active campus if it exists, otherwise USA.
- Global coach assignment migration rule: initial coach assignments move to the current active campus if it exists, otherwise USA.
- Legacy root adapters for `state.tp`, `state.facilities`, `state.athletes`, `state.activeCompetition`, `state.lastCompetitionResult`, `state.nextCompetitionTime`, and `state.countryProgress.usa`.
- Developer diagnostics for active campus, USA migration status, legacy adapter status, global coach assignment, and campus validation.

Major tasks:

- Create USA campus data model. Complete.
- Move USA facilities into the USA campus record. Complete.
- Move USA chapter progress into the USA campus record. Complete.
- Move USA athlete and competition state into the USA campus record. Complete.
- Assign current TP to the active campus, falling back to USA. Complete.
- Preserve all current USA goal and reward behavior. Complete.
- Add adapters so UI and economy continue reading legacy fields safely. Complete.

Dependencies:

- Phase 1 global/campus containers.
- Campus lookup helpers.

Engineering validation:

- Existing USA saves retain TP, facility levels, chapter progress, reward state, and stats.
- USA completion still unlocks Japan as currently designed.
- Offline progress still applies to the active campus.

Gameplay validation:

- USA remains playable from a fresh save.
- Session Drill, facility upgrades, coaches, athletes, competitions, and chapter goals still work.

Playtest goals:

- USA should feel unchanged except for future-ready architecture.

Regression risks:

- Double-counted facilities.
- TP assigned to the wrong scope.
- USA chapter reward becoming claimable twice.

Phase 2 follow-up notes:

- Japan remains unmigrated. Its campus record is still a placeholder/legacy adapter except for active-campus TP storage required by the director decision.
- Legacy root fields remain compatibility mirrors and should not be removed until USA and Japan campus migration are both stable.
- Headquarters remains metadata only and is not playable.

## Phase 3 - Japan Campus Migration

Goal: convert Japan from chapter-like state into a real local campus while preserving current Japan behavior.

Status: Complete as of 2026-07-13.

Implemented foundation:

- Save version 11.
- Japan campus-owned records for facilities, athletes, competition state, chapter progress, local Training Point bridge data, and migration metadata.
- Active-campus legacy adapters now mirror `state.facilities`, `state.athletes`, active competition fields, and active Training Points through the current migrated campus.
- Japan-active saves preserve current progress through a temporary compatibility bridge until the Local Economy milestone. Superseded by Phase 5 local TP ownership.
- USA migration validation remains active while Japan validation now checks the same ownership requirements.

Major tasks:

- Create Japan campus data model. Complete.
- Move Japan chapter progress and competition wins into Japan campus state. Complete.
- Move Japan facilities, athletes, and active competition state into Japan campus records. Complete.
- Define Japan local TP behavior for migrated saves as a temporary active-campus bridge. Complete.
- Keep Japan Swimming/Cycling scope intact. Complete.
- Preserve Japan bonuses and Brazil preview unlock. Complete.

Dependencies:

- Phase 2 USA campus stability.
- Active campus switching helpers.

Engineering validation:

- Saves already in Japan remain in Japan.
- Japan goals, bonuses, and reward state persist.
- Brazil remained preview-only during Phase 3. Phase 6 later superseded this by implementing Brazil as a playable migrated campus.

Gameplay validation:

- Japan can be progressed after USA.
- Returning to USA in future does not erase Japan data.

Playtest goals:

- Player should understand Japan is a second campus, not a replacement academy.

Regression risks:

- Japan receiving USA facilities.
- Brazil accidentally becoming playable.
- Japan bonuses applying globally when they should be campus-local.

Phase 3 follow-up notes:

- Competitions remain globally surfaced through the existing UI while active competition state is mirrored into the active migrated campus.
- Japan TP was a temporary active-campus compatibility bridge until Phase 5. Phase 5 now keeps TP campus-local while preserving `state.tp` as the active-campus mirror.
- Legacy root fields remain compatibility mirrors and should not be removed until active campus travel, coach assignment, and local economy phases are stable.

## Phase 4 - Global Coach Assignment Foundation

Goal: prepare coaches as Global Academy resources with active-campus assignment metadata while preserving current coach gameplay.

Major tasks:

- Preserve coach levels, tiers, costs, and effects. Complete.
- Add save version 12 migration for global coach assignment metadata. Complete.
- Keep live coach levels in the legacy `state.coaches` adapter until transfer gameplay and Headquarters systems are approved. Complete.
- Add per-coach current assignment, current campus, future Headquarters reference, transfer-ready metadata, and future specialty metadata. Complete.
- Keep transfer gameplay disabled and metadata-only. Complete.
- Extend developer diagnostics and save validation for coach assignment metadata. Complete.

Dependencies:

- USA and Japan campus records.
- Headquarters global state.

Engineering validation:

- Existing coaches keep levels and affordability.
- Coach effects still apply where expected.
- Assignment defaults preserve current output.
- Save version 12 migration assigns existing coaches to the active campus.
- Export/import, prestige, reset, USA migration, and Japan migration remain valid.

Gameplay validation:

- Players can understand which campus a coach supports.
- No current coach strategy is invalidated unexpectedly.

Playtest goals:

- The architecture should be invisible or nearly invisible to players.
- Future coach transfers should feel strategic, not punitive once they are explicitly implemented.

Regression risks:

- Losing coach progress.
- Coaches boosting every campus unintentionally.
- Creating a micromanagement burden too early.

Phase 4 follow-up notes:

- Coach assignment is metadata only. Existing bonus, cost, tier, and level calculations still read from `state.coaches`.
- Headquarters remains metadata only and non-playable.
- Transfers are intentionally not exposed to players yet.
- Legacy root coach fields remain compatibility adapters until the local economy and future Headquarters phases are stable.

## Phase 5 - Local Economy Foundation

Goal: separate local Training Points from global Academy Funding.

Status: Complete as of 2026-07-14.

Implemented foundation:

- Save version 13.
- Campus-local Training Point ownership for USA and Japan through `state.campuses.*.localTrainingPoints`.
- Legacy root `state.tp` retained as the active-campus compatibility mirror.
- Headquarters-owned Academy Funding with lifetime earned tracking and no spending actions yet.
- Campus strategy framework: Local Development, Balanced, Global Contribution, and High Performance.
- Campus contribution tracking that generates Academy Funding as a sidecar from earned local TP without reducing local TP.
- Preparatory Headquarters support metadata for future Operations Capacity.
- Initial Competition Circuit framework for campus, regional, world, Olympic, winter, and future sport-specific circuits.
- World-tab Local Economy panel for local TP, Academy Funding, strategy selection, contribution rate, campus contribution, and eligible circuits.
- Active-campus switching now saves TP into the old campus and loads TP from the new campus.

Major tasks:

- Make TP campus-local. Complete.
- Introduce Academy Funding shell if not already present. Complete.
- Keep existing TP economy values for USA/Japan local play. Complete.
- Ensure Resource Bar shows active campus TP. Complete through `state.tp` active-campus mirror.
- Ensure Headquarters screens do not spend local TP. Complete; Headquarters remains metadata-only.
- Add campus strategies and contribution framework. Complete.
- Prepare Headquarters support metadata and Competition Circuit framework. Complete.

Dependencies:

- Campus migrations.
- Headquarters state.
- Active location helpers.

Engineering validation:

- Active campus TP changes only for that campus.
- Offline progress awards local TP to the correct active campus.
- Import/export preserves local balances.
- Automatic travel from USA to Japan loads Japan's local TP instead of carrying USA TP.

Gameplay validation:

- USA and Japan local economies are understandable.
- Player can travel without losing or merging TP.

Playtest goals:

- Player should understand local TP versus global funding.

Regression risks:

- Economy confusion.
- Existing players feeling their TP disappeared.
- Offline progress applying to the wrong campus.

Phase 5 follow-up notes:

- Academy Funding is generated but cannot be spent yet.
- Strategy currently affects Funding contribution rate and stores future local-growth, athlete, and competition metadata; it does not rebalance facility, athlete, coach, or competition formulas.
- Inactive campus background operation and Operations Capacity limits remain future Headquarters systems.
- Manual return travel between unlocked campuses was implemented in Phase 6.

## Phase 6 - Campus Travel & Brazil Expansion

Goal: turn World into the Global Academy management center, add manual travel between unlocked campuses, and implement Brazil as the first expansion campus under the new architecture.

Status: Complete as of 2026-07-14.

Implemented foundation:

- Save version 14.
- Brazil migrated as a playable campus in `state.campuses.brazil`.
- Manual travel between unlocked playable campuses through the World tab.
- World-tab campus overview cards for USA, Japan, and Brazil.
- Brazil local Training Points, facilities, athlete archetypes, competitions, chapter progress, campus strategy, contribution tracking, campus identity, and competition circuit metadata.
- Read-only Academy Funding explanation in World.
- Competition offers filtered by active campus.
- Athlete recruitment display filtered by active campus sports.
- Futsal World Championship circuit metadata added as future framework only.

Major tasks:

- Add manual travel between unlocked campuses. Complete.
- Add return travel to USA and Japan. Complete.
- Add Brazil campus content from the approved South America country file. Complete.
- Keep Headquarters non-playable. Complete.
- Keep Academy Funding read-only. Complete.
- Keep regional, world, Olympic, and sport-specific competition circuits metadata-only. Complete.
- Preserve existing USA/Japan gameplay and save compatibility. Complete.

Dependencies:

- Local campus state.
- Local economy.
- World Tour route helpers.
- Brazil country documentation.

Engineering validation:

- Existing USA/Japan route still works.
- Brazil unlocks after Japan completion and can be manually selected afterward.
- USA, Japan, and Brazil keep separate local TP.
- Export/import, prestige, reset, and migration validation remain compatible.
- Non-country route nodes remain preview destinations and do not behave like playable campuses.

Gameplay validation:

- World communicates current, unlocked, completed, and locked campuses.
- Brazil feels like a new campus rather than a continuation of USA/Japan TP.
- Players can return to USA and Japan after Brazil unlocks.

Playtest goals:

- Player should feel they own multiple campuses.
- Player should understand Academy Funding is generated but not spendable yet.
- Player should recognize Brazil's Football, Volleyball, and Futsal identity.

Regression risks:

- Travel loading the wrong campus TP.
- Old saves unlocking Brazil without valid campus records.
- Brazil content leaking into USA/Japan competitions or athlete recruitment.
- Future destinations looking playable before their systems exist.

Phase 6 follow-up notes:

- Brazil implements generic athlete archetypes only. Named athlete generation and youth development remain future systems.
- Coach assignment remains metadata-only; manual coach transfer gameplay is not implemented.
- Brazil completion awards Academy Funding, but Headquarters spending is not implemented.
- Inactive campus background production and Operations Capacity remain future Headquarters systems.

## Phase 7 - Regional Expansion Framework

Goal: expand the route framework after Brazil without implementing another country prematurely.

Major tasks:

- Add region data helpers.
- Add campus opening state for future destinations.
- Add route milestone support for continental events.
- Keep event systems dormant until scheduled.
- Update World helpers for countries and non-country milestones.

Dependencies:

- Phase 6 campus travel stability.
- Local TP economy.
- Competition Circuit metadata.

Engineering validation:

- Existing USA/Japan/Brazil route still works.
- Australia, Kenya, Norway, and route milestones remain locked or preview-only.
- Non-country route nodes do not break country helpers.

Gameplay validation:

- World route is understandable with regions and future milestones.

Playtest goals:

- Player should anticipate expansion without expecting unfinished gameplay.

Regression risks:

- Overcomplicated route state.
- Region milestones behaving like playable countries.
- Broken recommendation logic.

## Phase 8 - SVG Campus Art Pass

Goal: replace placeholder campus and facility visuals with richer art once architecture is stable.

Major tasks:

- Add SVG-ready campus components.
- Add campus-specific architecture and visual identity.
- Add Headquarters visual treatment.
- Improve World map destination art.
- Keep visuals presentation-only.

Dependencies:

- Stable campus data and active location.
- Brazil campus identity.

Engineering validation:

- Art assets load locally.
- Mobile layout remains stable at 480px width.
- Animations respect settings.

Gameplay validation:

- Visual states match real gameplay state.
- No art implies unimplemented mechanics.

Playtest goals:

- Campuses should feel like different places.
- Headquarters should feel distinct from country campuses.

Regression risks:

- Layout crowding.
- Performance issues on mobile.
- Decorative art obscuring gameplay.

## Phase 9 - Future Headquarters Systems

Goal: begin implementing Headquarters systems after core campus architecture is stable.

Potential systems:

- Academy Funding.
- Global Research.
- Sponsors.
- Hall of Fame expansion.
- Coach education.
- Academy Philosophy.
- World Tour Office.

Dependencies:

- Headquarters state.
- Local campus contribution model.
- Competition and athlete histories.

Engineering validation:

- Headquarters resources remain global.
- Country campus state remains local.
- Sponsor/research/funding effects are data-driven.

Gameplay validation:

- Headquarters decisions feel strategic and global.
- Local campuses still matter.

Playtest goals:

- Player should feel they are leading an organization, not just upgrading another tab.

Regression risks:

- Headquarters becoming a second economy dashboard.
- Sponsors feeling like passive money buttons.
- Research invalidating campus identity.

## Suggested Milestones

1. Save Shells and Compatibility Helpers
2. USA Campus Data Migration
3. Japan Campus Data Migration
4. Global Coach Assignment Foundation
5. Local TP and Academy Funding Split
6. Campus Travel and Brazil Expansion
7. Regional Route Framework
8. Campus Visual Art Pass
9. Headquarters Systems Foundation
10. Future Country Campus Content

## Cross-Phase Testing Checklist

Run after every phase:

- Fresh save smoke test.
- Existing save migration test.
- Import/export save test.
- Offline progress test.
- Session Drill test.
- Facility upgrade test.
- Coach recruit/upgrade test.
- Athlete recruit/train test.
- Competition entry/result test.
- Country or campus progress test.
- Prestige availability/regression test.
- Mobile layout check at 480px width.

## Major Engineering Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Save corruption | Highest | Additive migrations, backups through export, migration diagnostics |
| Mixed global/local reads | High | Centralize helpers before moving systems |
| Economy confusion | High | Preserve values first, explain local TP vs funding only when implemented |
| Coach assignment complexity | Medium | Start with simple assignment and preserve current effects |
| Athlete migration ambiguity | Medium | Keep athletes local and document assignment rules before migration |
| Future country implemented too early | High | Block additional country gameplay until travel, local economy, region data, and save migration requirements are met |
| UI implying unfinished systems | Medium | Use preview/coming-soon language until mechanics exist |
| Single-file complexity | Medium | Consider file split after save architecture stabilizes |

## Definition Of Done For Each Phase

A phase is complete only when:

- The game remains playable.
- Existing saves load.
- Fresh saves work.
- Import/export works.
- Documentation is updated.
- Regression checklist passes.
- Known issues are documented.
- The next phase can begin without reworking the completed phase.

## Next Engineering Step

Begin Phase 7: Regional Expansion Framework.

Do not implement Australia, Kenya, Norway, sponsors, local athlete generation, competition redesign, Headquarters gameplay, or sport-specific championship gameplay until their prerequisite phases are complete.

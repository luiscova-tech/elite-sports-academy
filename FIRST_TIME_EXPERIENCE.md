# Elite Sports Academy First-Time Experience

## Purpose
The first five minutes should make the player feel like the coach-owner of a new Olympic academy. The player should understand what to tap, what to upgrade, why the current country matters, and what destination comes next.

World Tour 3.0 direction: onboarding should frame the player as the owner of one global academy opening its first country campus, not as a player clearing a disposable country stage. `WORLD_TOUR.md` is the future source of truth for this global academy and country campus structure.

## Current Flow
1. Welcome the player as Coach and frame the academy fantasy.
2. Choose academy identity with name, motto, crest, and color theme.
3. Tap Session Drill to earn the first Training Points.
4. Upgrade the first sport facility to start passive academy output.
5. Recruit the first coach once a facility opens staff capacity.
6. Recruit the first athlete once facility capacity exists.
7. Review the Academy Mission goals and rewards.
8. View the World Tour path and next destination.
9. Future iteration: explain that completed countries remain academy campuses the player can return to once travel support exists.

## Presentation Rules
- Keep the flow compact, skippable, and built from normal gameplay actions.
- Keep Home play-first; the welcome ceremony and mission board should not become a permanent dashboard.
- Use coach voice: friendly, direct, motivating, and rooted in the academy fantasy.
- Avoid tutorial-only rewards, tutorial-only currencies, or alternate mechanics.
- Route players to the correct existing screen for management steps instead of auto-completing upgrades, recruiting, competitions, or rewards.
- Use visual target highlights after guided navigation when possible.
- Existing saves should not be forced through first-run onboarding again.
- Avoid copy that implies the player abandons the current country after unlocking the next destination.

## Current Implementation
- Save version 8 adds an `onboarding` object for completion, dismissal, intro, identity, mission, World Tour, and competition briefing flags.
- Fresh saves show a Welcome Coach modal and a Home welcome ceremony/mission board.
- The welcome modal and Home welcome ceremony include real academy identity controls.
- Management guidance opens the appropriate tab and highlights the target area rather than buying, recruiting, or claiming on behalf of the player.
- Existing saves with the old tutorial completed are treated as onboarding-complete.
- First competition guidance appears in the Competitions tab until the player enters a competition.
- Current onboarding is compatible with the existing transitional country implementation; it does not yet teach local country Training Points, return travel, or global coach assignment.

## Future Ideas
- Richer academy naming ceremony after the compact flow is proven.
- Illustrated coach portrait or assistant character.
- Optional replayable tutorial from Preferences.
- Better end-of-orientation celebration.
- Introduce global academy versus local campus language when per-country campus saves are implemented.
- First-session analytics if the game later gains privacy-safe telemetry.

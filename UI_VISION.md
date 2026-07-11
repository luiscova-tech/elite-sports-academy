# Elite Sports Academy UI Vision

## UI Philosophy
Elite Sports Academy should feel like a premium mobile sports management game: focused, readable, and energetic without becoming cluttered. The player should always understand the current objective, the next best action, and the next exciting destination.

The UI should favor clear hierarchy over dense dashboards. Home is for play and guidance. Management depth belongs in dedicated tabs.

Academy Campus 4.0 shifts the UI language from pages, cards, and menus toward places, buildings, departments, and destinations. The player should feel like they are standing inside their own Elite Sports Academy.

Academy Campus 5.0 adds life to that place. The academy should react to existing game state through activity badges, subtle motion, and visual growth, while keeping Home play-first and avoiding new gameplay systems.

Academy Identity 1.0 shifts the top-level presentation from a generic game header to the player's academy. The header should make the player see their crest, academy name, rank, motto, and current country before they see management menus.

## Navigation Philosophy
- Home is the Academy Headquarters and play-first screen.
- Session Drill remains the primary interaction.
- The bottom navigation remains available for direct access to Home, Sports, Academy, Competitions, and World.
- Large Home campus panels should provide a more visual route into the same sections.
- Navigation cards should evolve into academy buildings without changing underlying tab ownership.
- The bottom navigation remains temporarily, but Home campus buildings should increasingly become the primary navigation experience.

## Academy Campus Vision
The Academy Campus is the long-term visual identity for Home. It should eventually feel like a living headquarters with recognizable areas:
- Sports Center for facilities and sport output.
- Academy Offices for coaches, athletes, and roster decisions.
- Competitions Hall for events and rewards.
- World Tour for country progression and long-term goals.

Campus panels should feel like recognizable areas rather than a simple menu list. The current visual language uses:
- Distinct building silhouettes and roof shapes.
- Section-specific color accents.
- Light depth, elevation, and glow.
- Small status tags that suggest each building has a purpose.

The campus should feel expandable and upgradeable even before building upgrade logic exists. Future upgrades can add richer illustrations, state changes, and activity indicators.

Academy Campus 3.0 treats Home as a place. Campus buildings should sit inside a shared plaza or grounds treatment, use consistent architectural language, and feel like parts of one headquarters rather than separate menu cards.

Academy Campus 4.0 begins the move from visual cards to recognizable places. Buildings should use shared campus grounds, unique architecture, windows, entrances, level indicators, and notification badges. Each building component should keep a clear internal structure so a future SVG illustration can replace the CSS building without rewriting navigation behavior.

Current campus activity indicators should remain subtle and useful:
- Sports Center can show Upgrade Available.
- Academy Offices can show Athlete Ready.
- Competitions Hall can show Competition Available.
- World Tour Gate can show Ready to Travel or current chapter percent.

Current living-campus states:
- Sports Center shows Upgrade Available, Training Active, or Idle.
- Academy Offices shows Athlete Ready, Coach Available, Staff Busy, or Idle.
- Competition Hall shows Competition Ready, Event In Progress, or Waiting.
- World Tour Gate shows Chapter Complete, Ready To Travel, or Awaiting Qualification.

Visual evolution is driven by existing progress data. Higher facility levels, staff count, competition wins, and country progress can make buildings feel larger or more developed through windows, banners, flags, and lighting. These visuals are placeholders for future SVG art and should not create or imply new mechanics.

## Resource Bar Philosophy
The Resource Bar should stay compact and persistent. It exists so the player never loses sight of:
- Current country.
- Current TP.
- Current TP/sec.

The Resource Bar should display only country flag, country name, Training Points, and Training Points per second. Medals and Reputation belong in the World screen so the bar does not become another dashboard.

Country flags should be treated as identity markers in the Resource Bar, not decorative trivia. The active country flag should read immediately as the player's current headquarters location.

## Mobile Interaction Rules
- Keep primary actions reachable with one hand.
- Keep touch targets large enough for repeated play.
- Avoid permanent UI blocks that reduce Home play space.
- Hide optional details on very narrow screens before shrinking core actions.
- Use dedicated tabs and expandable panels for secondary information.

## Visual Hierarchy
Home should read in this order:
1. Persistent Resource Bar.
2. Compact World Tour header.
3. Collapsed Academy Mission Card, with current mission, progress, reward, and expansion for details.
4. Session Drill.
5. Academy Campus buildings.
6. Current Event.
7. Recommended Next Action and Reward Preview.
8. Secondary play context such as click training.

Country flags, destination names, progress bars, and clear rewards should carry the campaign identity.

The World tab should share the same visual language as Home: flags, route order, completion state, destination cards, and locked previews should make it feel like a journey rather than a plain list.

## Screen Purpose Rules
- Home answers: What should I do right now?
- Sports answers: How do I make my academy stronger?
- Academy answers: Who am I developing?
- Competitions answers: What can I win today?
- World answers: Where am I going next?

Do not mix screen purposes unless a feature directly supports the primary question for that screen.

Every screen answers one primary player question:
- Home: What should I do right now?
- Sports: How do I strengthen my academy?
- Academy: Who am I developing?
- Competitions: What can I win today?
- World: Where am I going next?

Identity surfaces should strengthen ownership without becoming another dashboard. Academy name, motto, crest, color theme, and rank should feel personal and persistent, while profile history belongs in World.

Current World route order is USA, Japan, Brazil, Australia, Kenya, and Norway. Brazil and later destinations remain preview/locked content until their gameplay milestones are approved.

## Future Academy Campus Direction
- Add building illustrations or richer silhouettes once the core layout is stable.
- Replace CSS building treatments with SVG illustrations when the campus art direction is approved.
- Expand small activity states on campus panels, such as available upgrades, open competitions, staff capacity, athlete readiness, and chapter travel readiness.
- Consider campus panel states that respond to gameplay progress, such as upgraded buildings or busier areas, without turning Home into a dashboard.
- Keep the campus useful as navigation first and decorative second.
- Avoid adding new gameplay systems to Home unless they strengthen the play-first loop.

## Future World Map Direction
- The World tab should become the campaign map.
- Completed, current, unlocked, and locked destinations should be visually distinct.
- Future countries can be previewed with flags, themes, and expected rewards before gameplay is implemented.
- Country route progression should remain data-driven so adding destinations does not require rewriting UI logic.
- Route-strip style navigation can remain as a compact summary until a larger illustrated world map is ready.

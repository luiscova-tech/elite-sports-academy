# Elite Sports Academy UI Vision

## UI Philosophy
Elite Sports Academy should feel like a premium mobile sports management game: focused, readable, and energetic without becoming cluttered. The player should always understand the current objective, the next best action, and the next exciting destination.

The UI should favor clear hierarchy over dense dashboards. Home is for play and guidance. Management depth belongs in dedicated tabs.

Academy Campus 4.0 shifts the UI language from pages, cards, and menus toward places, buildings, departments, and destinations. The player should feel like they are standing inside their own Elite Sports Academy.

Academy Campus 5.0 adds life to that place. The academy should react to existing game state through activity badges, subtle motion, and visual growth, while keeping Home play-first and avoiding new gameplay systems.

Academy Identity 1.0 shifts the top-level presentation from a generic game header to the player's academy. The header should make the player see their crest, academy name, rank, motto, and current country before they see management menus.

Academy Orientation makes the first session feel guided by a coach inside the academy. The welcome and Home orientation card should explain ownership, Session Drill, Mission progress, recruiting, competitions, and World Tour travel through real gameplay actions.

Quality of Life 1.0 strengthens that guidance layer by making recommendations navigational instead of automatic. The UI should help the player find the correct place, highlight the relevant card or panel, and then let the player choose the action.

Visual Identity 1.0 strengthens the feeling of place. The goal is not more cards; it is a more believable academy with distinct department identities, handcrafted silhouettes, consistent SVG/CSS iconography, and subtle depth.

Academy Illustration Pass 1 establishes the first recognizable illustrated identity for Elite Sports Academy. The game should now read more like walking through an Olympic training academy: Home has an arrival vista, Sports has distinct department frontage, Academy has staff-office presentation, Competitions has a venue/event-board identity, and World has a passport/travel desk identity. This pass is presentation-only and must not change gameplay, economy, saves, or country availability.

World Tour 3.0 defines the future map as one global academy with permanent country campuses. The UI should stop implying that countries are disposable stages. World screens should present campuses as branches the player can revisit, compare, and continue developing.

## Navigation Philosophy
- Home is the Academy Headquarters and play-first screen.
- Session Drill remains the primary interaction.
- The bottom navigation remains available for direct access to Home, Sports, Academy, Competitions, and World.
- Large Home campus panels should provide a more visual route into the same sections.
- Navigation cards should evolve into academy buildings without changing underlying tab ownership.
- The bottom navigation remains temporarily, but Home campus buildings should increasingly become the primary navigation experience.
- First-time guidance should route players into existing tabs rather than introducing separate tutorial screens.
- Recommendation buttons should navigate to the correct tab and visually highlight the target when possible.
- Future travel navigation should clearly distinguish the global academy from the active local country campus.

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

Guided highlights should be temporary, readable, and restrained. They exist to answer "where should I look now?" after the player follows a recommendation.

Visual evolution is driven by existing progress data. Higher facility levels, staff count, competition wins, and country progress can make buildings feel larger or more developed through windows, banners, flags, and lighting. These visuals are placeholders for future SVG art and should not create or imply new mechanics.

Academy Illustration Pass 1 turns the existing SVG-ready building slots into active visual layers. Home campus panels should keep their existing navigation and activity states, while the illustrated layer adds place, scale, and architectural identity. Country styling can lightly influence campus atmosphere: USA should read as a clean, modern Olympic training center, while Japan should use a more compact, precision-oriented architectural language.

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
3. Temporary Coach Orientation card for first-time players only.
4. Collapsed Academy Mission Card, with current mission, progress, reward, and expansion for details.
5. Session Drill.
6. Academy Campus buildings.
7. Current Event.
8. Recommended Next Action and Reward Preview.
9. Secondary play context such as click training.

Click Training should make the manual drill path legible: every named drill program should show status, unlock requirement, per-level effect, and an upgrade action when available.

Competition results should be visible after entry. The latest-result card should explain outcome, reward, chance, academy power, and target power so competitions feel understandable rather than random.

Coach cards should express progression with named tiers and clear next-tier progress while preserving the existing dense management-card style.

Visual Identity 1.0 updates the hierarchy:
- Home begins with one cohesive Welcome Coach ceremony and Mission board instead of separate Orientation and Mission blocks.
- First-run identity choices should stay available without pushing Session Drill too far below the first viewport; compact summaries and optional edit panels are preferred.
- A compact Session Drill call-to-action can live inside the welcome ceremony so active play remains visible even during onboarding.
- Sports facilities read as sport departments with sport-specific building silhouettes.
- Academy coaches read more like staff office boards with premium iconography and tier paths.
- Competitions read as event boards and tickets.
- World reads as a passport and travel route.

Academy Illustration Pass 1 updates the screen hierarchy:
- Home begins with a current-campus arrival vista before the welcome/mission board.
- Sports opens with a Sports Center location banner before facility cards.
- Academy opens with an Academy Offices location banner and staff-board scene before coaches and athletes.
- Competitions opens with a Competitions Hall location banner and venue language before meet cards.
- World opens with a Passport Office location banner and journey scene before route details.

Country flags, destination names, progress bars, and clear rewards should carry the campaign identity.

The World tab should share the same visual language as Home: flags, route order, completion state, destination cards, and locked previews should make it feel like a journey rather than a plain list. The campaign route should appear before profile and dashboard details so World opens as travel first.

World Tour 3.0 UI direction:
- World should become the global academy map.
- Completed countries should read as playable campuses, not finished archives.
- The active country should read as the current campus.
- Locked future countries should remain preview destinations until implemented.
- Travel controls support returning to unlocked playable campuses from the World tab.
- Global academy values and local campus values should be visually separated so the player understands what persists globally and what belongs to the current country.

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

Current World route order is USA, Japan, Brazil, Australia, Kenya, and Norway. USA, Japan, and Brazil are playable campuses. Australia, Kenya, Norway, and later destinations remain preview/locked content until their gameplay milestones are approved.

Long-term World Tour route direction is USA, Japan, Brazil, Pan American Games, Australia, Kenya, Norway, World Championships, France, Great Britain, Italy, and Olympic Games. `WORLD_TOUR.md` is the blueprint for this route.

## Future Academy Campus Direction
- Add building illustrations or richer silhouettes once the core layout is stable.
- Replace CSS building treatments with SVG illustrations when the campus art direction is approved.
- Expand small activity states on campus panels, such as available upgrades, open competitions, staff capacity, athlete readiness, and chapter travel readiness.
- Consider campus panel states that respond to gameplay progress, such as upgraded buildings or busier areas, without turning Home into a dashboard.
- Keep the campus useful as navigation first and decorative second.
- Avoid adding new gameplay systems to Home unless they strengthen the play-first loop.

Visual Identity 1.0 keeps CSS/SVG structures intentionally replaceable. Future art can swap the placeholder silhouettes without changing tab ownership or gameplay logic.

Academy Illustration Pass 1 keeps illustration inline and lightweight. Future passes should refine SVG detail, country-specific campus architecture, and world-map presentation without moving gameplay logic into art components.

## Future World Map Direction
- The World tab should become the campaign map.
- Completed, current, unlocked, and locked destinations should be visually distinct.
- Future countries can be previewed with flags, themes, and expected rewards before gameplay is implemented.
- Country route progression should remain data-driven so adding destinations does not require rewriting UI logic.
- Route-strip style navigation can remain as a compact summary until a larger illustrated world map is ready.
- Completed countries should eventually expose return travel and campus status.
- Continental events, World Championships, and Olympic Games should appear as milestone destinations distinct from ordinary country campuses.

# Elite Sports Academy Style Guide

## Color Palette
- Base background: near-black navy for a premium mobile game feel.
- Panels: dark blue-gray with subtle borders and restrained shadows.
- Primary action gradient: blue to teal.
- Progress accents: teal to gold.
- Success state: green.
- Ready/reward state: gold.
- Country accents should come from country data and tint headers, cards, route pills, and campus details.
- Academy color themes should tint Mission, primary buttons, Campus, highlights, and progress bars subtly without replacing country identity.

## Typography
- Use compact, high-contrast sans-serif text.
- Keep headings short and practical.
- Use uppercase micro-labels for stats, badges, and resource labels.
- Avoid oversized marketing-style type inside management cards.
- Keep letter spacing at zero except for tiny kicker labels.

## Icon Usage
- Use simple academy-themed CSS/SVG icons for navigation, campus, facilities, coaches, athletes, and competition surfaces.
- Avoid emoji for generic interface icons.
- Country flags are the exception because they are part of World Tour identity.
- Bottom navigation remains compact and text-safe.
- Campus icons identify areas: Sports Center, Academy Offices, Competitions Hall, and World Tour Gate.
- Icons should support recognition, not replace readable labels.

## Visual Identity 1.0 Rules
- Every primary screen should feel like a distinct academy place.
- Home uses a welcome ceremony and mission board.
- Sports uses department buildings and sport-specific silhouettes.
- Academy uses office-board and staff-development language.
- Competitions uses event-board and ticket language.
- World uses passport, stamp, and travel-route language.
- World should lead with passport, route, and destination presentation before profile or stat details.
- Avoid making every surface look like the same rounded rectangle.
- Prefer CSS and simple inline SVG that can be replaced by richer art later.
- Visual polish must not imply new mechanics.

## Country Flag Guidelines
- Flags are core country identity markers.
- Always pair flags with readable country names or short codes when space allows.
- Use the active country flag in the Resource Bar and World Tour header.
- Use flags in World route previews for completed, current, unlocked, and locked destinations.
- Completed country flags should eventually represent returnable campuses, not retired chapters.

## World Tour Presentation Rules
- Follow `WORLD_TOUR.md` for global academy and country campus language.
- Use "campus", "branch", "destination", and "World Tour" when presenting future countries.
- Avoid copy that implies the academy abandons or replaces previous countries.
- Separate global academy identity from local campus state in UI hierarchy.
- Continental events, World Championships, and Olympic Games should have distinct milestone treatment instead of looking like ordinary country cards.

## Academy Identity Rules
- The sticky header should show academy crest, academy name, academy rank, academy motto, and current country.
- Academy crest options should use CSS or simple inline shapes only until SVG art is approved.
- Academy name and motto are player-owned text and must be displayed safely, compactly, and without breaking the 480px mobile shell.
- Academy rank is reputation-based and should feel like prestige/status, not a facility-power label.
- Academy color themes can support emotional attachment, but should stay subtle enough that the dark modern style remains intact.

## Onboarding Presentation Rules
- First-time onboarding should feel like a coach welcome from inside the academy, not an external instruction manual.
- Use compact cards, short guidance text, real game actions, and clear primary buttons.
- The Home orientation card may appear only for active first-time guidance and should disappear once completed or skipped.
- Orientation and Mission can be merged on Home when the result feels like one welcome ceremony rather than a checklist.
- Identity setup may use a compact summary with optional edit controls so the ceremony does not hide Session Drill for too long.
- Do not use fixed tutorial dashboards or large permanent stat blocks.
- First competition guidance should be encouraging and low-pressure, making entry rewards clear even when win odds are modest.
- Identity setup inside orientation should use real form controls for academy name, motto, crest, and color theme.
- Tutorial and recommendation buttons should guide to existing screens and highlighted targets instead of silently performing management actions.

## Card Styles
- Cards should use 8px-or-less rounding unless a specific component needs a pill shape.
- Cards should not nest inside other cards.
- Important cards can use a left accent strip or country accent.
- Keep management cards dense but readable.
- Mission goal cards should use compact responsive grids when that helps Session Drill and Campus stay reachable on mobile.
- Avoid returning to fixed mini-stat dashboards on Home.
- Guided highlight outlines should be noticeable but restrained, using the component accent and a soft glow rather than heavy animation.
- Click progression rows should remain compact and readable even when every drill program is visible.
- Coach tier progress should use the existing card, badge, progress-bar, and pill language rather than a separate tree UI.
- Competition result cards should clearly separate outcome, reward, chance, academy power, and target power.

## Resource Bar Rules
- The Resource Bar is persistent, compact, and minimal.
- It shows only current country flag, country name, TP, and TP/sec.
- Medals and Reputation live in the World screen.
- The Resource Bar should never grow into a dashboard.

## Campus Building Styles
- Campus panels should feel like headquarters buildings, not plain menu tiles.
- Use building silhouettes, roof shapes, windows, section accents, and subtle depth.
- Buildings should sit on a shared campus/plaza treatment so Home reads as one place.
- Buildings should include readable level or progress indicators.
- Activity indicators should be short and state-driven: Upgrade Available, Training Active, Idle, Athlete Ready, Coach Available, Staff Busy, Competition Ready, Event In Progress, Waiting, Chapter Complete, Ready To Travel, and Awaiting Qualification.
- Visual evolution should come from existing progress data. Higher levels or progress may add size, windows, banners, flags, and lighting, but should not imply unimplemented mechanics.
- CSS buildings should use organized subparts such as roof, body, wing, door, banner, light, and SVG slot so future art can replace them cleanly.
- The campus should stay useful as navigation first.
- Do not add heavy animation or interactive campus systems until explicitly approved.

## Motion Rules
- Motion must be subtle and lightweight.
- Allowed examples: flag movement, gentle glow, soft hover lift, light pulse, and subtle building elevation.
- Campus 5.0 allows small running lights, window glow, banner movement, mission pulse, and notification badge bounce when they clarify activity.
- Small moving highlights are acceptable when they make buildings feel active without becoming distracting.
- Motion must respect the existing animations preference.
- Do not add heavy animated scenes or an interactive Academy Map without an approved milestone.

## Facility Department Styles
- Sports facilities should begin to read as academy departments, not only upgrade cards.
- Department visuals can use the same CSS-to-SVG-ready structure as campus buildings.
- Facility level may affect department scale, windows, wings, and lighting as presentation only.
- Facility cards must preserve clear upgrade cost, output, coach slot, athlete capacity, and buy controls.
- Different sports should have visibly different department silhouettes where practical.

## Mobile Spacing Rules
- Design for a 480px-wide mobile shell.
- Keep primary actions reachable and easy to tap.
- Prefer compact strips and badges over large fixed stat blocks.
- Mission details should be expandable so the Home screen can prioritize Session Drill and the Campus.
- Hide or simplify optional information before shrinking essential controls.
- Home should remain readable without feeling vertically locked.
- Temporary onboarding surfaces may appear above the Mission Card while first-time guidance is active, but they must stay compact enough that the next action remains obvious.

## Naming Conventions
- Countries are World Tour destinations and future permanent academy campuses.
- Home is the Academy Headquarters.
- Sports tab owns facilities and sport output.
- Academy tab owns coaches, athletes, roster, and staff decisions.
- Competitions tab owns competition offers and event rewards.
- World tab owns country progress, route previews, medals, reputation, prestige, stats, and preferences.
- Use chapter names that express identity, such as Precision & Technique for Japan.

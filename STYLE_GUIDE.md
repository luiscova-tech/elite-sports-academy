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
- Use simple icon-like labels or emoji only where they carry immediate meaning.
- Bottom navigation remains compact and text-safe.
- Campus icons identify areas: Sports Center, Academy Offices, Competitions Hall, and World Tour Gate.
- Icons should support recognition, not replace readable labels.

## Country Flag Guidelines
- Flags are core country identity markers.
- Always pair flags with readable country names or short codes when space allows.
- Use the active country flag in the Resource Bar and World Tour header.
- Use flags in World route previews for completed, current, unlocked, and locked destinations.

## Academy Identity Rules
- The sticky header should show academy crest, academy name, academy rank, academy motto, and current country.
- Academy crest options should use CSS or simple inline shapes only until SVG art is approved.
- Academy name and motto are player-owned text and must be displayed safely, compactly, and without breaking the 480px mobile shell.
- Academy rank is reputation-based and should feel like prestige/status, not a facility-power label.
- Academy color themes can support emotional attachment, but should stay subtle enough that the dark modern style remains intact.

## Card Styles
- Cards should use 8px-or-less rounding unless a specific component needs a pill shape.
- Cards should not nest inside other cards.
- Important cards can use a left accent strip or country accent.
- Keep management cards dense but readable.
- Mission goal cards should use compact responsive grids when that helps Session Drill and Campus stay reachable on mobile.
- Avoid returning to fixed mini-stat dashboards on Home.

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

## Mobile Spacing Rules
- Design for a 480px-wide mobile shell.
- Keep primary actions reachable and easy to tap.
- Prefer compact strips and badges over large fixed stat blocks.
- Mission details should be expandable so the Home screen can prioritize Session Drill and the Campus.
- Hide or simplify optional information before shrinking essential controls.
- Home should remain readable without feeling vertically locked.

## Naming Conventions
- Countries are chapters or World Tour destinations.
- Home is the Academy Headquarters.
- Sports tab owns facilities and sport output.
- Academy tab owns coaches, athletes, roster, and staff decisions.
- Competitions tab owns competition offers and event rewards.
- World tab owns country progress, route previews, medals, reputation, prestige, stats, and preferences.
- Use chapter names that express identity, such as Precision & Technique for Japan.

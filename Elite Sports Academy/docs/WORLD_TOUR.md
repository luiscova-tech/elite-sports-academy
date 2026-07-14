# Elite Sports Academy World Tour

`WORLD_TOUR.md` is the design blueprint for future country, campus, competition-cycle, and Olympic expansion work.

This document is architectural direction only. World Tour 3.0 does not implement Brazil gameplay, new countries, new economy systems, athlete redesigns, coach redesigns, competition redesigns, cloud saves, usernames, or leaderboards.

## World Tour Philosophy

Elite Sports Academy is not a chain of isolated country resets.

The player owns one global academy. That academy expands around the world by opening international campuses. Each country is a permanent branch of the same academy, not a disposable chapter that gets left behind.

The player should feel they are building the world's greatest Olympic training academy across years of international growth:

- The USA campus can keep improving after Japan opens.
- Japan can remain playable after Brazil opens.
- Completed countries remain destinations, not archived history.
- The World Tour is expansion, not replacement.
- The player can freely travel back to any completed country.

The game is a sports management game with idle progression. Clicking, idle income, athlete development, coaches, facilities, competitions, medals, reputation, and eventual Olympic success all serve the larger academy fantasy.

## Global Academy

The global academy is the player's permanent identity and long-term legacy.

The following belong to the global academy and never reset:

- Academy Name
- Academy Crest
- Academy Theme
- Academy Motto
- Academy Rank
- Reputation
- Medals
- Championship Trophies
- Hall of Fame
- Global Research, future
- Sponsors, future

Global systems should answer: what has the player built across the whole academy?

Future global progression can include research, sponsor relationships, Olympic history, legendary coaches, cross-campus bonuses, and academy-wide prestige. These systems should never make a country campus feel obsolete.

## Country Campuses

Each country is a local academy branch.

Each branch owns its own:

- Training Points
- Facilities
- Athletes
- Competitions
- Buildings
- Local Progress
- Visual Theme
- Chapter Progress
- Country Bonus

Country campuses should answer: what is happening at this branch right now?

Local campus progress stays local. A player returning to a completed country should see its facilities, athletes, competition state, and visual growth still intact.

Future save architecture should prefer a `campusesByCountryId` style model, where each country can store its local economy, local roster, local facilities, local competitions, and chapter progress without rewriting global academy identity.

## Country Template

Every country should be designed as a unique sporting ecosystem.

Each country contains:

- 2 Core Sports
- 2 Shared Sports
- 1 Wildcard Sport

Each country also defines:

- Theme
- Culture
- Visual Style
- Coaches
- Athletes
- Competitions
- Buildings
- Bonuses
- Chapter Goals

Core sports are the country's identity. Shared sports create continuity across the World Tour. The wildcard sport gives the country a memorable twist and can support future variety.

Example template:

| Field | Purpose |
| --- | --- |
| Country Name | Destination identity |
| Campus Theme | Emotional and visual tone |
| Core Sports | Main local progression |
| Shared Sports | Bridges to prior and future countries |
| Wildcard Sport | Distinctive local flavor |
| Local Facilities | Buildings the branch can develop |
| Local Athletes | Country-specific recruits |
| Global Coaches | Coaches who can be assigned or transferred there |
| Competitions | Local and route-specific events |
| Country Bonus | Branch identity and strategic value |
| Chapter Goals | Completion path |
| Unlock Reward | Global and local reward package |
| Next Destination | Route progression |

## Coaches

Coaches belong to the global academy.

Players can eventually assign and transfer coaches between country campuses. Coaches are long-term academy resources, not local disposable hires.

Future coach mechanics may include:

- Transfers
- Specializations
- Promotions
- Olympic Coaches
- Assignment limits
- Campus fit bonuses
- Event preparation bonuses

Coach design should preserve the fantasy that the academy builds an elite staff over time.

## Athletes

Athletes belong to the local country campus.

Each country recruits its own athletes. Athletes remain at their home campus. No athlete transfers are planned for Version 1.

Local athletes help each campus feel rooted in place. A Brazil soccer prospect, a Japan swimmer, and a Kenya distance runner should feel like part of their home branch, not interchangeable global inventory.

Future athlete work should expand local identity before introducing any global athlete movement.

## Competition Calendar

The World Tour should progress through international competition cycles.

Competition layers:

- Local meets introduce and support country progression.
- Regional and national events test a specific campus.
- Continental events bridge multiple countries in a region.
- World Championships test the global academy across many sports.
- Olympic Games culminate years of academy building.

The calendar should help the player feel they are moving through seasons, tours, and international stakes rather than clearing a simple checklist.

## Continental Events

Continental events are major route milestones between country campuses.

Example:

- USA
- Japan
- Brazil
- Pan American Games
- Australia
- Kenya
- Norway

Continental events can use multiple completed or active campuses as qualification context. They should feel larger than local country competitions but smaller than World Championships or the Olympic Games.

Do not implement continental events until country campuses and return travel are stable.

## World Championships

World Championships are global academy tests.

They should eventually evaluate the academy's broader strength across multiple campuses, coaches, sports, and athletes. They are not just higher-reward versions of ordinary competition offers.

World Championships should:

- Require meaningful progress across several countries.
- Use multiple sports and academy-wide preparation.
- Award prestige, medals, reputation, trophies, or future global progression.
- Create anticipation for Olympic qualification.

## Olympic Games

The Olympic Games are the culmination of years of academy building.

They are not simply another competition, and they are not the end of the game.

Winning Olympic gold should feel like the academy has reached a historic peak, but the player continues afterward by expanding the academy, opening new campuses, developing new athletes, recruiting stronger coaches, and preparing for future cycles.

Olympic design should wait until the game has:

- Multiple playable country campuses.
- Durable local athlete identity.
- Global coach assignment.
- Major competition-cycle structure.
- Academy-wide legacy tracking.

## Country Expansion Rules

Do not implement a new playable country unless the branch can support the Global Academy Architecture.

Before adding a new country, confirm:

- The country has 2 core sports, 2 shared sports, and 1 wildcard sport.
- Local Training Points and local facilities have a save-safe plan.
- Local athletes belong to that country and do not need Version 1 transfers.
- Global coaches can be assigned or future-proofed for assignment.
- Country bonuses are data-driven and do not hard-code one-off logic.
- The player can understand what remains global and what is local.
- Completed countries remain playable after the next country unlocks.
- Return travel is supported or explicitly deferred with documented UI copy.
- Save migration is additive and preserves existing saves.
- The World tab communicates current, completed, unlocked, and locked destinations clearly.

If these requirements are not ready, keep the country as a preview destination.

## Future Countries

Current long-term route direction:

1. USA
2. Japan
3. Brazil
4. Pan American Games
5. Australia
6. Kenya
7. Norway
8. World Championships
9. France
10. Great Britain
11. Italy
12. Olympic Games

The route can expand after the Olympic Games. Olympic gold is a milestone, not a finale.

Brazil remains preview-only until a later milestone explicitly implements Brazil gameplay under the Global Academy Architecture.

## Long-Term Vision

Elite Sports Academy should feel like a living international sports organization.

The player starts with a small academy and slowly builds:

- A permanent academy identity.
- A network of country campuses.
- A global coaching staff.
- Local athlete pipelines.
- International competition history.
- Olympic legacy.

Every future country, sport, coach, athlete, competition, building, or upgrade should reinforce the fantasy of building the world's greatest Olympic training academy.

// lib/sports-data.ts
// Sports & Recreation Data Configuration

export interface SportsFeed {
  island: string;
  club: string;
  sport: string;
  icon: string;
  feedUrl: string;
  website?: string;
  notes: string;
}

export const sportsFeedsData: SportsFeed[] = [
  // Russell Island
  { island: 'Russell Island', club: 'Russell Island Football Club', sport: 'Soccer', icon: '⚽', feedUrl: 'https://teamapp.com/events?club=rifc', website: 'https://www.rfc.com.au', notes: 'Juniors & Seniors' },
  { island: 'Russell Island', club: 'Russell Island Bowls Club', sport: 'Bowls', icon: '🎳', feedUrl: 'https://www.ribowls.com.au/events', website: 'https://www.ribowls.com.au', notes: 'Community competitions' },
  { island: 'Russell Island', club: 'Russell Island Netball Club', sport: 'Netball', icon: '🤾‍♀️', feedUrl: 'https://www.rinetball.com.au/fixtures', website: 'https://www.rinetball.com.au', notes: 'Seasonal matches' },
  
  // Macleay Island
  { island: 'Macleay Island', club: 'Macleay Island Netball Club', sport: 'Netball', icon: '🤾‍♀️', feedUrl: 'https://www.macleaynetball.com.au/fixtures', website: 'https://www.macleaynetball.com.au', notes: 'Seasonal matches' },
  { island: 'Macleay Island', club: 'Macleay Island Bowls Club', sport: 'Bowls', icon: '🎳', feedUrl: 'https://www.macleaybowls.com.au/events', website: 'https://www.macleaybowls.com.au', notes: 'Competitions & club days' },
  
  // Lamb Island
  { island: 'Lamb Island', club: 'Lamb Island Sports Club', sport: 'Multi-Sport', icon: '🏅', feedUrl: 'https://www.lambsports.com.au/events', website: 'https://www.lambsports.com.au', notes: 'Community sports & festivals' },
  
  // Karragarra Island
  { island: 'Karragarra Island', club: 'Karragarra Island Community Club', sport: 'Multi-Sport', icon: '🏅', feedUrl: 'https://www.karragarraevents.com', website: 'https://www.karragarraevents.com', notes: 'Community events & socials' },
  
  // Redland Mainland
  { island: 'Redland City', club: 'Redlands Rugby League', sport: 'Rugby League', icon: '🏉', feedUrl: 'https://www.redlandsrugbyleague.com.au/events-feed.xml', website: 'https://www.redlandsrugbyleague.com.au', notes: 'Juniors & Seniors' },
  { island: 'Redland City', club: 'Redlands Netball Association', sport: 'Netball', icon: '🤾‍♀️', feedUrl: 'https://www.redlandsnetball.com.au/wspCompetitions.aspx?rss=true', website: 'https://www.redlandsnetball.com.au', notes: 'Season matches' },
  { island: 'Redland City', club: 'Redland City FC', sport: 'Soccer', icon: '⚽', feedUrl: 'https://redlandsaustralia.teamapp.com/api/events', website: 'https://www.redlandcityfc.com.au', notes: 'Junior & senior leagues' },
  { island: 'Redland City', club: 'Cleveland District Cricket Club', sport: 'Cricket', icon: '🏏', feedUrl: 'https://clevelandcricket.com.au/fixtures', website: 'https://clevelandcricket.com.au', notes: 'Local cricket matches' },
  { island: 'Redland City', club: 'Victoria Point Basketball Association', sport: 'Basketball', icon: '🏀', feedUrl: 'https://victoriapointbasketball.com.au/fixtures', website: 'https://victoriapointbasketball.com.au', notes: 'Junior & senior competitions' },
  { island: 'Redland City', club: 'Cleveland Indoor Sports Centre', sport: 'Indoor Sports', icon: '🏅', feedUrl: 'https://clevelandindoorsports.com.au/events', website: 'https://clevelandindoorsports.com.au', notes: 'Futsal, badminton, leagues' },
  { island: 'Redland City', club: 'Capalaba Tennis Club', sport: 'Tennis', icon: '🎾', feedUrl: 'https://www.capalabataennis.com.au/fixtures', website: 'https://www.capalabataennis.com.au', notes: 'Competitions & social tennis' },
  { island: 'Redland City', club: 'Wellington Point RSL', sport: 'Multi-Sport/Social', icon: '🏅', feedUrl: 'https://wellingtonpointrsl.com.au/events', website: 'https://wellingtonpointrsl.com.au', notes: 'Bowls, darts, social sports' },
];

export interface SportsEvent {
  title: string;
  startDate: string;
  url: string;
  location: string;
  locationName: string;
  locationAddress: string;
  sportIcon: string;
  island: string;
}

export const upcomingSportsEvents: SportsEvent[] = [
  {
    title: 'Redlands Rugby League Juniors Round 10',
    startDate: '2026-07-12T13:30:00',
    url: 'https://www.redlandsrugbyleague.com.au/events-for-calendar-1/juniors-round-10',
    location: 'Pinklands Sporting Complex, Thornlands',
    locationName: 'Pinklands Sporting Complex',
    locationAddress: '226 Cleveland Redland Bay Road, Thornlands QLD 4164',
    sportIcon: '🏉',
    island: 'Redland City'
  },
  {
    title: 'Russell Island Soccer Juniors',
    startDate: '2026-07-13T10:00:00',
    url: 'https://teamapp.com/events?club=rifc',
    location: 'Russell Island Football Club',
    locationName: 'Russell Island Football Club',
    locationAddress: 'Russell Island QLD 4184',
    sportIcon: '⚽',
    island: 'Russell Island'
  },
  {
    title: 'Redlands Netball Association Senior Match',
    startDate: '2026-07-14T14:00:00',
    url: 'https://www.redlandsnetball.com.au/wspCompetitions.aspx?rss=true',
    location: 'Pinklands Sporting Complex, Thornlands',
    locationName: 'Pinklands Sporting Complex',
    locationAddress: '226 Cleveland Redland Bay Road, Thornlands QLD 4164',
    sportIcon: '🤾‍♀️',
    island: 'Redland City'
  },
  {
    title: 'Macleay Island Netball Club Game Day',
    startDate: '2026-07-15T09:00:00',
    url: 'https://www.macleaynetball.com.au/fixtures',
    location: 'Macleay Island Netball Courts',
    locationName: 'Macleay Island Netball Courts',
    locationAddress: 'Macleay Island QLD 4184',
    sportIcon: '🤾‍♀️',
    island: 'Macleay Island'
  },
  {
    title: 'Victoria Point Basketball Association Juniors',
    startDate: '2026-07-16T16:00:00',
    url: 'https://victoriapointbasketball.com.au/fixtures',
    location: 'Victoria Point Basketball Stadium',
    locationName: 'Victoria Point Basketball Stadium',
    locationAddress: 'Victoria Point QLD 4165',
    sportIcon: '🏀',
    island: 'Redland City'
  }
];

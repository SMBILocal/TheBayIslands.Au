// lib/news-sources.ts
// Local News RSS Feeds Configuration

export interface NewsSource {
  name: string;
  url: string;
  icon: string;
  description: string;
  region: string;
}

export const newsSources: NewsSource[] = [
  {
    name: 'Redland City Bulletin',
    url: 'https://www.redlandbulletin.com.au/rss',
    icon: '📰',
    description: 'Local news covering Redland City and surrounding areas',
    region: 'Redland City'
  },
  {
    name: 'Bay Islands Local News',
    url: 'https://bayislands.local/rss',
    icon: '📰',
    description: 'News specific to Russell, Macleay, Lamb, and Karragarra Islands',
    region: 'Bay Islands'
  },
  {
    name: 'Redland City Council News',
    url: 'https://www.redland.qld.gov.au/News/rss',
    icon: '🏛️',
    description: 'Official council announcements and community updates',
    region: 'Redland City'
  },
  {
    name: 'Brisbane Regional News',
    url: 'https://www.brisbanetimes.com.au/rss',
    icon: '📰',
    description: 'Brisbane and regional Queensland news',
    region: 'Brisbane / SEQ'
  },
  {
    name: 'ABC Brisbane & Coastal News',
    url: 'https://www.abc.net.au/rss/state/all.xml',
    icon: '📻',
    description: 'ABC News - Queensland and broader coverage',
    region: 'Queensland'
  },
  {
    name: 'SMBI Local News',
    url: 'https://smbilocal.au/rss',
    icon: '🌐',
    description: 'SMBI Local organization news and community stories',
    region: 'Bay Islands'
  }
];

export const newspapersAndPublications = [
  {
    name: 'Redland City Bulletin',
    type: 'Weekly Newspaper',
    website: 'https://www.redlandbulletin.com.au',
    description: 'Long-established local newspaper covering Redland City and Bay Islands',
    icon: '📰',
    circulation: 'Print & Digital'
  },
  {
    name: 'The Bay Islands Gazette',
    type: 'Digital Publication',
    website: 'https://bayislands.local',
    description: 'Online news resource for Bay Islands residents',
    icon: '📱',
    circulation: 'Digital Only'
  },
  {
    name: 'Redland Shire News',
    type: 'Council Newsletter',
    website: 'https://www.redland.qld.gov.au/News',
    description: 'Official Redland City Council announcements and events',
    icon: '🏛️',
    circulation: 'Digital'
  },
  {
    name: 'Southern Moreton Bay Islander',
    type: 'Community Magazine',
    website: 'https://smbi.org.au',
    description: 'Community stories, events, and lifestyle magazine',
    icon: '📘',
    circulation: 'Print & Digital'
  }
];

export const broadcastMedia = [
  {
    name: 'ABC Radio Brisbane',
    type: 'Radio Station',
    frequency: '612 AM / Digital',
    website: 'https://www.abc.net.au/radio/brisbane',
    description: 'Public broadcasting with news, current affairs, and community programs',
    icon: '📻',
    service: 'Live & Podcast'
  },
  {
    name: 'Redland Community Radio',
    type: 'Community Radio',
    frequency: '88.3 FM',
    website: 'https://redlandcommunityradio.com.au',
    description: 'Local community radio serving Bay Islands and Redland area',
    icon: '📻',
    service: 'Live & Streaming'
  },
  {
    name: 'Brekkie with Jim & Mel',
    type: 'Radio Show',
    frequency: '97.3 FM',
    website: 'https://www.mix973.com.au',
    description: 'Local breakfast radio show covering SE Queensland news and events',
    icon: '📻',
    service: 'Live'
  }
];

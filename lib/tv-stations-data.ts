// lib/tv-stations-data.ts
// Local TV Stations Data Configuration

export interface TvStation {
  name: string;
  channelNumber?: string;
  website?: string;
  streamUrl?: string;
  logo?: string;
  description?: string;
  broadcastTypes: string[];
}

export const localTvStations: TvStation[] = [
  {
    name: 'Channel 7 Brisbane',
    channelNumber: '7',
    website: 'https://7news.com.au/queensland',
    logo: '/logos/channel7.png',
    description: 'Local Queensland news, weather, sports, and entertainment programs. Serving the Southern Moreton Bay Islands and Redlands Coast.',
    broadcastTypes: ['News', 'Current Affairs', 'Entertainment', 'Weather']
  },
  {
    name: 'Channel 9 Brisbane',
    channelNumber: '9',
    website: 'https://www.9news.com.au/queensland',
    logo: '/logos/channel9.png',
    description: 'Queensland and national news coverage with local Redlands and Bay Islands stories.',
    broadcastTypes: ['News', 'Current Affairs', 'Sports', 'Weather']
  },
  {
    name: 'ABC Queensland',
    channelNumber: '2',
    website: 'https://www.abc.net.au/news/queensland/',
    logo: '/logos/abc.png',
    description: 'National broadcaster providing local news, documentaries, and educational content relevant to the Bay Islands community.',
    broadcastTypes: ['News', 'Documentary', 'Education', 'Entertainment']
  },
  {
    name: 'SBS Queensland',
    channelNumber: '3',
    website: 'https://www.sbs.com.au/news/',
    logo: '/logos/sbs.png',
    description: 'Multi-cultural programs, news coverage, and international content with local connection.',
    broadcastTypes: ['News', 'Documentary', 'Entertainment', 'Cultural']
  },
  {
    name: 'Ten / Network 10',
    channelNumber: '10',
    website: 'https://www.10play.com.au/news',
    logo: '/logos/channel10.png',
    description: 'Entertainment, news, and lifestyle content for regional Queensland audiences.',
    broadcastTypes: ['News', 'Entertainment', 'Lifestyle', 'Weather']
  },
];

export const tvGuideCategories = [
  { id: 'news', label: 'News & Current Affairs', icon: '📺' },
  { id: 'sports', label: 'Sports', icon: '⚽' },
  { id: 'entertainment', label: 'Entertainment', icon: '🎬' },
  { id: 'lifestyle', label: 'Lifestyle & Health', icon: '💆‍♀️' },
  { id: 'kids', label: 'Kids & Family', icon: '👶' },
  { id: 'documentary', label: 'Documentary', icon: '🎥' },
];

export const sampleTvSchedule = [
  {
    channel: '7',
    time: '6:00 AM - 6:30 AM',
    program: 'Sunrise Headlines',
    category: 'news',
    description: 'Early morning news and weather for Queensland'
  },
  {
    channel: '7',
    time: '12:00 PM - 1:00 PM',
    program: 'Weekend Sport',
    category: 'sports',
    description: 'Local sports coverage including Bay Islands and Redlands clubs'
  },
  {
    channel: '9',
    time: '6:00 PM - 7:00 PM',
    program: '9 News QLD',
    category: 'news',
    description: 'Comprehensive Queensland news with local Redlands coverage'
  },
  {
    channel: '2',
    time: '7:30 PM - 8:30 PM',
    program: 'ABC Documentary',
    category: 'documentary',
    description: 'Award-winning documentaries and educational programming'
  },
  {
    channel: '3',
    time: '8:00 PM - 9:00 PM',
    program: 'SBS World News',
    category: 'news',
    description: 'International news with local connections'
  },
];

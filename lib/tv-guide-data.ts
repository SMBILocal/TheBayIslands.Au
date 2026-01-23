// TV Guide Data - Full week programming guide with user features

export interface TvProgram {
  id: string
  title: string
  channel: string
  channelNumber: number
  startTime: string
  endTime: string
  duration: number // minutes
  category: string
  description: string
  rating: string // G, PG, M, MA15+
  episode?: string
  season?: number
  isLive?: boolean
  isNew?: boolean
  isRepeat?: boolean
}

export interface TvChannel {
  id: string
  name: string
  number: number
  logo?: string
  category: 'commercial' | 'public' | 'community'
}

export const tvChannels: TvChannel[] = [
  { id: 'seven', name: 'Seven Brisbane', number: 7, category: 'commercial' },
  { id: 'seven-hd', name: '7HD', number: 70, category: 'commercial' },
  { id: 'seven-two', name: '7TWO', number: 72, category: 'commercial' },
  { id: 'seven-mate', name: '7mate', number: 73, category: 'commercial' },
  { id: 'seven-flix', name: '7flix', number: 74, category: 'commercial' },
  { id: 'nine', name: 'Nine Brisbane', number: 9, category: 'commercial' },
  { id: 'nine-hd', name: '9HD', number: 90, category: 'commercial' },
  { id: 'nine-gem', name: '9Gem', number: 92, category: 'commercial' },
  { id: 'nine-go', name: '9Go!', number: 93, category: 'commercial' },
  { id: 'nine-life', name: '9Life', number: 94, category: 'commercial' },
  { id: 'ten', name: 'Network 10', number: 10, category: 'commercial' },
  { id: 'ten-hd', name: '10 HD', number: 11, category: 'commercial' },
  { id: 'ten-peach', name: '10 Peach', number: 12, category: 'commercial' },
  { id: 'ten-bold', name: '10 Bold', number: 13, category: 'commercial' },
  { id: 'abc', name: 'ABC TV', number: 2, category: 'public' },
  { id: 'abc-hd', name: 'ABC HD', number: 20, category: 'public' },
  { id: 'abc-kids', name: 'ABC Kids', number: 22, category: 'public' },
  { id: 'abc-me', name: 'ABC ME', number: 23, category: 'public' },
  { id: 'abc-news', name: 'ABC News', number: 24, category: 'public' },
  { id: 'sbs', name: 'SBS', number: 3, category: 'public' },
  { id: 'sbs-viceland', name: 'SBS Viceland', number: 31, category: 'public' },
  { id: 'sbs-movies', name: 'SBS World Movies', number: 32, category: 'public' },
  { id: 'sbs-food', name: 'SBS Food', number: 33, category: 'public' },
  { id: 'nitv', name: 'NITV', number: 34, category: 'public' },
]

// Sample TV Guide data for current week
export const tvGuidePrograms: TvProgram[] = [
  // Thursday Evening - Channel 7
  {
    id: 'p1',
    title: 'Seven News',
    channel: 'Seven Brisbane',
    channelNumber: 7,
    startTime: '18:00',
    endTime: '19:00',
    duration: 60,
    category: 'News',
    description: 'Queensland\'s #1 news service with local, national and international coverage.',
    rating: 'G',
    isLive: true
  },
  {
    id: 'p2',
    title: 'Home and Away',
    channel: 'Seven Brisbane',
    channelNumber: 7,
    startTime: '19:00',
    endTime: '19:30',
    duration: 30,
    category: 'Drama',
    description: 'Australia\'s favourite drama series set in Summer Bay.',
    rating: 'PG',
    season: 37,
    episode: 'Episode 8205'
  },
  {
    id: 'p3',
    title: 'The Chase Australia',
    channel: 'Seven Brisbane',
    channelNumber: 7,
    startTime: '19:30',
    endTime: '20:30',
    duration: 60,
    category: 'Game Show',
    description: 'Four contestants take on one of Australia\'s finest quiz brains.',
    rating: 'G',
    isNew: true
  },
  {
    id: 'p4',
    title: 'AFL Round 1: Brisbane Lions vs Carlton',
    channel: 'Seven Brisbane',
    channelNumber: 7,
    startTime: '20:30',
    endTime: '23:00',
    duration: 150,
    category: 'Sport',
    description: 'Live AFL coverage from the Gabba in Brisbane.',
    rating: 'G',
    isLive: true
  },

  // Thursday Evening - Channel 9
  {
    id: 'p5',
    title: 'Nine News Queensland',
    channel: 'Nine Brisbane',
    channelNumber: 9,
    startTime: '18:00',
    endTime: '19:00',
    duration: 60,
    category: 'News',
    description: 'Local, national and world news with the Nine News team.',
    rating: 'G',
    isLive: true
  },
  {
    id: 'p6',
    title: 'A Current Affair',
    channel: 'Nine Brisbane',
    channelNumber: 9,
    startTime: '19:00',
    endTime: '19:30',
    duration: 30,
    category: 'Current Affairs',
    description: 'Australia\'s leading current affairs program.',
    rating: 'PG',
    isNew: true
  },
  {
    id: 'p7',
    title: 'Hot Seat',
    channel: 'Nine Brisbane',
    channelNumber: 9,
    startTime: '19:30',
    endTime: '20:00',
    duration: 30,
    category: 'Game Show',
    description: 'Fast-paced trivia game show hosted by Eddie McGuire.',
    rating: 'G'
  },
  {
    id: 'p8',
    title: 'Big Brother',
    channel: 'Nine Brisbane',
    channelNumber: 9,
    startTime: '20:00',
    endTime: '21:30',
    duration: 90,
    category: 'Reality',
    description: 'Housemates compete for the grand prize in Australia\'s favourite reality show.',
    rating: 'M',
    isNew: true,
    season: 16
  },

  // Thursday Evening - Channel 10
  {
    id: 'p9',
    title: '10 News First Queensland',
    channel: 'Network 10',
    channelNumber: 10,
    startTime: '17:00',
    endTime: '18:00',
    duration: 60,
    category: 'News',
    description: 'Queensland news and weather with Sandra Sully.',
    rating: 'G',
    isLive: true
  },
  {
    id: 'p10',
    title: 'The Project',
    channel: 'Network 10',
    channelNumber: 10,
    startTime: '18:30',
    endTime: '19:30',
    duration: 60,
    category: 'Current Affairs',
    description: 'News, sport, entertainment and comedy panel show.',
    rating: 'PG',
    isLive: true
  },
  {
    id: 'p11',
    title: 'The Traitors Australia',
    channel: 'Network 10',
    channelNumber: 10,
    startTime: '19:30',
    endTime: '21:00',
    duration: 90,
    category: 'Reality',
    description: 'Contestants compete in a game of deception and betrayal.',
    rating: 'M',
    isNew: true
  },

  // Thursday Evening - ABC
  {
    id: 'p12',
    title: 'ABC News',
    channel: 'ABC TV',
    channelNumber: 2,
    startTime: '19:00',
    endTime: '19:30',
    duration: 30,
    category: 'News',
    description: 'National and international news from ABC.',
    rating: 'G',
    isLive: true
  },
  {
    id: 'p13',
    title: '7.30',
    channel: 'ABC TV',
    channelNumber: 2,
    startTime: '19:30',
    endTime: '20:00',
    duration: 30,
    category: 'Current Affairs',
    description: 'In-depth analysis and investigations.',
    rating: 'PG',
    isLive: true
  },
  {
    id: 'p14',
    title: 'Australian Story',
    channel: 'ABC TV',
    channelNumber: 2,
    startTime: '20:00',
    endTime: '20:30',
    duration: 30,
    category: 'Documentary',
    description: 'Compelling personal stories of Australians.',
    rating: 'PG'
  },
  {
    id: 'p15',
    title: 'Four Corners',
    channel: 'ABC TV',
    channelNumber: 2,
    startTime: '20:30',
    endTime: '21:15',
    duration: 45,
    category: 'Current Affairs',
    description: 'Australia\'s premier investigative journalism program.',
    rating: 'PG',
    isNew: true
  },

  // Thursday Evening - SBS
  {
    id: 'p16',
    title: 'SBS World News',
    channel: 'SBS',
    channelNumber: 3,
    startTime: '18:30',
    endTime: '19:00',
    duration: 30,
    category: 'News',
    description: 'International news and current affairs.',
    rating: 'G',
    isLive: true
  },
  {
    id: 'p17',
    title: 'Insight',
    channel: 'SBS',
    channelNumber: 3,
    startTime: '20:30',
    endTime: '21:30',
    duration: 60,
    category: 'Current Affairs',
    description: 'In-depth discussion on important social issues.',
    rating: 'PG',
    isLive: true
  }
]

export const programCategories = [
  { id: 'all', name: 'All Programs', icon: '📺' },
  { id: 'news', name: 'News', icon: '📰' },
  { id: 'sport', name: 'Sport', icon: '⚽' },
  { id: 'drama', name: 'Drama', icon: '🎭' },
  { id: 'reality', name: 'Reality', icon: '🎪' },
  { id: 'documentary', name: 'Documentary', icon: '🎬' },
  { id: 'kids', name: 'Kids & Family', icon: '👨‍👩‍👧' },
  { id: 'current-affairs', name: 'Current Affairs', icon: '🗣️' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎉' },
  { id: 'movies', name: 'Movies', icon: '🎥' }
]

export const timeSlots = [
  { id: 'morning', label: 'Morning (6am-12pm)', start: 6, end: 12 },
  { id: 'afternoon', label: 'Afternoon (12pm-6pm)', start: 12, end: 18 },
  { id: 'evening', label: 'Evening (6pm-10pm)', start: 18, end: 22 },
  { id: 'night', label: 'Night (10pm-12am)', start: 22, end: 24 }
]

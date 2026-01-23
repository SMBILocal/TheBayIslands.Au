// lib/community-data.ts
// Community Noticeboard Data Configuration

export interface Notice {
  id: string;
  title: string;
  description: string;
  icon: string;
  location: string;
  date?: string;
  time?: string;
  price?: string;
  url?: string;
  image?: string;
  category: 'toddlers' | 'teens' | 'adults' | 'seniors' | 'support';
}

export const communityNotices: Notice[] = [
  // Toddlers & Children
  {
    id: 'russell-playgroup-1',
    title: 'Russell Island Playgroup - Free Session',
    description: 'Free playgroup session for toddlers aged 1-4. Activities include music, storytelling, and social interaction.',
    icon: '👶',
    location: 'Russell Island Community Hall',
    date: '2026-02-05',
    time: '10:00 - 12:00',
    price: 'Free',
    category: 'toddlers',
    url: '/community/russell-playgroup'
  },
  {
    id: 'macleay-swim-1',
    title: 'Macleay Island Toddler Swim Classes',
    description: 'Toddler swimming lessons for ages 2-5. Learn water safety and basic strokes.',
    icon: '🏊‍♀️',
    location: 'Macleay Island Pool',
    date: '2026-02-10',
    time: '09:00 - 09:45',
    price: '$10 per session',
    category: 'toddlers',
    url: '/community/macleay-swim-classes'
  },
  {
    id: 'islands-library-1',
    title: 'Island Libraries - Storytime for Toddlers',
    description: 'Weekly storytime sessions featuring local and international children\'s literature.',
    icon: '📚',
    location: 'Russell & Macleay Island Libraries',
    date: 'Weekly - Wednesdays',
    time: '10:30 - 11:15',
    price: 'Free',
    category: 'toddlers',
    url: '/community/library-storytime'
  },
  
  // Teens & Young Adults
  {
    id: 'russell-soccer-1',
    title: 'Russell Island Youth Soccer Tryouts',
    description: 'Tryouts for the youth soccer team. Open to ages 13-18. All skill levels welcome.',
    icon: '⚽',
    location: 'Russell Island Sports Ground',
    date: '2026-02-15',
    time: '16:00 - 18:00',
    price: 'Free',
    category: 'teens',
    url: '/community/youth-soccer-tryouts'
  },
  {
    id: 'macleay-coding-1',
    title: 'Macleay Island Teen Coding Workshop',
    description: 'Learn web development, AI basics, and coding skills. Ages 13-19.',
    icon: '💻',
    location: 'Macleay Island Library',
    date: '2026-02-20',
    time: '14:00 - 17:00',
    price: 'Free',
    category: 'teens',
    url: '/community/coding-workshop'
  },
  {
    id: 'islands-youth-1',
    title: 'Island Youth Employment Program',
    description: 'Professional development and internship opportunities for 15-21 year olds.',
    icon: '👔',
    location: 'Online & Islands',
    price: 'Free',
    category: 'teens',
    url: '/community/youth-employment'
  },

  // Adults
  {
    id: 'victoria-market-1',
    title: 'Victoria Point Community Market',
    description: 'Local arts, crafts, fresh produce, and handmade goods. Open to all adults and families.',
    icon: '🛒',
    location: 'Victoria Point Community Hall',
    date: 'First Sunday Monthly',
    time: '08:00 - 14:00',
    price: 'Free Entry',
    category: 'adults',
    url: '/community/community-market'
  },
  {
    id: 'russell-buyswap-1',
    title: 'Russell Island Buy & Swap',
    description: 'Community buy, swap, and sell listings for adults on Russell Island.',
    icon: '🔄',
    location: 'Russell Island (Online)',
    price: 'Free to Post',
    category: 'adults',
    url: '/community/buy-swap-sell'
  },
  {
    id: 'islands-skills-1',
    title: 'Island Skills & Workshops',
    description: 'Learn cooking, gardening, DIY, and local craft skills from community experts.',
    icon: '🛠️',
    location: 'Various Islands',
    price: 'Varies',
    category: 'adults',
    url: '/community/skills-workshops'
  },

  // Seniors
  {
    id: 'russell-seniors-1',
    title: 'Russell Island Seniors Morning Tea',
    description: 'Social morning tea and games for local seniors.',
    icon: '☕',
    location: 'Russell Island RSL Club',
    date: '2026-02-18',
    time: '10:00 - 12:00',
    price: 'Free',
    category: 'seniors',
    url: '/community/seniors-morning-tea'
  },
  {
    id: 'macleay-seniors-1',
    title: 'Macleay Island Seniors Computer Lessons',
    description: 'Learn basic computer skills, email, and internet safety.',
    icon: '🖥️',
    location: 'Macleay Island Community Centre',
    date: 'Tuesdays',
    time: '14:00 - 15:30',
    price: 'Free',
    category: 'seniors',
    url: '/community/seniors-computer-lessons'
  },
  {
    id: 'islands-healthcare-1',
    title: 'Island Health & Wellness Programs',
    description: 'Free health checks, fitness classes, and wellness programs for seniors.',
    icon: '❤️',
    location: 'Multiple Venues',
    price: 'Free',
    category: 'seniors',
    url: '/community/health-wellness'
  },

  // Support & Donations
  {
    id: 'smbi-donate-1',
    title: 'Buy an Islander a Coffee',
    description: 'Support thebayislands.au community platform and help fund free notices and services.',
    icon: '☕',
    url: 'https://www.buymeacoffee.com/thebayislands',
    price: 'From $3',
    category: 'support',
    location: 'Online'
  },
  {
    id: 'food-bank-1',
    title: 'Island Community Food Bank',
    description: 'Support those in need. Donate or request assistance.',
    icon: '🍎',
    location: 'Russell Island Community Hub',
    price: 'Donation Based',
    category: 'support',
    url: '/community/food-bank'
  },
  {
    id: 'volunteer-1',
    title: 'Community Volunteer Network',
    description: 'Help build the community - volunteer for events, programs, and local initiatives.',
    icon: '🤝',
    location: 'All Islands',
    price: 'Free',
    category: 'support',
    url: '/community/volunteer'
  }
];

export const demographicCategories = [
  { id: 'toddlers', label: 'Toddlers & Children', icon: '👶', color: '#ffb3ba' },
  { id: 'teens', label: 'Teens & Young Adults', icon: '👨‍🎓', color: '#bae1ff' },
  { id: 'adults', label: 'Adults', icon: '👨‍💼', color: '#ffffba' },
  { id: 'seniors', label: 'Seniors', icon: '👴', color: '#baffc9' },
  { id: 'support', label: 'Support & Donations', icon: '🤝', color: '#e0bbe4' }
];

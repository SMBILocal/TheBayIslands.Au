// lib/maritime-data.ts
// Maritime, Boating & Fishing Infrastructure Data

export interface Marina {
  name: string;
  island: string;
  location: string;
  lat: number;
  lng: number;
  services: string[];
  parking: string;
  contact?: string;
  website?: string;
  icon: string;
}

export const marinasAndRamps: Marina[] = [
  {
    name: 'Russell Island Marina',
    island: 'Russell Island',
    location: 'Main Jetty Area',
    lat: -27.629,
    lng: 153.21,
    services: ['Boat Ramp', 'Mooring', 'Fuel', 'Maintenance'],
    parking: 'Waterfront Parking - 50 spaces',
    website: 'https://www.russellislandmarina.com.au',
    icon: '⚓'
  },
  {
    name: 'Macleay Island Marina',
    island: 'Macleay Island',
    location: 'Eastern Foreshore',
    lat: -27.69,
    lng: 153.21,
    services: ['Boat Ramp', 'Mooring', 'Repair Services'],
    parking: 'Community Carpark - 30 spaces',
    website: 'https://www.macleayislandmarina.com.au',
    icon: '⚓'
  },
  {
    name: 'Lamb Island Boat Ramp',
    island: 'Lamb Island',
    location: 'Southern Foreshore',
    lat: -27.68,
    lng: 153.15,
    services: ['Boat Ramp', 'Minimal Services'],
    parking: 'Small Carpark - 10 spaces',
    icon: '🚤'
  },
  {
    name: 'Karragarra Boat Ramp',
    island: 'Karragarra Island',
    location: 'Main Settlement',
    lat: -27.64,
    lng: 153.18,
    services: ['Boat Ramp', 'Dry Storage'],
    parking: 'Community Parking',
    icon: '🚤'
  },
  {
    name: 'Redland Bay Marina',
    island: 'Mainland - Redland Bay',
    location: 'Marina Village',
    lat: -27.54,
    lng: 153.22,
    services: ['Full Service Marina', 'Fuel', 'Maintenance', 'Chandlery', 'Dry Stack Storage'],
    parking: 'Large Carpark - 200+ spaces',
    website: 'https://www.redlandbaymarinas.com.au',
    icon: '⚓'
  },
  {
    name: 'Victoria Point Boat Ramp',
    island: 'Mainland - Victoria Point',
    location: 'Waterfront Reserve',
    lat: -27.53,
    lng: 153.22,
    services: ['Boat Ramp', 'Jetty', 'Fishing Platform'],
    parking: 'Waterfront Parking - 40 spaces',
    icon: '🚤'
  }
];

export interface FerryTerminal {
  name: string;
  island: string;
  location: string;
  lat: number;
  lng: number;
  ferryOperator: string;
  website?: string;
  schedule?: string;
  routes: string[];
  icon: string;
}

export const ferryTerminals: FerryTerminal[] = [
  {
    name: 'Russell Island Ferry Terminal',
    island: 'Russell Island',
    location: 'Main Jetty',
    lat: -27.629,
    lng: 153.21,
    ferryOperator: 'Translink / Redland Transit',
    website: 'https://www.translink.com.au',
    schedule: 'Multiple daily services',
    routes: ['Russell Island - Redland Bay', 'Russell Island - Cleveland', 'Inter-island'],
    icon: '⛴️'
  },
  {
    name: 'Macleay Island Ferry Terminal',
    island: 'Macleay Island',
    location: 'Main Jetty',
    lat: -27.69,
    lng: 153.21,
    ferryOperator: 'Translink / Redland Transit',
    website: 'https://www.translink.com.au',
    schedule: 'Multiple daily services',
    routes: ['Macleay Island - Redland Bay', 'Macleay Island - Cleveland', 'Inter-island'],
    icon: '⛴️'
  },
  {
    name: 'Lamb Island Ferry Terminal',
    island: 'Lamb Island',
    location: 'Main Settlement',
    lat: -27.68,
    lng: 153.15,
    ferryOperator: 'Translink / Redland Transit',
    website: 'https://www.translink.com.au',
    schedule: 'Daily services',
    routes: ['Lamb Island - Redland Bay', 'Inter-island'],
    icon: '⛴️'
  },
  {
    name: 'Karragarra Island Ferry Terminal',
    island: 'Karragarra Island',
    location: 'Main Jetty',
    lat: -27.64,
    lng: 153.18,
    ferryOperator: 'Translink / Redland Transit',
    website: 'https://www.translink.com.au',
    schedule: 'Daily services',
    routes: ['Karragarra Island - Redland Bay', 'Inter-island'],
    icon: '⛴️'
  },
  {
    name: 'Redland Bay Ferry Terminal',
    island: 'Mainland - Redland Bay',
    location: 'Marina Village',
    lat: -27.55,
    lng: 153.2,
    ferryOperator: 'Translink / Redland Transit',
    website: 'https://www.translink.com.au',
    schedule: 'Multiple daily services',
    routes: ['All Islands', 'Cleveland Interchange'],
    icon: '⛴️'
  }
];

export const transportConnections = [
  { name: 'TransLink Buses', url: 'https://www.translink.com.au', icon: '🚌', description: 'Bus services to all islands and mainland' },
  { name: 'Queensland Rail', url: 'https://www.queenslandrail.info', icon: '🚆', description: 'Train services to Cleveland Station' },
  { name: 'BayAir', url: 'https://www.bayair.com.au', icon: '✈️', description: 'Island shuttle and scenic flights' },
  { name: 'Ride Share / UBER', url: 'https://www.uber.com', icon: '🚗', description: 'Taxi and ride-share services' },
  { name: 'Car Hire Services', url: 'https://www.hertz.com.au', icon: '🚙', description: 'Vehicle rental for island transport' },
];

export const infrastructureUpdates = [
  {
    title: 'Russell Island Main Road Upgrade',
    status: 'In Progress',
    completion: '2026-06-30',
    description: 'Road widening and drainage improvements',
    icon: '🏗️'
  },
  {
    title: 'Macleay Island Marina Expansion',
    status: 'Planning',
    completion: '2026-12-31',
    description: 'Additional mooring facilities and services',
    icon: '🏗️'
  },
  {
    title: 'Victoria Point Shopping Centre Development',
    status: 'In Progress',
    completion: '2026-09-30',
    description: 'New retail and service facilities',
    icon: '🏗️'
  },
  {
    title: 'Ferry Terminal Improvements',
    status: 'Maintenance',
    completion: 'Ongoing',
    description: 'Regular upgrades to terminal facilities across all islands',
    icon: '🏗️'
  }
];

export interface FishingSpot {
  name: string;
  island: string;
  location: string;
  type: string;
  bestSpecies: string[];
  seasonalInfo: string;
  lat: number;
  lng: number;
}

export const fishingSpots: FishingSpot[] = [
  {
    name: 'Russell Island Rock Ledges',
    island: 'Russell Island',
    location: 'Eastern Foreshore',
    type: 'Rock Fishing',
    bestSpecies: ['Bream', 'Whiting', 'Flathead', 'Jewfish'],
    seasonalInfo: 'Year-round, best spring-summer',
    lat: -27.629,
    lng: 153.21
  },
  {
    name: 'Macleay Island Point',
    island: 'Macleay Island',
    location: 'Northern Point',
    type: 'Beach Fishing',
    bestSpecies: ['Bream', 'Flathead', 'Mullet'],
    seasonalInfo: 'Best autumn-winter',
    lat: -27.69,
    lng: 153.21
  },
  {
    name: 'Lamb Island Southern Shelf',
    island: 'Lamb Island',
    location: 'Southern Waters',
    type: 'Boat Fishing',
    bestSpecies: ['Snapper', 'Kingfish', 'Trevally'],
    seasonalInfo: 'Peak September-November',
    lat: -27.68,
    lng: 153.15
  },
  {
    name: 'Redland Bay Shipping Channel',
    island: 'Mainland - Redland Bay',
    location: 'Bay Channel',
    type: 'Boat Fishing',
    bestSpecies: ['Bream', 'Flathead', 'Whiting'],
    seasonalInfo: 'Year-round, varied by tide',
    lat: -27.55,
    lng: 153.2
  }
];

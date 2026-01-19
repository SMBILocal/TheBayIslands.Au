// Location types and constants for area-based filtering across the site

export enum LocationType {
  ISLAND = 'island',
  MAINLAND = 'mainland',
}

export enum Island {
  RUSSELL = 'russell',
  MACLEAY = 'macleay',
  LAMB = 'lamb',
  KARRAGARRA = 'karragarra',
}

export enum MainlandSuburb {
  REDLAND_BAY = 'redland-bay',
  VICTORIA_POINT = 'victoria-point',
  CLEVELAND = 'cleveland',
  CAPALABA = 'capalaba',
}

export interface LocationInfo {
  id: string;
  name: string;
  type: LocationType;
  slug: string;
  description: string;
  population?: number;
  ferryAccess?: boolean;
  distanceFromBrisbane?: string;
}

export const ISLANDS: Record<Island, LocationInfo> = {
  [Island.RUSSELL]: {
    id: 'russell',
    name: 'Russell Island',
    type: LocationType.ISLAND,
    slug: 'russell',
    description: 'The largest and most populated of the Southern Moreton Bay Islands',
    population: 3500,
    ferryAccess: true,
    distanceFromBrisbane: '45km',
  },
  [Island.MACLEAY]: {
    id: 'macleay',
    name: 'Macleay Island',
    type: LocationType.ISLAND,
    slug: 'macleay',
    description: 'Known for its golf course, galleries, and upscale island lifestyle',
    population: 2800,
    ferryAccess: true,
    distanceFromBrisbane: '50km',
  },
  [Island.LAMB]: {
    id: 'lamb',
    name: 'Lamb Island',
    type: LocationType.ISLAND,
    slug: 'lamb',
    description: 'A quiet, family-friendly island with rich pioneer heritage',
    population: 450,
    ferryAccess: true,
    distanceFromBrisbane: '48km',
  },
  [Island.KARRAGARRA]: {
    id: 'karragarra',
    name: 'Karragarra Island',
    type: LocationType.ISLAND,
    slug: 'karragarra',
    description: 'The smallest inhabited island, offering peace and seclusion',
    population: 200,
    ferryAccess: true,
    distanceFromBrisbane: '52km',
  },
};

export const MAINLAND_SUBURBS: Record<MainlandSuburb, LocationInfo> = {
  [MainlandSuburb.REDLAND_BAY]: {
    id: 'redland-bay',
    name: 'Redland Bay',
    type: LocationType.MAINLAND,
    slug: 'redland-bay',
    description: 'Gateway to the islands - home to the ferry terminal and marina',
    population: 15000,
    ferryAccess: false,
    distanceFromBrisbane: '35km',
  },
  [MainlandSuburb.VICTORIA_POINT]: {
    id: 'victoria-point',
    name: 'Victoria Point',
    type: LocationType.MAINLAND,
    slug: 'victoria-point',
    description: 'Major shopping hub with Woolworths, medical centres, and services',
    population: 14000,
    ferryAccess: false,
    distanceFromBrisbane: '32km',
  },
  [MainlandSuburb.CLEVELAND]: {
    id: 'cleveland',
    name: 'Cleveland',
    type: LocationType.MAINLAND,
    slug: 'cleveland',
    description: 'Redlands CBD with government services, hospital, and schools',
    population: 13500,
    ferryAccess: false,
    distanceFromBrisbane: '28km',
  },
  [MainlandSuburb.CAPALABA]: {
    id: 'capalaba',
    name: 'Capalaba',
    type: LocationType.MAINLAND,
    slug: 'capalaba',
    description: 'Major retail centre with Capalaba Central shopping complex',
    population: 22000,
    ferryAccess: false,
    distanceFromBrisbane: '22km',
  },
};

// Combined all locations for easy access
export const ALL_LOCATIONS: LocationInfo[] = [
  ...Object.values(ISLANDS),
  ...Object.values(MAINLAND_SUBURBS),
];

// Helper functions
export function getLocationById(id: string): LocationInfo | undefined {
  return ALL_LOCATIONS.find((loc) => loc.id === id);
}

export function getLocationsByType(type: LocationType): LocationInfo[] {
  return ALL_LOCATIONS.filter((loc) => loc.type === type);
}

export function getIslands(): LocationInfo[] {
  return Object.values(ISLANDS);
}

export function getMainlandSuburbs(): LocationInfo[] {
  return Object.values(MAINLAND_SUBURBS);
}

// For use in filters, forms, and database queries
export type LocationFilter = {
  locations?: string[]; // Array of location IDs
  type?: LocationType; // Filter by island or mainland
  includeAll?: boolean; // Include all locations
};

// Location display names for UI
export const LOCATION_LABELS: Record<string, string> = {
  // Islands
  russell: 'Russell Island',
  macleay: 'Macleay Island',
  lamb: 'Lamb Island',
  karragarra: 'Karragarra Island',
  // Mainland
  'redland-bay': 'Redland Bay',
  'victoria-point': 'Victoria Point',
  cleveland: 'Cleveland',
  capalaba: 'Capalaba',
  // Special
  all: 'All Areas',
  islands: 'All Islands',
  mainland: 'Mainland Suburbs',
};

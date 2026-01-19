/**
 * Comprehensive Business Categories for The Bay Islands Directory
 * Organized by major sectors with subcategories
 */

export const BUSINESS_CATEGORIES = [
  // ACCOMMODATION & HOSPITALITY
  'Accommodation & Hotels',
  'Bed & Breakfast',
  'Holiday Rentals',
  'Caravan Parks & Camping',
  
  // FOOD & DINING
  'Cafes & Coffee Shops',
  'Restaurants',
  'Takeaway Food',
  'Bakeries',
  'Pubs & Bars',
  'Catering Services',
  
  // HEALTH & MEDICAL
  'Doctors & Medical Centers',
  'Dentists',
  'Pharmacies',
  'Allied Health',
  'Physiotherapy',
  'Optometrists',
  'Psychology & Counseling',
  'Aged Care',
  'Disability Services',
  
  // EDUCATION & CHILDCARE
  'Primary Schools',
  'High Schools',
  'Childcare & Kindergarten',
  'Tutoring & Education Services',
  'Music & Arts Education',
  
  // RETAIL & SHOPPING
  'Supermarkets & Groceries',
  'Convenience Stores',
  'Hardware & Building Supplies',
  'Garden Centers & Nurseries',
  'Clothing & Fashion',
  'Gift Shops',
  'Op Shops & Second Hand',
  'Fishing & Marine Supplies',
  
  // HOME & GARDEN
  'Builders & Construction',
  'Plumbers',
  'Electricians',
  'Painters & Decorators',
  'Carpenters & Joiners',
  'Landscaping & Gardening',
  'Pest Control',
  'Cleaning Services',
  'Air Conditioning & Refrigeration',
  'Solar & Renewable Energy',
  
  // AUTOMOTIVE & TRANSPORT
  'Transport & Ferry Services',
  'Mechanics & Auto Repair',
  'Towing Services',
  'Fuel Stations',
  'Taxi & Ride Share',
  'Bus Services',
  
  // MARINE & WATER
  'Marina Services',
  'Boat Repairs & Maintenance',
  'Fishing Charters',
  'Water Sports & Recreation',
  'Boat Storage & Moorings',
  
  // PROFESSIONAL SERVICES
  'Accountants & Bookkeepers',
  'Legal Services',
  'Real Estate Agents',
  'Financial Advisors',
  'Insurance Services',
  'Property Management',
  'Conveyancing',
  
  // PERSONAL SERVICES
  'Hairdressers & Barbers',
  'Beauty Salons & Spas',
  'Massage Therapy',
  'Nail Salons',
  'Gyms & Fitness',
  'Personal Training',
  
  // COMMUNITY & EVENTS
  'Community Halls',
  'Churches & Religious Organizations',
  'Community Services',
  'Event Planning',
  'Venues & Function Spaces',
  
  // SPORTS & RECREATION
  'Bowls Clubs',
  'Sports Clubs',
  'Golf Clubs',
  'Fishing Clubs',
  'Gyms & Fitness Centers',
  'Yoga & Pilates',
  
  // ARTS & ENTERTAINMENT
  'Art Galleries',
  'Music & Entertainment',
  'Photography Services',
  'Crafts & Hobbies',
  
  // TOURISM & ACTIVITIES
  'Tourist Attractions',
  'Tours & Experiences',
  'Eco Tourism',
  'Wildlife & Nature',
  
  // PETS & ANIMALS
  'Veterinary Services',
  'Pet Shops',
  'Pet Grooming',
  'Pet Sitting & Boarding',
  
  // TECHNOLOGY & COMMUNICATIONS
  'Computer Repairs',
  'IT Services',
  'Internet & Phone Services',
  'Electronics Repair',
  
  // GOVERNMENT & EMERGENCY
  'Council Services',
  'Emergency Services',
  'Police & Security',
  'Fire Services',
  'Post Offices',
  'Libraries',
  
  // OTHER SERVICES
  'Funeral Services',
  'Laundromats',
  'Storage Facilities',
  'Waste & Recycling',
  'Locksmiths',
  'Security Services'
] as const;

export type BusinessCategory = typeof BUSINESS_CATEGORIES[number];

/**
 * Get categories grouped by sector
 */
export const CATEGORY_GROUPS = {
  'Accommodation & Food': [
    'Accommodation & Hotels',
    'Bed & Breakfast',
    'Holiday Rentals',
    'Caravan Parks & Camping',
    'Cafes & Coffee Shops',
    'Restaurants',
    'Takeaway Food',
    'Bakeries',
    'Pubs & Bars',
    'Catering Services',
  ],
  'Health & Wellbeing': [
    'Doctors & Medical Centers',
    'Dentists',
    'Pharmacies',
    'Allied Health',
    'Physiotherapy',
    'Optometrists',
    'Psychology & Counseling',
    'Aged Care',
    'Disability Services',
    'Gyms & Fitness',
    'Personal Training',
    'Yoga & Pilates',
  ],
  'Education & Childcare': [
    'Primary Schools',
    'High Schools',
    'Childcare & Kindergarten',
    'Tutoring & Education Services',
    'Music & Arts Education',
  ],
  'Retail & Shopping': [
    'Supermarkets & Groceries',
    'Convenience Stores',
    'Hardware & Building Supplies',
    'Garden Centers & Nurseries',
    'Clothing & Fashion',
    'Gift Shops',
    'Op Shops & Second Hand',
    'Fishing & Marine Supplies',
  ],
  'Home Services & Trades': [
    'Builders & Construction',
    'Plumbers',
    'Electricians',
    'Painters & Decorators',
    'Carpenters & Joiners',
    'Landscaping & Gardening',
    'Pest Control',
    'Cleaning Services',
    'Air Conditioning & Refrigeration',
    'Solar & Renewable Energy',
  ],
  'Transport & Automotive': [
    'Transport & Ferry Services',
    'Mechanics & Auto Repair',
    'Towing Services',
    'Fuel Stations',
    'Taxi & Ride Share',
    'Bus Services',
  ],
  'Marine & Water Sports': [
    'Marina Services',
    'Boat Repairs & Maintenance',
    'Fishing Charters',
    'Water Sports & Recreation',
    'Boat Storage & Moorings',
  ],
  'Professional Services': [
    'Accountants & Bookkeepers',
    'Legal Services',
    'Real Estate Agents',
    'Financial Advisors',
    'Insurance Services',
    'Property Management',
    'Conveyancing',
  ],
  'Community & Recreation': [
    'Community Halls',
    'Churches & Religious Organizations',
    'Community Services',
    'Bowls Clubs',
    'Sports Clubs',
    'Golf Clubs',
    'Fishing Clubs',
  ],
};

/**
 * Validate if a category exists
 */
export function isValidCategory(category: string): category is BusinessCategory {
  return BUSINESS_CATEGORIES.includes(category as BusinessCategory);
}

/**
 * Get all categories as options for forms
 */
export function getCategoryOptions() {
  return BUSINESS_CATEGORIES.map(cat => ({ value: cat, label: cat }));
}

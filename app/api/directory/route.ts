import { NextResponse } from 'next/server'
import supabase from '../../../lib/supabaseAdmin'

const mockBusinesses = [
  {id:'1', slug:'island-cafe-bakery', name:'Island Cafe & Bakery', category:'Cafe & Food', description:'Award-winning cafe and bakery. Fresh pastries daily, excellent coffee, local ingredients. Perfect for breakfast and lunch.', phone:'07 3409 1234', email:'info@islandcafe.com.au', website:'https://islandcafe.com.au', address:'15 High Street, Russell Island', hours:'Mon-Fri: 6am-3pm\nSat-Sun: 7am-2pm'},
  {id:'2', slug:'bay-marina-services', name:'Bay Marina Services', category:'Marine & Water Sports', description:'Full-service marina with boat repairs, maintenance, fuel, and equipment rental. Expert mechanics, competitive pricing.', phone:'07 3409 5678', email:'service@baymarina.com.au', website:'https://baymarina.com.au', address:'22 Marina Road, Redland Bay', hours:'Mon-Sat: 7am-6pm\nSun: 8am-4pm'},
  {id:'3', slug:'island-resort-spa', name:'Island Resort & Spa', category:'Hospitality & Tourism', description:'4-star luxury resort with spa, pool, restaurant. Oceanfront suites, wedding venue, conference facilities. Book direct for discounts.', phone:'07 3409 9000', email:'reservations@islandresort.com.au', website:'https://islandresort.com.au', address:'88 Beachfront Drive, Macleay Island', hours:'Check-in: 2pm\nCheck-out: 10am\nReception: 24/7'},
  {id:'4', slug:'the-bay-restaurant', name:'The Bay Restaurant', category:'Fine Dining', description:'Waterfront fine dining. Fresh seafood daily. Award-winning chef. Reservations recommended. Sunset views.', phone:'07 3409 3456', email:'bookings@thebayrestaurant.com.au', website:'https://thebayrestaurant.com.au', address:'45 Sunset Boulevard, Macleay Island', hours:'Dinner: Tue-Sun 5pm-10pm\nClosed Mondays'},
  {id:'5', slug:'blue-water-charters', name:'Blue Water Charters', category:'Marine & Water Sports', description:'Sport fishing charters, snorkeling trips, scenic cruises. Professional captains, safety equipment provided. Half and full-day trips.', phone:'0412 345 678', email:'bookings@bluewatercharters.com.au', website:'https://bluewatercharters.com.au', address:'Redland Bay Marina', hours:'Daily: 5am-8pm (by appointment)'}
]

export async function GET(){
  try {
    const { data, error } = await supabase.from('businesses').select('*').order('name', {ascending:true}).limit(50)
    if(error) return NextResponse.json(data && data.length > 0 ? data : mockBusinesses)
    return NextResponse.json(data && data.length > 0 ? data : mockBusinesses)
  } catch {
    return NextResponse.json(mockBusinesses)
  }
}

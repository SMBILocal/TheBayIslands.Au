import { NextResponse } from 'next/server'
import supabase from '../../../lib/supabaseAdmin'

const mockArticles = [
  {id:'1', title:'Complete Guide to Russell Island', excerpt:'Discover the charm, history, and attractions of Russell Island.', content:'Russell Island is the northernmost island in the Bay Islands, known for its pristine beaches, local shops, and warm community. Popular attractions include Russell Island State School historic site, local cafes, and water activities. The island offers a perfect blend of natural beauty and modern amenities, making it ideal for both residents and visitors.', author:'Sarah Mitchell', category:'Island Guides', created_at:'2026-01-10'},
  {id:'2', title:'Macleay Island: Gateway to Paradise', excerpt:'Your complete guide to exploring Macleay Island.', content:'Macleay Island offers stunning coastal views, excellent dining options, and world-class accommodations. Known for eco-tourism, water sports, and vibrant community events throughout the year. The island features beautiful walking trails, local markets, and a thriving arts community.', author:'James Cooper', category:'Island Guides', created_at:'2026-01-11'},
  {id:'3', title:'Sustainable Tourism in the Bay Islands', excerpt:'How visitors can help preserve our islands while enjoying them.', content:'Learn about reef-safe practices, responsible wildlife viewing, and supporting local businesses. The Bay Islands are committed to preserving their natural beauty for future generations. Visitors are encouraged to minimize their environmental impact through conscious travel choices.', author:'Emma Green', category:'Environment', created_at:'2026-01-12'},
  {id:'4', title:'2026 Community Events Calendar', excerpt:'All the festivals, markets, and events happening this year.', content:'January brings the Summerfest celebration, February features the local fishing competition, and throughout the year there are monthly markets, beach cleanups, and cultural celebrations. Join us for unforgettable community experiences.', author:'Michael Torres', category:'Events', created_at:'2026-01-13'}
]

export async function GET(){
  try {
    const { data, error } = await supabase.from('articles').select('*').order('created_at', {ascending:false}).limit(50)
    if(error) return NextResponse.json(data && data.length > 0 ? data : mockArticles)
    return NextResponse.json(data && data.length > 0 ? data : mockArticles)
  } catch {
    return NextResponse.json(mockArticles)
  }
}

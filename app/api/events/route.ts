import { NextResponse } from 'next/server'
import supabase from '../../../lib/supabaseAdmin'

const mockEvents = [
  {id:'1', title:'Russell Island Farmers Market', description:'Weekly farmers market featuring fresh produce, local honey, baked goods, and crafts. 8am-2pm every Saturday.', start_date:'2026-01-18T08:00:00Z', end_date:'2026-01-18T14:00:00Z', location:'Russell Island Community Centre', organizer:'Community Council', capacity:200, category:'Markets'},
  {id:'2', title:'Macleay Island Fishing Competition', description:'Annual sport fishing competition. $10,000 prize pool. Registration open now. All skill levels welcome.', start_date:'2026-01-25T06:00:00Z', end_date:'2026-01-25T16:00:00Z', location:'Macleay Island Marina', organizer:'Bay Islands Fishing Club', capacity:100, category:'Sports'},
  {id:'3', title:'Bay Islands Summerfest', description:'3-day festival featuring live music, food stalls, crafts, and water activities. Family-friendly. Free entry.', start_date:'2026-02-01T10:00:00Z', end_date:'2026-02-03T22:00:00Z', location:'Cleveland Beachfront', organizer:'Bay Islands Tourism', capacity:5000, category:'Festival'},
  {id:'4', title:'Monthly Beach Cleanup', description:'Community beach cleanup. All ages welcome. Tools provided. Coffee and donuts after.', start_date:'2026-02-15T09:00:00Z', end_date:'2026-02-15T12:00:00Z', location:'North Beach, Russell Island', organizer:'Eco Warriors', capacity:50, category:'Community'}
]

export async function GET(){
  try {
    const { data, error } = await supabase.from('events').select('*').order('start_date', {ascending:true}).limit(50)
    if(error) return NextResponse.json(data && data.length > 0 ? data : mockEvents)
    return NextResponse.json(data && data.length > 0 ? data : mockEvents)
  } catch {
    return NextResponse.json(mockEvents)
  }
}

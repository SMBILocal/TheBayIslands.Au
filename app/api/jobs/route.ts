import { NextResponse } from 'next/server'
import supabase from '../../../lib/supabaseAdmin'

// Mock data for development
const mockJobs = [
  {id:'1', title:'Head Chef', company:'Island Cafe & Bakery', location:'Russell Island', description:'Experienced chef needed for busy waterfront cafe. Must have 5+ years experience. Competitive salary + benefits.', salary_range:'$65k-$75k', employment_type:'Full-time', posted_at:'2026-01-10'},
  {id:'2', title:'Resort Manager', company:'Island Resort & Spa', location:'Macleay Island', description:'Manage daily operations of luxury 4-star resort. Hospitality background required. Full-time permanent position.', salary_range:'$80k-$95k', employment_type:'Full-time', posted_at:'2026-01-12'},
  {id:'3', title:'Marine Mechanic', company:'Bay Marina Services', location:'Redland Bay', description:'Experienced marine engine mechanic. Boat maintenance and repair. Full-time role, weekends available.', salary_range:'$55k-$70k', employment_type:'Full-time', posted_at:'2026-01-13'},
  {id:'4', title:'Tour Guide (Part-time)', company:'Island Tours Adventures', location:'Russell Island', description:'Lead kayak and snorkeling tours. Summer casual position, flexible hours, must be water-safety certified.', salary_range:'$28/hour', employment_type:'Part-time', posted_at:'2026-01-14'},
  {id:'5', title:'Landscaping Team Lead', company:'Green Spaces Landscaping', location:'Cleveland', description:'Lead team of 4-5 landscapers. Commercial and residential projects. Drivers license required.', salary_range:'$60k-$72k', employment_type:'Full-time', posted_at:'2026-01-15'}
]

export async function GET(){
  try {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('moderation_status', 'approved')
      .order('posted_at', {ascending:false})
      .limit(50)
    if(error) return NextResponse.json(mockJobs)
    return NextResponse.json(data && data.length > 0 ? data : mockJobs)
  } catch {
    return NextResponse.json(mockJobs)
  }
}

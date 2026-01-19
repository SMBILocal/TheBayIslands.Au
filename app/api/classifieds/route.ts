import { NextResponse } from 'next/server'
import supabase from '../../../lib/supabaseAdmin'

const mockClassifieds = [
  {id:'1', title:'Kayak for Sale - Sit-on-Top', price:280, location:'Russell Island', description:'2-year-old quality kayak. Excellent condition. Includes paddle and life jacket. Yellow, great for beginners.', condition:'Good', created_at:'2026-01-10'},
  {id:'2', title:'Fishing Rod Set - Like New', price:180, location:'Redland Bay', description:'Shimano rod and reel, never used. Includes tackle box and accessories. Paid $400 new.', condition:'New', created_at:'2026-01-11'},
  {id:'3', title:'Electric Lawn Mower', price:150, location:'Cleveland', description:'24V battery-powered mower. Low hours, barely used. Great for island gardens.', condition:'Good', created_at:'2026-01-12'},
  {id:'4', title:'Sofa - 2 Seater, Barely Used', price:200, location:'Macleay Island', description:'Cream fabric sofa. Very comfortable. Moving overseas, must sell quickly.', condition:'Excellent', created_at:'2026-01-13'},
  {id:'5', title:'Surfboard - Beginner', price:150, location:'Stradbroke Island', description:'6-foot board, soft top. Great for learning. Slight ding repaired.', condition:'Good', created_at:'2026-01-14'}
]

export async function GET(){
  try {
    const { data, error } = await supabase.from('classifieds').select('*').order('created_at', {ascending:false}).limit(50)
    if(error) return NextResponse.json(data && data.length > 0 ? data : mockClassifieds)
    return NextResponse.json(data && data.length > 0 ? data : mockClassifieds)
  } catch {
    return NextResponse.json(mockClassifieds)
  }
}

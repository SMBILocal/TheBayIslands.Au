import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

if(!supabaseUrl){
  console.warn('NEXT_PUBLIC_SUPABASE_URL is not set in the environment')
}

if(!serviceRoleKey){
  console.warn('SUPABASE_SERVICE_ROLE_KEY is not set — server admin operations will fail')
}

export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false }
})

export default supabaseAdmin

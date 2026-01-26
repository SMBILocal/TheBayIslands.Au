import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
// Support both new SECRET_KEY and legacy SERVICE_ROLE_KEY naming
const secretKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || ''

if(!supabaseUrl){
  console.warn('NEXT_PUBLIC_SUPABASE_URL is not set in the environment')
}

if(!secretKey){
  console.warn('SUPABASE_SECRET_KEY is not set — server admin operations will fail')
}

export const supabaseAdmin = createClient(supabaseUrl, secretKey, {
  auth: { persistSession: false }
})

export default supabaseAdmin

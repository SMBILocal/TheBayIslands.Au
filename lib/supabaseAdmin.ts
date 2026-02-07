import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
// Support both new SECRET_KEY and legacy SERVICE_ROLE_KEY naming
// NEVER use ANON key for admin operations - only use service role keys
const secretKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key'

if(!process.env.NEXT_PUBLIC_SUPABASE_URL){
  console.warn('NEXT_PUBLIC_SUPABASE_URL is not set in the environment')
}

if(!process.env.SUPABASE_SECRET_KEY && !process.env.SUPABASE_SERVICE_ROLE_KEY){
  console.warn('SUPABASE_SECRET_KEY or SUPABASE_SERVICE_ROLE_KEY is not set — server admin operations will fail')
}

export const supabaseAdmin = createClient(supabaseUrl, secretKey, {
  auth: { persistSession: false }
})

export default supabaseAdmin

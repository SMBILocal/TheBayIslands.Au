import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
// Use the ANON key (standard Next.js + Supabase pattern)
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || 'placeholder-anon-key'

const isBrowser = typeof window !== 'undefined'

if(!process.env.NEXT_PUBLIC_SUPABASE_URL && isBrowser){
  console.warn('NEXT_PUBLIC_SUPABASE_URL is not set - using placeholder')
}

if(!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY && isBrowser){
  console.warn('NEXT_PUBLIC_SUPABASE_ANON_KEY is not set - using placeholder')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: isBrowser,
    autoRefreshToken: isBrowser,
    detectSessionInUrl: isBrowser,
    storage: isBrowser ? window.localStorage : undefined,
    storageKey: 'thebayislands-auth',
    flowType: 'pkce',
  },
  global: {
    headers: {
      'x-client-info': 'thebayislands-web'
    }
  }
})

export default supabase

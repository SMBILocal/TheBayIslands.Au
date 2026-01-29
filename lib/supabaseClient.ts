import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
// Use the publishable default key (anon key is deprecated)
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || ''

const isBrowser = typeof window !== 'undefined'

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    persistSession: isBrowser,
    autoRefreshToken: isBrowser,
    detectSessionInUrl: isBrowser,
    storage: isBrowser ? window.localStorage : undefined,
    storageKey: 'thebayislands-auth',
    flowType: 'pkce',
    lock: isBrowser,
  },
  global: {
    headers: {
      'x-client-info': 'thebayislands-web'
    }
  }
})

export default supabase

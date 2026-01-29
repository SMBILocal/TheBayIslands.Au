import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jazreuartewyrmbfhtdz.supabase.co';
const supabaseServiceKey = 'sb_secret_b2qQ4DIFS_jEqvJpfJBfzw_Jx6Nk0rw';

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

console.log('Checking user_profiles...');
const { data, error } = await supabase.from('user_profiles').select('*');
console.log('Profiles:', data?.length, error ? error.message : 'OK');
console.log(JSON.stringify(data, null, 2));

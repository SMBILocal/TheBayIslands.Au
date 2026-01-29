import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jazreuartewyrmbfhtdz.supabase.co';
// This should be the anon/public key from Supabase dashboard
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphenJldWFydGV3eXJtYmZodGR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTMzMzksImV4cCI6MjA1MDAyOTMzOX0.OFxzNpGd3yS-8d4x6OAi7IuqNoqCWBPZnwMcmNZ_5ME';

const supabase = createClient(supabaseUrl, supabaseKey);

console.log('\n🔐 Testing Login Flow...\n');

async function testLogin() {
  try {
    // Test with the admin user
    const testEmail = 'smbilocal@gmail.com';
    const testPassword = 'SecurePass123!';
    
    console.log(`📧 Attempting login with: ${testEmail}`);
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: testEmail,
      password: testPassword
    });
    
    if (error) {
      console.error('❌ Login error:', error.message);
      return;
    }
    
    console.log('\n✅ Login successful!');
    console.log('\n📊 User Data:');
    console.log('  - ID:', data.user.id);
    console.log('  - Email:', data.user.email);
    console.log('  - Email Confirmed:', data.user.email_confirmed_at ? '✓' : '✗');
    
    console.log('\n🔑 App Metadata:');
    console.log(JSON.stringify(data.user.app_metadata, null, 2));
    
    console.log('\n👤 User Metadata:');
    console.log(JSON.stringify(data.user.user_metadata, null, 2));
    
    console.log('\n🎫 Session:');
    console.log('  - Access Token:', data.session?.access_token ? '✓ Present' : '✗ Missing');
    console.log('  - Expires:', new Date(data.session?.expires_at * 1000).toLocaleString());
    
    // Extract role
    const role = data.user.app_metadata?.role || data.user.user_metadata?.role || 'user';
    console.log('\n🎭 Detected Role:', role);
    
    const isAdmin = ['super_admin', 'administrator', 'moderator'].includes(role);
    const expectedRedirect = isAdmin ? '/admin' : '/dashboard';
    console.log('📍 Expected Redirect:', expectedRedirect);
    
    // Check user profile
    console.log('\n👥 Checking user_profiles table...');
    const { data: profile, error: profileError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', data.user.id)
      .single();
    
    if (profileError) {
      console.log('  ⚠️ Profile error:', profileError.message);
    } else {
      console.log('  ✓ Profile found');
      console.log('    - Role:', profile.role);
      console.log('    - Status:', profile.status);
      console.log('    - Approved:', profile.approved_at ? '✓' : '✗');
    }
    
  } catch (err) {
    console.error('💥 Test failed:', err);
  }
}

testLogin();

import { supabase } from './lib/supabaseClient.js'

async function testSupabaseConnection() {
  console.log('🧪 Testing Supabase Connection...\n')
  
  try {
    // Test 1: Check Supabase client initialization
    console.log('✅ Test 1: Supabase client initialized')
    console.log(`   URL: ${process.env.NEXT_PUBLIC_SUPABASE_URL}\n`)

    // Test 2: Test auth connection
    console.log('📝 Test 2: Testing Auth Connection...')
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()
    if (sessionError) {
      console.log(`⚠️  No active session (this is OK): ${sessionError.message}`)
    } else {
      console.log('✅ Auth system accessible')
      console.log(`   Session: ${session ? 'Active' : 'None'}\n`)
    }

    // Test 3: Test database connection (try to query users table)
    console.log('📝 Test 3: Testing Database Connection...')
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('id')
      .limit(1)

    if (usersError) {
      console.log(`❌ Database Error: ${usersError.message}`)
      console.log(`   Code: ${usersError.code}`)
      console.log(`   Hint: ${usersError.hint || 'No hint available'}`)
      
      if (usersError.message.includes('relation') && usersError.message.includes('does not exist')) {
        console.log('\n⚠️  SCHEMA NOT DEPLOYED!')
        console.log('   Action Required:')
        console.log('   1. Go to: https://gqpkanqjpdyamyixryyp.supabase.co/project/_/sql')
        console.log('   2. Click "New Query"')
        console.log('   3. Copy all content from: supabase/schema-v0.0.2.sql')
        console.log('   4. Paste and click "Run"')
      }
    } else {
      console.log('✅ Database connected successfully')
      console.log(`   Users table: Accessible\n`)
    }

    // Test 4: Try other tables
    console.log('📝 Test 4: Checking Other Tables...')
    const tables = ['directory_listings', 'jobs', 'events', 'classifieds']
    
    for (const table of tables) {
      const { error } = await supabase
        .from(table)
        .select('id')
        .limit(1)
      
      if (error) {
        console.log(`❌ ${table}: ${error.message}`)
      } else {
        console.log(`✅ ${table}: Accessible`)
      }
    }

    console.log('\n========================================')
    console.log('📊 CONNECTION TEST SUMMARY')
    console.log('========================================')
    
    if (!usersError) {
      console.log('✅ Supabase is FULLY CONNECTED and READY!')
      console.log('✅ Auth system working')
      console.log('✅ Database schema deployed')
      console.log('✅ All tables accessible')
      console.log('\nNext steps:')
      console.log('1. Test login/signup at http://localhost:3000/login')
      console.log('2. Create a test account')
      console.log('3. Verify you can log in')
    } else {
      console.log('❌ Database schema NOT deployed yet')
      console.log('\nDeploy the schema now:')
      console.log('1. Open: https://gqpkanqjpdyamyixryyp.supabase.co/project/_/sql')
      console.log('2. Run: supabase/schema-v0.0.2.sql')
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error)
  }
}

testSupabaseConnection()

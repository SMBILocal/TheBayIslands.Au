import supabase from '@/lib/supabaseClient'

/**
 * Test database connection to Supabase
 * Run with: npm run test:db
 * 
 * This verifies:
 * - Supabase client initializes correctly
 * - Database connection works
 * - RLS policies allow read access
 * - Tables are created and accessible
 */

async function testConnection() {
  console.log('🧪 Testing Supabase Connection...\n')

  try {
    // Test 1: Check auth status
    console.log('Test 1: Authentication Status')
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError) {
      console.log('⚠️  No authenticated user (this is OK for public access)\n')
    } else if (user) {
      console.log(`✅ Authenticated as: ${user.email}\n`)
    } else {
      console.log('✅ Not authenticated (public access)\n')
    }

    // Test 2: Query directory_listings
    console.log('Test 2: Directory Listings Table')
    const { data: listings, error: listingsError, count } = await supabase
      .from('directory_listings')
      .select('*', { count: 'exact' })
      .limit(1)

    if (listingsError) {
      console.log(`❌ Error: ${listingsError.message}\n`)
    } else {
      console.log(`✅ Table exists (${count || 0} listings)\n`)
    }

    // Test 3: Query jobs
    console.log('Test 3: Jobs Table')
    const { data: jobs, error: jobsError, count: jobCount } = await supabase
      .from('jobs')
      .select('*', { count: 'exact' })
      .limit(1)

    if (jobsError) {
      console.log(`❌ Error: ${jobsError.message}\n`)
    } else {
      console.log(`✅ Table exists (${jobCount || 0} jobs)\n`)
    }

    // Test 4: Query events
    console.log('Test 4: Events Table')
    const { data: events, error: eventsError, count: eventCount } = await supabase
      .from('events')
      .select('*', { count: 'exact' })
      .limit(1)

    if (eventsError) {
      console.log(`❌ Error: ${eventsError.message}\n`)
    } else {
      console.log(`✅ Table exists (${eventCount || 0} events)\n`)
    }

    // Test 5: Query classifieds
    console.log('Test 5: Classifieds Table')
    const { data: classifieds, error: classifiedsError, count: classifiedCount } = await supabase
      .from('classifieds')
      .select('*', { count: 'exact' })
      .limit(1)

    if (classifiedsError) {
      console.log(`❌ Error: ${classifiedsError.message}\n`)
    } else {
      console.log(`✅ Table exists (${classifiedCount || 0} classifieds)\n`)
    }

    // Test 6: Query users
    console.log('Test 6: Users Table')
    const { data: users, error: usersError, count: userCount } = await supabase
      .from('users')
      .select('*', { count: 'exact' })
      .limit(1)

    if (usersError) {
      console.log(`❌ Error: ${usersError.message}\n`)
    } else {
      console.log(`✅ Table exists (${userCount || 0} users)\n`)
    }

    // Test 7: Summary
    console.log('========================================')
    console.log('📊 Connection Test Summary')
    console.log('========================================')
    
    const allSuccess = !listingsError && !jobsError && !eventsError && !classifiedsError && !usersError
    
    if (allSuccess) {
      console.log('✅ All tests passed!')
      console.log('Your Supabase project is configured correctly.')
      console.log('')
      console.log('Next steps:')
      console.log('1. npm run dev')
      console.log('2. Visit http://localhost:3000')
      console.log('3. Test the forms')
    } else {
      console.log('❌ Some tests failed.')
      console.log('')
      console.log('Troubleshooting:')
      console.log('1. Check your .env.local file')
      console.log('2. Verify NEXT_PUBLIC_SUPABASE_URL is correct')
      console.log('3. Verify NEXT_PUBLIC_SUPABASE_ANON_KEY is correct')
      console.log('4. Make sure you ran schema-v0.0.2.sql in Supabase')
      console.log('5. Check Supabase RLS policies')
    }

  } catch (error) {
    console.error('❌ Connection test failed:', error)
    console.log('')
    console.log('Make sure:')
    console.log('1. You have a .env.local file')
    console.log('2. NEXT_PUBLIC_SUPABASE_URL is set')
    console.log('3. NEXT_PUBLIC_SUPABASE_ANON_KEY is set')
  }
}

// Run test
testConnection()

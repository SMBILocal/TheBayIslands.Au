import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jazreuartewyrmbfhtdz.supabase.co'
const supabaseKey = 'sb_publishable_jV-jGCss7g4MmxIy8aDlpw_4wYaBSmd'

const supabase = createClient(supabaseUrl, supabaseKey)

console.log('🧪 Testing Supabase Database Connection...\n')
console.log('URL:', supabaseUrl)
console.log('Key:', supabaseKey.substring(0, 20) + '...\n')

// Test 1: Check pricing_plans table
console.log('📊 Test 1: Checking pricing_plans table...')
const { data: plans, error: plansError } = await supabase
  .from('pricing_plans')
  .select('*')
  .limit(10)

if (plansError) {
  console.log('❌ Error:', plansError.message)
} else {
  console.log('✅ Success! Found', plans.length, 'pricing plans')
  console.log('Plans:', JSON.stringify(plans, null, 2), '\n')
}

// Test 2: Check users table
console.log('📊 Test 2: Checking users table...')
const { data: users, error: usersError } = await supabase
  .from('users')
  .select('id, email, role')
  .limit(5)

if (usersError) {
  console.log('❌ Error:', usersError.message)
} else {
  console.log('✅ Success! Found', users.length, 'users')
  console.log('Users:', JSON.stringify(users, null, 2), '\n')
}

// Test 3: Check directory_listings table
console.log('📊 Test 3: Checking directory_listings table...')
const { data: listings, error: listingsError } = await supabase
  .from('directory_listings')
  .select('id, business_name, status')
  .limit(5)

if (listingsError) {
  console.log('❌ Error:', listingsError.message)
} else {
  console.log('✅ Success! Found', listings.length, 'listings')
  console.log('Listings:', JSON.stringify(listings, null, 2), '\n')
}

// Test 4: Try to write a test record
console.log('📊 Test 4: Testing write access...')
const testPlan = {
  name: 'Test Plan - ' + Date.now(),
  price: 9.99,
  billing_period: 'monthly',
  features: ['test feature'],
  is_active: false,
  stripe_product_id: 'test_' + Date.now()
}

const { data: insertedPlan, error: insertError } = await supabase
  .from('pricing_plans')
  .insert([testPlan])
  .select()

if (insertError) {
  console.log('❌ Insert Error:', insertError.message)
} else {
  console.log('✅ Write Success! Inserted plan:', insertedPlan)
  
  // Clean up - delete the test record
  const { error: deleteError } = await supabase
    .from('pricing_plans')
    .delete()
    .eq('id', insertedPlan[0].id)
  
  if (deleteError) {
    console.log('⚠️  Could not delete test record:', deleteError.message)
  } else {
    console.log('✅ Test record cleaned up\n')
  }
}

// Test 5: List all tables by checking common ones
console.log('📊 Test 5: Checking all expected tables...')
const tables = [
  'users',
  'pricing_plans',
  'subscriptions',
  'directory_listings',
  'jobs',
  'events',
  'classifieds',
  'articles',
  'reviews'
]

for (const table of tables) {
  const { count, error } = await supabase
    .from(table)
    .select('*', { count: 'exact', head: true })
  
  if (error) {
    console.log(`❌ ${table}: ${error.message}`)
  } else {
    console.log(`✅ ${table}: ${count} records`)
  }
}

console.log('\n✅ Database connection test complete!')

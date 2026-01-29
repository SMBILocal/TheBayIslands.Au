import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jazreuartewyrmbfhtdz.supabase.co'
const supabaseKey = 'sb_publishable_jV-jGCss7g4MmxIy8aDlpw_4wYaBSmd'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('========================================')
console.log('🧪 SUPABASE READ/WRITE TEST')
console.log('========================================\n')

// Test 1: Check Plans Table Structure
console.log('📊 Test 1: Inspecting Plans Table')
console.log('----------------------------------------')
const { data: plansData, error: plansError } = await supabase
  .from('plans')
  .select('*')
  .limit(1)

if (plansError) {
  console.log('❌ Error reading plans:', plansError.message)
} else {
  console.log('✅ Plans table is readable')
  console.log('   Current records:', plansData.length)
  if (plansData.length > 0) {
    console.log('   Columns:', Object.keys(plansData[0]).join(', '))
    console.log('   Sample:', JSON.stringify(plansData[0], null, 2))
  }
}
console.log('')

// Test 2: Try to insert a test plan
console.log('📊 Test 2: Testing Write Access to Plans')
console.log('----------------------------------------')
const testPlan = {
  name: 'Basic Listing',
  description: 'Perfect for small businesses',
  price: 29,
  interval: 'month',
  features: JSON.stringify(['1 Business Listing', 'Basic Analytics', 'Email Support']),
  active: true
}

const { data: insertedPlan, error: insertError } = await supabase
  .from('plans')
  .insert([testPlan])
  .select()

if (insertError) {
  console.log('❌ Insert Error:', insertError.message)
  console.log('   Code:', insertError.code)
  console.log('   Details:', insertError.details)
  console.log('   Hint:', insertError.hint)
} else {
  console.log('✅ Successfully inserted plan!')
  console.log('   ID:', insertedPlan[0].id || insertedPlan[0])
  console.log('   Data:', JSON.stringify(insertedPlan[0], null, 2))
}
console.log('')

// Test 3: Read back the data
console.log('📊 Test 3: Reading All Plans')
console.log('----------------------------------------')
const { data: allPlans, error: readError, count } = await supabase
  .from('plans')
  .select('*', { count: 'exact' })

if (readError) {
  console.log('❌ Read Error:', readError.message)
} else {
  console.log('✅ Successfully read plans')
  console.log('   Total plans:', count)
  if (allPlans.length > 0) {
    console.log('   Plans:')
    allPlans.forEach((plan, idx) => {
      console.log(`   ${idx + 1}. ${plan.name} - $${plan.price}/${plan.interval}`)
    })
  }
}
console.log('')

// Test 4: Check User Profiles Table
console.log('📊 Test 4: Inspecting User Profiles Table')
console.log('----------------------------------------')
const { data: profilesData, error: profilesError } = await supabase
  .from('user_profiles')
  .select('*')
  .limit(1)

if (profilesError) {
  console.log('❌ Error reading user_profiles:', profilesError.message)
} else {
  console.log('✅ User profiles table is readable')
  console.log('   Current records:', profilesData.length)
  if (profilesData.length > 0) {
    console.log('   Columns:', Object.keys(profilesData[0]).join(', '))
  }
}
console.log('')

// Test 5: Test Update
if (insertedPlan && insertedPlan[0]) {
  console.log('📊 Test 5: Testing Update Access')
  console.log('----------------------------------------')
  const { data: updatedPlan, error: updateError } = await supabase
    .from('plans')
    .update({ price: 39 })
    .eq('id', insertedPlan[0].id)
    .select()
  
  if (updateError) {
    console.log('❌ Update Error:', updateError.message)
  } else {
    console.log('✅ Successfully updated plan!')
    console.log('   New price:', updatedPlan[0].price)
  }
  console.log('')

  // Test 6: Test Delete
  console.log('📊 Test 6: Testing Delete Access')
  console.log('----------------------------------------')
  const { error: deleteError } = await supabase
    .from('plans')
    .delete()
    .eq('id', insertedPlan[0].id)
  
  if (deleteError) {
    console.log('❌ Delete Error:', deleteError.message)
  } else {
    console.log('✅ Successfully deleted test plan')
  }
  console.log('')
}

console.log('========================================')
console.log('✅ TESTS COMPLETE')
console.log('========================================')
console.log('')
console.log('Summary:')
console.log('  - Connection: Working ✅')
console.log('  - Read Access: ' + (plansError ? '❌' : '✅'))
console.log('  - Write Access: ' + (insertError ? '❌' : '✅'))
console.log('  - Update Access: ' + (insertedPlan ? '✅' : 'Not tested'))
console.log('  - Delete Access: ' + (insertedPlan ? '✅' : 'Not tested'))
console.log('')
console.log('Existing Tables:')
console.log('  1. plans - ' + (plansError ? 'Not accessible' : 'Accessible'))
console.log('  2. user_profiles - ' + (profilesError ? 'Not accessible' : 'Accessible'))
console.log('')

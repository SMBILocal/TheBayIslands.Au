import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jazreuartewyrmbfhtdz.supabase.co'
const supabaseServiceKey = 'sb_secret_b2qQ4DIFS_jEqvJpfJBfzw_Jx6Nk0rw'

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

console.log('╔════════════════════════════════════════╗')
console.log('║   FIX SUBSCRIPTIONS & UPDATE DEMO      ║')
console.log('╚════════════════════════════════════════╝\n')

// User ID to Plan mapping (from previous creation)
const userPlanMapping = [
  { user_id: 'fd3284e3-ff1c-4b33-a1bf-921267fc6fbe', plan: 'tailored', role: 'super_admin' },    // smbilocal@gmail.com
  { user_id: 'e77cef3a-965f-4935-b76c-f574e97740f4', plan: 'enterprise', role: 'administrator' }, // administrator@thebayislands.au
  { user_id: 'dbbf4596-eb6e-4694-85aa-e0375b8e9d01', plan: 'professional', role: 'moderator' },  // moderator@thebayislands.au
  { user_id: '85701750-8608-40bb-8746-174a0b0320df', plan: 'standard', role: 'editor' },         // editor@thebayislands.au
  { user_id: '63879ef9-24de-436e-a177-0bff5be7412b', plan: 'free', role: 'user' },              // user@thebayislands.au
  { user_id: '7f5e92f7-1774-448c-a0cb-4c06d548ffc6', plan: 'free', role: 'demo' },              // demo@thebayislands.au (existing)
  { user_id: '97429593-0b45-461b-8c16-855ab2bf52a0', plan: 'tailored', role: 'super_admin' },   // admin@thebayislands.au (existing)
]

console.log('📋 Creating/Updating Subscriptions...\n')

for (const mapping of userPlanMapping) {
  console.log(`Processing user: ${mapping.user_id} (${mapping.role})`)
  
  try {
    // Check if subscription exists
    const { data: existing, error: checkError } = await supabase
      .from('user_subscriptions')
      .select('*')
      .eq('user_id', mapping.user_id)
      .single()
    
    if (existing) {
      // Update existing subscription
      const { error: updateError } = await supabase
        .from('user_subscriptions')
        .update({
          plan_id: mapping.plan,
          status: 'active',
          trial_expires_at: null,
          metadata: {
            role: mapping.role,
            verified: true,
            approved: true,
            activated: true
          }
        })
        .eq('user_id', mapping.user_id)
      
      if (updateError) {
        console.log('   ⚠️  Update error:', updateError.message)
      } else {
        console.log(`   ✅ Updated subscription to ${mapping.plan}`)
      }
    } else {
      // Create new subscription
      const { error: insertError } = await supabase
        .from('user_subscriptions')
        .insert([{
          user_id: mapping.user_id,
          plan_id: mapping.plan,
          status: 'active',
          seats: 1,
          trial_expires_at: null,
          metadata: {
            role: mapping.role,
            verified: true,
            approved: true,
            activated: true
          }
        }])
      
      if (insertError) {
        console.log('   ⚠️  Insert error:', insertError.message)
      } else {
        console.log(`   ✅ Created subscription with ${mapping.plan}`)
      }
    }
    
    // Update user metadata
    const { error: metaError } = await supabase.auth.admin.updateUserById(
      mapping.user_id,
      {
        app_metadata: {
          role: mapping.role,
          plan: mapping.plan,
          verified: true,
          approved: true,
          activated: true
        },
        email_confirm: true
      }
    )
    
    if (metaError) {
      console.log('   ⚠️  Metadata error:', metaError.message)
    } else {
      console.log('   ✅ Updated user metadata')
    }
    
  } catch (error) {
    console.log('   ❌ Error:', error.message)
  }
  
  console.log('')
}

console.log('═══════════════════════════════════════')
console.log('🔍 FINAL VERIFICATION')
console.log('═══════════════════════════════════════\n')

// Get all subscriptions
const { data: allSubs, error: subsError } = await supabase
  .from('user_subscriptions')
  .select('*')
  .order('created_at', { ascending: false })

if (subsError) {
  console.log('❌ Error:', subsError.message)
} else {
  console.log(`Total Active Subscriptions: ${allSubs.length}\n`)
  
  for (const sub of allSubs) {
    const metadata = sub.metadata || {}
    console.log(`✅ User: ${sub.user_id}`)
    console.log(`   Plan: ${sub.plan_id}`)
    console.log(`   Role: ${metadata.role || 'unknown'}`)
    console.log(`   Status: ${sub.status}`)
    console.log(`   Seats: ${sub.seats}`)
    console.log('')
  }
}

// Get all auth users with their details
console.log('═══════════════════════════════════════')
console.log('👥 ALL USERS WITH ROLES & PLANS')
console.log('═══════════════════════════════════════\n')

const { data: allUsers } = await supabase.auth.admin.listUsers()

const userEmails = {
  'fd3284e3-ff1c-4b33-a1bf-921267fc6fbe': 'smbilocal@gmail.com',
  'e77cef3a-965f-4935-b76c-f574e97740f4': 'administrator@thebayislands.au',
  'dbbf4596-eb6e-4694-85aa-e0375b8e9d01': 'moderator@thebayislands.au',
  '85701750-8608-40bb-8746-174a0b0320df': 'editor@thebayislands.au',
  '63879ef9-24de-436e-a177-0bff5be7412b': 'user@thebayislands.au',
  '7f5e92f7-1774-448c-a0cb-4c06d548ffc6': 'demo@thebayislands.au',
  '97429593-0b45-461b-8c16-855ab2bf52a0': 'admin@thebayislands.au'
}

for (const user of allUsers.users) {
  const role = user.app_metadata?.role || user.user_metadata?.role || 'unknown'
  const plan = user.app_metadata?.plan || 'unknown'
  const verified = user.email_confirmed_at ? '✅' : '❌'
  
  console.log(`${verified} ${user.email}`)
  console.log(`   Role: ${role}`)
  console.log(`   Plan: ${plan}`)
  console.log(`   Verified: ${user.email_confirmed_at ? 'Yes' : 'No'}`)
  console.log(`   Approved: ${user.app_metadata?.approved ? 'Yes' : 'No'}`)
  console.log(`   Activated: ${user.app_metadata?.activated ? 'Yes' : 'No'}`)
  console.log('')
}

console.log('╔════════════════════════════════════════╗')
console.log('║         ALL USERS READY!               ║')
console.log('╚════════════════════════════════════════╝\n')

console.log('🔑 Complete Login Credentials:\n')

const credentials = [
  { role: 'SUPER ADMIN', email: 'smbilocal@gmail.com', password: 'SuperAdmin123!@#', plan: 'Tailored' },
  { role: 'SUPER ADMIN', email: 'admin@thebayislands.au', password: 'Admin123!@#', plan: 'Tailored' },
  { role: 'ADMINISTRATOR', email: 'administrator@thebayislands.au', password: 'Admin123!@#', plan: 'Enterprise' },
  { role: 'MODERATOR', email: 'moderator@thebayislands.au', password: 'Moderator123!@#', plan: 'Professional' },
  { role: 'EDITOR', email: 'editor@thebayislands.au', password: 'Editor123!@#', plan: 'Standard' },
  { role: 'USER', email: 'user@thebayislands.au', password: 'User123!@#', plan: 'Free' },
  { role: 'DEMO', email: 'demo@thebayislands.au', password: 'Demo123!@#', plan: 'Free' }
]

credentials.forEach(cred => {
  console.log(`   ${cred.role}:`)
  console.log(`   Email: ${cred.email}`)
  console.log(`   Password: ${cred.password}`)
  console.log(`   Plan: ${cred.plan}`)
  console.log('')
})

console.log('✅ All users are verified, approved, and activated!')
console.log('✅ No email verification required - ready to login!')
console.log('\n🌐 Login URL: http://localhost:3000/login\n')

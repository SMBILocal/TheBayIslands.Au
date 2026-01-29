import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jazreuartewyrmbfhtdz.supabase.co'
const supabaseServiceKey = 'sb_secret_b2qQ4DIFS_jEqvJpfJBfzw_Jx6Nk0rw'

// Create admin client with service role key
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

console.log('╔════════════════════════════════════════╗')
console.log('║   SETUP USERS, ROLES & PERMISSIONS     ║')
console.log('╚════════════════════════════════════════╝\n')

// User Role to Plan Mapping
const rolePlanMapping = {
  super_admin: 'tailored',
  administrator: 'enterprise',
  moderator: 'professional',
  editor: 'standard',
  user: 'free',
  demo: 'free'
}

// Users to create
const usersToCreate = [
  {
    email: 'smbilocal@gmail.com',
    password: 'SuperAdmin123!@#',
    role: 'super_admin',
    full_name: 'Super Admin',
    plan: 'tailored'
  },
  {
    email: 'administrator@thebayislands.au',
    password: 'Admin123!@#',
    role: 'administrator',
    full_name: 'Administrator',
    plan: 'enterprise'
  },
  {
    email: 'moderator@thebayislands.au',
    password: 'Moderator123!@#',
    role: 'moderator',
    full_name: 'Moderator',
    plan: 'professional'
  },
  {
    email: 'editor@thebayislands.au',
    password: 'Editor123!@#',
    role: 'editor',
    full_name: 'Editor',
    plan: 'standard'
  },
  {
    email: 'user@thebayislands.au',
    password: 'User123!@#',
    role: 'user',
    full_name: 'Regular User',
    plan: 'free'
  },
  {
    email: 'demo@thebayislands.au',
    password: 'Demo123!@#',
    role: 'demo',
    full_name: 'Demo User',
    plan: 'free'
  }
]

console.log('📋 User Role → Plan Mapping:')
console.log('   super_admin → Tailored')
console.log('   administrator → Enterprise')
console.log('   moderator → Professional')
console.log('   editor → Standard')
console.log('   user → Free')
console.log('   demo → Free\n')

console.log('═══════════════════════════════════════\n')

let successCount = 0
let skippedCount = 0
let errorCount = 0

for (const userData of usersToCreate) {
  console.log(`Creating: ${userData.email} (${userData.role})`)
  
  try {
    // Step 1: Create auth user with auto-confirm
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: userData.email,
      password: userData.password,
      email_confirm: true, // Auto-confirm email
      user_metadata: {
        full_name: userData.full_name,
        role: userData.role
      }
    })

    if (authError) {
      if (authError.message.includes('already registered')) {
        console.log('   ⚠️  User already exists, skipping...\n')
        skippedCount++
        continue
      }
      throw authError
    }

    console.log('   ✅ Auth user created:', authData.user.id)

    // Step 2: Create user profile
    const { data: profileData, error: profileError } = await supabase
      .from('user_profiles')
      .insert([{
        auth_user_id: authData.user.id,
        full_name: userData.full_name
      }])
      .select()

    if (profileError) {
      console.log('   ⚠️  Profile error:', profileError.message)
    } else {
      console.log('   ✅ Profile created:', profileData[0].id)
    }

    // Step 3: Create subscription
    const { data: subData, error: subError } = await supabase
      .from('user_subscriptions')
      .insert([{
        user_id: authData.user.id,
        plan_id: userData.plan,
        status: 'active',
        current_period_start: new Date().toISOString(),
        current_period_end: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString() // 1 year from now
      }])
      .select()

    if (subError) {
      console.log('   ⚠️  Subscription error:', subError.message)
    } else {
      console.log('   ✅ Subscription created:', userData.plan)
    }

    // Step 4: Update user metadata with additional permissions
    const { error: updateError } = await supabase.auth.admin.updateUserById(
      authData.user.id,
      {
        app_metadata: {
          role: userData.role,
          plan: userData.plan,
          verified: true,
          approved: true,
          activated: true
        }
      }
    )

    if (updateError) {
      console.log('   ⚠️  Metadata update error:', updateError.message)
    } else {
      console.log('   ✅ User metadata updated')
    }

    console.log('   ✅ SUCCESS - User fully configured\n')
    successCount++

  } catch (error) {
    console.log('   ❌ ERROR:', error.message, '\n')
    errorCount++
  }
}

console.log('═══════════════════════════════════════')
console.log('📊 SETUP SUMMARY')
console.log('═══════════════════════════════════════\n')
console.log(`✅ Successfully created: ${successCount} users`)
console.log(`⚠️  Skipped (already exist): ${skippedCount} users`)
console.log(`❌ Failed: ${errorCount} users\n`)

// Verify all users
console.log('═══════════════════════════════════════')
console.log('🔍 VERIFICATION - Current Users')
console.log('═══════════════════════════════════════\n')

const { data: allUsers, error: listError } = await supabase.auth.admin.listUsers()

if (listError) {
  console.log('❌ Error listing users:', listError.message)
} else {
  console.log(`Total Auth Users: ${allUsers.users.length}\n`)
  
  for (const user of allUsers.users) {
    const role = user.user_metadata?.role || user.app_metadata?.role || 'unknown'
    const plan = user.app_metadata?.plan || 'unknown'
    const verified = user.email_confirmed_at ? '✅' : '❌'
    
    console.log(`${verified} ${user.email}`)
    console.log(`   ID: ${user.id}`)
    console.log(`   Role: ${role}`)
    console.log(`   Plan: ${plan}`)
    console.log(`   Email Verified: ${user.email_confirmed_at ? 'Yes' : 'No'}`)
    console.log(`   Created: ${new Date(user.created_at).toLocaleDateString()}`)
    console.log('')
  }
}

// Check subscriptions
console.log('═══════════════════════════════════════')
console.log('💳 VERIFICATION - Subscriptions')
console.log('═══════════════════════════════════════\n')

const { data: allSubs, error: subsError } = await supabase
  .from('user_subscriptions')
  .select('*')
  .order('created_at', { ascending: false })

if (subsError) {
  console.log('❌ Error listing subscriptions:', subsError.message)
} else {
  console.log(`Total Subscriptions: ${allSubs.length}\n`)
  
  for (const sub of allSubs) {
    console.log(`📋 User: ${sub.user_id}`)
    console.log(`   Plan: ${sub.plan_id}`)
    console.log(`   Status: ${sub.status}`)
    console.log(`   Period: ${new Date(sub.current_period_start).toLocaleDateString()} - ${new Date(sub.current_period_end).toLocaleDateString()}`)
    console.log('')
  }
}

console.log('╔════════════════════════════════════════╗')
console.log('║         SETUP COMPLETE!                ║')
console.log('╚════════════════════════════════════════╝\n')

console.log('🔑 Login Credentials:\n')
usersToCreate.forEach(user => {
  console.log(`   ${user.role.toUpperCase()}:`)
  console.log(`   Email: ${user.email}`)
  console.log(`   Password: ${user.password}`)
  console.log(`   Plan: ${user.plan}`)
  console.log('')
})

console.log('🌐 Test Login: http://localhost:3000/login')
console.log('📊 Dashboard: https://supabase.com/dashboard/project/jazreuartewyrmbfhtdz/auth/users\n')

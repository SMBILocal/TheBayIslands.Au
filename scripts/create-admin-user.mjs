#!/usr/bin/env node
/**
 * Create Admin User Script
 * Creates a demo admin user for testing
 * Usage: node scripts/create-admin-user.mjs
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://jazreuartewyrmbfhtdz.supabase.co'
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!serviceRoleKey || serviceRoleKey.includes('replace-with')) {
  console.error('❌ ERROR: SUPABASE_SERVICE_ROLE_KEY is not set in .env.local')
  console.log('\n📋 To fix this:')
  console.log('1. Go to: https://supabase.com/dashboard/project/jazreuartewyrmbfhtdz/settings/api')
  console.log('2. Copy the "service_role" secret key')
  console.log('3. Update SUPABASE_SERVICE_ROLE_KEY in .env.local')
  console.log('4. Also update NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY (anon public key)\n')
  process.exit(1)
}

const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false }
})

async function createAdminUser() {
  console.log('🚀 Creating admin user...\n')

  const adminEmail = 'admin@thebayislands.au'
  const adminPassword = 'Admin123!@#'

  try {
    // Create auth user
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: adminEmail,
      password: adminPassword,
      email_confirm: true,
      user_metadata: {
        display_name: 'Super Admin',
        role: 'super_admin'
      }
    })

    if (authError) {
      if (authError.message.includes('already registered')) {
        console.log('ℹ️  User already exists, fetching user...')
        const { data: users } = await supabaseAdmin.auth.admin.listUsers()
        const existingUser = users?.users.find(u => u.email === adminEmail)
        
        if (existingUser) {
          console.log('✅ Found existing user:', existingUser.id)
          
          // Update their profile to super_admin
          const { error: updateError } = await supabaseAdmin
            .from('users')
            .upsert({
              id: existingUser.id,
              auth_id: existingUser.id,
              email: adminEmail,
              role: 'super_admin',
              display_name: 'Super Admin',
              email_verified: true,
              role_expires_at: null
            }, { onConflict: 'auth_id' })

          if (updateError) {
            console.error('❌ Error updating profile:', updateError)
          } else {
            console.log('✅ Updated user profile to super_admin')
          }
        }
      } else {
        throw authError
      }
    } else {
      console.log('✅ Created auth user:', authData.user.id)

      // Create/update profile in public.users table
      const { error: profileError } = await supabaseAdmin
        .from('users')
        .upsert({
          id: authData.user.id,
          auth_id: authData.user.id,
          email: adminEmail,
          role: 'super_admin',
          display_name: 'Super Admin',
          email_verified: true,
          role_expires_at: null
        }, { onConflict: 'auth_id' })

      if (profileError) {
        console.error('❌ Error creating profile:', profileError)
      } else {
        console.log('✅ Created user profile')
      }
    }

    console.log('\n✨ Admin user setup complete!')
    console.log('\n📋 Login credentials:')
    console.log('   Email:', adminEmail)
    console.log('   Password:', adminPassword)
    console.log('   Role: super_admin')
    console.log('\n🔗 Login at: http://localhost:3000/login\n')

  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

// Also create a regular demo user
async function createDemoUser() {
  console.log('🚀 Creating demo user...\n')

  const demoEmail = 'demo@thebayislands.au'
  const demoPassword = 'Demo123!@#'

  try {
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: demoEmail,
      password: demoPassword,
      email_confirm: true,
      user_metadata: {
        display_name: 'Demo User',
        role: 'user'
      }
    })

    if (authError && !authError.message.includes('already registered')) {
      throw authError
    }

    if (authData) {
      const { error: profileError } = await supabaseAdmin
        .from('users')
        .upsert({
          id: authData.user.id,
          auth_id: authData.user.id,
          email: demoEmail,
          role: 'user',
          display_name: 'Demo User',
          email_verified: true
        }, { onConflict: 'auth_id' })

      if (!profileError) {
        console.log('✅ Created demo user')
        console.log('   Email:', demoEmail)
        console.log('   Password:', demoPassword)
      }
    }
  } catch (error) {
    console.log('ℹ️  Demo user may already exist')
  }
}

// Run both
createAdminUser()
  .then(() => createDemoUser())
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })

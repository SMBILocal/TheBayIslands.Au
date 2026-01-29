#!/usr/bin/env node
/**
 * Run Database Migrations
 * Executes SQL migrations directly in Supabase
 * Usage: node scripts/run-migrations.mjs
 */

import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync } from 'fs'

// Load .env.local
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
config({ path: join(__dirname, '..', '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://jazreuartewyrmbfhtdz.supabase.co'
const secretKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY

if (!secretKey || secretKey.includes('replace-with')) {
  console.error('❌ ERROR: SUPABASE_SECRET_KEY not configured')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, secretKey, {
  auth: { autoRefreshToken: false, persistSession: false },
  db: { schema: 'public' }
})

async function runMigrations() {
  console.log('🚀 Running database migrations...\n')

  const migrations = [
    'v0.0.6-roles-and-permissions.sql'
  ]

  for (const migration of migrations) {
    console.log(`📝 Running: ${migration}`)
    const migrationPath = join(__dirname, '..', 'supabase', 'migrations', migration)
    
    try {
      const sql = readFileSync(migrationPath, 'utf8')
      
      // Execute via RPC call (Supabase doesn't support direct SQL execution via REST API)
      // We need to do this through the Supabase SQL Editor or Supabase CLI
      console.log(`   ⚠️  This migration needs to be run manually in Supabase SQL Editor`)
      console.log(`   📋 File: ${migration}`)
      
    } catch (error) {
      console.error(`   ❌ Error reading migration: ${error.message}`)
    }
  }

  console.log('\n📋 To run migrations:')
  console.log('1. Go to: https://supabase.com/dashboard/project/jazreuartewyrmbfhtdz/editor')
  console.log('2. Click "SQL Editor"')
  console.log('3. Copy and paste the contents of:')
  console.log('   - supabase/migrations/v0.0.6-roles-and-permissions.sql')
  console.log('4. Click "Run"')
  console.log('\nOr use Supabase CLI:')
  console.log('   npx supabase db push')
  console.log('')
}

runMigrations()

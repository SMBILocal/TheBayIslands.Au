#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs/promises';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

async function setupDatabase() {
  console.log('🚀 Setting up Bay Islands database schema...\n');
  
  // Read the schema file
  const schema = await fs.readFile('./supabase/schema-v0.0.2.sql', 'utf8');
  
  console.log('📄 Applying schema-v0.0.2.sql...\n');
  
  // Execute the schema
  const { data, error } = await supabase.rpc('exec_sql', { sql: schema });
  
  if (error) {
    console.error('❌ Error applying schema:', error);
    console.log('\n📝 Trying alternative method...\n');
    
    // Alternative: use REST API directly
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/exec_sql`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.SUPABASE_SECRET_KEY,
          'Authorization': `Bearer ${process.env.SUPABASE_SECRET_KEY}`
        },
        body: JSON.stringify({ sql: schema })
      }
    );
    
    if (!response.ok) {
      console.log('⚠️  Cannot apply schema via API. Please apply manually in Supabase SQL Editor:');
      console.log('1. Go to https://jazreuartewyrmbfhtdz.supabase.co');
      console.log('2. Click SQL Editor');
      console.log('3. Copy and paste contents of supabase/schema-v0.0.2.sql');
      console.log('4. Click Run\n');
      return;
    }
  }
  
  console.log('✅ Schema applied successfully!\n');
  
  // Now create/update the super admin user
  console.log('👤 Setting up super admin user...\n');
  
  const { data: userData, error: userError } = await supabase
    .from('users')
    .upsert({
      id: 'fd3284e3-ff1c-4b33-a1bf-921267fc6fbe',
      email: 'smbilocal@gmail.com',
      username: 'SMBI Local - The Bay Islands .Au',
      bio: 'The official local news and community portal for the Southern Moreton Bay Islands',
      is_premium: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }, { onConflict: 'id' })
    .select();
  
  if (userError) {
    console.error('❌ Error creating user:', userError);
  } else {
    console.log('✅ Super admin user created/updated:', userData);
  }
}

setupDatabase().catch(console.error);

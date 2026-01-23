#!/usr/bin/env node

/**
 * Seed Script for Role-Based System
 * v0.0.6 - Creates demo users at all role levels with associated data
 * 
 * Usage: node scripts/seed-v0.0.6-roles.js
 * 
 * Creates:
 * - 1 Super Admin
 * - 1 Admin
 * - 1 Moderator
 * - 1 Editor
 * - 3 Regular Users
 * - Demo comments on each other's content
 * - Demo ratings and reviews
 * - Articles, events, jobs, classifieds
 */

const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('❌ Error: Missing Supabase credentials');
  console.error('Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

// Demo user credentials
const DEMO_USERS = [
  {
    email: 'super.admin@demo.local',
    password: 'DemoPass123!',
    role: 'super_admin',
    displayName: 'Super Admin',
    username: 'superadmin',
  },
  {
    email: 'admin@demo.local',
    password: 'DemoPass123!',
    role: 'admin',
    displayName: 'Site Admin',
    username: 'admin',
  },
  {
    email: 'moderator@demo.local',
    password: 'DemoPass123!',
    role: 'moderator',
    displayName: 'Content Moderator',
    username: 'moderator',
  },
  {
    email: 'editor@demo.local',
    password: 'DemoPass123!',
    role: 'editor',
    displayName: 'Content Editor',
    username: 'editor',
  },
  {
    email: 'user1@demo.local',
    password: 'DemoPass123!',
    role: 'user',
    displayName: 'Demo User One',
    username: 'demouser1',
  },
  {
    email: 'user2@demo.local',
    password: 'DemoPass123!',
    role: 'user',
    displayName: 'Demo User Two',
    username: 'demouser2',
  },
  {
    email: 'user3@demo.local',
    password: 'DemoPass123!',
    role: 'user',
    displayName: 'Demo User Three',
    username: 'demouser3',
  },
];

async function seedRoles() {
  console.log('🌱 Starting role-based system seeding...\n');

  try {
    // Step 1: Create auth users and get their IDs
    console.log('📝 Step 1: Creating auth users...');
    const userIds = {};

    for (const user of DEMO_USERS) {
      try {
        const { data, error } = await supabase.auth.admin.createUser({
          email: user.email,
          password: user.password,
          email_confirm: true,
        });

        if (error) {
          console.log(`  ⚠️  ${user.email}: ${error.message}`);
          continue;
        }

        userIds[user.email] = data.user.id;
        console.log(`  ✅ Created: ${user.email} (${user.role})`);
      } catch (err) {
        console.log(`  ⚠️  ${user.email}: ${err.message}`);
      }
    }

    console.log('\n✨ Auth users created. Setting up profiles...\n');

    // Step 2: Create user profiles with roles
    console.log('👥 Step 2: Creating user profiles with roles...');

    for (const user of DEMO_USERS) {
      if (!userIds[user.email]) continue;

      const userId = userIds[user.email];

      const { error } = await supabase.from('users').insert({
        id: userId,
        email: user.email,
        username: user.username,
        display_name: user.displayName,
        user_role: user.role,
        status: 'active',
        created_at: new Date().toISOString(),
      });

      if (error) {
        console.log(`  ⚠️  ${user.email}: ${error.message}`);
      } else {
        console.log(`  ✅ Profile created: ${user.displayName} (${user.role})`);
      }
    }

    console.log('\n📚 Step 3: Creating sample articles...');

    // Create articles
    const articles = [
      {
        user_email: 'editor@demo.local',
        title: 'Welcome to South Moreton Bay Islands',
        slug: 'welcome-south-moreton-bay',
        content: 'Discover the beautiful islands of Russell, Macleay, Lamb, Karragarra and Redland Bay. This guide will help you explore everything the islands have to offer.',
        category: 'Guide',
      },
      {
        user_email: 'moderator@demo.local',
        title: 'Best Local Cafes Guide',
        slug: 'best-cafes-guide',
        content: 'Explore the finest cafes across the islands. From beachfront coffee spots to hidden gems in the heart of town.',
        category: 'Guide',
      },
      {
        user_email: 'user1@demo.local',
        title: 'My Favorite Island Walks',
        slug: 'favorite-island-walks',
        content: 'Here are my top 5 walking trails across the islands that offer stunning views and peaceful retreats.',
        category: 'Article',
      },
    ];

    let articleIds = {};
    for (const article of articles) {
      if (!userIds[article.user_email]) continue;

      const { data, error } = await supabase
        .from('articles')
        .insert({
          user_id: userIds[article.user_email],
          title: article.title,
          slug: article.slug,
          content: article.content,
          category: article.category,
          status: 'published',
          approval_status: 'approved',
          approved_by: userIds['super.admin@demo.local'],
          published_at: new Date().toISOString(),
        })
        .select();

      if (error) {
        console.log(`  ⚠️  "${article.title}": ${error.message}`);
      } else {
        articleIds[article.slug] = data[0].id;
        console.log(`  ✅ Article: "${article.title}"`);
      }
    }

    console.log('\n💬 Step 4: Creating sample comments...');

    // Create comments
    const comments = [
      {
        article_slug: 'welcome-south-moreton-bay',
        user_email: 'user1@demo.local',
        text: 'Great introduction to the islands! Looking forward to exploring.',
      },
      {
        article_slug: 'welcome-south-moreton-bay',
        user_email: 'user2@demo.local',
        text: 'Very helpful guide. I especially loved the local business recommendations!',
      },
      {
        article_slug: 'best-cafes-guide',
        user_email: 'user3@demo.local',
        text: 'Your cafe recommendations are spot on. Have you tried the new place in Russell?',
      },
      {
        article_slug: 'favorite-island-walks',
        user_email: 'moderator@demo.local',
        text: 'Beautiful walks! I added some of these to my weekend itinerary.',
      },
    ];

    for (const comment of comments) {
      if (!userIds[comment.user_email] || !articleIds[comment.article_slug]) continue;

      const { error } = await supabase.from('comments').insert({
        user_id: userIds[comment.user_email],
        content_id: articleIds[comment.article_slug],
        content_type: 'article',
        text: comment.text,
        status: 'active',
      });

      if (error) {
        console.log(`  ⚠️  Comment from ${comment.user_email}: ${error.message}`);
      } else {
        console.log(`  ✅ Comment by ${comment.user_email} on "${comment.article_slug}"`);
      }
    }

    console.log('\n⭐ Step 5: Creating business listings with ratings...');

    // Create sample business listings
    const businessListings = [
      {
        user_email: 'user1@demo.local',
        businessName: 'Island Coffee Co',
        category: 'Cafe',
        location: 'Russell Island',
        description: 'Locally roasted coffee and fresh pastries. Great views of the bay.',
      },
      {
        user_email: 'user2@demo.local',
        businessName: 'Bay Island Boutique',
        category: 'Retail',
        location: 'Macleay Island',
        description: 'Unique gifts and local crafts from island artisans.',
      },
    ];

    let businessIds = {};
    for (const business of businessListings) {
      if (!userIds[business.user_email]) continue;

      const { data, error } = await supabase
        .from('directory_listings')
        .insert({
          user_id: userIds[business.user_email],
          business_name: business.businessName,
          category: business.category,
          location: business.location,
          description: business.description,
          status: 'active',
          approval_status: 'approved',
          address: `${business.location}, QLD, Australia`,
        })
        .select();

      if (error) {
        console.log(`  ⚠️  "${business.businessName}": ${error.message}`);
      } else {
        businessIds[business.businessName] = data[0].id;
        console.log(`  ✅ Business: "${business.businessName}"`);
      }
    }

    console.log('\n⭐ Step 6: Creating ratings and reviews...');

    // Create ratings for businesses
    const ratings = [
      {
        listing_id: Object.values(businessIds)[0],
        user_email: 'user3@demo.local',
        rating: 5,
        review: 'Excellent coffee and friendly service!',
      },
      {
        listing_id: Object.values(businessIds)[0],
        user_email: 'moderator@demo.local',
        rating: 5,
        review: 'Best cafe on the islands. Highly recommend!',
      },
      {
        listing_id: Object.values(businessIds)[1],
        user_email: 'user1@demo.local',
        rating: 4,
        review: 'Great selection of local products. Reasonable prices.',
      },
      {
        listing_id: Object.values(businessIds)[1],
        user_email: 'editor@demo.local',
        rating: 5,
        review: 'Supporting local businesses is easy here!',
      },
    ];

    for (const ratingData of ratings) {
      if (!ratingData.listing_id || !userIds[ratingData.user_email]) continue;

      const { error } = await supabase.from('ratings').insert({
        user_id: userIds[ratingData.user_email],
        listing_id: ratingData.listing_id,
        listing_type: 'directory',
        rating: ratingData.rating,
        review_text: ratingData.review,
        status: 'active',
      });

      if (error) {
        console.log(`  ⚠️  Rating: ${error.message}`);
      } else {
        console.log(`  ✅ ${ratingData.rating}⭐ from ${ratingData.user_email}`);
      }
    }

    console.log('\n📅 Step 7: Creating sample events...');

    // Create sample events
    const events = [
      {
        user_email: 'user1@demo.local',
        title: 'Island Markets Community Gathering',
        location: 'Russell Island',
        startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        description: 'Join us for fresh local produce, crafts, and community fun.',
      },
      {
        user_email: 'editor@demo.local',
        title: 'Sunset Beach Cleanup',
        location: 'Macleay Island',
        startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        description: 'Help us keep our beaches clean and beautiful.',
      },
    ];

    for (const event of events) {
      if (!userIds[event.user_email]) continue;

      const { error } = await supabase.from('events').insert({
        user_id: userIds[event.user_email],
        title: event.title,
        location: event.location,
        address: event.location + ', QLD, Australia',
        start_date: event.startDate.toISOString(),
        end_date: new Date(event.startDate.getTime() + 3 * 60 * 60 * 1000).toISOString(),
        description: event.description,
        status: 'active',
        approval_status: 'approved',
      });

      if (error) {
        console.log(`  ⚠️  "${event.title}": ${error.message}`);
      } else {
        console.log(`  ✅ Event: "${event.title}"`);
      }
    }

    console.log('\n📢 Step 8: Creating sample job listings...');

    // Create sample jobs
    const jobs = [
      {
        user_email: 'user2@demo.local',
        title: 'Community Manager',
        category: 'Management',
        employmentType: 'full-time',
        description: 'Help us grow the local community. Build relationships and organize events.',
      },
      {
        user_email: 'user3@demo.local',
        title: 'Local Guide (Part-time)',
        category: 'Tourism',
        employmentType: 'part-time',
        description: 'Show visitors the best of our islands. Flexible hours.',
      },
    ];

    for (const job of jobs) {
      if (!userIds[job.user_email]) continue;

      const { error } = await supabase.from('jobs').insert({
        user_id: userIds[job.user_email],
        title: job.title,
        category: job.category,
        employment_type: job.employmentType,
        description: job.description,
        status: 'active',
        approval_status: 'approved',
        location: 'South Moreton Bay Islands, QLD',
      });

      if (error) {
        console.log(`  ⚠️  "${job.title}": ${error.message}`);
      } else {
        console.log(`  ✅ Job: "${job.title}"`);
      }
    }

    console.log('\n🎉 Step 9: Creating sample classifieds...');

    // Create sample classifieds
    const classifieds = [
      {
        user_email: 'user1@demo.local',
        title: 'Vintage Bicycle - Good Condition',
        price: 150,
        category: 'Bikes',
        condition: 'good',
        description: 'Classic road bike, recently serviced. Great for island riding.',
      },
      {
        user_email: 'user3@demo.local',
        title: 'Island Map Collection',
        price: 45,
        category: 'Books',
        condition: 'excellent',
        description: 'Beautiful vintage island maps. Perfect for history buffs.',
      },
    ];

    for (const classified of classifieds) {
      if (!userIds[classified.user_email]) continue;

      const { error } = await supabase.from('classifieds').insert({
        user_id: userIds[classified.user_email],
        title: classified.title,
        price: classified.price,
        category: classified.category,
        condition: classified.condition,
        description: classified.description,
        location: 'South Moreton Bay Islands',
        status: 'active',
        approval_status: 'approved',
      });

      if (error) {
        console.log(`  ⚠️  "${classified.title}": ${error.message}`);
      } else {
        console.log(`  ✅ Classified: "${classified.title}"`);
      }
    }

    console.log('\n\n✨ Seeding complete!\n');
    console.log('📋 Demo Accounts Created:');
    DEMO_USERS.forEach((user) => {
      console.log(`  • ${user.email} (${user.role})`);
      console.log(`    Password: ${user.password}`);
    });

    console.log('\n💡 Next steps:');
    console.log('  1. Log in with super.admin@demo.local');
    console.log('  2. Explore the admin dashboards');
    console.log('  3. Test approval workflows');
    console.log('  4. View comments and ratings');
    console.log('\n✅ Ready for testing!\n');

  } catch (error) {
    console.error('❌ Error during seeding:', error.message);
    process.exit(1);
  }
}

seedRoles();

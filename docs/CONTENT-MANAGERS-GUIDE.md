# 📊 Content Manager's Guide - Adding & Updating Content

## Overview

All the new pages use **centralized data files** in the `lib/` folder. This makes it incredibly easy to add, update, or remove content without touching any code or components.

---

## 🏗️ Architecture

### How It Works

1. **Data Files** (`lib/`) - Contains all content
2. **Pages** (`app/`) - Display the data
3. **Components** - Handle styling and layout

**Result:** Change data = changes appear on site instantly. No code changes needed!

---

## 📝 Community Noticeboard

**File:** `lib/community-data.ts`

### Adding a Notice

```typescript
{
  id: 'unique-id-here',
  title: 'Russell Island Playgroup - Free Session',
  description: 'Free playgroup session for toddlers aged 1-4. Activities include music, storytelling, and social interaction.',
  icon: '👶',  // Use any emoji or Unicode character
  location: 'Russell Island Community Hall',
  date: '2026-02-05',  // Format: YYYY-MM-DD
  time: '10:00 - 12:00',
  price: 'Free',  // Or '$10 per session', etc.
  category: 'toddlers',  // Options: 'toddlers' | 'teens' | 'adults' | 'seniors' | 'support'
  url: '/community/russell-playgroup',  // Optional: link to details page
}
```

### Required Fields
- `id` - Unique identifier (no spaces, use hyphens)
- `title` - Short title
- `description` - 1-2 sentences
- `icon` - Emoji that represents it
- `location` - Where it happens
- `category` - One of the 5 categories

### Optional Fields
- `date` - Event date (YYYY-MM-DD format)
- `time` - Event time
- `price` - Cost or "Free"
- `url` - Link to more details

### Categories Available
1. `toddlers` - 👶 Toddlers & Children
2. `teens` - 👨‍🎓 Teens & Young Adults
3. `adults` - 👨‍💼 Adults
4. `seniors` - 👴 Seniors
5. `support` - 🤝 Support & Donations

### Example: Complete Notice

```typescript
{
  id: 'russell-island-coding',
  title: 'Russell Island Coding Workshop for Teens',
  description: 'Learn Python and web development! For ages 13-18. No experience required. Limited spots available.',
  icon: '💻',
  location: 'Russell Island Community Centre',
  date: '2026-03-10',
  time: '14:00 - 17:00',
  price: 'Free',
  category: 'teens',
  url: '/events/coding-workshop'
}
```

---

## ⚽ Sports Guide

**File:** `lib/sports-data.ts`

### Adding a Sports Club

```typescript
{
  island: 'Russell Island',
  club: 'Russell Island Football Club',
  sport: 'Soccer',
  icon: '⚽',
  feedUrl: 'https://teamapp.com/events?club=rifc',  // RSS feed or events page
  website: 'https://www.rfc.com.au',  // Optional
  notes: 'Juniors & seniors fixtures'
}
```

### Required Fields
- `island` - Which island/area
- `club` - Club name
- `sport` - Type of sport
- `icon` - Sport emoji
- `feedUrl` - URL to events/schedule

### Optional Fields
- `website` - Club website URL
- `notes` - Extra info (age groups, seasons, etc.)

### Adding an Upcoming Event

```typescript
{
  title: 'Russell Island Football Juniors vs Redland City',
  startDate: '2026-02-15T15:30:00',  // ISO 8601 format: YYYY-MM-DDTHH:MM:SS
  url: 'https://teamapp.com/events/123',
  location: 'Russell Island Sports Ground',
  locationName: 'Russell Island Sports Ground',
  locationAddress: 'Russell Island QLD 4184',
  sportIcon: '⚽',
  island: 'Russell Island'
}
```

### Sport Icons Reference
- ⚽ Soccer/Football
- 🏉 Rugby League
- 🤾‍♀️ Netball
- 🎳 Bowls
- 🏏 Cricket
- 🏀 Basketball
- 🎾 Tennis
- 🏅 Multi-sport

---

## 📺 TV Stations

**File:** `lib/tv-stations-data.ts`

### Adding a TV Station

```typescript
{
  name: 'Channel 7 Brisbane',
  channelNumber: '7',
  website: 'https://7news.com.au/queensland',
  logo: '/logos/channel7.png',  // Optional: path to logo image
  description: 'Local Queensland news and programs. Serving the Bay Islands and Redlands Coast.',
  broadcastTypes: ['News', 'Current Affairs', 'Entertainment', 'Weather']
}
```

### Required Fields
- `name` - Station name
- `description` - What they broadcast

### Optional Fields
- `channelNumber` - Channel number
- `website` - Station website
- `streamUrl` - Stream URL
- `logo` - Path to logo image
- `broadcastTypes` - Array of content types

### Available Broadcast Types
- News
- Current Affairs
- Sports
- Entertainment
- Weather
- Documentary
- Kids
- Lifestyle
- Cultural
- Education

### Adding a Sample Program

```typescript
{
  channel: '7',
  time: '6:00 PM - 7:00 PM',
  program: '7 News QLD',
  category: 'news',  // Options: 'news' | 'sports' | 'entertainment' | 'lifestyle' | 'kids' | 'documentary'
  description: 'Comprehensive Queensland news with local Redlands coverage'
}
```

---

## ⛵ Maritime & Boating

**File:** `lib/maritime-data.ts`

### Adding a Marina

```typescript
{
  name: 'Russell Island Marina',
  island: 'Russell Island',
  location: 'Main Jetty Area',
  lat: -27.629,  // Latitude
  lng: 153.21,   // Longitude
  services: ['Boat Ramp', 'Mooring', 'Fuel', 'Maintenance'],
  parking: 'Waterfront Parking - 50 spaces',
  contact: '+61 7 1234 5678',  // Optional
  website: 'https://www.russellislandmarina.com.au',  // Optional
  icon: '⚓'
}
```

### Marina Services Available
- Boat Ramp
- Mooring
- Fuel
- Maintenance
- Repair Services
- Dry Stack Storage
- Chandlery
- Storage Facilities
- Jetty Access
- Launch Services

### Adding a Ferry Terminal

```typescript
{
  name: 'Russell Island Ferry Terminal',
  island: 'Russell Island',
  location: 'Main Jetty',
  lat: -27.629,
  lng: 153.21,
  ferryOperator: 'TransLink / Redland Transit',
  website: 'https://www.translink.com.au',
  schedule: 'Multiple daily services',
  routes: ['Russell Island - Redland Bay', 'Russell Island - Cleveland', 'Inter-island'],
  icon: '⛴️'
}
```

### Adding a Fishing Spot

```typescript
{
  name: 'Russell Island Rock Ledges',
  island: 'Russell Island',
  location: 'Eastern Foreshore',
  type: 'Rock Fishing',  // Options: 'Rock Fishing' | 'Beach Fishing' | 'Boat Fishing'
  bestSpecies: ['Bream', 'Whiting', 'Flathead', 'Jewfish'],
  seasonalInfo: 'Year-round, best spring-summer',
  lat: -27.629,
  lng: 153.21
}
```

### Adding Infrastructure Update

```typescript
{
  title: 'Russell Island Main Road Upgrade',
  status: 'In Progress',  // Options: 'In Progress' | 'Planning' | 'Maintenance' | 'Complete'
  completion: '2026-06-30',  // Format: YYYY-MM-DD
  description: 'Road widening and drainage improvements',
  icon: '🏗️'
}
```

---

## 📰 Local News

**File:** `lib/news-sources.ts`

### Adding a News Source

```typescript
{
  name: 'Redland City Bulletin',
  url: 'https://www.redlandbulletin.com.au/rss',  // RSS feed URL
  icon: '📰',
  description: 'Local news covering Redland City and surrounding areas',
  region: 'Redland City'  // Geographic region
}
```

### Adding a Newspaper/Publication

```typescript
{
  name: 'Redland City Bulletin',
  type: 'Weekly Newspaper',  // Options: 'Weekly Newspaper' | 'Digital Publication' | 'Council Newsletter' | 'Community Magazine'
  website: 'https://www.redlandbulletin.com.au',
  description: 'Long-established local newspaper covering Redland City and Bay Islands',
  icon: '📰',
  circulation: 'Print & Digital'  // How it's distributed
}
```

### Adding a Radio Station

```typescript
{
  name: 'ABC Radio Brisbane',
  type: 'Radio Station',
  frequency: '612 AM / Digital',
  website: 'https://www.abc.net.au/radio/brisbane',
  description: 'Public broadcasting with news, current affairs, and community programs',
  icon: '📻',
  service: 'Live & Podcast'  // How available
}
```

---

## 🔄 Common Tasks

### How to Update Content

1. **Open the data file** - e.g., `lib/community-data.ts`
2. **Find the entry** - Look for the title or ID
3. **Edit the information** - Change any field
4. **Save the file** - Press Ctrl+S
5. **Site updates automatically** - Changes live on next page load!

### How to Add Multiple Items at Once

```typescript
// Simply add more items to the array
export const communityNotices: Notice[] = [
  { ... existing notice ... },
  { ... existing notice ... },
  { new: 'notice' },  // Add your new item
  { another: 'notice' },  // Add more!
]
```

### How to Delete Content

1. Open the data file
2. Find the entry you want to delete
3. Delete the entire object (including the comma)
4. Save
5. It's gone from the site!

### How to Reorder Items

Simply move the items around in the array. The page displays them in order.

---

## ✅ Best Practices

### Before Adding Content

- [ ] Do you have a unique ID? (no spaces, use hyphens)
- [ ] Is the URL/address correct?
- [ ] Is the date in YYYY-MM-DD format?
- [ ] Do you have a good description?
- [ ] Is the category correct?
- [ ] Does the icon match the content?

### For Quality Content

1. **Clear titles** - Users should understand immediately
2. **Good descriptions** - 1-2 sentences, informative
3. **Correct locations** - Full address or clear landmark
4. **Accurate dates** - Double-check before publishing
5. **Right category** - Put content in appropriate section
6. **Good icons** - Choose emoji that represents the item

### Performance Tips

1. **Keep descriptions short** - 2-3 sentences max
2. **Use specific dates** - "Feb 15" better than "next month"
3. **Verify URLs** - Make sure links are correct
4. **Check spelling** - Avoid typos
5. **Use consistent formatting** - Match existing style

---

## 🆘 Troubleshooting

### Content not appearing?
- Check for syntax errors (missing commas, brackets)
- Verify the array is exported correctly
- Make sure the file was saved
- Reload the page in your browser

### Date format wrong?
- Use YYYY-MM-DD format
- Example: 2026-02-15 (not Feb 15 or 15/2/26)

### Price displaying wrong?
- Use format like: "Free" or "$10 per session"
- Don't use special characters unless needed

### Icon not showing?
- Emojis might not work on all systems
- Use common Unicode characters
- Test on desktop and mobile

---

## 📱 Data Format Reference

### Dates
- Format: `YYYY-MM-DD` (2026-02-15)
- Time: `HH:MM` format in 24-hour (14:30)
- DateTime: `YYYY-MM-DDTHH:MM:SS` (2026-02-15T14:30:00)

### URLs
- Always start with `https://` for external
- Use `/path` for internal links
- Make sure they work by testing

### Pricing
- "Free"
- "$10 per session"
- "$500 per month"
- "Contact for pricing"
- "Donation based"

### Categories
- Community: `toddlers`, `teens`, `adults`, `seniors`, `support`
- News: By region (e.g., "Redland City", "Bay Islands")
- Sports: By island
- Maritime: By location
- TV: By station type

---

## 🚀 Scaling Up

### When You Have Lots of Content

```typescript
// Group items by category
export const kidNotices = communityNotices.filter(n => n.category === 'toddlers')
export const seniorNotices = communityNotices.filter(n => n.category === 'seniors')

// Or use for filtering on the page
```

### As Content Grows

Consider:
1. **Pagination** - Show 10 items per page
2. **Search** - Let users find items by keyword
3. **Filtering** - Sort by date, location, price
4. **Admin panel** - Manage without editing code
5. **Database** - Move to a database for thousands of items

---

## 💾 Backup & Version Control

### Always Keep Backups
- Use Git to track changes
- Commit before making big updates
- Create a backup branch before major changes

### Rolling Back Changes
```bash
git log              # See history
git restore filename # Undo changes
git revert commit    # Revert a commit
```

---

## 📞 Need Help?

Check the documentation:
- `docs/IMPLEMENTATION-SUMMARY-2026.md` - Full technical details
- `docs/QUICK-START-NEW-FEATURES.md` - User guide
- Code comments in `lib/` files
- Page components show how data is used

---

**Created:** January 23, 2026
**Version:** 1.0
**Last Updated:** January 23, 2026

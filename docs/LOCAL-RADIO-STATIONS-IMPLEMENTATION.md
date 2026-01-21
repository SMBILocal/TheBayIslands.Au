# Local Radio Stations Page Implementation

**Status:** Phase 2 Enhancement (v0.0.4)  
**Created:** January 21, 2026  
**Objective:** Create comprehensive local radio stations directory with streaming capabilities, SEO optimization, and Bay Islands Radio as primary featured station.

---

## 📋 Overview

The Bay Islands are served by diverse FM radio stations, with **Bay Islands Radio (88.0 MHz)** being the primary community broadcaster. This implementation creates a dedicated page showcasing all accessible local and regional stations with:

- **Detailed station profiles** (history, location, format, years established)
- **Bay Islands Radio as featured station** with embedded streaming player
- **Dropdown selector** for alternate station streams (if available via internet)
- **SEO optimization** for local radio search queries
- **Structured data** (Schema.org) for improved search visibility
- **Mobile-responsive design** for all devices

---

## 🎯 Key Features

### 1. **Featured Station: Bay Islands Radio (88.0 FM)**
- **Call Sign:** Island FM / Bay Islands Community Radio
- **Frequency:** 88.0 MHz FM
- **Format:** Community variety (70s, 80s, 90s, local content)
- **Coverage:** Russell Island, Macleay Island, Lamb Island, southern Moreton Bay
- **Established:** Historically significant local broadcaster
- **Streaming:** Primary player on page
- **Content:** Local news, community announcements, music

### 2. **Regional Station Directory**
Organized by frequency with full profiles:

#### Tier 1: Local Community Stations
- **Bay Islands Radio (88.0)** - Primary featured
- **Bay FM (100.3)** - Redland City community, 4BAY callsign

#### Tier 2: Brisbane-Area Community Radio
- **96five (96.5)** - Christian community (Brisbane)
- **4EB (98.1)** - Multilingual community (Brisbane)
- **4AAA (98.9)** - Indigenous-focused, Murri Country
- **4MBS Classic FM (103.7)** - Classical music (Brisbane)
- **4ZZZ (102.1)** - Independent community (Brisbane)

#### Tier 3: Commercial & National
- **Rebel FM (99.4)** - Rock format (Gold Coast/Brisbane)
- **Nova (106.9)** - Commercial pop (Brisbane)
- **Triple J (107.7)** - National youth network
- **KIIS (97.3)** - Commercial pop (Brisbane)

### 3. **SEO Optimization Targets**

**Primary Keywords:**
- "Bay Islands Radio" + frequency/FM
- "Local radio stations Moreton Bay"
- "Russell Island radio" / "Macleay Island radio" / "Lamb Island radio"
- "Community radio Brisbane Bay Islands"
- "88.0 FM radio stations"
- "Redland City radio"

**Secondary Keywords:**
- "Island community broadcasting"
- "Local FM stations near me"
- "Bay Islands media"
- "Queensland community radio"
- "Moreton Bay digital radio"

**Local SEO:**
- Geographic modifiers: Russell Island, Macleay Island, Lamb Island, Redland City, Moreton Bay
- Broadcast coverage area maps
- Distance calculations from island locations
- Local history and establishment dates

### 4. **Structured Data (Schema.org)**

```json
{
  "@context": "https://schema.org",
  "@type": "BroadcastService",
  "name": "Bay Islands Radio",
  "url": "https://thebayislands.au/radio",
  "broadcastFrequency": [
    {
      "@type": "BroadcastFrequency",
      "frequency": "88.0",
      "frequencyUnit": "MHz FM"
    }
  ],
  "serviceArea": {
    "@type": "Place",
    "name": "Moreton Bay Islands",
    "geo": {
      "@type": "GeoShape",
      "box": "-27.6 153.1 -27.5 153.2"
    }
  },
  "broadcastType": ["RADIO", "LIVE"],
  "sameAs": "Bay Islands Radio community broadcaster"
}
```

### 5. **Page Structure**

```
/radio
├── Hero Section
│   ├── Title: "Bay Islands Radio & Local Community Stations"
│   └── Subtitle: "Tune in to the heartbeat of Moreton Bay"
├── Featured Player Section
│   ├── Bay Islands Radio (88.0 MHz)
│   ├── Play/Pause controls
│   ├── Volume slider
│   ├── Station info (frequency, format, coverage)
│   └── Stream selector dropdown
├── Station Directory
│   ├── By Frequency sorted table
│   ├── Detailed profiles with:
│   │  ├── Station name & callsign
│   │  ├── Frequency & format
│   │  ├── Coverage area & distance from islands
│   │  ├── Years established / history
│   │  ├── Broadcast details
│   │  └── Local significance
├── SEO Content Sections
│   ├── Local history of island broadcasting
│   ├── How to tune in guide
│   ├── Coverage maps
│   └── FAQ about local radio
└── Breadcrumb Navigation
    └── Home > Radio Stations
```

---

## 🛠️ Technical Implementation

### Page File Structure
```
app/radio/
├── page.tsx          (Main radio stations page)
├── layout.tsx        (Radio section layout with metadata)
└── components/
    ├── RadioPlayer.tsx       (Featured player with dropdown)
    ├── StationDirectory.tsx   (Sortable station list)
    └── StationProfile.tsx     (Individual station cards)
```

### Key Components

**RadioPlayer Component:**
- Play/pause controls (design consideration: simple or functional?)
- Volume control
- Station info display (name, frequency, format)
- Dropdown to select alternate streams
- Current stream indicator
- Mobile-responsive layout

**StationDirectory Component:**
- Sortable by frequency
- Search/filter by name, format, or coverage
- Expandable station profiles
- Links to external station websites (where available)
- Distance calculator (if geolocation available)

**StationProfile Component:**
- Station name, callsign, frequency
- Detailed history paragraph
- Coverage area map
- Broadcast format & hours
- Contact info / website link
- Local significance notes

### SEO Implementation
- Meta title: "Bay Islands Radio & Local FM Stations | Moreton Bay"
- Meta description: "Stream Bay Islands Radio (88.0 FM) and discover local community stations serving Russell Island, Macleay Island, Lamb Island & Redland City"
- Open Graph image: Bay Islands Radio branded image
- Schema.org BroadcastService structured data
- Sitemap inclusion
- Local business schema for broadcasting service

---

## 📊 Station Data Structure

```typescript
interface RadioStation {
  id: string;
  name: string;
  callsign?: string;
  frequency: number;
  frequencyUnit: "MHz FM" | "MHz DAB" | "AM";
  format: string;
  coverage: string[];
  yearsEstablished?: number;
  history: string;
  broadcastDetails: {
    type: "Community" | "Commercial" | "Indigenous" | "Specialist" | "National";
    target_audience: string;
    hours?: string;
  };
  location: {
    region: string;
    distanceFromBayIslands?: number;
    geoCoords?: { lat: number; lng: number };
  };
  streaming?: {
    available: boolean;
    url?: string;
    format?: string;
  };
  website?: string;
  featured?: boolean;
}
```

---

## 📝 Detailed Station Profiles

### Bay Islands Radio (88.0 MHz FM)
**Primary Featured Station**

**History:** Bay Islands Radio has been the voice of the Southern Moreton Bay Islands community since its establishment. Serving the residents of Russell Island, Macleay Island, and Lamb Island, the station has built a strong reputation for local content, community news, and variety music from the 70s through 90s. The station represents the spirit of island independence and local connection that defines the Bay Islands community.

**Coverage:** Russell Island, Macleay Island, Lamb Island, parts of southern Redland Bay  
**Distance:** Broadcasting from the Bay Islands themselves  
**Format:** Community variety (70s-90s music, local news, announcements)  
**Broadcast Hours:** [To be confirmed]  
**Significance:** Highest priority local broadcaster for Bay Islands residents and visitors

---

### Bay FM (100.3 MHz FM / 4BAY)
**Local Community Radio - Redland City**

**History:** Bay FM has served the Redland City and eastern Brisbane communities with quality community radio programming. Operating on 100.3 MHz, it provides an important connection between the mainland and island communities of the Bay.

**Coverage:** Redland City, eastern Brisbane suburbs, accessible from Bay Islands  
**Distance:** ~15-20 km from Russell Island  
**Format:** Community radio (local content, news, music mix)  
**Significance:** Primary link between Bay Islands and Redland City mainland services

---

### 96five (96.5 MHz FM)
**Christian Community Radio - Brisbane**

**History:** Operating from Brisbane, 96five serves as a faith-based community broadcaster providing Christian-focused programming, music, and values-driven content to the broader Brisbane region including accessible areas of Moreton Bay.

**Coverage:** Brisbane metro area, accessible from Bay Islands  
**Distance:** ~30-40 km from Russell Island  
**Format:** Christian music and talk radio  
**Target Audience:** Christian community listeners

---

### 4AAA (98.9 MHz FM) - Murri Country
**Indigenous Community Radio**

**History:** 4AAA represents Indigenous Australian voices through community radio, focusing on Aboriginal and Torres Strait Islander culture, music, news, and community engagement.

**Coverage:** Brisbane region, accessible from Bay Islands  
**Distance:** ~35-45 km from Russell Island  
**Format:** Indigenous music and cultural programming  
**Significance:** Important representation of Indigenous culture in Queensland broadcasting

---

### 4EB (98.1 MHz FM)
**Multilingual Community Radio - Brisbane**

**History:** 4EB provides multilingual broadcasting to Brisbane's diverse communities, offering programming in numerous languages and fostering cultural exchange and community connection.

**Coverage:** Brisbane metro, accessible from Bay Islands  
**Distance:** ~35-45 km  
**Format:** Multilingual community radio (20+ languages)  
**Languages:** Vietnamese, Italian, Spanish, Arabic, Chinese, and many others

---

### Rebel FM (99.4 MHz FM / 4RBL)
**Rock Format - Gold Coast/Brisbane**

**History:** Rebel FM has established itself as the premier rock music station for the Gold Coast and Brisbane regions, with active rock format and strong listener engagement. The station broadcasts from multiple regional transmitters.

**Coverage:** Gold Coast, Brisbane, South East Queensland (with regional repeaters)  
**Distance:** ~50-60 km to transmitter  
**Format:** Active rock, news, entertainment  
**Transmitter Locations:** Main: 99.4 MHz (Gold Coast/Brisbane), Regional: 90.5 MHz (Logan), 106.7 MHz (Wide Bay)

---

### 4MBS Classic FM (103.7 MHz FM)
**Classical Music - Brisbane**

**History:** Australia's premier classical music broadcaster, 4MBS brings world-class classical music and fine arts programming to Brisbane and surrounding regions with high-fidelity audio.

**Coverage:** Brisbane metro, accessible from Bay Islands  
**Distance:** ~40-50 km  
**Format:** Classical music, arts, culture programming  
**Significance:** Highest quality audio stream of any local broadcaster

---

### 4ZZZ (102.1 MHz FM)
**Independent Community Radio - Brisbane**

**History:** 4ZZZ represents independent, community-driven broadcasting with eclectic music, alternative programming, and grassroots communication.

**Coverage:** Brisbane metro  
**Distance:** ~35-45 km  
**Format:** Independent community, eclectic music  
**Community Focus:** Alternative, grassroots programming

---

### Triple J (107.7 MHz FM)
**National Youth Network**

**History:** Australia's premier youth broadcaster, Triple J provides music discovery, entertainment, and cultural commentary to young Australians nationwide with strong FM coverage.

**Coverage:** National (Brisbane area on 107.7)  
**Distance:** Nationwide network  
**Format:** Youth music and entertainment  
**Demographics:** 16-40 age group

---

### Nova (106.9 MHz FM)
**Commercial Pop - Brisbane**

**History:** Nova represents mainstream commercial radio in Brisbane with pop-focused programming, entertainment, and wide listener appeal.

**Coverage:** Brisbane metro, accessible from Bay Islands  
**Distance:** ~40-50 km  
**Format:** Commercial pop music and entertainment

---

### KIIS (97.3 MHz FM)
**Commercial Pop - Brisbane**

**History:** KIIS is a well-established commercial radio station with mainstream pop programming serving the Brisbane metropolitan area.

**Coverage:** Brisbane metro  
**Distance:** ~40-50 km  
**Format:** Mainstream pop and entertainment

---

## 🔍 SEO Content Sections

### "How to Tune In: Local Radio in the Bay Islands"
Bay Islanders have enjoyed rich community radio traditions for decades. With Bay Islands Radio at 88.0 FM as your primary local station, you also have access to a diverse range of mainland Brisbane and regional broadcasters. This guide helps you discover the best stations for your interests...

### "Local Radio History: Broadcasting in Moreton Bay"
The history of radio broadcasting in the Southern Moreton Bay Islands reflects the community's commitment to local connection and cultural expression...

### "Frequently Asked Questions About Local Radio"
- Why 88.0 FM? Dedicated to Bay Islands Radio
- Can I stream these online? Yes (details about streaming availability)
- What's the best time to listen? (Peak programming hours)
- How do I get coverage of island events? (Contact local station)

---

## 🎨 UI/UX Considerations

**Desktop Layout:**
- Featured player: Left column (40%)
- Station directory: Right column (60%)
- Scrollable station list with expandable profiles

**Mobile Layout:**
- Full-width featured player
- Collapsible station directory below
- Tab-based navigation (Featured / Directory / About)

**Accessibility:**
- ARIA labels on player controls
- Keyboard navigation for dropdown
- Semantic HTML for screen readers
- High contrast text on background

---

## 📊 Performance Notes

**Streaming Considerations:**
- Bay Islands Radio stream URL: [To obtain from station]
- Audio format: MP3 or AAC recommended
- Bitrate: 128kbps minimum for quality
- Backup streaming service: Consider Shoutcast or TuneIn integration
- Cache: Station metadata (update weekly)

**Page Performance:**
- Lazy load station images
- Compress all audio/video
- Use CDN for streaming assets
- Minimize JavaScript for player
- Static site generation for SEO content

---

## 📅 Implementation Timeline

**Phase 2a: Radio Station Page (1 week)**
1. Create page structure and layout
2. Build RadioPlayer component with featured Bay Islands Radio
3. Implement StationDirectory with all 11 stations
4. Add SEO metadata and structured data

**Phase 2b: Streaming Integration (1 week)**
1. Obtain Bay Islands Radio streaming URL
2. Test streaming player on all browsers
3. Add dropdown selector for alternate streams
4. Implement error handling for stream failures

**Phase 2c: Content & Optimization (1 week)**
1. Write detailed station profiles (SEO-optimized)
2. Add local history sections
3. Create FAQ section
4. Test page on mobile, tablet, desktop
5. Performance optimization

---

## 🔗 Related Features

- **Radio Widget in Header:** Planned for Phase 4 (separate implementation)
- **Local Business Directory:** Link stations to Bay Islands business profiles
- **Events Calendar:** Promote station-hosted events
- **Community Forum:** Discuss local radio and broadcasting

---

## 📝 Notes

- **Streaming Legality:** Ensure all streaming URLs are authorized by station operators
- **Attribution:** Link back to official station websites where available
- **Updates:** Maintain station information database for accuracy
- **User Feedback:** Add ability for users to suggest new stations or corrections
- **Analytics:** Track which stations are most popular with Bay Islands audience

---


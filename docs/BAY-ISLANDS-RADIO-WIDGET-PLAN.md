# Bay Islands Radio Widget - Implementation Plan

## Overview
Add a live-streaming radio widget to The Bay Islands website, featuring Bay Islands Radio 98.8 FM (or 88.9 FM—confirm correct frequency). This widget will display the current song, time/date, and allow users to play/pause the stream directly from the site.

## Objectives
1. Increase community engagement and keep users on the site longer
2. Drive traffic to local radio partnerships
3. Enhance the local community feel of the platform
4. Provide real-time entertainment while browsing the directory

## Feature Set

### 1. Radio Widget Location
- **Primary Location:** Top header bar (centered)
- **Secondary Location:** Optional: Sidebar widget on main pages, footer (as alternate)
- **Responsive:** Scales from desktop (full info) → tablet (compact) → mobile (icon only)

### 2. Display Elements
- **Live Stream Status:** ON/OFF (visual indicator)
- **Station Name:** "Bay Islands Radio 98.8"
- **Current Song:** Song title and artist (fetched from streaming API)
- **Play/Pause Button:** 
  - Shows as ▶️ (play) when stream is off
  - Changes to ⏸ (pause) when stream is active
  - Click to toggle stream playback
- **Time/Date:** Current time and date (auto-updated)
- **Link to Station:** Optional link to full radio website or Tunein/Spotify

### 3. Technical Requirements

#### Data Source
- **Streaming URL:** Confirm Bay Islands Radio 98.8 FM streaming URL
- **Current Song API:** Integration with radio station API (if available) or manual updates
- **Fallback:** If live data unavailable, show "Bay Islands Radio" with generic "Now Playing" message

#### Audio Playback
- Use HTML5 `<audio>` element for browser-native playback
- Stream format: MP3 or AAC (based on what the station provides)
- Volume control: Inherited from device speaker settings
- CORS handling: Ensure streaming URL is CORS-enabled or use proxy

#### Components
1. **RadioWidget.tsx** - Main component
2. **useRadioStream.ts** - Custom hook for managing stream state
3. **radioStation.constants.ts** - Station config (name, URL, frequency)
4. Optional: **useCurrentSong.ts** - Fetch current song data (if API available)

### 4. User Experience

#### Desktop View (1200px+)
```
┌─────────────────────────────────────────┐
│  🎙️ Bay Islands Radio 98.8  |  ▶️ Play │
│  Currently Playing: [Song Name]         │
│  [Date & Time]                          │
└─────────────────────────────────────────┘
```

#### Tablet View (768px - 1199px)
```
┌──────────────────────────────┐
│  Bay Islands Radio | ▶️ Play │
│  [Song Name]                 │
└──────────────────────────────┘
```

#### Mobile View (<768px)
```
┌──────────────────────┐
│  🎙️ | ▶️ | [Time]   │
└──────────────────────┘
```

### 5. Integration Points

#### In Header
- Add radio widget to `components/Navbar.tsx` (right side or center section)
- Ensure it doesn't interfere with existing navigation
- Use flexbox to position and ensure responsive alignment

#### In Footer
- Optional: Add a link to "Listen on Bay Islands Radio 98.8"
- Link to station website or Tunein

#### On Main Pages
- Optional: Add a sidebar widget on `/directory`, `/events`, `/jobs`
- Promotes continuous engagement while browsing

### 6. Styling & Branding
- **Colors:** Match site theme (blue gradient with orange accent)
- **Radio Badge:** Optional "🎙️" emoji or custom icon
- **Animations:** Subtle pulse when playing, smooth transitions
- **Hover State:** Highlight on desktop, tap feedback on mobile

### 7. State Management
- **Stream Active:** Boolean (playing/stopped)
- **Current Song:** String (title + artist)
- **Time/Date:** Auto-update every 60 seconds
- **Error State:** Show message if stream unavailable

### 8. Fallback Handling
- If station URL unavailable: Show "Station offline" message
- If current song API fails: Show "Now Playing on Bay Islands Radio"
- If audio format unsupported: Show browser error message with link to listen online

## Implementation Phases

### Phase 1: Setup & Config (2 hours)
- [ ] Confirm Bay Islands Radio 98.8 (or 88.9) streaming URL
- [ ] Create `radioStation.constants.ts` with config
- [ ] Set up component scaffold

### Phase 2: Core Widget (4 hours)
- [ ] Build `RadioWidget.tsx` component
- [ ] Implement HTML5 audio playback
- [ ] Add play/pause toggle
- [ ] Add time/date display

### Phase 3: Integration & Styling (3 hours)
- [ ] Integrate into Navbar header
- [ ] Add responsive styling
- [ ] Test on desktop, tablet, mobile
- [ ] Add animations and polish

### Phase 4: Current Song Integration (2 hours)
- [ ] Integrate with radio station API (if available)
- [ ] Build `useCurrentSong.ts` hook
- [ ] Test live data updates

### Phase 5: Testing & Deployment (2 hours)
- [ ] Browser compatibility testing (Chrome, Safari, Firefox, Mobile)
- [ ] Audio quality testing
- [ ] Performance optimization
- [ ] Deploy to staging and production

**Total Estimated Time:** 13 hours

## Files to Create
1. `/components/RadioWidget.tsx` - Main widget component
2. `/lib/hooks/useRadioStream.ts` - Custom hook for stream management
3. `/lib/hooks/useCurrentSong.ts` - Hook for current song data
4. `/lib/radioStation.constants.ts` - Station configuration
5. `/styles/radio-widget.css` - Optional: CSS for animations

## Files to Modify
1. `/components/Navbar.tsx` - Add RadioWidget integration
2. `/styles/globals.css` - Add radio widget styles (if needed)

## Example API Endpoints (if integrating current song)
- Tunein API: `/api/current-song?station=BayIslandsRadio`
- Custom API: `/api/radio/now-playing`
- WebSocket: Real-time song updates (optional)

## Success Metrics
- [ ] Widget loads without errors
- [ ] Play/pause button works on all devices
- [ ] Audio stream plays for at least 5 minutes
- [ ] Time/date updates every 60 seconds
- [ ] Responsive design works on all breakpoints
- [ ] No console errors
- [ ] Performance: Widget load time <500ms
- [ ] Accessibility: ARIA labels for screen readers

## Notes
- Consider adding a "Station Info" tooltip with link to website
- Potential future enhancement: Show upcoming shows/schedule
- Possible integration with events calendar (live shows, music events)
- Consider adding volume control for better UX
- Test with different network speeds (simulate slow 3G for mobile)

---

**Document Created:** January 21, 2026  
**Status:** Planning  
**Priority:** Phase 4 (after pricing and core features stabilize)

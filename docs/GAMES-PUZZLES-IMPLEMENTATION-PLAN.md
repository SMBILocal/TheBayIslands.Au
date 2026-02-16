# Bay Islands Games & Puzzles Implementation Plan

## Overview
Add a newspaper-style Games & Puzzles section where users can play daily puzzles, compete with others, earn points, and win prizes.

---

## Phase 1: Planning & Research (Week 1)

### 1.1 Select Open Source Game Engines/Libraries

**Daily Puzzles (Newspaper Style):**
- **Crossword**: `@guardian/react-crossword` or `crossword-builder`
- **Sudoku**: `sudoku-umd` + custom React UI
- **Word Search**: Custom implementation with `wordsearch-generator`
- **Spot the Difference**: Custom canvas-based implementation
- **Comic Strip**: Static images/webcomics integration

**Interactive Multiplayer Games:**
- **Chess**: `chess.js` + `react-chessboard`
- **Mahjong**: `react-mahjong` or custom implementation
- **Hangman**: Custom React implementation
- **Snakes & Ladders**: `phaser.js` board game
- **Tic-Tac-Toe**: Custom React implementation

**Game Framework Options:**
- **Phaser.js** (Best for 2D games, huge community)
- **PixiJS** (High performance 2D rendering)
- **Socket.io** (Real-time multiplayer functionality)
- **Colyseus** (Multiplayer game server framework)

### 1.2 Database Schema Design

```sql
-- Games tables
CREATE TABLE games (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'puzzle', 'board', 'card', 'word'
  category TEXT NOT NULL, -- 'daily', 'multiplayer', 'solo'
  description TEXT,
  thumbnail_url TEXT,
  difficulty TEXT, -- 'easy', 'medium', 'hard'
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Daily puzzle instances
CREATE TABLE daily_puzzles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  game_id UUID REFERENCES games(id),
  puzzle_date DATE NOT NULL UNIQUE,
  puzzle_data JSONB NOT NULL, -- Crossword grid, Sudoku numbers, etc.
  solution_data JSONB,
  difficulty TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User game scores
CREATE TABLE game_scores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  game_id UUID REFERENCES games(id),
  daily_puzzle_id UUID REFERENCES daily_puzzles(id),
  score INTEGER NOT NULL,
  time_taken INTEGER, -- seconds
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  is_personal_best BOOLEAN DEFAULT false
);

-- Multiplayer game sessions
CREATE TABLE game_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  game_id UUID REFERENCES games(id),
  session_code TEXT UNIQUE,
  host_user_id UUID REFERENCES auth.users(id),
  status TEXT DEFAULT 'waiting', -- 'waiting', 'active', 'completed'
  max_players INTEGER DEFAULT 2,
  game_state JSONB,
  winner_user_id UUID REFERENCES auth.users(id),
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Game session players
CREATE TABLE game_session_players (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID REFERENCES game_sessions(id),
  user_id UUID REFERENCES auth.users(id),
  player_number INTEGER,
  score INTEGER DEFAULT 0,
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(session_id, user_id)
);

-- User achievements & badges
CREATE TABLE game_achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  achievement_type TEXT NOT NULL, -- 'daily_streak', 'puzzle_master', 'champion', etc.
  achievement_data JSONB,
  earned_at TIMESTAMPTZ DEFAULT NOW()
);

-- Monthly leaderboards
CREATE TABLE monthly_leaderboards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  month DATE NOT NULL,
  total_points INTEGER DEFAULT 0,
  games_played INTEGER DEFAULT 0,
  puzzles_completed INTEGER DEFAULT 0,
  rank INTEGER,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, month)
);

-- Prizes
CREATE TABLE prizes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  prize_type TEXT, -- 'monthly_winner', 'achievement', 'points_redemption'
  required_points INTEGER,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Prize claims
CREATE TABLE prize_claims (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  prize_id UUID REFERENCES prizes(id),
  claimed_at TIMESTAMPTZ DEFAULT NOW(),
  fulfillment_status TEXT DEFAULT 'pending', -- 'pending', 'processing', 'delivered'
  notes TEXT
);
```

---

## Phase 2: Foundation (Week 2-3)

### 2.1 Page Structure Setup

**File Structure:**
```
app/
  games/
    page.tsx                 # Main games landing page (newspaper layout)
    layout.tsx              # Games section layout
    daily/
      page.tsx              # Daily puzzles page
      crossword/page.tsx    # Daily crossword
      sudoku/page.tsx       # Daily Sudoku
    multiplayer/
      page.tsx              # Multiplayer games lobby
      chess/page.tsx        # Chess game
      mahjong/page.tsx      # Mahjong game
    leaderboard/
      page.tsx              # Leaderboards & rankings
    prizes/
      page.tsx              # Prizes & redemption

components/
  games/
    GameCard.tsx            # Game preview card
    PuzzleGrid.tsx          # Reusable puzzle grid
    CrosswordPuzzle.tsx     # Crossword component
    SudokuGrid.tsx          # Sudoku component
    SpotDifference.tsx      # Spot the difference
    ComicStrip.tsx          # Daily comic display
    GameLobby.tsx           # Multiplayer lobby
    ChessBoard.tsx          # Chess interface
    MahjongBoard.tsx        # Mahjong tiles
    ScoreCard.tsx           # Score display
    Leaderboard.tsx         # Rankings table
    PrizeCard.tsx           # Prize display

lib/
  games/
    crosswordGenerator.ts   # Generate crosswords
    sudokuGenerator.ts      # Generate Sudoku
    gameLogic.ts            # Shared game logic
    scoreCalculator.ts      # Points calculation
    websocket.ts            # Real-time game updates
```

### 2.2 Navigation Updates

Update `components/Navbar.tsx` to add Games under Events:

```tsx
{
  name: 'Events',
  href: '/events',
  dropdown: [
    { name: 'Events Calendar', href: '/events' },
    { name: 'Submit Event', href: '/events/submit' },
    { name: 'Games & Puzzles', href: '/games' }, // NEW
  ],
},
```

### 2.3 Supabase Setup

```bash
# Run migration scripts
supabase migration new create_games_tables
# Add SQL from 1.2 above
supabase db push
```

Create Row Level Security (RLS) policies for game data.

---

## Phase 3: Daily Puzzles - Newspaper Style (Week 4-5)

### 3.1 Main Games Page - Newspaper Layout

**Design:** Classic newspaper games section aesthetic
- Header: "The Bay Islands Games & Puzzles"
- Daily comic strip at top
- Grid layout with puzzle previews
- "Today's Challenges" section
- Leaderboard sidebar

### 3.2 Implement Core Puzzles

**Priority Order:**
1. **Crossword** (Most popular)
   - Use `@guardian/react-crossword`
   - Daily generated puzzles
   - Hints system
   - Save progress

2. **Sudoku** (Classic favorite)
   - Multiple difficulty levels
   - Auto-check errors
   - Timer
   - Hint system (costs points)

3. **Word Search** (Quick & casual)
   - Themed word lists (Bay Islands, local businesses, etc.)
   - Diagonal support
   - Timer

4. **Spot the Difference** (Visual puzzle)
   - Two images side-by-side
   - Click to mark differences
   - 5-10 differences per puzzle
   - Local photography themes

### 3.3 Daily Comic Integration

**Options:**
- Partner with local artist for Bay Islands comic
- Use open comic APIs (GoComics, xkcd API)
- Static rotation of approved webcomics
- User-submitted community comics

### 3.4 Scoring System

```typescript
interface PuzzleScore {
  basePoints: number;      // Base completion points
  timeBonus: number;       // Fast completion bonus
  difficultyMultiplier: number; // Easy: 1x, Medium: 1.5x, Hard: 2x
  streakBonus: number;     // Consecutive days bonus
  hintPenalty: number;     // Points lost for using hints
  totalScore: number;
}

// Example scoring
const calculateScore = (puzzle, timeTaken, hintsUsed, streak) => {
  const basePoints = 100;
  const timeBonus = Math.max(0, 50 - timeTaken / 60); // Up to 50 pts
  const difficultyMult = puzzle.difficulty === 'easy' ? 1 : 
                         puzzle.difficulty === 'medium' ? 1.5 : 2;
  const streakBonus = Math.min(streak * 10, 100); // Max 100 pts
  const hintPenalty = hintsUsed * 10;
  
  return (basePoints + timeBonus + streakBonus - hintPenalty) * difficultyMult;
};
```

---

## Phase 4: Multiplayer Games (Week 6-8)

### 4.1 Real-time Infrastructure

**Use Supabase Realtime + Socket.io:**

```typescript
// lib/games/websocket.ts
import { createClient } from '@supabase/supabase-js';
import { io } from 'socket.io-client';

export class GameSession {
  private supabase;
  private socket;
  
  constructor(sessionId: string) {
    this.supabase = createClient(/* ... */);
    this.socket = io(process.env.NEXT_PUBLIC_GAME_SERVER_URL);
    this.joinSession(sessionId);
  }
  
  joinSession(sessionId: string) {
    this.socket.emit('join_game', { sessionId });
  }
  
  sendMove(move: GameMove) {
    this.socket.emit('game_move', move);
  }
  
  onOpponentMove(callback: (move: GameMove) => void) {
    this.socket.on('opponent_move', callback);
  }
}
```

### 4.2 Implement Multiplayer Games

**Phase 4.2.1: Chess**
- Use `chess.js` for game logic
- Use `react-chessboard` for UI
- Implement timer (5 min, 10 min, 30 min variants)
- ELO rating system
- Move history
- Resign/Draw offers

**Phase 4.2.2: Mahjong**
- 4-player support
- Traditional scoring
- Tutorial mode
- AI opponents for practice

**Phase 4.2.3: Simple Multiplayer**
- Hangman (2 players take turns)
- Tic-Tac-Toe (classic 2-player)
- Connect Four
- Checkers

### 4.3 Game Lobby System

```tsx
// components/games/GameLobby.tsx
interface GameLobby {
  activeGames: GameSession[];
  createGame: (gameType: string, settings: GameSettings) => void;
  joinGame: (sessionId: string) => void;
  inviteFriend: (friendUserId: string) => void;
  quickMatch: (gameType: string) => void; // Auto-match with similar skill
}
```

### 4.4 Matchmaking

- Skill-based matching (ELO/MMR)
- Friend invites
- Quick play (random opponent)
- Private rooms with codes
- Spectator mode

---

## Phase 5: Gamification & Rewards (Week 9-10)

### 5.1 Points System

**Earning Points:**
- Daily puzzle completion: 100-500 pts
- Win multiplayer game: 200-1000 pts
- Daily login streak: 10-100 pts
- First completion of new puzzle: 500 pts
- Perfect score (no hints): 2x multiplier
- Weekly challenge completion: 1000 pts

**Point Tiers:**
- Bronze: 0-1,000 pts
- Silver: 1,001-5,000 pts
- Gold: 5,001-15,000 pts
- Platinum: 15,001-50,000 pts
- Diamond: 50,001+ pts

### 5.2 Achievement Badges

```typescript
const achievements = [
  {
    id: 'puzzle_master',
    name: 'Puzzle Master',
    description: 'Complete 100 daily puzzles',
    icon: '🎯',
    points: 1000
  },
  {
    id: 'speed_demon',
    name: 'Speed Demon',
    description: 'Complete a hard puzzle in under 3 minutes',
    icon: '⚡',
    points: 500
  },
  {
    id: 'streak_7',
    name: '7 Day Streak',
    description: 'Complete puzzles 7 days in a row',
    icon: '🔥',
    points: 300
  },
  {
    id: 'chess_champion',
    name: 'Chess Champion',
    description: 'Win 50 chess games',
    icon: '♟️',
    points: 2000
  },
  {
    id: 'no_hints',
    name: 'Pure Skill',
    description: 'Complete 20 puzzles without hints',
    icon: '💪',
    points: 750
  }
];
```

### 5.3 Monthly Championships

**Structure:**
- Monthly leaderboard resets 1st of month
- Top 10 players win prizes
- Categories: Overall, Puzzles Only, Multiplayer Only
- Special monthly tournaments (Chess Championship, etc.)

**Prize Tiers:**
1. 🥇 1st Place: Premium business listing ($100 value) + Badge
2. 🥈 2nd Place: Featured article spot ($50 value) + Badge
3. 🥉 3rd Place: $25 Bay Islands gift card + Badge
4. Top 10: Special badge + recognition

### 5.4 Prize Redemption

**Points-based Prizes:**
- Coffee voucher (500 pts)
- Movie tickets (1,000 pts)
- Restaurant voucher (2,000 pts)
- Premium account 1 month (5,000 pts)
- Local business gift cards (variable pts)

**Claim System:**
```tsx
// User claims prize
await supabase.from('prize_claims').insert({
  user_id: user.id,
  prize_id: prizeId
});

// Deduct points
await supabase.from('monthly_leaderboards')
  .update({ total_points: currentPoints - prizePoints })
  .eq('user_id', user.id);

// Send notification to admins
```

---

## Phase 6: UI/UX Polish (Week 11)

### 6.1 Newspaper Aesthetic

**Design Elements:**
- Classic serif fonts (Georgia, Times New Roman)
- Black & white color scheme with blue accents
- Grid-based layout like print newspaper
- "Above the fold" for daily highlights
- Vintage newspaper textures (subtle)
- Section headers with decorative borders

### 6.2 Responsive Design

**Mobile:**
- Stack puzzles vertically
- Swipe between tabs
- Simplified controls
- Touch-optimized game interfaces

**Tablet:**
- 2-column layout
- Side-by-side puzzles
- Landscape game boards

**Desktop:**
- Full newspaper spread layout
- Multi-column grid
- Sidebar widgets

### 6.3 Accessibility

- Keyboard navigation for all games
- Screen reader support
- High contrast mode
- Adjustable font sizes
- Color-blind friendly modes
- Skip hints available

---

## Phase 7: Testing & Launch (Week 12)

### 7.1 Beta Testing

- Recruit 20-50 community members
- Test all games for bugs
- Validate scoring system
- Check multiplayer synchronization
- Mobile device testing

### 7.2 Performance Optimization

- Lazy load game components
- Optimize images
- Cache puzzle data
- Minimize bundle size
- CDN for game assets

### 7.3 Launch Checklist

- [ ] All games functional
- [ ] Database migrations complete
- [ ] RLS policies tested
- [ ] Scoring system verified
- [ ] Leaderboards updating correctly
- [ ] Prize claim flow tested
- [ ] Mobile responsive
- [ ] SEO meta tags added
- [ ] Analytics tracking
- [ ] Help/Tutorial content
- [ ] Terms & conditions for prizes
- [ ] Admin dashboard for game management

---

## Phase 8: Post-Launch (Ongoing)

### 8.1 Content Updates

- New daily puzzles generated automatically
- Weekly new game additions
- Seasonal tournaments
- Holiday-themed puzzles
- Local trivia integration

### 8.2 Community Features

- User profiles with game stats
- Friend leaderboards
- Game challenges (send to friends)
- Community tournaments
- User-generated puzzles (moderated)

### 8.3 Analytics & Iteration

**Track:**
- Most popular games
- Avg time spent per game
- Completion rates
- Drop-off points
- Peak playing times
- User retention

**Iterate:**
- Add more popular game types
- Adjust difficulty based on completion rates
- Optimize scoring based on engagement
- Add features users request

---

## Technology Stack Summary

### Frontend
- **Next.js 14**: Server/client components
- **React 18**: UI framework
- **TypeScript**: Type safety
- **Phaser.js**: 2D game framework
- **chess.js + react-chessboard**: Chess
- **Socket.io-client**: Real-time multiplayer

### Backend
- **Supabase**: Database, auth, real-time
- **PostgreSQL**: Data storage
- **Supabase Realtime**: Game state sync
- **Node.js**: Custom game server (if needed)

### Game Libraries
- **sudoku-umd**: Sudoku generation
- **crossword-builder**: Crossword creation
- **Phaser.js**: Board games
- **Canvas API**: Custom puzzles

### Deployment
- **Vercel**: Frontend hosting
- **Supabase Cloud**: Backend services
- **Cloudflare CDN**: Asset delivery

---

## Budget Estimate

### Development Time
- Phase 1-2: 3 weeks (Planning + Foundation)
- Phase 3: 2 weeks (Daily Puzzles)
- Phase 4: 3 weeks (Multiplayer)
- Phase 5: 2 weeks (Gamification)
- Phase 6-7: 2 weeks (Polish + Testing)
- **Total: ~12 weeks**

### Costs
- Supabase Pro: $25/month
- Vercel Pro: $20/month (if needed for bandwidth)
- Prize budget: $200-500/month
- Custom comics (optional): $50-100/comic
- **Monthly operating: ~$250-650**

---

## Success Metrics

### 6 Months Targets
- 500+ registered game players
- 5,000+ daily puzzle completions/month
- 1,000+ multiplayer matches/month
- 80%+ user retention (return players)
- Average 15 min session time
- 50+ monthly championship participants

### 1 Year Vision
- #1 local games destination
- Community tournaments with sponsors
- Local business prize partnerships
- Mobile app version
- Expanded game catalog (20+ games)
- Regional championship events

---

## Next Immediate Steps

1. **Get user feedback**: Do you want all these features or start smaller?
2. **Choose games priority**: Which 3-5 games to launch with?
3. **Set budget**: Prize fund commitment?
4. **Database setup**: Run migration scripts?
5. **Start coding**: Begin with games landing page?

Let me know which direction you'd like to take! 🎮🎯🎲

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Games & Puzzles - The Bay Islands',
  description: 'Daily puzzles, multiplayer games, and community competitions. Play crosswords, sudoku, chess, and more. Win prizes and climb the leaderboards!',
  keywords: 'bay islands games, puzzles, crossword, sudoku, chess, online games, community games, win prizes',
};

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

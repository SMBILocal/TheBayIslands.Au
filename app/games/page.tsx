import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Games & Entertainment | Bay Islands',
  description: 'Local gaming, entertainment venues, clubs, and recreational activities across the Bay Islands.',
  keywords: 'Bay Islands games, local entertainment, gaming clubs, recreational activities SMBI',
};

const ENTERTAINMENT_VENUES = [
  { name: 'Russell Island RSL', activities: ['Bingo', 'Poker', 'Social Games', 'Events'], icon: '🎰' },
  { name: 'Macleay Island Bowls Club', activities: ['Bowls', 'Social Events', 'Competitions'], icon: '🎳' },
  { name: 'Community Halls', activities: ['Board Games', 'Card Nights', 'Social Gatherings'], icon: '🎲' },
];

export default function GamesPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🎮 Games & Entertainment
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Discover local gaming, entertainment, and recreational activities across the Bay Islands
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Local Entertainment Venues</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENTERTAINMENT_VENUES.map((venue) => (
            <div key={venue.name} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{venue.icon}</div>
              <h3 className="text-xl font-bold mb-3">{venue.name}</h3>
              <div className="space-y-1">
                {venue.activities.map((activity) => (
                  <div key={activity} className="text-sm text-gray-700">• {activity}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">🎯 Gaming Activities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-3">Social Gaming</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Bingo nights at local clubs</li>
              <li>• Card games and poker tournaments</li>
              <li>• Board game meetups</li>
              <li>• Trivia nights</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Outdoor Games</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Lawn bowls competitions</li>
              <li>• Beach volleyball</li>
              <li>• Community sports events</li>
              <li>• Family fun days</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📅 Regular Events</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎲</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Friday Night Games</h3>
                <p className="text-gray-700 mb-1">Board games and cards at community halls</p>
                <p className="text-sm text-gray-600">Every Friday • 7pm-10pm • Various locations</p>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎰</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Bingo Nights</h3>
                <p className="text-gray-700 mb-1">Weekly bingo at RSL clubs</p>
                <p className="text-sm text-gray-600">Wednesdays • 7pm • Russell Island RSL</p>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🧠</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Trivia Night</h3>
                <p className="text-gray-700 mb-1">Test your knowledge with locals</p>
                <p className="text-sm text-gray-600">Monthly • Last Saturday • Macleay Island Club</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🏆 Competitions & Tournaments</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="font-bold mb-3">Bowls Competitions</h3>
            <p className="text-gray-700">Regular lawn bowls tournaments at island clubs. All skill levels welcome.</p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-bold mb-3">Poker Tournaments</h3>
            <p className="text-gray-700">Monthly poker nights with prizes. Social and competitive games.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">👨‍👩‍👧‍👦 Family-Friendly Activities</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-xl">🎪</span>
            <p><strong>Community Fun Days:</strong> Regular family events with games, food, and entertainment</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🏖️</span>
            <p><strong>Beach Games:</strong> Volleyball, frisbee, and beach cricket at local beaches</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🎨</span>
            <p><strong>Craft & Games:</strong> Creative activities for all ages at community centers</p>
          </li>
        </ul>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Related Activities</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/sports" className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Sports & Recreation</h3>
            <p className="text-sm text-gray-600">Local sports clubs and activities</p>
          </Link>
          <Link href="/events" className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Events Calendar</h3>
            <p className="text-sm text-gray-600">Upcoming community events</p>
          </Link>
          <Link href="/community/notices" className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Community Board</h3>
            <p className="text-sm text-gray-600">Local notices and announcements</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

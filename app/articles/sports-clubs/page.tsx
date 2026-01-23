import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sports & Recreation | Bay Islands & Redlands Coast',
  description: 'Local sports clubs, events, and recreation on the Bay Islands and Redlands Coast. Football, netball, bowls, cricket, basketball, and more.',
  keywords: 'Bay Islands sports, Redlands sports clubs, Russell Island football, Macleay Island netball, local sports events',
};

// Sports clubs data from Local-Sports-Page.md
const SPORTS_CLUBS = [
  {
    id: 'russell-football',
    name: 'Russell Island Football Club',
    sport: 'Soccer',
    location: 'Russell Island',
    feed: 'https://teamapp.com/events?club=rifc',
    icon: '⚽',
    notes: 'Juniors & seniors',
  },
  {
    id: 'russell-bowls',
    name: 'Russell Island Bowls Club',
    sport: 'Bowls',
    location: 'Russell Island',
    feed: 'https://www.ribowls.com.au/events',
    icon: '🎳',
    notes: 'Community competitions',
  },
  {
    id: 'russell-netball',
    name: 'Russell Island Netball Club',
    sport: 'Netball',
    location: 'Russell Island',
    feed: 'https://www.rinetball.com.au/fixtures',
    icon: '🤾‍♀️',
    notes: 'Seasonal matches',
  },
  {
    id: 'macleay-netball',
    name: 'Macleay Island Netball Club',
    sport: 'Netball',
    location: 'Macleay Island',
    feed: 'https://www.macleaynetball.com.au/fixtures',
    icon: '🤾‍♀️',
    notes: 'Season matches',
  },
  {
    id: 'macleay-bowls',
    name: 'Macleay Island Bowls Club',
    sport: 'Bowls',
    location: 'Macleay Island',
    feed: 'https://www.macleaybowls.com.au/events',
    icon: '🎳',
    notes: 'Competitions & club days',
  },
  {
    id: 'lamb-sports',
    name: 'Lamb Island Sports Club',
    sport: 'Multi-sport',
    location: 'Lamb Island',
    feed: 'https://www.lambsports.com.au/events',
    icon: '🏅',
    notes: 'Community sports & festivals',
  },
  {
    id: 'karragarra-community',
    name: 'Karragarra Island Community Club',
    sport: 'Multi-sport',
    location: 'Karragarra Island',
    feed: 'https://www.karragarraevents.com',
    icon: '🏅',
    notes: 'Community events',
  },
  {
    id: 'redlands-rugby',
    name: 'Redlands Rugby League',
    sport: 'Rugby League',
    location: 'Redland City',
    feed: 'https://www.redlandsrugbyleague.com.au/events-feed.xml',
    icon: '🏉',
    notes: 'Juniors & Seniors',
  },
  {
    id: 'redlands-netball',
    name: 'Redlands Netball Association',
    sport: 'Netball',
    location: 'Redland City',
    feed: 'https://www.redlandsnetball.com.au/wspCompetitions.aspx?rss=true',
    icon: '🤾‍♀️',
    notes: 'Season matches',
  },
  {
    id: 'redland-city-fc',
    name: 'Redland City FC',
    sport: 'Soccer',
    location: 'Redland City',
    feed: 'https://redlandsaustralia.teamapp.com/api/events',
    icon: '⚽',
    notes: 'Junior & senior leagues',
  },
  {
    id: 'cleveland-cricket',
    name: 'Cleveland District Cricket Club',
    sport: 'Cricket',
    location: 'Redland City',
    feed: 'https://clevelandcricket.com.au/fixtures',
    icon: '🏏',
    notes: 'Local cricket matches',
  },
  {
    id: 'victoria-point-basketball',
    name: 'Victoria Point Basketball Association',
    sport: 'Basketball',
    location: 'Redland City',
    feed: 'https://victoriapointbasketball.com.au/fixtures',
    icon: '🏀',
    notes: 'Junior & senior competitions',
  },
  {
    id: 'cleveland-indoor',
    name: 'Cleveland Indoor Sports Centre',
    sport: 'Multi-sport',
    location: 'Redland City',
    feed: 'https://clevelandindoorsports.com.au/events',
    icon: '🏅',
    notes: 'Futsal, badminton, community leagues',
  },
  {
    id: 'cleveland-pac',
    name: 'Cleveland Performing Arts Centre',
    sport: 'Community Events',
    location: 'Redland City',
    feed: 'https://www.clevelandpac.com.au/events',
    icon: '🎭',
    notes: 'Arts & sports crossover events',
  },
  {
    id: 'redland-council',
    name: 'Redland Council "What\'s On"',
    sport: 'Community Events',
    location: 'Redland City',
    feed: 'https://www.redland.qld.gov.au/News-events-and-have-your-say/Events-and-whats-on/Whats-On-calendar?rss=true',
    icon: '🎉',
    notes: 'All public events',
  },
  {
    id: 'capalaba-tennis',
    name: 'Capalaba Tennis Club',
    sport: 'Tennis',
    location: 'Redland City',
    feed: 'https://www.capalabataennis.com.au/fixtures',
    icon: '🎾',
    notes: 'Competitions & social tennis',
  },
  {
    id: 'wellington-point-rsl',
    name: 'Wellington Point RSL',
    sport: 'Multi-sport/social',
    location: 'Redland City',
    feed: 'https://wellingtonpointrsl.com.au/events',
    icon: '🏅',
    notes: 'Bowls, darts, social sports',
  },
];

// Group clubs by sport type
const groupedBySport = SPORTS_CLUBS.reduce((acc, club) => {
  if (!acc[club.sport]) {
    acc[club.sport] = [];
  }
  acc[club.sport].push(club);
  return acc;
}, {} as Record<string, typeof SPORTS_CLUBS>);

// Group clubs by location
const groupedByLocation = SPORTS_CLUBS.reduce((acc, club) => {
  if (!acc[club.location]) {
    acc[club.location] = [];
  }
  acc[club.location].push(club);
  return acc;
}, {} as Record<string, typeof SPORTS_CLUBS>);

export default function SportsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sports & Recreation
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Your complete guide to sports clubs, events, and recreation across the Bay Islands and Redlands Coast
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <Link
          href="#clubs"
          className="p-6 text-center border-2 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all"
        >
          <div className="text-3xl mb-2">🏆</div>
          <div className="font-semibold">All Clubs</div>
        </Link>
        <Link
          href="#by-sport"
          className="p-6 text-center border-2 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all"
        >
          <div className="text-3xl mb-2">⚽</div>
          <div className="font-semibold">By Sport</div>
        </Link>
        <Link
          href="#by-location"
          className="p-6 text-center border-2 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all"
        >
          <div className="text-3xl mb-2">📍</div>
          <div className="font-semibold">By Location</div>
        </Link>
        <Link
          href="/events"
          className="p-6 text-center border-2 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all"
        >
          <div className="text-3xl mb-2">📅</div>
          <div className="font-semibold">Events</div>
        </Link>
      </div>

      {/* All Clubs Section */}
      <section id="clubs" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">All Sports Clubs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPORTS_CLUBS.map((club) => (
            <div
              key={club.id}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{club.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{club.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{club.sport}</p>
                  <p className="text-sm text-gray-500 mb-2">{club.location}</p>
                  <p className="text-xs text-gray-600 mb-3">{club.notes}</p>
                  {club.feed && (
                    <a
                      href={club.feed}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      View Fixtures →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* By Sport Section */}
      <section id="by-sport" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Browse by Sport</h2>
        <div className="space-y-8">
          {Object.entries(groupedBySport).map(([sport, clubs]) => (
            <div key={sport}>
              <h3 className="text-2xl font-bold mb-4">{sport}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {clubs.map((club) => (
                  <div
                    key={club.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{club.icon}</span>
                      <h4 className="font-semibold">{club.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{club.location}</p>
                    <p className="text-xs text-gray-500 mt-1">{club.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* By Location Section */}
      <section id="by-location" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Browse by Location</h2>
        <div className="space-y-8">
          {Object.entries(groupedByLocation).map(([location, clubs]) => (
            <div key={location}>
              <h3 className="text-2xl font-bold mb-4">
                📍 {location}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {clubs.map((club) => (
                  <div
                    key={club.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{club.icon}</span>
                      <div>
                        <h4 className="font-semibold">{club.name}</h4>
                        <p className="text-sm text-gray-600">{club.sport}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{club.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">About Bay Islands Sports</h2>
        <p className="text-gray-700 mb-4">
          The Bay Islands and Redlands Coast region offers a vibrant sporting community with clubs and activities for all ages and skill levels. From traditional sports like football, netball, and cricket to community-focused activities, there's something for everyone.
        </p>
        <p className="text-gray-700 mb-4">
          Our sports clubs are the heart of island life, fostering community connections, promoting healthy lifestyles, and providing opportunities for competition and recreation. Whether you're a junior starting out, a senior competing at high levels, or just looking for social sport, you'll find a welcoming community here.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div>
            <h3 className="font-bold text-lg mb-2">🏆 Competitive Sports</h3>
            <p className="text-sm text-gray-600">
              Join leagues and competitions in football, netball, rugby, cricket, basketball, and more
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">👨‍👩‍👧‍👦 Family Activities</h3>
            <p className="text-sm text-gray-600">
              Junior programs, family days, and community events throughout the year
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">🤝 Social Sports</h3>
            <p className="text-sm text-gray-600">
              Bowls, darts, social tennis, and recreational activities for all ages
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

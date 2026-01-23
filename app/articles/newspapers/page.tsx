import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Local Newspapers | Bay Islands & Redlands Coast',
  description: 'Local newspapers, news websites, and community publications serving the Bay Islands and Redlands Coast region.',
  keywords: 'Redland City Bulletin, Bay Islands news, local newspapers Queensland, Redlands Coast news',
};

const NEWSPAPERS = [
  {
    name: 'Redland City Bulletin',
    type: 'Print & Online',
    description: 'Weekly newspaper covering Redland City and Bay Islands local news, events, and community stories',
    website: 'https://www.redlandbulletin.com.au/',
    distribution: 'Redland City & Bay Islands',
    frequency: 'Weekly'
  },
  {
    name: 'The Courier-Mail',
    type: 'Print & Online',
    description: 'Queensland\'s major daily newspaper with state and Brisbane news',
    website: 'https://www.couriermail.com.au/',
    distribution: 'Statewide',
    frequency: 'Daily'
  },
  {
    name: 'Quest Newspapers',
    type: 'Print & Online',
    description: 'Local community newspapers covering Brisbane suburbs including Redlands',
    website: 'https://www.questnews.com.au/',
    distribution: 'Brisbane & Redlands',
    frequency: 'Weekly'
  },
  {
    name: 'Redlands Coast News',
    type: 'Online',
    description: 'Digital news source for Redlands Coast community news and updates',
    website: 'https://www.redlandscoastnews.com.au/',
    distribution: 'Redlands Coast',
    frequency: 'Daily updates'
  },
  {
    name: 'The Australian',
    type: 'Print & Online',
    description: 'National daily newspaper with comprehensive Australian news coverage',
    website: 'https://www.theaustralian.com.au/',
    distribution: 'National',
    frequency: 'Daily'
  }
];

const ONLINE_NEWS = [
  { name: 'ABC News Queensland', url: 'https://www.abc.net.au/news/queensland/', description: 'State news from ABC' },
  { name: 'Brisbane Times', url: 'https://www.brisbanetimes.com.au/', description: 'Brisbane & QLD news' },
  { name: 'Redland City Council News', url: 'https://www.redland.qld.gov.au/News', description: 'Official council updates' },
  { name: '7NEWS Queensland', url: 'https://7news.com.au/queensland', description: 'Channel 7 news' },
  { name: '9NEWS Queensland', url: 'https://www.9news.com.au/queensland', description: 'Channel 9 news' },
];

export default function NewspapersPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <Link href="/articles" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Articles
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          📰 Local Newspapers
        </h1>
        <p className="text-xl text-gray-600">
          Print and online newspapers serving the Bay Islands and Redlands Coast
        </p>
      </div>

      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">📍 Local News Coverage</h2>
        <p className="text-gray-700 mb-4">
          Bay Islands and Redlands Coast residents are served by a mix of local, regional, and state 
          newspapers. The <strong>Redland City Bulletin</strong> provides the most comprehensive coverage 
          of island-specific news, events, and community stories.
        </p>
        <p className="text-gray-700">
          Most newspapers now offer digital editions and online news portals, keeping you informed 
          even when print editions aren't readily available on the islands.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Print & Online Newspapers</h2>
        <div className="space-y-6">
          {NEWSPAPERS.map((paper) => (
            <div key={paper.name} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold">{paper.name}</h3>
                  <span className="text-sm text-gray-600">{paper.type}</span>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                  {paper.frequency}
                </span>
              </div>
              <p className="text-gray-700 mb-3">{paper.description}</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Distribution:</span> {paper.distribution}
                </div>
                {paper.website && (
                  <div>
                    <a href={paper.website} target="_blank" rel="noopener noreferrer"
                      className="text-blue-600 hover:underline">
                      Visit Website →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Online News Sources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {ONLINE_NEWS.map((source) => (
            <a
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg p-5 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <h3 className="font-bold mb-2">{source.name}</h3>
              <p className="text-sm text-gray-600">{source.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">📱 Digital Access</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold mb-3">🌐 Online Editions</h3>
            <p className="text-sm text-gray-700">
              Most newspapers offer free or subscription-based online access to articles and digital editions
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3">📰 E-Editions</h3>
            <p className="text-sm text-gray-700">
              Read the full print edition on your device through newspaper apps and websites
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3">📧 Email Newsletters</h3>
            <p className="text-sm text-gray-700">
              Subscribe to daily or weekly email digests with top local stories
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📋 What's Covered</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold mb-2">Local News</h3>
            <p className="text-sm text-gray-700">Island and Redlands community stories, events, and developments</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-2">Council Updates</h3>
            <p className="text-sm text-gray-700">Redland City Council decisions, projects, and announcements</p>
          </div>
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="font-bold mb-2">Sport</h3>
            <p className="text-sm text-gray-700">Local sports results, profiles, and upcoming fixtures</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-bold mb-2">Classifieds</h3>
            <p className="text-sm text-gray-700">Jobs, real estate, announcements, and community notices</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🏪 Where to Buy</h2>
        <div className="bg-blue-50 rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            <strong>Print editions available at:</strong>
          </p>
          <ul className="space-y-2 text-gray-700 ml-6">
            <li>• Local newsagents on the islands</li>
            <li>• IGA and supermarkets</li>
            <li>• Convenience stores and service stations</li>
            <li>• Ferry terminals</li>
            <li>• Selected cafés and community centers</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">
            * Availability may vary by location. Digital editions provide reliable access.
          </p>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">News Apps & Resources</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="https://www.abc.net.au/news/app/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">ABC News App</h3>
            <p className="text-sm text-gray-600">Live news and updates</p>
          </a>
          <a href="https://www.couriermail.com.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Courier-Mail</h3>
            <p className="text-sm text-gray-600">QLD's main daily</p>
          </a>
          <a href="https://www.redland.qld.gov.au/News" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Council News</h3>
            <p className="text-sm text-gray-600">Official updates</p>
          </a>
        </div>
      </section>

      <section className="bg-amber-50 rounded-lg p-6 mt-12">
        <h2 className="text-xl font-bold mb-3">📢 Submit Local News</h2>
        <p className="text-gray-700 mb-3">
          Have a local story, event, or community announcement? Contact the Redland City Bulletin 
          or your preferred news outlet to share what's happening in your community.
        </p>
        <p className="text-sm text-gray-600">
          Most newspapers welcome community contributions, letters to the editor, and event listings.
        </p>
      </section>
    </main>
  );
}

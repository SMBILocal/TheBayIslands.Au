import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fishing Guide | Bay Islands & Moreton Bay',
  description: 'Complete fishing guide for Bay Islands: best spots, target species, regulations, tackle shops, and local fishing tips for Moreton Bay.',
  keywords: 'Bay Islands fishing, Moreton Bay fishing spots, fishing regulations Queensland, bait and tackle',
};

const FISHING_SPOTS = [
  {
    name: 'Russell Island Waters',
    species: ['Whiting', 'Bream', 'Flathead', 'Tailor'],
    description: 'Excellent shore and boat fishing around the island'
  },
  {
    name: 'Macleay Island Flats',
    species: ['Whiting', 'Bream', 'Flathead', 'Mangrove Jack'],
    description: 'Productive flats and channels for light tackle fishing'
  },
  {
    name: 'Peel Island',
    species: ['Snapper', 'Trevally', 'Queenfish', 'Mackerel'],
    description: 'Deeper waters and structure for larger species'
  },
  {
    name: 'Green Island',
    species: ['Whiting', 'Bream', 'Flathead'],
    description: 'Protected waters ideal for family fishing'
  }
];

const TARGET_SPECIES = [
  { name: 'Sand Whiting', season: 'Year-round', bagLimit: '10', sizeLimit: '23cm' },
  { name: 'Bream (Yellowfin)', season: 'Year-round', bagLimit: '10', sizeLimit: '25cm' },
  { name: 'Flathead (Dusky)', season: 'Year-round', bagLimit: '5', sizeLimit: '40cm' },
  { name: 'Snapper', season: 'Winter-Spring', bagLimit: '4', sizeLimit: '35cm' },
  { name: 'Tailor', season: 'Autumn-Winter', bagLimit: '10', sizeLimit: '30cm' },
  { name: 'Mangrove Jack', season: 'Summer', bagLimit: '5', sizeLimit: '35cm' }
];

export default function FishingPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <Link href="/articles" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Articles
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🎣 Bay Islands Fishing Guide
        </h1>
        <p className="text-xl text-gray-600">
          Your complete guide to fishing the Southern Moreton Bay Islands
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Popular Fishing Spots</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {FISHING_SPOTS.map((spot) => (
            <div key={spot.name} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">📍 {spot.name}</h3>
              <p className="text-gray-700 mb-3">{spot.description}</p>
              <div>
                <h4 className="font-semibold mb-2 text-sm">Target Species:</h4>
                <div className="flex flex-wrap gap-2">
                  {spot.species.map((fish) => (
                    <span key={fish} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {fish}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Target Species & Regulations</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Species</th>
                <th className="border p-3 text-left">Best Season</th>
                <th className="border p-3 text-left">Bag Limit</th>
                <th className="border p-3 text-left">Min Size</th>
              </tr>
            </thead>
            <tbody>
              {TARGET_SPECIES.map((species) => (
                <tr key={species.name} className="hover:bg-gray-50">
                  <td className="border p-3 font-semibold">{species.name}</td>
                  <td className="border p-3">{species.season}</td>
                  <td className="border p-3">{species.bagLimit}</td>
                  <td className="border p-3">{species.sizeLimit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          * Regulations current as of 2026. Always check{' '}
          <a href="https://www.fisheries.qld.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            QLD Fisheries
          </a>{' '}
          for latest updates.
        </p>
      </section>

      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">🎯 Local Fishing Tips</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-xl">🌅</span>
            <p><strong>Best Times:</strong> Early morning and late afternoon, especially on rising tides</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🦐</span>
            <p><strong>Popular Baits:</strong> Yabbies, beach worms, squid, and fresh pilchards</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🌊</span>
            <p><strong>Tide Strategy:</strong> Fish the channels and drop-offs on the run-in tide</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🎣</span>
            <p><strong>Light Tackle:</strong> 2-6kg outfits perfect for whiting and bream</p>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Bait & Tackle Shops</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Russell Island Bait & Tackle</h3>
            <p className="text-gray-600 text-sm mb-2">Local bait, tackle, and fishing advice</p>
            <p className="text-sm">Russell Island</p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Victoria Point Marine</h3>
            <p className="text-gray-600 text-sm mb-2">Full range tackle and bait supplies</p>
            <p className="text-sm">Victoria Point (Mainland)</p>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Important Resources</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="https://www.fisheries.qld.gov.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">QLD Fisheries</h3>
            <p className="text-sm text-gray-600">Regulations & licenses</p>
          </a>
          <a href="https://www.qld.gov.au/recreation/activities/boating-fishing/rec-fishing" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Recreational Fishing</h3>
            <p className="text-sm text-gray-600">Rules and guidelines</p>
          </a>
          <a href="https://www.fisheries.qld.gov.au/fishing/recreational/tide-times" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Tide Times</h3>
            <p className="text-sm text-gray-600">Plan your fishing trip</p>
          </a>
        </div>
      </section>
    </main>
  );
}

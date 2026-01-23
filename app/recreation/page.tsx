import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recreation | Fishing, Boating & Marina Guide | Bay Islands',
  description: 'Your complete guide to fishing, boating, marinas, boat ramps and water recreation across the Bay Islands and Redlands Coast.',
  keywords: 'Bay Islands fishing, Redlands boating, marina guide, boat ramps, fishing spots, water recreation',
};

export default function RecreationPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🚤 Recreation & Water Activities
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Your complete guide to fishing, boating, marinas, and water recreation across the Southern Moreton Bay Islands
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Link
          href="/recreation/fishing"
          className="group border-2 rounded-lg p-8 hover:border-blue-500 hover:shadow-xl transition-all"
        >
          <div className="text-6xl mb-4">🎣</div>
          <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600">Fishing Guide</h2>
          <p className="text-gray-600 mb-4">
            Discover the best fishing spots, regulations, bait & tackle shops, and local tips for landing the big one
          </p>
          <div className="text-blue-600 font-semibold">Explore Fishing →</div>
        </Link>

        <Link
          href="/recreation/boating"
          className="group border-2 rounded-lg p-8 hover:border-blue-500 hover:shadow-xl transition-all"
        >
          <div className="text-6xl mb-4">⚓</div>
          <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600">Boating & Marinas</h2>
          <p className="text-gray-600 mb-4">
            Find marinas, boat ramps, ferry terminals, parking, and complete boating infrastructure information
          </p>
          <div className="text-blue-600 font-semibold">Explore Boating →</div>
        </Link>
      </div>

      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6">🌊 Bay Islands Water Recreation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-3">🏝️ Island Access</h3>
            <p className="text-sm text-gray-700">
              Regular ferry services connect Russell, Macleay, Lamb, and Karragarra Islands to the mainland
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">🐟 Rich Fishing Grounds</h3>
            <p className="text-sm text-gray-700">
              Moreton Bay offers world-class fishing for whiting, bream, flathead, snapper, and seasonal pelagics
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">⛵ Boating Paradise</h3>
            <p className="text-sm text-gray-700">
              Protected waters, multiple boat ramps, marinas, and facilities make this a premier boating destination
            </p>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Helpful Resources</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="https://www.fisheries.qld.gov.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">QLD Fisheries</h3>
            <p className="text-sm text-gray-600">Official regulations and licenses</p>
          </a>
          <a href="https://www.msq.qld.gov.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Maritime Safety Queensland</h3>
            <p className="text-sm text-gray-600">Boating safety and registration</p>
          </a>
        </div>
      </section>
    </main>
  );
}

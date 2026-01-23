import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Culture & Heritage | Quandamooka Country & Bay Islands',
  description: 'Explore Quandamooka culture, Indigenous heritage, QUAMPI Arts Centre, and cultural experiences on the Bay Islands.',
  keywords: 'Quandamooka culture, Indigenous heritage, QUAMPI, Bay Islands culture, First Nations Queensland',
};

export default function CulturePage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🪶 Culture & Heritage
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Discover the rich Quandamooka culture and heritage of the Southern Moreton Bay Islands
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Link
          href="/culture/quandamooka"
          className="group border-2 rounded-lg p-8 hover:border-blue-500 hover:shadow-xl transition-all"
        >
          <div className="text-6xl mb-4">🌏</div>
          <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600">Quandamooka Country</h2>
          <p className="text-gray-600 mb-4">
            Learn about the Quandamooka People, their 20,000+ year history, culture, and continuing connection to Country
          </p>
          <div className="text-blue-600 font-semibold">Explore Heritage →</div>
        </Link>

        <Link
          href="/culture/quampi"
          className="group border-2 rounded-lg p-8 hover:border-blue-500 hover:shadow-xl transition-all"
        >
          <div className="text-6xl mb-4">🎨</div>
          <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600">QUAMPI Arts Centre</h2>
          <p className="text-gray-600 mb-4">
            Visit Queensland's first First Nations-owned cultural gallery on Minjerribah (North Stradbroke Island)
          </p>
          <div className="text-blue-600 font-semibold">Visit QUAMPI →</div>
        </Link>
      </div>

      <section className="bg-amber-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6">Welcome to Quandamooka Country</h2>
        <p className="text-gray-700 mb-4">
          The Southern Moreton Bay Islands are the ancestral lands and waters of the Quandamooka People, 
          comprising the Nunukul, Goenpul, and Nughi clans. This Country encompasses Minjerribah 
          (North Stradbroke Island), Mulgumpin (Moreton Island), and the Southern Bay Islands.
        </p>
        <p className="text-gray-700">
          We acknowledge and pay our deepest respects to the Traditional Custodians of this land, 
          their Elders past and present, and the continuing cultural, spiritual, and physical connection 
          they maintain with Country.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Cultural Experiences</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6">
            <div className="text-3xl mb-3">🖼️</div>
            <h3 className="font-bold mb-2">Art & Exhibitions</h3>
            <p className="text-sm text-gray-600">Contemporary and traditional Indigenous art at QUAMPI and local galleries</p>
          </div>
          <div className="border rounded-lg p-6">
            <div className="text-3xl mb-3">🎭</div>
            <h3 className="font-bold mb-2">Festivals & Events</h3>
            <p className="text-sm text-gray-600">Annual Quandamooka Festival and cultural celebrations</p>
          </div>
          <div className="border rounded-lg p-6">
            <div className="text-3xl mb-3">🌿</div>
            <h3 className="font-bold mb-2">Cultural Tours</h3>
            <p className="text-sm text-gray-600">Guided walks, bush tucker experiences, and storytelling</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Cultural Values</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-6 py-4">
            <h3 className="font-bold mb-2">Connection to Country</h3>
            <p className="text-gray-700">Deep spiritual, cultural, and physical relationship with land and sea maintained over millennia</p>
          </div>
          <div className="border-l-4 border-green-500 pl-6 py-4">
            <h3 className="font-bold mb-2">Cultural Preservation</h3>
            <p className="text-gray-700">Language revival, traditional practices, and knowledge transmission to future generations</p>
          </div>
          <div className="border-l-4 border-amber-500 pl-6 py-4">
            <h3 className="font-bold mb-2">Environmental Stewardship</h3>
            <p className="text-gray-700">Sustainable land and sea management practices honed over thousands of years</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-6 py-4">
            <h3 className="font-bold mb-2">Community & Sharing</h3>
            <p className="text-gray-700">Cultural exchange, education, and welcoming visitors to learn and respect Country</p>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Learn More</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="https://www.qyac.net.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">QYAC</h3>
            <p className="text-sm text-gray-600">Quandamooka Yoolooburrabee Aboriginal Corporation</p>
          </a>
          <a href="https://www.redland.qld.gov.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Redland Council</h3>
            <p className="text-sm text-gray-600">Quandamooka heritage information</p>
          </a>
          <a href="https://www.qmf.org.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">QLD Music Festival</h3>
            <p className="text-sm text-gray-600">Cultural events and programs</p>
          </a>
        </div>
      </section>
    </main>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'QUAMPI Arts & Culture Centre | Minjerribah Cultural Hub',
  description: 'Visit QUAMPI Arts & Culture Centre on Minjerribah (North Stradbroke Island) - Queensland\'s first First Nations-owned cultural gallery featuring Quandamooka art, exhibitions, and workshops.',
  keywords: 'QUAMPI Arts Centre, Quandamooka art, Minjerribah gallery, Dunwich cultural centre, Indigenous art Queensland',
};

export default function QuampiPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <Link href="/articles" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Articles
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🎨 QUAMPI Arts & Culture Centre
        </h1>
        <p className="text-xl text-gray-600">
          Cultural Heart of Minjerribah (North Stradbroke Island)
        </p>
      </div>

      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">A Milestone for Culture & Country</h2>
        <p className="text-gray-700 mb-4">
          QUAMPI Arts & Culture Centre has emerged as a transformative cultural institution on Minjerribah, 
          marking a new chapter in celebrating, preserving, and sharing Quandamooka arts, heritage, and living culture.
        </p>
        <p className="text-gray-700">
          Opened to the public in 2025 during the vibrant Quandamooka Festival, QUAMPI stands as Queensland's 
          first First Nations-owned and operated cultural gallery with world-class facilities.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📍 Location & Access</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="font-bold mb-3">Address</h3>
            <p className="text-gray-700 mb-2">14–16 Ballow Road, Deanbilla Bay</p>
            <p className="text-gray-700 mb-2">Dunwich, Minjerribah (North Stradbroke Island)</p>
            <p className="text-gray-700">Queensland 4184, Australia</p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-bold mb-3">How to Get There</h3>
            <p className="text-gray-700 mb-2">🚢 SeaLink ferry from Redland Bay to Dunwich</p>
            <p className="text-gray-700 mb-2">🚶 10-minute walk from ferry terminal</p>
            <p className="text-gray-700">🅿️ Limited parking, bike racks available</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">What You'll Find at QUAMPI</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <div className="text-4xl mb-3">🖼️</div>
            <h3 className="font-bold text-lg mb-3">Permanent & Rotating Exhibitions</h3>
            <p className="text-gray-700">
              <strong>ngaliya ngajagu wagari</strong> ("ours to carry") - major inaugural exhibition combining 
              works by Quandamooka artists, Redland Art Gallery collection pieces, and QYAC heritage objects. 
              Free to visit.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="font-bold text-lg mb-3">Cultural Workshops & Programs</h3>
            <p className="text-gray-700">
              Traditional weaving, storytelling circles, language preservation workshops, music performances, 
              and art-making sessions facilitated by Quandamooka Elders and artists.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <div className="text-4xl mb-3">🎭</div>
            <h3 className="font-bold text-lg mb-3">Event Spaces</h3>
            <p className="text-gray-700">
              Designed for community gatherings, panel discussions, artist talks, and collaborations with 
              Queensland Music Festival and other cultural partners. Elders' Gathering Room available.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <div className="text-4xl mb-3">☕</div>
            <h3 className="font-bold text-lg mb-3">Visitor Amenities</h3>
            <p className="text-gray-700">
              Café and gift shop featuring locally-made arts, crafts, and cultural products. Educational 
              programming for schools, tourists, and corporate groups.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🎶 Quandamooka Festival & QUAMPI</h2>
        <div className="bg-purple-50 rounded-lg p-8">
          <p className="text-gray-700 mb-4">
            The Quandamooka Festival anchors QUAMPI's presence on Minjerribah as a community-driven cultural hub. 
            Held annually in September, the festival draws thousands to performances, markets, storytelling sessions, 
            and traditional dances.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-bold mb-2">Featured Performers</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Emily Wurramara</li>
                <li>• Roger Knox</li>
                <li>• Fred Leone</li>
                <li>• Joe Geia</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Activities</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Music performances</li>
                <li>• Cultural workshops</li>
                <li>• Art markets</li>
                <li>• Traditional ceremonies</li>
              </ul>
            </div>
          </div>
          <a href="https://quandamookafestival.com.au" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Festival Information →
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📈 Cultural & Economic Impact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold mb-2">Tourism</h3>
            <p className="text-gray-700">Cultural tourism drawcard, especially leading up to Brisbane 2032 Olympics & Paralympics</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-2">Employment</h3>
            <p className="text-gray-700">Supporting local jobs in arts, curation, education, tourism, and hospitality</p>
          </div>
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="font-bold mb-2">Cultural Continuity</h3>
            <p className="text-gray-700">Facilitating intergenerational knowledge sharing and language preservation</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🧭 Visitor Information</h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">Opening Hours</h3>
              <p className="text-gray-700 mb-2">Friday – Sunday</p>
              <p className="text-sm text-gray-600">Check official website for current hours and special events</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Entry</h3>
              <p className="text-gray-700 mb-2">Free admission to exhibitions</p>
              <p className="text-sm text-gray-600">Workshop fees may apply - check website for details</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Accessibility</h3>
              <p className="text-gray-700">Wheelchair accessible with ramps and accessible restrooms</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Nearby</h3>
              <p className="text-gray-700">Dunwich foreshore walks, heritage sites, cafés, and beaches</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">✨ Design & Architecture</h2>
        <div className="border rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            QUAMPI's design reflects deep cultural meaning and environmental connection. Architectural 
            elements echo land and sea, using rammed earth, native timbers, and pearl shell motifs - 
            after which the centre is named.
          </p>
          <p className="text-gray-700">
            The architectural vision was realized in partnership with COX Architecture, QYAC (Quandamooka 
            Yoolooburrabee Aboriginal Corporation), and support from leading institutions including the 
            Queensland Gallery of Modern Art (QAGOMA).
          </p>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Important Links</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="https://www.qyac.net.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">QYAC</h3>
            <p className="text-sm text-gray-600">Cultural custodians</p>
          </a>
          <a href="https://www.sealinkqld.com.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">SeaLink Ferries</h3>
            <p className="text-sm text-gray-600">Transport to Minjerribah</p>
          </a>
          <a href="https://www.qmf.org.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">QLD Music Festival</h3>
            <p className="text-sm text-gray-600">Festival partner</p>
          </a>
          <a href="https://www.redland.qld.gov.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Redland Council</h3>
            <p className="text-sm text-gray-600">Arts & culture</p>
          </a>
        </div>
      </section>
    </main>
  );
}

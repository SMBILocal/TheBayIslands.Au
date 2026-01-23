import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quandamooka People & Culture | Indigenous Heritage',
  description: 'Discover the Quandamooka People - Nunukul, Goenpul, and Nughi clans - their 20,000+ year history, culture, and connection to Moreton Bay.',
  keywords: 'Quandamooka People, Indigenous culture Queensland, Nunukul, Goenpul, Nughi, Moreton Bay heritage',
};

export default function QuandamookaPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <Link href="/culture" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Culture
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🌏 Quandamooka Country
        </h1>
        <p className="text-xl text-gray-600">
          The Traditional Custodians of Moreton Bay and the Southern Bay Islands
        </p>
      </div>

      <section className="bg-amber-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Welcome to Country</h2>
        <p className="text-gray-700 mb-4">
          Quandamooka Country encompasses the lands and waters of Minjerribah (North Stradbroke Island), 
          South Stradbroke Island, Mulgumpin (Moreton Island), and the Southern Moreton Bay Islands 
          including Russell, Macleay, Lamb, and Karragarra Islands.
        </p>
        <p className="text-gray-700">
          These are the ancestral lands of the Quandamooka People, comprising the Nunukul, Goenpul, 
          and Nughi clans, with a continuous cultural presence spanning over 20,000 years.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Ancient History & Continuity</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6 py-4">
            <h3 className="font-bold text-xl mb-2">20,000+ Years of Connection</h3>
            <p className="text-gray-700">
              Archaeological evidence shows human habitation on Minjerribah dating back at least 
              20,000–25,000 years, making the Quandamooka People among Australia's oldest continuous cultures. 
              This deep connection to Country is reflected in seasonal practices, sustainable stewardship, 
              and cultural knowledge passed down through countless generations.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6 py-4">
            <h3 className="font-bold text-xl mb-2">The Three Clans</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Nunukul</strong> - Custodians of Minjerribah (North Stradbroke Island)</li>
              <li><strong>Goenpul</strong> - Custodians of mainland areas and southern waters</li>
              <li><strong>Nughi</strong> - Custodians of Mulgumpin (Moreton Island)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Culture, Land & Sea</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <div className="text-4xl mb-3">🌊</div>
            <h3 className="font-bold text-lg mb-3">Saltwater People</h3>
            <p className="text-gray-700">
              Quandamooka culture is deeply embedded in connection to both land and sea. 
              Traditional food sources including fish, shellfish, dugong, and turtle were harvested 
              sustainably. Sacred freshwater lakes, coastal areas, and ceremonial grounds maintain 
              spiritual significance.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <div className="text-4xl mb-3">🪶</div>
            <h3 className="font-bold text-lg mb-3">Living Culture</h3>
            <p className="text-gray-700">
              Art, storytelling, songlines, and corroborees preserve and transmit knowledge. 
              Traditional practices including weaving, bush tucker knowledge, and language preservation 
              continue today. Cultural markers and public artworks communicate ancestral stories to 
              residents and visitors.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Native Title & Modern Custodianship</h2>
        <div className="bg-blue-50 rounded-lg p-8">
          <p className="text-gray-700 mb-4">
            In 2011, the Federal Court recognized the Quandamooka People's native title rights 
            across Minjerribah and surrounding islands. This landmark decision acknowledged the 
            unbroken connection to Country maintained for millennia.
          </p>
          <p className="text-gray-700 mb-4">
            Today, <strong>Quandamooka Yoolooburrabee Aboriginal Corporation (QYAC)</strong> manages 
            cultural heritage, biodiversity conservation, and sustainable community initiatives. 
            QYAC works in partnership with government, researchers, and the community to protect 
            and celebrate Quandamooka culture and Country.
          </p>
          <a
            href="https://www.qyac.net.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Visit QYAC Website →
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Festivals & Cultural Events</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-6">
            <h3 className="font-bold text-xl mb-2">🎭 Quandamooka Festival</h3>
            <p className="text-gray-700 mb-3">
              Annual multi-artform celebration featuring dance, music, storytelling, and cultural tours. 
              The festival brings together community, visitors, and artists to celebrate living Quandamooka culture.
            </p>
            <a href="https://quandamookafestival.com.au" target="_blank" rel="noopener noreferrer" 
              className="text-blue-600 hover:underline">
              Learn more →
            </a>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="font-bold text-xl mb-2">🎶 Music & Cultural Workshops</h3>
            <p className="text-gray-700">
              Community workshops, whale welcome ceremonies, traditional performances, and educational 
              programs throughout the year connect people with Quandamooka culture and traditions.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Sacred Sites & Cultural Respect</h2>
        <div className="bg-amber-50 rounded-lg p-8">
          <p className="text-gray-700 mb-4">
            Sacred lakes, ceremonial grounds, and coastal areas hold deep spiritual significance. 
            Middens, stone arrangements, and other cultural sites are protected under law and custom.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Visitors are encouraged to:</strong>
          </p>
          <ul className="space-y-2 text-gray-700 ml-6">
            <li>• Respect all cultural sites and follow posted guidelines</li>
            <li>• Contact QYAC for cultural guidance and heritage inquiries</li>
            <li>• Participate in cultural tours led by Traditional Custodians</li>
            <li>• Learn about and acknowledge the deep history of this Country</li>
          </ul>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Community Resources & Learning</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="https://www.qyac.net.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">QYAC</h3>
            <p className="text-sm text-gray-600">Quandamooka Yoolooburrabee Aboriginal Corporation</p>
          </a>
          <a href="https://www.redland.qld.gov.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Redland Council</h3>
            <p className="text-sm text-gray-600">Quandamooka Country origins & heritage</p>
          </a>
          <a href="https://moretonbayfoundation.org/moreton-bay/quandamooka-country/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Moreton Bay Foundation</h3>
            <p className="text-sm text-gray-600">Quandamooka Country information</p>
          </a>
          <a href="https://parks.qld.gov.au/parks/naree-budjong-djara/about/culture" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">Queensland Parks</h3>
            <p className="text-sm text-gray-600">Indigenous heritage</p>
          </a>
          <Link href="/culture/quampi"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">QUAMPI Arts Centre</h3>
            <p className="text-sm text-gray-600">Cultural gallery on Minjerribah</p>
          </Link>
          <a href="https://www.qmf.org.au/" target="_blank" rel="noopener noreferrer"
            className="p-4 border rounded hover:border-blue-500 hover:shadow-md transition-all">
            <h3 className="font-semibold mb-1">QLD Music Festival</h3>
            <p className="text-sm text-gray-600">Cultural events & programs</p>
          </a>
        </div>
      </section>
    </main>
  );
}

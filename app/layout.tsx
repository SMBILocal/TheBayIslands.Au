import '../styles/globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import TopAuthBar from '../components/TopAuthBar'
import Footer from '../components/Footer'
import { AuthProvider } from '../lib/AuthContext'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'thebayislands.au – Local hub for SMBI',
  description: 'Articles, jobs, events, business directory and classifieds for the Bay Islands region.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  }
}

export default function RootLayout({children}: {children: ReactNode}){
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <TopAuthBar />
          <Navbar />
          <main className="container" style={{paddingTop:20}}>
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}

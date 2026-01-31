import '../styles/globals.css'
import { ReactNode } from 'react'
import HeaderWrapper from '../components/HeaderWrapper'
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
          <HeaderWrapper />
          <main className="container" style={{paddingTop:0, paddingLeft:0, paddingRight:0}}>
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}

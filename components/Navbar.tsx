"use client"

import Link from "next/link"
import { RefObject, useEffect, useRef, useState } from "react"

<<<<<<< HEAD
// Set orientation class immediately before React renders
if (typeof window !== 'undefined') {
  const isPortrait = window.matchMedia('(orientation: portrait)').matches
  document.documentElement.classList.toggle('is-portrait', isPortrait)
  document.documentElement.classList.toggle('is-landscape', !isPortrait)
}

interface NavbarProps {
	menuOpen?: boolean;
	setMenuOpen?: (open: boolean) => void;
	menuToggleRef?: RefObject<HTMLButtonElement | null>;
}

const PORTRAIT_MOBILE_QUERY = '(max-width: 600px) and (orientation: portrait)'

export default function Navbar({ menuOpen: externalMenuOpen, setMenuOpen: externalSetMenuOpen, menuToggleRef }: NavbarProps = {}) {
	const [internalMenuOpen, setInternalMenuOpen] = useState(false)
	const menuOpen = externalMenuOpen ?? internalMenuOpen
	const setMenuOpen = externalSetMenuOpen ?? setInternalMenuOpen

	const [areasOpen, setAreasOpen] = useState(false)
	const [articlesOpen, setArticlesOpen] = useState(false)
	const [eventsOpen, setEventsOpen] = useState(false)
	const navLinksRef = useRef<HTMLElement>(null)

	useEffect(() => {
		if (!menuOpen) {
			setAreasOpen(false)
			setArticlesOpen(false)
			setEventsOpen(false)
		}
	}, [menuOpen])

	// Lock scroll to top when any dropdown is open in portrait
	useEffect(() => {
		const navContainer = navLinksRef.current
		if (!navContainer) return
		
		const isPortraitMobile = window.matchMedia(PORTRAIT_MOBILE_QUERY).matches
		if (!isPortraitMobile) return
		
		if (menuOpen && (areasOpen || articlesOpen || eventsOpen)) {
			// Continuously force scroll to top
			const lockScroll = () => {
				navContainer.scrollTop = 0
			}
			
			lockScroll()
			navContainer.addEventListener('scroll', lockScroll)
			return () => navContainer.removeEventListener('scroll', lockScroll)
		}
	}, [menuOpen, areasOpen, articlesOpen, eventsOpen])

	// Close menu when switching from portrait to non-portrait
	useEffect(() => {
		const handleResize = () => {
			const portraitMobile = window.matchMedia(PORTRAIT_MOBILE_QUERY).matches
			if (!portraitMobile && menuOpen) {
				setMenuOpen(false)
			}
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [menuOpen, setMenuOpen])

	useEffect(() => {
		if (!menuOpen) return

		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node
			const clickedInsideNav = navLinksRef.current?.contains(target)
			const clickedToggle = menuToggleRef?.current?.contains(target)

			if (!clickedInsideNav && !clickedToggle) {
				setMenuOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [menuOpen, setMenuOpen, menuToggleRef])

	useEffect(() => {
		const updateOffset = () => {
			const topAuth = document.querySelector('.top-auth-bar') as HTMLElement | null
			const navBar = document.querySelector('.site-header .nav') as HTMLElement | null
			const topAuthHeight = topAuth?.offsetHeight ?? 0
			const navHeight = navBar?.offsetHeight ?? 0
			const overlayOffset = Math.max(topAuthHeight, 56)

			document.documentElement.style.setProperty('--top-auth-height', `${topAuthHeight}px`)
			document.documentElement.style.setProperty('--mobile-nav-offset', `${overlayOffset}px`)
		}

		updateOffset()
		window.addEventListener('resize', updateOffset)
		return () => window.removeEventListener('resize', updateOffset)
	}, [])

	const areasMenuId = 'nav-areas'
	const articlesMenuId = 'nav-articles'
	const eventsMenuId = 'nav-events'

	const handleDropdownToggle = (currentState: boolean, setState: (state: boolean) => void) => {
		setState(!currentState)
		
		// Force scroll to top after state change
		requestAnimationFrame(() => {
			if (navLinksRef.current) {
				navLinksRef.current.scrollTop = 0
			}
		})
	}

	return (
		<header className="site-header">
			<div className="container nav">
				<nav
					ref={navLinksRef}
					id="site-primary-navigation"
					className={`nav-links ${menuOpen ? 'open' : ''}`}
					aria-label="Main navigation"
				>
					<Link href="/" onClick={() => setMenuOpen(false)}>🏠 Home</Link>

					{/* Areas Dropdown */}
					<div className="nav-dropdown" onMouseLeave={() => setAreasOpen(false)}>
						<button
							className="nav-dropdown-toggle"
							type="button"
							aria-expanded={areasOpen}
							aria-controls={areasMenuId}
						onClick={() => handleDropdownToggle(areasOpen, setAreasOpen)}
							onMouseEnter={() => setAreasOpen(true)}
						>
							<span className="nav-dropdown-label" aria-hidden="true">
								<span>📍</span>
								<span>Areas</span>
							</span>
							<span className="nav-dropdown-caret" aria-hidden="true">{areasOpen ? '▲' : '▼'}</span>
						</button>
						<div
							id={areasMenuId}
							className={`nav-dropdown-menu ${areasOpen ? 'show' : ''}`}
						>
							<div className="nav-dropdown-section-label">Islands</div>
							<Link className="nav-dropdown-link" href="/islands/russell" onClick={() => { setMenuOpen(false); setAreasOpen(false) }}>
								Russell Island
							</Link>
							<Link className="nav-dropdown-link" href="/islands/macleay" onClick={() => { setMenuOpen(false); setAreasOpen(false) }}>
								Macleay Island
							</Link>
							<Link className="nav-dropdown-link" href="/islands/lamb" onClick={() => { setMenuOpen(false); setAreasOpen(false) }}>
								Lamb Island
							</Link>
							<Link className="nav-dropdown-link" href="/islands/karragarra" onClick={() => { setMenuOpen(false); setAreasOpen(false) }}>
								Karragarra Island
							</Link>
							<Link className="nav-dropdown-link nav-dropdown-link-accent" href="/islands" onClick={() => { setMenuOpen(false); setAreasOpen(false) }}>
								All Islands →
							</Link>

							<div className="nav-dropdown-divider" role="presentation"></div>

							<div className="nav-dropdown-section-label">Mainland</div>
							<Link className="nav-dropdown-link" href="/areas/mainland/redland-bay" onClick={() => { setMenuOpen(false); setAreasOpen(false) }}>
								Redland Bay
							</Link>
							<Link className="nav-dropdown-link" href="/areas/mainland/victoria-point" onClick={() => { setMenuOpen(false); setAreasOpen(false) }}>
								Victoria Point
							</Link>
							<Link className="nav-dropdown-link" href="/areas/mainland/cleveland" onClick={() => { setMenuOpen(false); setAreasOpen(false) }}>
								Cleveland
							</Link>
							<Link className="nav-dropdown-link" href="/areas/mainland/capalaba" onClick={() => { setMenuOpen(false); setAreasOpen(false) }}>
								Capalaba
							</Link>
						</div>
					</div>

					{/* Articles Dropdown */}
					<div className="nav-dropdown" onMouseLeave={() => setArticlesOpen(false)}>
						<button
							className="nav-dropdown-toggle"
							type="button"
							aria-expanded={articlesOpen}
							aria-controls={articlesMenuId}
						onClick={() => handleDropdownToggle(articlesOpen, setArticlesOpen)}
							onMouseEnter={() => setArticlesOpen(true)}
						>
							<span className="nav-dropdown-label" aria-hidden="true">
								<span>📰</span>
								<span>Articles</span>
							</span>
							<span className="nav-dropdown-caret" aria-hidden="true">{articlesOpen ? '▲' : '▼'}</span>
						</button>
						<div
							id={articlesMenuId}
							className={`nav-dropdown-menu ${articlesOpen ? 'show' : ''}`}
						>
							<Link className="nav-dropdown-link" href="/articles" onClick={() => { setMenuOpen(false); setArticlesOpen(false) }}>
								All Articles
							</Link>
							<Link className="nav-dropdown-link" href="/news" onClick={() => { setMenuOpen(false); setArticlesOpen(false) }}>
								Local News
							</Link>
							<Link className="nav-dropdown-link" href="/maritime" onClick={() => { setMenuOpen(false); setArticlesOpen(false) }}>
								Boating & Maritime
							</Link>
							<Link className="nav-dropdown-link" href="/sports" onClick={() => { setMenuOpen(false); setArticlesOpen(false) }}>
								Sports Guide
							</Link>
							<Link className="nav-dropdown-link" href="/tv" onClick={() => { setMenuOpen(false); setArticlesOpen(false) }}>
								TV Stations
							</Link>
						</div>
					</div>

					{/* Events Dropdown */}
					<div className="nav-dropdown" onMouseLeave={() => setEventsOpen(false)}>
						<button
							className="nav-dropdown-toggle"
							type="button"
							aria-expanded={eventsOpen}
							aria-controls={eventsMenuId}
						onClick={() => handleDropdownToggle(eventsOpen, setEventsOpen)}
							onMouseEnter={() => setEventsOpen(true)}
						>
							<span className="nav-dropdown-label" aria-hidden="true">
								<span>🎉</span>
								<span>Events</span>
							</span>
							<span className="nav-dropdown-caret" aria-hidden="true">{eventsOpen ? '▲' : '▼'}</span>
						</button>
						<div
							id={eventsMenuId}
							className={`nav-dropdown-menu ${eventsOpen ? 'show' : ''}`}
						>
							<Link className="nav-dropdown-link" href="/events" onClick={() => { setMenuOpen(false); setEventsOpen(false) }}>
								All Events
							</Link>
							<Link className="nav-dropdown-link" href="/community" onClick={() => { setMenuOpen(false); setEventsOpen(false) }}>
								Community Noticeboard
							</Link>
							<Link className="nav-dropdown-link" href="/sports" onClick={() => { setMenuOpen(false); setEventsOpen(false) }}>
								Sports Events
							</Link>
							<Link className="nav-dropdown-link" href="/radio" onClick={() => { setMenuOpen(false); setEventsOpen(false) }}>
								Local Radio
							</Link>
						</div>
					</div>

					<Link href="/jobs" onClick={() => setMenuOpen(false)}>💼 Jobs</Link>
					<Link href="/directory" onClick={() => setMenuOpen(false)}>📍 Directory</Link>
					<Link href="/classifieds" onClick={() => setMenuOpen(false)}>🛒 Buy & Sell</Link>
					<Link
						href="/upgrade"
						onClick={() => setMenuOpen(false)}
						className="desktop-go-premium-link"
						style={{ color: '#c85a17', fontWeight: '600' }}
					>
						⭐ Go Premium
					</Link>

					<div className="mobile-menu-cta">
						<Link
							href="/upgrade?claim=1"
							className="mobile-claim-link"
							onClick={() => setMenuOpen(false)}
						>
							✅ Claim Your Listing
						</Link>
					</div>
				</nav>
			</div>
		</header>
	)
=======
export default function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const [articlesOpen, setArticlesOpen] = useState(false)
  const [eventsOpen, setEventsOpen] = useState(false)
  const { user, signOut } = useAuth()

  const handleLogout = async () => {
    await signOut()
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container nav">
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <Link href="/" onClick={()=>setMenuOpen(false)}>🏠 Home</Link>
          
          {/* Areas Dropdown */}
          <div className="nav-dropdown" style={{ position: 'relative' }} onMouseLeave={() => setAreasOpen(false)}>
            <button 
              className="nav-dropdown-toggle"
              onClick={() => setAreasOpen(!areasOpen)}
              onMouseEnter={() => setAreasOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                  fontSize: 'clamp(13px, 2vw, 14px)',
                fontWeight: '500',
                fontFamily: 'inherit',
                padding: '8px 10px',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                  gap: '6px',
                borderRadius: '8px',
                transition: 'background 0.2s',
              }}
            >
                📍 <span style={{ whiteSpace: 'nowrap' }}>Areas <span style={{ fontSize: '0.7em', marginLeft: '2px' }}>▼</span></span>
            </button>
            <div 
              className={`nav-dropdown-menu ${areasOpen ? 'show' : ''}`}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                padding: '12px 0',
                minWidth: '200px',
                display: areasOpen ? 'block' : 'none',
                zIndex: 1000
              }}
            >
              <div style={{ padding: '8px 16px', fontWeight: 'bold', fontSize: '0.85em', color: '#666', textTransform: 'uppercase' }}>
                Islands
              </div>
              <Link href="/islands/russell" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Russell Island
              </Link>
              <Link href="/islands/macleay" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Macleay Island
              </Link>
              <Link href="/islands/lamb" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Lamb Island
              </Link>
              <Link href="/islands/karragarra" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Karragarra Island
              </Link>
              <Link href="/islands" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#0066b3', textDecoration: 'none', fontWeight: '600' }}>
                All Islands →
              </Link>
              
              <div style={{ borderTop: '1px solid #eee', margin: '8px 0' }}></div>
              
              <div style={{ padding: '8px 16px', fontWeight: 'bold', fontSize: '0.85em', color: '#666', textTransform: 'uppercase' }}>
                Mainland
              </div>
              <Link href="/areas/mainland/redland-bay" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Redland Bay
              </Link>
              <Link href="/areas/mainland/victoria-point" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Victoria Point
              </Link>
              <Link href="/areas/mainland/cleveland" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Cleveland
              </Link>
              <Link href="/areas/mainland/capalaba" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Capalaba
              </Link>
            </div>
          </div>
          
          {/* Articles Dropdown */}
          <div className="nav-dropdown" style={{ position: 'relative' }} onMouseLeave={() => setArticlesOpen(false)}>
            <button 
              className="nav-dropdown-toggle"
              onClick={() => setArticlesOpen(!articlesOpen)}
              onMouseEnter={() => setArticlesOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                  fontSize: 'clamp(13px, 2vw, 14px)',
                fontWeight: '500',
                fontFamily: 'inherit',
                padding: '8px 10px',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                  gap: '6px',
                borderRadius: '8px',
                transition: 'background 0.2s',
              }}
            >
                📰 <span style={{ whiteSpace: 'nowrap' }}>Articles <span style={{ fontSize: '0.7em', marginLeft: '2px' }}>▼</span></span>
            </button>
            <div 
              className={`nav-dropdown-menu ${articlesOpen ? 'show' : ''}`}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                padding: '12px 0',
                minWidth: '200px',
                display: articlesOpen ? 'block' : 'none',
                zIndex: 1000
              }}
            >
              <Link href="/articles" onClick={()=>{setMenuOpen(false); setArticlesOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                All Articles
              </Link>
              <Link href="/news" onClick={()=>{setMenuOpen(false); setArticlesOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Local News
              </Link>
              <Link href="/maritime" onClick={()=>{setMenuOpen(false); setArticlesOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Boating & Maritime
              </Link>
              <Link href="/sports" onClick={()=>{setMenuOpen(false); setArticlesOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Sports Guide
              </Link>
              <Link href="/tv" onClick={()=>{setMenuOpen(false); setArticlesOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                TV Stations
              </Link>
            </div>
          </div>

          {/* Events Dropdown */}
          <div className="nav-dropdown" style={{ position: 'relative' }} onMouseLeave={() => setEventsOpen(false)}>
            <button 
              className="nav-dropdown-toggle"
              onClick={() => setEventsOpen(!eventsOpen)}
              onMouseEnter={() => setEventsOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                  fontSize: 'clamp(13px, 2vw, 14px)',
                fontWeight: '500',
                fontFamily: 'inherit',
                padding: '8px 10px',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                  gap: '6px',
                borderRadius: '8px',
                transition: 'background 0.2s',
              }}
            >
                🎉 <span style={{ whiteSpace: 'nowrap' }}>Events <span style={{ fontSize: '0.7em', marginLeft: '2px' }}>▼</span></span>
            </button>
            <div 
              className={`nav-dropdown-menu ${eventsOpen ? 'show' : ''}`}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                padding: '12px 0',
                minWidth: '200px',
                display: eventsOpen ? 'block' : 'none',
                zIndex: 1000
              }}
            >
              <Link href="/events" onClick={()=>{setMenuOpen(false); setEventsOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                All Events
              </Link>
              <Link href="/community" onClick={()=>{setMenuOpen(false); setEventsOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Community Noticeboard
              </Link>
              <Link href="/sports" onClick={()=>{setMenuOpen(false); setEventsOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Sports Events
              </Link>
              <Link href="/radio" onClick={()=>{setMenuOpen(false); setEventsOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Local Radio
              </Link>
            </div>
          </div>
          
          <Link href="/jobs" onClick={()=>setMenuOpen(false)}>💼 Jobs</Link>
          <Link href="/directory" onClick={()=>setMenuOpen(false)}>📍 Directory</Link>
          <Link href="/classifieds" onClick={()=>setMenuOpen(false)}>🛒 Buy & Sell</Link>
          <Link href="/upgrade" onClick={()=>setMenuOpen(false)} style={{ color: '#c85a17', fontWeight: '600' }}>
            ⭐ Go Premium
          </Link>
          
          {/* Mobile Only: Auth & Radio Links */}
          <div className="mobile-only-links">
            <Link href="/radio" onClick={()=>setMenuOpen(false)} style={{ color: '#0066b3', fontWeight: '600' }}>
              📻 Local Radio
            </Link>
            {!user ? (
              <>
                <Link href="/login" onClick={()=>setMenuOpen(false)} style={{ color: '#0066b3', fontWeight: '600' }}>
                  🔐 Login
                </Link>
                <Link href="/signup" onClick={()=>setMenuOpen(false)} style={{ background: '#0066b3', color: 'white', fontWeight: '600', padding: '12px 20px', borderRadius: '8px', textAlign: 'center' }}>
                  ✨ Sign Up Free
                </Link>
              </>
            ) : (
              <button onClick={handleLogout} style={{ background: '#dc2626', color: 'white', fontWeight: '600', padding: '12px 20px', borderRadius: '8px', textAlign: 'center', width: '100%', border: 'none', cursor: 'pointer' }}>
                🚪 Logout
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
>>>>>>> origin/main
}

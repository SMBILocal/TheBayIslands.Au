'use client';

import { useEffect, useRef, useState } from 'react';
import TopAuthBar from './TopAuthBar';
import Navbar from './Navbar';

export default function HeaderWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const body = document.body;
    if (menuOpen) {
      body.classList.add('nav-open');
    } else {
      body.classList.remove('nav-open');
    }

    return () => {
      body.classList.remove('nav-open');
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <TopAuthBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuToggleRef={menuToggleRef} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuToggleRef={menuToggleRef} />
    </>
  );
}

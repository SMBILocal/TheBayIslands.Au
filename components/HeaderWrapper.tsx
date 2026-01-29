'use client';

import { useState } from 'react';
import TopAuthBar from './TopAuthBar';
import Navbar from './Navbar';

export default function HeaderWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <TopAuthBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}

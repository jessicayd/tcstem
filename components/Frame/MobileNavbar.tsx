'use client'

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-navbar">
        <div className="mobile-bar">
            <Link href="/" className="navbar-title small-title"><Image src="/icon.png" alt="Icon" width={35} height={35}/>&nbsp;&nbsp;TCSTEM</Link>
            <button className="sidebar-button" onClick={toggleMobileMenu}>{isOpen ? <img src="ex.png" alt="x"/> : <img src="hamburger.png" alt="hamburger menu icon"/>}</button>
        </div>
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <Link href="/" className={`navbar-mobile-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link href="/about-us" className={`navbar-mobile-link ${pathname === '/about-us' ? 'active' : ''}`}>About Us</Link>
            <Link href="/our-partners" className={`navbar-mobile-link ${pathname === '/our-partners' ? 'active' : ''}`}>Our Partners</Link>
            <Link href="/get-involved" className={`navbar-mobile-link ${pathname === '/get-involved' ? 'active' : ''}`}>Get Involved</Link>
            <Link href="/connect-with-us" className={`navbar-mobile-link ${pathname === '/connect-with-us' ? 'active' : ''}`}>Connect with Us</Link>
            <Link href="/donate" className={`navbar-mobile-link ${pathname === '/donate' ? 'active' : ''}`}>Donate</Link>
        </aside>
    </div>
  );
};


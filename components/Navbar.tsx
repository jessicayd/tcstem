'use client'

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname()

    return (
      <nav className="navbar">
        <div className="navbar-child">
          <Link href="/" className="navbar-title"><Image src="/icon.png" alt="Icon" width={40} height={40}/>&nbsp;Teach Children STEM</Link>
        </div>
        <div className="navbar-child">
          <Link href="/" className={`navbar-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/about-us" className={`navbar-link ${pathname === '/about-us' ? 'active' : ''}`}>About Us</Link>
          <Link href="/our-partners" className={`navbar-link ${pathname === '/our-partners' ? 'active' : ''}`}>Our Partners</Link>
          <Link href="/get-involved" className={`navbar-link ${pathname === '/get-involved' ? 'active' : ''}`}>Get Involved</Link>
          <Link href="/connect-with-us" className={`navbar-link ${pathname === '/connect-with-us' ? 'active' : ''}`}>Connect with Us</Link>
          <Link href="/donate" className={`navbar-link ${pathname === '/donate' ? 'active' : ''}`}>Donate</Link>
        </div>
      </nav>
    )
}
'use client';
import Logo from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useRef, useState } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { useAuth } from '@/hooks/useAuth';
import useAuthStore from '@/store/useAuthStore';

import { useRouter } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const user = useAuthStore((state) => state.user);
  const userLoading = useAuthStore((state) => state.loading);

  const headerRef = useRef(null);
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');

    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <div
        ref={headerRef}
        className={`py-5 top-0 left-0 right-0 z-50 fixed transition-all duration-300 ${
          isSticky ? 'backdrop-blur bg-black/60 shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container flex justify-between items-center">
          <Logo />

          {/* Hamburger Icon */}
          <button
            className={`md:hidden flex flex-col justify-center items-center w-8 h-8 z-20 rounded ${
              isSticky ? 'bg-transparent' : ' bg-black/60'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white  mb-1 transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>

          {/* Desktop Menu */}
          <ul
            className={`hidden text-xl md:flex justify-center items-center gap-6 font-normal
            ${pathName === '/' || isSticky ? 'text-white' : 'text-black'} 
        
            `}
          >
            <li>
              <Link href="/">Discover</Link>
            </li>
            <li>
              <Link href="/">Destination</Link>
            </li>
            <li>
              <Link href="/">Trip Plan</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
          </ul>

          {/* Desktop Get Start Button */}
          <div className="hidden md:block">
            {user ? (
              <div className="flex items-center gap-4">
                <p className="rounded-full text-white bg-gray-500 py-0 px-2 border">
                  {user.email}
                </p>
                <button onClick={handleLogout} className="btn-primary w-full">
                  log Out
                </button>
              </div>
            ) : (
              <Link href="/login" className="btn-primary text-white">
                Get Start
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <ul
        className={`fixed top-0 right-0 h-full w-2/4 bg-[#222] text-white flex flex-col gap-8 pt-24 px-8 transition-transform duration-300 z-10 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <li>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Discover
          </Link>
        </li>
        <li>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Destination
          </Link>
        </li>
        <li>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Trip Plan
          </Link>
        </li>
        <li>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
        </li>
        <li>
          {user ? (
            <div className="flex flex-col gap-10">
              <p className="mb-5 mr-3 rounded-full text-green-500 py-0 px-2 border border-green-500">
                {user.email}
              </p>
              <button onClick={handleLogout} className="btn-primary w-full">
                log Out
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full"
            >
              Get Start
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

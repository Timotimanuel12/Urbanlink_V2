import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <--- 1. IMPORT ADDED HERE

// Inline SVG Icons for simplicity
const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const UserIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A1.5 1.5 0 0118 21.75H6a1.5 1.5 0 01-1.499-1.632z"
    />
  </svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Buy Property', href: '#' },
    { name: 'New Projects', href: '#' },
    { name: 'Luxury Houses', href: '#' },
    { name: 'Commertial', href: '#' },
    { name: 'Land', href: '#' },
    { name: 'KPR', href: '#' },
    { name: 'Neighborhoods', href: '#' },
    { name: 'Sell', href: '#' },
    { name: 'Agents', href: '#' },
    { name: 'Journal', href: '#' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user has scrolled more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      {/* Updated Navbar: Two-row fixed layout with scroll-to-white effect */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-20 
          transition-all duration-300 ease-in-out 
          ${isScrolled ? 'bg-white text-black shadow-lg' : 'text-white'}
        `}
      >
        {/* Wrapper for padding and max-width */}
        <div className="max-w-screen-2xl mx-auto px-4">
          {/* Top Row: Brand, Menu, Sell, Login */}
          <div
            className={`
              flex justify-between items-center py-4 
              transition-colors duration-300 ease-in-out 
              ${isScrolled ? 'border-b border-gray-200' : 'border-b border-white border-opacity-20'}
            `}
          >
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`transition-colors ${isScrolled ? 'hover:text-gray-700' : 'hover:text-gray-300'}`}
                aria-label="Open menu"
              >
                <MenuIcon />
              </button>
              
              {/* --- 2. UPDATED LOGO SECTION --- */}
              <div className="flex items-baseline gap-3">
                <Link to="/" className="text-2xl font-serif tracking-wider">
                  UrbanLink
                </Link>
                
                {/* "Back to Homepage" Link */}
                <Link 
                  to="/" 
                  className={`
                    hidden md:block text-[10px] font-medium uppercase tracking-wide 
                    transition-colors border-l pl-3
                    ${isScrolled 
                      ? 'border-gray-300 text-gray-500 hover:text-black' 
                      : 'border-white/30 text-gray-300 hover:text-white'
                    }
                  `}
                >
                  Back to Homepage
                </Link>
              </div>

            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <button
                className={`
                  hidden sm:block text-sm font-medium uppercase tracking-wide 
                  transition-colors ${isScrolled ? 'hover:text-gray-700' : 'hover:text-gray-300'}
                `}
              >
                Sell With Us
              </button>
              <button
                className={`
                  flex items-center gap-2 text-sm font-medium uppercase tracking-wide 
                  border rounded-full px-4 py-2 transition-all duration-300
                  ${
                    isScrolled
                      ? 'border-black border-opacity-50 hover:bg-black hover:bg-opacity-5'
                      : 'border-white border-opacity-50 hover:bg-white hover:bg-opacity-10'
                  }
                `}
              >
                <UserIcon />
                <span className="hidden sm:block">Log In</span>
              </button>
            </div>
          </div>

          {/* Bottom Row: Category Links (Desktop Only) */}
          <div
            className={`
              hidden lg:flex justify-center items-center py-4 
              transition-colors duration-300 ease-in-out 
              ${isScrolled ? 'border-b border-gray-200' : 'border-b border-white border-opacity-20'}
            `}
          >
            <ul className="flex items-center gap-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`
                      text-sm font-medium uppercase tracking-wide 
                      transition-colors ${isScrolled ? 'hover:text-gray-700' : 'hover:text-gray-300'}
                    `}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 text-white flex flex-col p-4">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center mb-8">
            {/* Updated to Link for consistency */}
            <Link to="/" className="text-2xl font-serif tracking-wider" onClick={() => setIsMobileMenuOpen(false)}>
              UrbanLink
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <ul className="flex flex-col gap-y-6 flex-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xl font-medium uppercase tracking-wide hover:text-gray-300 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Footer */}
          <div className="mt-8">
            <button className="w-full text-center text-lg font-medium uppercase tracking-wide border border-white border-opacity-50 rounded-full px-4 py-3 hover:bg-white hover:bg-opacity-10 transition-colors">
              Sell With Us
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
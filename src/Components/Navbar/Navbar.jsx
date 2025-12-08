import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthModal from '../Auth/AuthModal.jsx';

// --- Inline SVG Icons ---
const MenuIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const UserIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A1.5 1.5 0 0118 21.75H6a1.5 1.5 0 01-1.499-1.632z" />
  </svg>
);

// Chevron Icon for Dropdowns
const ChevronDownIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const location = useLocation();
  const isSolid = isScrolled || location.pathname !== '/';

  // --- TRANSLATED NAV LINKS ---
  const navLinks = [
    { name: 'Beli Properti', href: '/buy' }, // Buy Property -> Beli Properti
    { name: 'Tipe', href: '#', isDropdown: true }, // Type -> Tipe
    { name: 'Lokasi', href: '#', isDropdown: true }, // Location -> Lokasi
    { name: 'KPR', href: '/KPR' }, // KPR stays KPR
    { name: 'Jual Properti', href: '/jualrumah' }, // Sell Your Property -> Jual Properti
    { name: 'Gabung Agen', href: '/join-agent' }, // Join as Agent -> Gabung Agen
    { name: "The Urban's Journal", href: '/journal' }, // Kept English
    { name: 'Hubungi Kami', href: '/contact' }, // Contact Us -> Hubungi Kami
  ];

  // Specific data for the dropdowns
  const propertyTypes = [
    { name: 'Apartemen', href: '/search?type=apartment' },
    { name: 'Rumah', href: '/search?type=house' },
    { name: 'Ruko', href: '/search?type=commercial' },
    { name: 'Tanah', href: '/search?type=land' },
    { name: 'Vila', href: '/search?type=villa' },
  ];

  const locations = [
    { name: 'Jakarta Selatan', href: '/listings/jakarta-selatan' },
    { name: 'Tangerang Selatan', href: '/listings/tangerang-selatan' },
    { name: 'Depok', href: '/listings/depok' },
    { name: 'Bekasi', href: '/listings/bekasi' },
    { name: 'Bogor', href: '/listings/bogor' },
    { name: 'Kota Tangerang', href: '/listings/kota-tangerang' },
    { name: 'Kabupaten Tangerang', href: '/listings/kabupaten-tangerang' },
    { name: 'Jakarta Barat', href: '/listings/jakarta-barat' },
    { name: 'Jakarta Timur', href: '/listings/jakarta-timur' },
    { name: 'Jakarta Utara', href: '/listings/jakarta-utara' },
    { name: 'Cibubur', href: '/listings/cibubur' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Import Nunito Font specifically for Navbar to ensure consistency */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');
      `}</style>

      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-all duration-300 ease-in-out 
          ${isSolid ? 'bg-white text-black shadow-lg' : 'text-white'}
        `}
        style={{ fontFamily: "'Nunito', sans-serif" }} 
      >
        <div className="max-w-screen-2xl mx-auto px-4">
          
          {/* Top Row */}
          <div className={`flex justify-between items-center py-4 transition-colors duration-300 ease-in-out ${isSolid ? 'border-b border-gray-200' : 'border-b border-white border-opacity-20'}`}>
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`transition-colors ${isSolid ? 'hover:text-gray-700' : 'hover:text-gray-300'}`}
                aria-label="Buka menu"
              >
                <MenuIcon />
              </button>
              
              <div className="flex items-baseline gap-3">
                {/* Logo keeps its own Serif font */}
                <Link to="/" className="text-2xl font-serif tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
                  UrbanLink
                </Link>
                <Link 
                  to="/" 
                  className={`hidden md:block text-[10px] font-medium uppercase tracking-wide transition-colors border-l pl-3 ${isSolid ? 'border-gray-300 text-gray-500 hover:text-black' : 'border-white/30 text-gray-300 hover:text-white'}`}
                >
                  Kembali ke Beranda
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <button
                className={`flex items-center gap-2 text-sm font-medium uppercase tracking-wide border rounded-full px-4 py-2 transition-all duration-300 ${isSolid ? 'border-black border-opacity-50 hover:bg-black hover:bg-opacity-5' : 'border-white border-opacity-50 hover:bg-white hover:bg-opacity-10'}`}
                onClick={() => setIsAuthOpen(true)}
              >
                <UserIcon />
                <span className="hidden sm:block">Masuk</span>
              </button>
            </div>
          </div>

          {/* Bottom Row: Category Links (Desktop) */}
          <div className={`hidden lg:flex justify-center items-center py-4 transition-colors duration-300 ease-in-out ${isSolid ? 'border-b border-gray-200' : 'border-b border-white border-opacity-20'}`}>
            <ul className="flex items-center gap-x-8">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group h-full">
                  <Link
                    to={link.href}
                    className={`
                      text-sm font-medium uppercase tracking-wide inline-flex items-center gap-1 leading-none py-2
                      transition-colors border-b-2 border-transparent hover:border-current
                      ${isSolid ? 'hover:text-gray-700' : 'hover:text-gray-300'}
                    `}
                  >
                    {link.name}
                    {link.isDropdown && (
                      <ChevronDownIcon className="transition-transform duration-300 group-hover:-rotate-180" />
                    )}
                  </Link>

                  {/* --- TYPE DROPDOWN --- */}
                  {link.name === 'Tipe' && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-48 hidden group-hover:block">
                      <div className="bg-white text-gray-800 shadow-xl border border-gray-100 rounded-sm py-2 animate-fadeIn">
                        {propertyTypes.map((type) => (
                          <Link 
                            key={type.name} 
                            to={type.href} 
                            className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-black transition-colors"
                          >
                            {type.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* --- LOCATION DROPDOWN --- */}
                  {link.name === 'Lokasi' && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 hidden group-hover:block">
                      <div className="bg-white text-gray-800 shadow-xl border border-gray-100 rounded-sm py-2 animate-fadeIn max-h-[400px] overflow-y-auto custom-scrollbar">
                        {locations.map((loc) => (
                          <Link 
                            key={loc.name} 
                            to={loc.href} 
                            className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-black transition-colors border-b border-gray-50 last:border-0"
                          >
                            {loc.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 text-white flex flex-col p-4 animate-fadeIn" style={{ fontFamily: "'Nunito', sans-serif" }}>
          {/* Mobile Header */}
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="text-2xl font-serif tracking-wider" onClick={() => setIsMobileMenuOpen(false)} style={{ fontFamily: "'Playfair Display', serif" }}>
              UrbanLink
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Tutup menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-y-6 flex-1 overflow-y-auto">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-medium uppercase tracking-wide hover:text-gray-300 transition-colors inline-block leading-none border-b-2 border-transparent hover:border-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button className="w-full text-center text-lg font-medium uppercase tracking-wide border border-white border-opacity-50 rounded-full px-4 py-3 hover:bg-white hover:bg-opacity-10 transition-colors">
              Jual Properti Anda
            </button>
          </div>
        </div>
      )}

      {isAuthOpen && (
        <AuthModal open={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
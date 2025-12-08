import React from 'react';
import { Link } from 'react-router-dom';

// --- SVG Icon Components for the Footer ---

// Logo (white text)
const Logo = () => (
  <div className="flex items-center space-x-2">
    <span className="text-3xl font-bold text-white">Urbanlink.</span>
  </div>
);

// Map Pin Icon
const MapPinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// Phone Icon
const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// Reusable link component for the location list
const LocationLink = ({ children }) => (
  <li className="flex items-center">
    <MapPinIcon className="w-5 h-5 mr-2 text-gray-300" />
    <a href="#" className="hover:text-white hover:underline transition-colors duration-200">
      {children}
    </a>
  </li>
);

// --- The Main Footer Component ---
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-screen-2xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-300">Marketplace properti mewah dengan kurasi terbaik.</p>
            <div className="flex items-center text-gray-100">
              <PhoneIcon className="w-5 h-5 mr-2" />
              <span className="font-semibold">0881-0100-53862</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Jelajahi</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/buy" className="hover:text-white hover:underline">Beli Properti</Link></li>
              <li><Link to="/search" className="hover:text-white hover:underline">Pencarian</Link></li>
              <li><Link to="/listings/jakarta-selatan" className="hover:text-white hover:underline">Jakarta Selatan</Link></li>
              <li><Link to="/listings/tangerang-selatan" className="hover:text-white hover:underline">Tangerang Selatan</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Perusahaan</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/journal" className="hover:text-white hover:underline">The Urban's Journal</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:underline">Hubungi Kami</Link></li>
              <li><Link to="/join-agent" className="hover:text-white hover:underline">Bergabung jadi Agen</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Berlangganan</h4>
            <p className="text-sm text-gray-300 mb-4">Dapatkan artikel dan listing terbaru setiap minggu.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Email Anda" className="flex-1 px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <button type="button" className="px-5 py-3 rounded-md bg-white text-black font-semibold">Kirim</button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <span>© {new Date().getFullYear()} Urbanlink. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/journal" className="hover:text-white">Journal</Link>
            <Link to="/buy" className="hover:text-white">Buy</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

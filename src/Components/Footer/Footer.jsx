import React from 'react';

// --- SVG Icon Components for the Footer ---

// Logo (white text)
const Logo = () => (
  <div className="flex items-center space-x-2">
    {/* This is a placeholder for your new logo from the image. 
        If you have an SVG or image URL, it can be placed here.
        For now, I'll use a styled text logo. */}
        <p></p>
        <p></p>
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
        // Kept the darker, more subtle gradient
        <footer className="bg-gradient-to-r from-slate-900 to-blue-950 text-white">
            <div className="container mx-auto px-6 py-12">
                {/* New 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Column 1: Temukan Properti */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-lg">Temukan Properti</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <LocationLink>Jakarta Selatan</LocationLink>
                            <LocationLink>Tangerang Selatan</LocationLink>
                            <LocationLink>Depok</LocationLink>
                            <LocationLink>Bekasi</LocationLink>
                            <LocationLink>Bogor</LocationLink>
                            <LocationLink>Kota Tangerang</LocationLink>
                            <LocationLink>Kabupaten Tangerang</LocationLink>
                            <LocationLink>Jakarta Barat</LocationLink>
                            <LocationLink>Jakarta Timur</LocationLink>
                            <LocationLink>Jakarta Utara</LocationLink>
                            <LocationLink>Cibubur</LocationLink>
                        </ul>
                    </div>

                    {/* Column 2: Bantuan */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-lg">Bantuan</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-white hover:underline transition-colors duration-200">Artikel</a></li>
                            <li><a href="#" className="hover:text-white hover:underline transition-colors duration-200">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-white hover:underline transition-colors duration-200">Hubungi Kami</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Customer Support */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-lg">Customer Support</h4>
                        <div className="flex items-center text-gray-100 mb-4">
                            <PhoneIcon className="w-5 h-5 mr-2" />
                            <span className="font-semibold text-lg">0881-0100-53862</span>
                        </div>
                        
                        <h5 className="font-semibold text-white mb-3 mt-6">Konsultasikan Kebutuhanmu</h5>
                        {/* Placeholder for the new Urbanlink logo from the image */}
                        <div className="w-36">
                            {/* Using the text logo for now. You can replace this with an <img> tag. */}
                            <Logo /> 
                        </div>
                    </div>
                </div>

                {/* Removed the old bottom bar */}
            </div>
        </footer>
    );
};

export default Footer;
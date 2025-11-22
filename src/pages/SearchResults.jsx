import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartIcon, 
  MapIcon, 
  ListBulletIcon,
  AdjustmentsHorizontalIcon 
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

// --- MOCK DATA ---
const searchResults = [
  {
    id: 1,
    price: '$36,000,000',
    beds: 6,
    baths: 10,
    size: '1559 Sqm',
    address: 'House in Hidden Hills, California, United States',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    agency: "Christie's International",
    agentName: "Adi Livyatan",
    agentImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    tags: ['1/73']
  },
  {
    id: 2,
    price: '$6,750,000',
    beds: 6,
    baths: 10,
    size: '1029 Sqm',
    address: 'House in Hidden Hills, California, United States',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    agency: "eXp Realty",
    agentName: "Luxury Team",
    tags: ['Video', '1/28']
  },
  {
    id: 3,
    price: '$10,999,000',
    beds: 6,
    baths: 7,
    size: '1128 Sqm',
    address: 'House in Hidden Hills, California, United States',
    image: 'https://images.unsplash.com/photo-1600596542815-2495db969ef8?auto=format&fit=crop&w=800&q=80',
    agency: "Christie's International",
    agentName: "Tomer Fridman",
    agentImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    tags: ['1/50']
  },
  {
    id: 4,
    price: '$6,500,000',
    beds: 5,
    baths: 7,
    size: '675 Sqm',
    address: 'House in Hidden Hills, California, United States',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    agency: "The Agency",
    agentName: "Team Smith",
    tags: ['New price', '1/28']
  },
];

// --- SUB-COMPONENTS ---

const FilterButton = ({ label, active }) => (
  <button className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors whitespace-nowrap ${active ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-300 hover:border-black'}`}>
    {label}
  </button>
);

const SearchCard = ({ item }) => (
  <div className="flex flex-col group cursor-pointer">
    {/* Image Section */}
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
      <img 
        src={item.image} 
        alt={item.address} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Tags Overlay */}
      <div className="absolute top-3 left-3 flex gap-2">
        {item.tags.map((tag, idx) => (
          <span key={idx} className="bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm">
            {tag}
          </span>
        ))}
      </div>
      {/* Heart Icon */}
      <div className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-gray-100 transition">
        <HeartIcon className="w-4 h-4 text-black" />
      </div>
    </div>

    {/* Info Section */}
    <div className="pt-4">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-black">{item.price}</h3>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Contact ✉</span>
      </div>
      
      <p className="text-sm text-gray-600 mt-1">
        {item.beds} Beds • {item.baths} Baths • {item.size}
      </p>
      <p className="text-sm text-gray-500 mt-1 truncate">{item.address}</p>
      
      {/* Agent / Agency Footer */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
        <span className="text-xs font-serif font-bold text-gray-400 uppercase tracking-widest">
          {item.agency}
        </span>
        {item.agentImage && (
          <div className="flex items-center gap-2">
             <span className="text-xs text-gray-400">{item.agentName}</span>
             <img src={item.agentImage} alt={item.agentName} className="w-6 h-6 rounded-full object-cover grayscale" />
          </div>
        )}
      </div>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---

const SearchResults = () => {
  const [showMap, setShowMap] = useState(true);

  return (
    <div className="pt-20 min-h-screen bg-white">
      
      {/* 1. SEARCH HEADER & FILTERS */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-4 py-4">
          
          {/* Top Row: Breadcrumbs & Title */}
          <div className="mb-4">
            <p className="text-xs text-gray-400 mb-2">Real Estate / Indonesia / Jakarta / South Jakarta</p>
            <h1 className="text-2xl font-serif text-black">Luxury Homes for Sale in South Jakarta</h1>
          </div>

          {/* Bottom Row: Filter Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
              <AdjustmentsHorizontalIcon className="w-4 h-4" />
              Filters
            </button>
            <div className="h-6 w-px bg-gray-300 mx-2 hidden md:block"></div>
            <FilterButton label="Any Price" />
            <FilterButton label="2+ Beds" />
            <FilterButton label="House / Villa" />
            <FilterButton label="New Builds" />
            <div className="ml-auto flex gap-2">
               <button 
                onClick={() => setShowMap(!showMap)}
                className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium hover:bg-gray-50"
               >
                 {showMap ? 'Hide Map' : 'Show Map'} 
                 {showMap ? <ListBulletIcon className="w-4 h-4"/> : <MapIcon className="w-4 h-4"/>}
               </button>
               <button className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium hover:bg-gray-50">
                 Save Search
                 <HeartIcon className="w-4 h-4"/>
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CONTENT AREA (GRID + MAP) */}
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex">
          
          {/* Left Side: Listings Grid */}
          <div className={`${showMap ? 'w-full lg:w-3/5' : 'w-full'} px-4 py-6 transition-all duration-300`}>
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-500">47 listings</p>
              <div className="text-sm text-gray-900 flex items-center gap-1 cursor-pointer">
                Sort: Premium <span className="text-xs">▼</span>
              </div>
            </div>

            {/* The Grid */}
            <div className={`grid gap-8 ${showMap ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
              {searchResults.map((item) => (
                <SearchCard key={item.id} item={item} />
              ))}
            </div>
            
            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center gap-2">
               <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-50">1</button>
               <button className="w-10 h-10 border rounded-full flex items-center justify-center bg-black text-white">2</button>
               <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-50">3</button>
               <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-50">❯</button>
            </div>
          </div>

          {/* Right Side: Map (Sticky) */}
          {showMap && (
            <div className="hidden lg:block w-2/5 bg-gray-100 sticky top-[145px] h-[calc(100vh-145px)] border-l border-gray-200">
              {/* Placeholder Map Image - Replace with Google Maps later */}
              <div className="relative w-full h-full">
                 <img 
                  src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/106.8456, -6.2088, 12, 0, 0/800x1200?access_token=placeholder" 
                  alt="Map View" 
                  className="w-full h-full object-cover opacity-80 grayscale"
                  onError={(e) => { e.target.src = "https://placehold.co/800x1200/E5E7EB/9CA3AF?text=Map+View"; }}
                 />
                 {/* Fake Map Pins */}
                 <div className="absolute top-1/4 left-1/4 bg-black text-white text-xs font-bold px-2 py-1 rounded shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 cursor-pointer">
                   $36M
                 </div>
                 <div className="absolute top-1/3 left-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 cursor-pointer border border-gray-200">
                   $6.7M
                 </div>
                 <div className="absolute bottom-1/3 right-1/3 bg-white text-black text-xs font-bold px-2 py-1 rounded shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 cursor-pointer border border-gray-200">
                   $10.9M
                 </div>
                 
                 <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg text-sm font-bold flex items-center gap-2">
                   <MapIcon className="w-4 h-4" />
                   Search this area
                 </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
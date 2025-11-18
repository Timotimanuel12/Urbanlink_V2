import React from 'react';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/outline';

// --- MOCK DATA (To make the UI look filled) ---
const homesYouLike = [
  {
    id: 1,
    price: 'IDR 85.000.000.000',
    location: 'Menteng, Central Jakarta',
    title: 'Modern Classic Mansion',
    image: 'https://images.unsplash.com/photo-1600596542815-2495db969ef8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    price: '$4,750,000',
    location: 'Geilo, Viken, Norway',
    title: 'Luxury Ski Chalet',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    price: '€14,500,000',
    location: 'Umbria, Italy',
    title: 'Historic Castle Estate',
    image: 'https://images.unsplash.com/photo-1531971589569-0d9370cbe865?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    price: '$28,000,000',
    location: 'Dripping Springs, Texas',
    title: 'Hill Country Ranch',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  },
];

const newToMarket = [
  {
    id: 5,
    price: '$700,000',
    location: 'Marbella, Spain',
    title: 'Villa in Nueva Andalucia',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80',
    tag: 'New 5 days ago'
  },
  {
    id: 6,
    price: '$75,000,000',
    location: 'Key Largo, Florida',
    title: 'Oceanfront Sanctuary',
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80',
    tag: 'Video'
  },
  {
    id: 7,
    price: '$19,750,000',
    location: 'Franklin, Tennessee',
    title: 'Southern Estate',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    price: '$28,995,000',
    location: 'Beverly Hills, CA',
    title: 'Modern Masterpiece',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
  },
];

// --- SUB-COMPONENTS ---
const ListingCard = ({ item }) => (
  <div className="group cursor-pointer">
    <div className="relative h-64 overflow-hidden rounded-lg mb-4">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-gray-100 transition">
        <HeartIcon className="w-5 h-5 text-black" />
      </div>
      {item.tag && (
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-black">
          {item.tag}
        </div>
      )}
    </div>
    <div>
      <p className="text-lg font-bold text-black">{item.price}</p>
      <p className="text-sm text-gray-500">{item.location}</p>
      <p className="text-sm text-black truncate font-medium mt-1">{item.title}</p>
    </div>
  </div>
);

const PropertyPage = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* ========================
          1. HERO SECTION
      ======================== */}
      <div className="relative h-[550px] w-full">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 shadow-sm">
            Explore the World's Finest Properties
          </h1>

          {/* Search Bar (The White Strip) */}
          <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row items-center gap-2 w-full max-w-4xl shadow-2xl">
            
            {/* Input 1: Location */}
            <div className="flex-1 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Location</label>
              <input 
                type="text" 
                placeholder="City, Region, Country" 
                className="w-full outline-none text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Input 2: Price */}
            <div className="w-full md:w-48 border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Price</label>
              <div className="flex items-center justify-between cursor-pointer text-gray-900">
                <span>Any Price</span>
                <span className="text-xs">▼</span>
              </div>
            </div>

            {/* Input 3: Beds */}
            <div className="w-full md:w-40 px-4 py-2">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Beds</label>
              <div className="flex items-center justify-between cursor-pointer text-gray-900">
                <span>Any Beds</span>
                <span className="text-xs">▼</span>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full md:w-auto bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-4 rounded-md font-medium transition">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* ========================
          2. TRUSTED BRANDS
      ======================== */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-screen-2xl mx-auto px-8">
          <p className="text-center text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">
            Trusted by the world's best agencies
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Using text as placeholders for logos to avoid broken images */}
            <span className="text-xl font-serif font-bold">Sotheby's</span>
            <span className="text-xl font-serif font-bold">Christie's</span>
            <span className="text-xl font-serif font-bold">Knight Frank</span>
            <span className="text-xl font-serif font-bold">Savills</span>
            <span className="text-xl font-serif font-bold">Coldwell Banker</span>
          </div>
        </div>
      </div>

      {/* ========================
          3. HOMES YOU'LL LOVE
      ======================== */}
      <section className="py-16 px-4 md:px-8 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-serif text-black">Homes You'll Love</h2>
          <button className="text-sm font-bold text-gray-600 hover:text-black flex items-center gap-2">
            View all <span className="text-xs">❯</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {homesYouLike.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ========================
          4. WEEKLY HIGHLIGHT
      ======================== */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Side */}
            <div>
              <p className="font-serif text-2xl md:text-3xl mb-4">Weekly Highlight</p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Vesoul, Bourgogne-Franche-Comté, France
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                In the heart of the Haute-Saône region, the charming small town of Filain, 
                nestled between Vesoul and Rioz, is home to this 15th-century gem, 
                a listed Historic Monument: the Château de Filain.
              </p>
              <button className="text-black font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition">
                Read more
              </button>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-2xl font-bold">$2,086,421</p>
                <p className="text-sm text-gray-500">10 Beds • 3 Baths • 1500 Sqm</p>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1599809275371-b03330ff3536?auto=format&fit=crop&w=1200&q=80" 
                alt="Chateau" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                <HeartIcon className="w-6 h-6 text-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================
          5. NEW TO MARKET
      ======================== */}
      <section className="py-16 px-4 md:px-8 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-serif text-black">New To The Market</h2>
          <div className="flex gap-2">
             <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">❮</button>
             <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">❯</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newToMarket.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default PropertyPage;
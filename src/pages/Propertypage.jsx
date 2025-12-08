import React from 'react';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/outline';

// --- MOCK DATA (Localized to Indonesia) ---
const homesYouLike = [
  {
    id: 1,
    price: 'Rp 85.000.000.000',
    location: 'Menteng, Jakarta Pusat',
    title: 'Modern Classic Mansion',
    image: 'https://images.unsplash.com/photo-1600596542815-2495db969ef8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    price: 'Rp 24.500.000.000',
    location: 'Pondok Indah, Jakarta Selatan',
    title: 'Luxury Tropical Villa',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    price: 'Rp 15.750.000.000',
    location: 'Canggu, Bali',
    title: 'Modern Ricefield Villa',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    price: 'Rp 42.000.000.000',
    location: 'Dago Pakar, Bandung',
    title: 'Hilltop Golf View Estate',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  },
];

const newToMarket = [
  {
    id: 5,
    price: 'Rp 3.500.000.000',
    location: 'BSD City, Tangerang',
    title: 'Minimalist Cluster Home',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80',
    tag: 'Baru 5 hari lalu'
  },
  {
    id: 6,
    price: 'Rp 125.000.000.000',
    location: 'Pantai Indah Kapuk, Jakarta',
    title: 'Oceanfront Sanctuary',
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80',
    tag: 'Video Tour'
  },
  {
    id: 7,
    price: 'Rp 7.200.000.000',
    location: 'Sentul City, Bogor',
    title: 'Mountain View Resort',
    image: 'https://images.unsplash.com/photo-1600585154340-9b04b3a86c34?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    price: 'Rp 55.000.000.000',
    location: 'Kebayoran Baru, Jakarta',
    title: 'Contemporary Masterpiece',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
  },
];

// --- SUB-COMPONENTS ---
const ListingCard = ({ item }) => (
  <div className="group cursor-pointer">
    <div className="relative h-64 overflow-hidden rounded-lg mb-4">
      {/* Used actual image source from data instead of placeholder */}
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => {e.target.src = "https://placehold.co/600x400/EEE/333?text=Properti"}}
      />
      <div className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-gray-100 transition shadow-sm">
        <HeartIcon className="w-5 h-5 text-black" />
      </div>
      {item.tag && (
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-black uppercase tracking-wider">
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
    <div className="bg-white min-h-screen font-sans">
      
      {/* ========================
          1. HERO SECTION
      ======================== */}
      <div className="relative h-[550px] w-full">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1600585154340-9b04b3a86c34?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 shadow-sm drop-shadow-md">
            Temukan Properti Mewah Terbaik
          </h1>

          {/* Search Bar (The White Strip) */}
          <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row items-center gap-2 w-full max-w-4xl shadow-2xl">
            
            {/* Input 1: Location */}
            <div className="flex-1 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2 text-left">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Lokasi</label>
              <input 
                type="text" 
                placeholder="Kota, Daerah, atau Wilayah" 
                className="w-full outline-none text-gray-900 placeholder-gray-400 font-medium"
              />
            </div>

            {/* Input 2: Price */}
            <div className="w-full md:w-48 border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2 text-left">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Harga</label>
              <div className="flex items-center justify-between cursor-pointer text-gray-900 font-medium">
                <span>Semua Harga</span>
                <span className="text-xs">▼</span>
              </div>
            </div>

            {/* Input 3: Beds */}
            <div className="w-full md:w-40 px-4 py-2 text-left">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Kamar</label>
              <div className="flex items-center justify-between cursor-pointer text-gray-900 font-medium">
                <span>Semua</span>
                <span className="text-xs">▼</span>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full md:w-auto bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-4 rounded-md font-bold transition uppercase tracking-wide">
              Cari
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
            Dipercaya oleh agensi properti terbaik dunia
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            <span className="text-xl font-serif font-bold text-gray-600">Sotheby's</span>
            <span className="text-xl font-serif font-bold text-gray-600">Christie's</span>
            <span className="text-xl font-serif font-bold text-gray-600">Knight Frank</span>
            <span className="text-xl font-serif font-bold text-gray-600">Savills</span>
            <span className="text-xl font-serif font-bold text-gray-600">Ray White</span>
          </div>
        </div>
      </div>

      {/* ========================
          3. HOMES YOU'LL LOVE
      ======================== */}
      <section className="py-16 px-4 md:px-8 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-serif text-black">Hunian Pilihan Untuk Anda</h2>
          <button className="text-sm font-bold text-gray-600 hover:text-black flex items-center gap-2">
            Lihat semua <span className="text-xs">❯</span>
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
      <section className="bg-gray-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Side */}
            <div className="order-2 lg:order-1">
              <p className="font-serif text-2xl md:text-3xl mb-4 text-gray-800">Sorotan Minggu Ini</p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                The Sanctuary Collection, Sentul Selatan
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Terletak di jantung kawasan hijau Sentul, hunian ini menawarkan pemandangan pegunungan yang menakjubkan dan gaya hidup resor yang mewah. Dilengkapi dengan desain tropis modern, kolam renang pribadi, dan akses eksklusif ke fasilitas premium.
              </p>
              <button className="text-black font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition">
                Baca selengkapnya
              </button>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-2xl font-bold text-black">Rp 28.500.000.000</p>
                <p className="text-sm text-gray-500 font-medium">6 Kamar • 7 Mandi • 850 m²</p>
              </div>
            </div>

            {/* Image Side */}
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1613490493576-b0fa6cd84274?auto=format&fit=crop&w=1200&q=80" 
                alt="Highlight Property" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
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
          <h2 className="text-3xl font-serif text-black">Baru di Pasaran</h2>
          <div className="flex gap-2">
             <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
               <ChevronLeftIcon className="w-4 h-4 text-black"/>
             </button>
             <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
               <ChevronRightIcon className="w-4 h-4 text-black"/>
             </button>
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

// Simple Chevron Icons Components for the buttons
const ChevronLeftIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

export default PropertyPage;
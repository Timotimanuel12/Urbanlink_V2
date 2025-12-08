import { Link } from 'react-router-dom';
import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  HeartIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  PlayIcon 
} from '@heroicons/react/24/solid'; 
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';

// ==========================================
// 1. DATA: CITY HERO INFO
// ==========================================
const cityDatabase = {
  'jakarta': {
    title: "Luxury Real Estate in Jakarta",
    description: "Discover the finest mansions and penthouses in Indonesia's capital.",
  },
  'jakarta-barat': {
    title: "Homes in Jakarta Barat",
    description: "Explore premium residences across West Jakarta.",
  },
  'jakarta-selatan': {
    title: "Homes in Jakarta Selatan",
    description: "Discover luxury living in South Jakarta.",
  },
  'jakarta-utara': {
    title: "Homes in Jakarta Utara",
    description: "Waterfront and modern properties in North Jakarta.",
    hero: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1920&q=80",
  },
  'jakarta-pusat': {
    title: "Homes in Jakarta Pusat",
    description: "Urban residences at the heart of Jakarta.",
  },
  'jakarta-timur': {
    title: "Homes in Jakarta Timur",
    description: "Comfortable family homes in East Jakarta.",
  },
  'kota-tangerang': {
    title: "Modern Living in Tanggerang",
    description: "Explore spacious family estates in BSD City and Alam Sutera.",
  },
  'kabupaten-tangerang': {
    title: "Homes in Kabupaten Tangerang",
    description: "Growing suburban communities and estates.",
  },
  'tangerang-selatan': {
    title: "Homes in Tangerang Selatan",
    description: "BSD and premium neighbourhoods in South Tangerang.",
  },
  'bekasi': {
    title: "Homes in Bekasi",
    description: "Expansive housing and modern developments.",
  },
  'cibubur': {
    title: "Homes in Cibubur",
    description: "Green living and gated communities.",
  },
  'bogor': {
    title: "Serene Retreats in Bogor",
    description: "Find your escape in the cool hills of Sentul and Puncak.",
  },
  'depok': {
    title: "Homes in Depok",
    description: "Convenient city living with quick access to Jakarta.",
  }
};

// ==========================================
// 2. DATA: HOMES YOU'LL LOVE (Updated to IDR & Indonesia)
// ==========================================
const recommendedHomes = [
  { 
    id: 101, 
    price: 'Rp 65.000.000.000', 
    location: 'Pondok Indah, Jakarta Selatan', 
    title: 'Golf Course Mansion', 
    image: 'https://images.unsplash.com/photo-1613490493576-b0fa6cd84274?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 102, 
    price: 'Rp 12.500.000.000', 
    location: 'BSD City, Tangerang Selatan', 
    title: 'Modern Tropical Estate', 
    image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 103, 
    price: 'Rp 42.000.000.000', 
    location: 'PIK 2, Jakarta Utara', 
    title: 'Waterfront Villa', 
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: 104, 
    price: 'Rp 8.500.000.000', 
    location: 'Sentul City, Bogor', 
    title: 'Highland Retreat', 
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80' 
  },
];

// ==========================================
// 3. DATA: TRENDING HOMES (Updated to IDR & Indonesia)
// ==========================================
const trendingHomes = [
  { 
    id: 201, 
    price: 'Rp 85.000.000.000', 
    location: 'Menteng, Jakarta Pusat', 
    title: 'Colonial Heritage House', 
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80', 
    isVideo: true 
  },
  { 
    id: 202, 
    price: 'Rp 18.500.000.000', 
    location: 'Alam Sutera, Tangerang Selatan', 
    title: 'Contemporary Glass Home', 
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', 
    isVideo: false 
  },
  { 
    id: 203, 
    price: 'Rp 28.000.000.000', 
    location: 'Kelapa Gading, Jakarta Utara', 
    title: 'Grand Luxury Estate', 
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80', 
    isVideo: true 
  },
  { 
    id: 204, 
    price: 'Rp 5.200.000.000', 
    location: 'Rancamaya, Bogor', 
    title: 'Golf View Villa', 
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80', 
    isVideo: false 
  },
  { 
    id: 205, 
    price: 'Rp 55.000.000.000', 
    location: 'Senopati, Jakarta Selatan', 
    title: 'Modern Townhouse', 
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80', 
    isVideo: false 
  },
];

// ==========================================
// 4. DATA: NEW TO MARKET (Updated to IDR & Indonesia)
// ==========================================
const newToMarketHomes = [
  { 
    id: 301, 
    price: 'Rp 9.800.000.000', 
    location: 'Bintaro Jaya, Tangerang Selatan', 
    title: 'Designer Family Home', 
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', 
    tags: ['Video', 'New 2 days ago'] 
  },
  { 
    id: 302, 
    price: 'Rp 72.000.000.000', 
    location: 'Kebayoran Baru, Jakarta Selatan', 
    title: 'Grand Residence', 
    image: 'https://images.unsplash.com/photo-1600596542815-60078d5dba0d?auto=format&fit=crop&w=800&q=80', 
    tags: ['Video'] 
  },
  { 
    id: 303, 
    price: 'Rp 22.000.000.000', 
    location: 'Pluit, Jakarta Utara', 
    title: 'Modern Tropical Villa', 
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80', 
    tags: [] 
  },
  { 
    id: 304, 
    price: 'Rp 4.500.000.000', 
    location: 'Vimala Hills, Bogor', 
    title: 'Resort Villa', 
    image: 'https://images.unsplash.com/photo-1592595896551-f76cd97ad974?auto=format&fit=crop&w=800&q=80', 
    tags: [] 
  },
  { 
    id: 305, 
    price: 'Rp 38.000.000.000', 
    location: 'Kemang, Jakarta Selatan', 
    title: 'Private Pool Compound', 
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', 
    tags: [] 
  },
];

// ==========================================
// 5. COMPONENT: LISTING CARD
// ==========================================

const ListingCard = ({ item }) => (
  <Link to={`/property/${item.id}`} className="group cursor-pointer flex-shrink-0 w-full sm:w-72 md:w-80 snap-start">
    <div className="relative h-64 w-full overflow-hidden rounded-lg mb-4">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => { e.target.src = "https://placehold.co/600x400/EEE/333?text=House"; }}
      />
      
      {/* Heart Icon */}
      <div className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-gray-100 transition shadow-sm z-10">
        <HeartOutline className="w-5 h-5 text-black" />
      </div>
      
      {/* Tags (NEW!) - Top Left */}
      {item.tags && item.tags.length > 0 && (
        <div className="absolute top-3 left-3 flex gap-2 z-10">
          {item.tags.map((tag, index) => (
            <span key={index} className="bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Play Button Overlay */}
      {item.isVideo && (
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full">
            <PlayIcon className="w-8 h-8 text-white" />
          </div>
        </div>
      )}
    </div>
    <div>
      <p className="text-lg font-bold text-black">{item.price}</p>
      <p className="text-sm text-gray-500 truncate">{item.location}</p>
      <p className="text-sm text-black truncate font-medium mt-1">{item.title}</p>
    </div>
  </Link>
);

// ==========================================
// 6. MAIN PAGE COMPONENT
// ==========================================
const CityListings = () => {
  const navigate = useNavigate();
  const { cityName } = useParams();
  const trendingRef = useRef(null);
  const newToMarketRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const cityKey = cityName ? cityName.toLowerCase().replace(/\s+/g, '-') : 'jakarta';
  const data = cityDatabase[cityKey] || cityDatabase.jakarta;

  useEffect(() => {
    setSearchQuery((cityName || '').replace(/-/g, ' '));
  }, [cityName]);

  // Generic Scroll Handler
  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 350;
      ref.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* =========================================
          1. HERO SECTION + SEARCH BAR
      ========================================= */}
      <div className="relative h-[550px] w-full">
        <img src={data.hero || "https://placehold.co/1920x800/222/EEE?text=City+Hero"} alt={data.title} className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 shadow-sm drop-shadow-md">{data.title}</h1>
          <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row items-center gap-2 w-full max-w-4xl shadow-2xl">
            <div className="flex-1 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2 text-left">
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Location</label>
              <input
                type="text"
                placeholder={cityName || "City, Region"}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full outline-none text-gray-900 placeholder-gray-800 font-medium"
              />
            </div>
            <div className="w-full md:w-48 border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2 text-left">
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Price</label>
              <div className="flex items-center justify-between cursor-pointer text-gray-900 font-medium"><span>Any Price</span><span className="text-xs">▼</span></div>
            </div>
            <div className="w-full md:w-40 px-4 py-2 text-left">
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Beds</label>
              <div className="flex items-center justify-between cursor-pointer text-gray-900 font-medium"><span>Any Beds</span><span className="text-xs">▼</span></div>
            </div>
            <button
             onClick={() => navigate(`/buy?query=${encodeURIComponent(searchQuery || '')}`)}
             className="w-full md:w-auto bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-md font-bold text-sm transition uppercase tracking-wide">Search</button>
          </div>
        </div>
      </div>

      {/* =========================================
          2. TRUSTED BRANDS STRIP
      ========================================= */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-screen-2xl mx-auto px-8">
          <p className="text-center text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-6">Trusted by the world's best agencies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">
            <span className="text-lg font-serif font-bold">Sotheby's</span>
            <span className="text-lg font-serif font-bold">Christie's</span>
            <span className="text-lg font-serif font-bold">Knight Frank</span>
            <span className="text-lg font-serif font-bold">Savills</span>
          </div>
        </div>
      </div>

      {/* =========================================
          3. HOMES YOU'LL LOVE
      ========================================= */}
      <section className="py-16 px-4 md:px-8 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-serif text-black">Homes You'll Love</h2>
          <button className="text-sm font-bold text-black hover:underline flex items-center gap-2">View all <span className="text-xs">❯</span></button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendedHomes.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* =========================================
          4. WEEKLY HIGHLIGHT
      ========================================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="font-serif text-3xl mb-4">Weekly Highlight</p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Sanctuary Collection, Sentul Selatan</h3>
              <p className="text-gray-600 leading-relaxed mb-8">Nestled in the lush greenery of Sentul, this architectural marvel offers breathtaking mountain views and resort-style living. Featuring open-plan tropical design, a private infinity pool, and exclusive access to the area's premier golf course.</p>
              <div className="flex items-end gap-8 mb-8">
                <div><p className="text-2xl font-bold">Rp 28.500.000.000</p><p className="text-sm text-gray-500">6 Beds • 7 Baths • 850 Sqm</p></div>
                <button className="text-black font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition">Read more</button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80" alt="Luxury Highlight" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. TRENDING SECTION
      ========================================= */}
      <section className="py-20 px-4 md:px-8 max-w-screen-2xl mx-auto">
        <div className="hidden lg:flex justify-end mb-4 gap-2">
          <button onClick={() => scroll(trendingRef, 'left')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"><ChevronLeftIcon className="w-4 h-4 text-black" /></button>
          <button onClick={() => scroll(trendingRef, 'right')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"><ChevronRightIcon className="w-4 h-4 text-black" /></button>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/4 flex flex-col justify-center">
            <h2 className="text-4xl font-serif text-black mb-4">Trending</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">Discover the homes that are capturing attention in the market. This curated selection showcases the most sought-after properties available right now.</p>
            <button className="bg-black text-white px-8 py-3 text-sm font-bold w-fit hover:bg-gray-800 transition">See all</button>
          </div>
          <div ref={trendingRef} className="lg:w-3/4 flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
            {trendingHomes.map((item) => (<ListingCard key={item.id} item={item} />))}
          </div>
        </div>
      </section>

      {/* =========================================
          6. NEW TO MARKET (NEW SECTION!)
      ========================================= */}
      <section className="py-16 px-4 md:px-8 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-serif text-black">New To The Market</h2>
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button onClick={() => scroll(newToMarketRef, 'left')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
              <ChevronLeftIcon className="w-4 h-4 text-black" />
            </button>
            <button onClick={() => scroll(newToMarketRef, 'right')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
              <ChevronRightIcon className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
        
        {/* Scrollable List */}
        <div 
          ref={newToMarketRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide"
        >
          {newToMarketHomes.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default CityListings;
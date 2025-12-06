import React from 'react';
import { Link } from 'react-router-dom';

// --- Imports needed for this component ---
// FIX 1: Added HeartIcon, ChevronLeftIcon, and ChevronRightIcon
import {
  ArrowRightIcon,
  HeartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

//=================================================================
// 1. FEATURED CATEGORIES COMPONENT CODE
//=================================================================
const slugify = (s) => s.toLowerCase().replace(/\s+/g, '-');

const categoriesData = [
  { name: 'Jakarta Barat', listings: '12,341 LISTINGS' },
  { name: 'Jakarta Selatan', listings: '24,508 LISTINGS' },
  { name: 'Jakarta Utara', listings: '10,112 LISTINGS' },
  { name: 'Jakarta Pusat', listings: '8,932 LISTINGS' },
  { name: 'Jakarta Timur', listings: '9,751 LISTINGS' },
  { name: 'Kota Tangerang', listings: '7,004 LISTINGS' },
  { name: 'Kabupaten Tangerang', listings: '5,890 LISTINGS' },
  { name: 'Tangerang Selatan', listings: '11,205 LISTINGS' },
  { name: 'Bekasi', listings: '13,402 LISTINGS' },
  { name: 'Cibubur', listings: '4,231 LISTINGS' },
  { name: 'Bogor', listings: '904 LISTINGS' },
  { name: 'Depok', listings: '6,084 LISTINGS' },
];

const CategoryCard = ({ name, listings, imageUrl }) => (
  <div className="relative group h-[500px] rounded-lg overflow-hidden cursor-pointer">
    <img
      src={`https://placehold.co/600x800/333/FFF?text=${name}`}
      alt={name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <h3 className="text-3xl font-serif mb-1">{name}</h3>
      <p className="text-xs font-medium tracking-widest opacity-80 mb-4">{listings}</p>
    </div>
    <div className="absolute bottom-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <ArrowRightIcon className="w-6 h-6" />
    </div>
  </div>
);

// We rename this component to 'Categories' 🤯
const Categories = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-4xl font-serif text-black mb-8">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((category) => (
            
            // --- 2. THIS IS WHERE WE CONNECT IT ---
            // We wrap the card in a Link. 
            // When name is "Jakarta", the link becomes "/listings/jakarta"
            <Link 
              key={category.name} 
              to={`/listings/${slugify(category.name)}`}
              className="block"
            >
              <CategoryCard
                name={category.name}
                listings={category.listings}
                imageUrl={``}
              />
            </Link>

          ))}
        </div>
      </div>
    </section>
  );
};

//=================================================================
// 2. TRENDING COMPONENT CODE
//=================================================================

// Mock data for trending listings
const trendingListings = [
  {
    id: 1,
    price: '$1,161,356',
    description: 'Villa in Crete, Greece',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D&auto=format&fit=crop&w=1740&q=80',
    tags: [],
  },
  {
    id: 2,
    price: '$4,500,000',
    description: 'House in Banner Elk, North Carolina, Unit...',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-9b04b3a86c34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D&auto=format&fit=crop&w=1740&q=80',
    tags: ['Video', 'New 4 days ago'],
  },
  {
    id: 3,
    price: 'Price On Request',
    description: 'House in Mauren, Triesenberg, Liechte...',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D&auto=format&fit=crop&w=1740&q=80',
    tags: ['Video'],
  },
  {
    id: 4,
    price: '$5,806,782',
    description: 'Villa in Carvalhal, Setubal, Portugal',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D&auto=format&fit=crop&w=1740&q=80',
    tags: [],
  },
  {
    id: 5,
    price: '$2,729,187',
    description: 'House in Kraainem, Flanders, Belgium',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D&auto=format&fit=crop&w=1674&q=80',
    tags: [],
  },
];

// Individual listing card

const ListingCard = ({ listing }) => (
  <Link to={`/property/${listing.id}`} className="flex-shrink-0 w-80 sm:w-96 snap-start">
    <div className="relative group bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-64 w-full">
        <img
          src={`https://placehold.co/400x300/EEE/333?text=Property`}
          alt={listing.description}
          className="w-full h-full object-cover"
        />
        {/* Favorite Button */}
        <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 transition hover:bg-white">
          <HeartIcon className="w-5 h-5 text-black" />
        </button>
        {/* Tags */}
        {listing.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-2">
            {listing.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/80 backdrop-blur-sm text-black text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold text-black">{listing.price}</p>
        <p className="text-sm text-gray-600 truncate">{listing.description}</p>
      </div>
    </div>
  </Link>
);

// / Main Trending component
const Trending = () => {
  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-serif text-black">Trending</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              <ChevronLeftIcon className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              <ChevronRightIcon className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        {/* Scrollable List */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        >
          {trendingListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

//=================================================================
// 3. JOURNAL COMPONENT CODE
//=================================================================

// Mock data for Journal entries
const mainArticle = {
  date: '13 NOV 2025',
  title: "ELIRE: Prime Branded Residences in the Heart of Dubai's Booming Business Bay",
  description: 'ELIRE represents a paradigm shift in Dubai\'s luxury residential market. Developed by QUBE Develop...',
  imageUrl: 'https://images.unsplash.com/photo-1519690022668-ea007c8f5341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D&auto=format&fit=crop&w=1738&q=80',
};

const sideArticles = [
  {
    id: 1,
    date: '13 NOV 2025',
    title: 'Historic Florentine Estate: Panoramic Views and 13th-Century Heritage Above Piazzale Michelangelo',
    description: 'Positioned in the hills above Florence\'s historic center, this three-story estate combines 13th-c...',
    imageUrl: 'https://images.unsplash.com/photo-1594488550186-93d9099b3531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 2,
    date: '12 NOV 2025',
    title: "From Sardinia's Waterfront to New Zealand's Peaks: October's 10 Most Popular Homes on JamesEdition",
    description: 'JamesEdition\'s latest data insights highlight newly published listings that drove significant buy...',
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 3,
    date: '12 NOV 2025',
    title: "Luštica Bay: Montenegro's Largest Development Expands with Horizon Residences",
    description: 'Overlooking the marina and perfectly positioned between the golf course\'s second hole and the Adr...',
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D&auto=format&fit=crop&w=1740&q=80',
  },
];

// Main Journal Component
const Journal = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-4xl font-serif text-black mb-8">The Journal</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Article (Left) */}
          <div className="lg:col-span-2 relative group h-[600px] rounded-lg overflow-hidden cursor-pointer">
            <img
              src={`https://placehold.co/800x600/555/FFF?text=Journal`}
              alt={mainArticle.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <p className="text-xs font-medium tracking-widest opacity-80 mb-2">{mainArticle.date}</p>
              <h3 className="text-3xl font-serif mb-3">{mainArticle.title}</h3>
              <p className="text-sm opacity-90 max-w-2xl">{mainArticle.description}</p>
            </div>
          </div>

          {/* Side Articles (Right) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {sideArticles.map((article) => (
              <a href="#" key={article.id} className="group flex gap-4">
                <img
                  src={`https://placehold.co/128x112/EEE/333?text=Article`}
                  alt={article.title}
                  className="w-32 h-28 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p className="text-xs font-medium tracking-widest text-gray-500 mb-1">{article.date}</p>
                  <h4 className="text-base font-serif font-medium text-black group-hover:underline">{article.title}</h4>
                  <p className="text-sm text-gray-600 hidden md:block">{article.description.substring(0, 60)}...</p>
                </div>
              </a>
            ))}
            <button className="flex items-center gap-2 text-sm font-semibold text-black hover:underline">
              Read all articles
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

//=================================================================
// 4. MAIN PAGE COMPONENT (THE FIX)
//=================================================================

// FIX 2: Create a 'Page' component to hold everything
const HomePage = () => {
  return (
    <main>
      <Categories />
      <Trending />
      <Journal />
    </main>
  );
};

// FIX 3: Export the new 'HomePage' component as the default
export default HomePage;

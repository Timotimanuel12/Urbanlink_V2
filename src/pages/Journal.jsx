import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  CalendarDaysIcon,
  UserCircleIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

// ==========================================
// 1. DATA: Articles (Localized for Indonesia)
// ==========================================

const featuredArticle = {
  id: 1,
  category: "Historic Estates",
  date: "13 NOV 2025",
  author: "Tim Editorial",
  title: "Permata Menteng: Menjaga Warisan Sejarah di Tengah Kota Modern",
  excerpt: "Menelusuri kawasan paling bergengsi di Jakarta, di mana pesona kolonial bertemu dengan kemewahan kontemporer. Menteng tetap menjadi alamat utama bagi para elit Indonesia.",
  image: "https://placehold.co/1200x600/1e293b/ffffff?text=Menteng+Heritage+Estate"
};

const articles = [
  {
    id: 2,
    category: "Market Insights",
    date: "12 NOV 2025",
    title: "Tren Properti Mewah 2025: Mengapa Investor Beralih ke Sentul City?",
    excerpt: "Analisis data terbaru menunjukkan lonjakan minat pembeli terhadap hunian resor di kawasan perbukitan Sentul sebagai rumah kedua yang ideal.",
    image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Sentul+Market+Trends"
  },
  {
    id: 3,
    category: "New Developments",
    date: "12 NOV 2025",
    title: "PIK 2: Masa Depan Gaya Hidup Waterfront di Jakarta Utara",
    excerpt: "Melihat lebih dekat pengembangan mega-proyek di Pantai Indah Kapuk 2 yang menawarkan hunian tepi laut dengan fasilitas kelas dunia.",
    image: "https://placehold.co/800x600/e2e8f0/1e293b?text=PIK+2+Waterfront"
  },
  {
    id: 4,
    category: "Architecture",
    date: "10 NOV 2025",
    title: "Modernisme Tropis: Mengintip Vila Tebing Paling Eksklusif di Uluwatu",
    excerpt: "Eksplorasi perpaduan desain indoor-outdoor yang mendefinisikan gelombang baru arsitektur vila mewah di Bali Selatan.",
    image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Bali+Cliffside+Villa"
  },
  {
    id: 5,
    category: "Lifestyle",
    date: "08 NOV 2025",
    title: "Seni Mengurasi Koleksi Lukisan untuk Rumah Mewah Anda",
    excerpt: "Panduan ahli dalam memilih karya seni kontemporer Indonesia yang tidak hanya mempercantik ruangan, tetapi juga bernilai investasi tinggi.",
    image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Art+Curating+Guide"
  }
];

// ==========================================
// 2. SUB-COMPONENTS
// ==========================================

const ArticleCard = ({ item }) => (
  <Link to={`/journal/${item.id}`} className="group cursor-pointer flex flex-col h-full">
    <div className="relative overflow-hidden rounded-md aspect-[4/3] mb-6 bg-gray-100">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm text-gray-800">
        {item.category}
      </div>
    </div>
    
    <div className="flex-1 flex flex-col">
      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium uppercase tracking-wide">
        <div className="flex items-center gap-1">
          <CalendarDaysIcon className="w-4 h-4" />
          {item.date}
        </div>
      </div>
      
      <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:underline decoration-1 underline-offset-4 transition-all leading-snug">
        {item.title}
      </h3>
      
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1 font-light">
        {item.excerpt}
      </p>
      
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group-hover:gap-3 transition-all border-b border-transparent group-hover:border-black pb-0.5 w-fit">
        Baca Artikel <ArrowRightIcon className="w-3 h-3" />
      </div>
    </div>
  </Link>
);

// ==========================================
// 3. MAIN PAGE COMPONENT
// ==========================================

const Journal = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      
      {/* Font Imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Nunito:wght@300;400;600;700&display=swap');
        body { font-family: 'Nunito', sans-serif; }
        h1, h2, h3, .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* --- HEADER SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12">
        {/* Back Button */}
        <div className="mb-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-500 hover:text-black transition-colors duration-200 group"
          >
            <div className="p-2 rounded-full border border-gray-200 group-hover:border-black transition-colors mr-3 bg-white">
              <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span className="font-bold text-xs tracking-widest uppercase">Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Title & Intro */}
        <div className="border-b border-gray-100 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <GlobeAltIcon className="w-4 h-4" /> Wawasan Lokal & Global
            </p>
            <h1 className="text-5xl md:text-7xl font-serif text-black mb-4">The Urban's Journal</h1>
          </div>
          <p className="text-lg text-gray-500 max-w-md font-light leading-relaxed text-right md:text-left">
            Cerita terkurasi tentang hunian bersejarah, tren arsitektur, dan properti paling diidamkan di Indonesia.
          </p>
        </div>
      </div>

      {/* --- FEATURED ARTICLE (Top Story) --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        {/* Link to article detail */}
        <Link to={`/journal/${featuredArticle.id}`} className="relative group cursor-pointer block">
          <div className="w-full h-[500px] md:h-[650px] overflow-hidden rounded-lg relative bg-gray-200">
            <img 
              src={featuredArticle.image} 
              alt={featuredArticle.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            {/* Featured Text */}
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
              <div className="flex items-center gap-4 text-white/80 text-xs font-bold uppercase tracking-widest mb-4">
                <span className="bg-white text-black px-3 py-1 rounded-sm">{featuredArticle.category}</span>
                <span>{featuredArticle.date}</span>
                <span className="hidden md:flex items-center gap-1"><UserCircleIcon className="w-4 h-4" /> {featuredArticle.author}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight group-hover:underline decoration-1 underline-offset-8">
                {featuredArticle.title}
              </h2>
              <p className="text-white/80 text-lg font-light leading-relaxed mb-8 max-w-2xl hidden md:block">
                {featuredArticle.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-white font-bold uppercase text-sm tracking-widest border-b border-white/50 pb-1 group-hover:border-white transition-all">
                Baca Selengkapnya <ArrowRightIcon className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* --- ARTICLE LIST (From Image + Extras) --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-4">
          <h2 className="text-3xl font-serif text-black">Cerita Terbaru</h2>
          <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-gray-400">
            <button className="text-black border-b border-black pb-1">Semua</button>
            <button className="hover:text-black transition">Hunian</button>
            <button className="hover:text-black transition">Pasar</button>
            <button className="hover:text-black transition">Gaya Hidup</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {articles.map((article) => (
            <ArticleCard key={article.id} item={article} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Journal;
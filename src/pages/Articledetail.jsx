import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  CalendarDaysIcon,
  UserCircleIcon,
  TagIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

// ==========================================
// 1. DATA SOURCE (Localized for Indonesia)
// Matches the ID and titles from Journal.jsx
// ==========================================
const allArticles = [
  {
    id: 1,
    category: "Historic Estates",
    date: "13 NOV 2025",
    author: "Tim Editorial",
    title: "Permata Menteng: Menjaga Warisan Sejarah di Tengah Kota Modern",
    // Detailed content for the single page view
    content: `
      <p class="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left">
        Terletak di jantung Jakarta Pusat, kawasan Menteng tetap menjadi simbol kemewahan dan sejarah yang tak tergoyahkan. Di tengah pesatnya pembangunan gedung pencakar langit, Menteng berhasil mempertahankan pesona kolonialnya yang unik.
      </p>
      <p class="mb-6">
        Banyak hunian di sini bukan sekadar tempat tinggal, melainkan potongan sejarah yang hidup. Arsitektur Art Deco yang ikonik, jalanan yang teduh oleh pepohonan tua, dan regulasi cagar budaya yang ketat menjadikan properti di kawasan ini sangat langka dan bernilai tinggi.
      </p>
      <h3 class="text-2xl font-serif font-bold text-black mt-8 mb-4">Investasi Lintas Generasi</h3>
      <p class="mb-6">
        Memiliki properti di Menteng bukan hanya soal prestise, tetapi juga investasi jangka panjang yang solid. Data pasar menunjukkan bahwa nilai tanah di kawasan ini terus mengalami kenaikan yang stabil, terlepas dari fluktuasi ekonomi makro.
      </p>
      <p>
        "Menteng adalah anomali yang indah di Jakarta," ujar Budi Santoso, analis properti senior. "Kombinasi antara lokasi strategis, nilai sejarah, dan eksklusivitas lingkungan membuatnya menjadi aset yang paling diburu oleh konglomerat dan diplomat asing."
      </p>
    `,
    image: "https://placehold.co/1200x600/1e293b/ffffff?text=Menteng+Heritage+Estate"
  },
  {
    id: 2,
    category: "Market Insights",
    date: "12 NOV 2025",
    author: "Tim Analitik Data",
    title: "Tren Properti Mewah 2025: Mengapa Investor Beralih ke Sentul City?",
    content: `
      <p class="mb-6">Data terbaru menunjukkan pergeseran signifikan dalam preferensi pembeli properti mewah di Jabodetabek. Sentul City kini muncul sebagai destinasi utama bagi mereka yang mencari keseimbangan hidup dan investasi.</p>
      <p class="mb-6">Faktor utama pendorong tren ini adalah infrastruktur yang semakin matang, kualitas udara yang lebih baik, dan konsep "Resort Living" yang ditawarkan. Hunian dengan pemandangan gunung dan akses langsung ke lapangan golf menjadi incaran utama para eksekutif muda dan keluarga mapan.</p>
    `,
    image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Sentul+Market+Trends"
  },
  {
    id: 3,
    category: "New Developments",
    date: "12 NOV 2025",
    author: "Sarah Jenkins",
    title: "PIK 2: Masa Depan Gaya Hidup Waterfront di Jakarta Utara",
    content: `
      <p class="mb-6">Pantai Indah Kapuk 2 (PIK 2) telah mengubah peta properti mewah di Jakarta Utara. Dengan konsep kota mandiri yang terintegrasi, PIK 2 menawarkan standar baru hunian tepi laut di Indonesia.</p>
      <p class="mb-6">Pengembangan terbaru mencakup distrik finansial internasional, pusat edukasi, dan area rekreasi pantai pasir putih buatan yang membentang sepanjang 4 kilometer. Ini bukan sekadar perumahan, melainkan ekosistem gaya hidup modern yang lengkap.</p>
    `,
    image: "https://placehold.co/800x600/e2e8f0/1e293b?text=PIK+2+Waterfront"
  },
  {
    id: 4,
    category: "Architecture",
    date: "10 NOV 2025",
    author: "Design Weekly",
    title: "Modernisme Tropis: Mengintip Vila Tebing Paling Eksklusif di Uluwatu",
    content: `
      <p class="mb-6">Bali Selatan terus menjadi laboratorium arsitektur dunia. Di tebing-tebing Uluwatu, para arsitek ternama sedang mendefinisikan ulang konsep "Modernisme Tropis".</p>
      <p class="mb-6">Vila-vila terbaru ini memaksimalkan penggunaan material lokal seperti batu alam dan kayu ulin, dipadukan dengan kaca floor-to-ceiling untuk membingkai pemandangan Samudra Hindia yang dramatis. Desain yang berkelanjutan dan hemat energi kini menjadi standar baru dalam kemewahan.</p>
    `,
    image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Bali+Cliffside+Villa"
  },
  {
    id: 5,
    category: "Lifestyle",
    date: "08 NOV 2025",
    author: "Curator Team",
    title: "Seni Mengurasi Koleksi Lukisan untuk Rumah Mewah Anda",
    content: `
      <p class="mb-6">Sebuah rumah mewah belum lengkap tanpa jiwa seni di dalamnya. Memilih lukisan yang tepat dapat mengubah atmosfer ruangan secara drastis.</p>
      <p class="mb-6">Tren saat ini mengarah pada karya seniman kontemporer Indonesia yang mulai mendapat pengakuan global. Artikel ini membahas cara memulai koleksi seni pribadi, mulai dari mengunjungi galeri, memahami nilai investasi, hingga teknik pencahayaan yang tepat untuk menampilkan karya seni di rumah Anda.</p>
    `,
    image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Art+Curating+Guide"
  }
];

// ==========================================
// 2. COMPONENT
// ==========================================

const ArticleDetail = () => {
  const { id } = useParams();
  
  // Find the article matching the ID from the URL
  const article = allArticles.find(a => a.id === parseInt(id));

  // Scroll to top when opening a new article
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-20">
        <h1 className="text-4xl font-serif mb-4">Artikel Tidak Ditemukan</h1>
        <Link to="/journal" className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1">Kembali ke Jurnal</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Font Imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Nunito:wght@300;400;600;700&display=swap');
        body { font-family: 'Nunito', sans-serif; }
        h1, h2, h3, .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* --- HEADER / HERO --- */}
      {/* UPDATED: Increased top padding to pt-32 to clear navbar */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/journal" 
            className="inline-flex items-center text-gray-500 hover:text-black transition-colors duration-200 group"
          >
            <div className="p-2 rounded-full border border-gray-200 group-hover:border-black transition-colors mr-3 bg-white">
              <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span className="font-bold text-xs tracking-widest uppercase">Kembali ke Jurnal</span>
          </Link>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
          <span className="bg-black text-white px-3 py-1 rounded-sm">{article.category}</span>
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="w-4 h-4" />
            {article.date}
          </div>
          <div className="flex items-center gap-2">
            <UserCircleIcon className="w-4 h-4" />
            {article.author}
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-serif text-black leading-tight mb-8">
          {article.title}
        </h1>
      </div>

      {/* --- HERO IMAGE --- */}
      <div className="w-full h-[400px] md:h-[600px] bg-gray-100 overflow-hidden mb-16">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* --- ARTICLE CONTENT --- */}
      <article className="max-w-3xl mx-auto px-6 md:px-12 pb-24">
        {/* Render HTML content safely */}
        <div 
          className="prose prose-lg prose-headings:font-serif prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-loose prose-a:text-black hover:prose-a:text-gray-600 max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Share / Tags Footer */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-xs font-bold uppercase tracking-widest hover:bg-gray-50 cursor-pointer transition">
              <TagIcon className="w-3 h-3" /> Mewah
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-xs font-bold uppercase tracking-widest hover:bg-gray-50 cursor-pointer transition">
              <TagIcon className="w-3 h-3" /> Gaya Hidup
            </span>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition">
            <ShareIcon className="w-4 h-4" /> Bagikan
          </button>
        </div>
      </article>

    </div>
  );
};

export default ArticleDetail;
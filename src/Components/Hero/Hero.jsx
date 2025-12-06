import React, { useState } from 'react';

// --- SVG ICONS ---

// MenuIcon, CloseIcon, and UserIcon removed as they were only for the Navbar.
// Kept ArrowLeftIcon and ArrowRightIcon for the Hero component.

const ArrowLeftIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    />
  </svg>
);

const ArrowRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

// --- HERO COMPONENT ---

const Hero = () => {
  const slides = [
    {
      image:
        "url('https://images.unsplash.com/photo-1600585154340-9b04b3a86c34?auto=format&fit=crop&w=1920&q=80')",
      info: {
        location: 'House in Bluffton, South Carolina, United States',
        price: '$9.09M',
      },
    },
    {
      image:
        "url('https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1920&q=80')",
      info: {
        location: 'Villa in Marbella, Spain',
        price: '$2.50M',
      },
    },
    {
      image:
        "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80')",
      info: {
        location: 'Ranch in Dripping Springs, Texas, United States',
        price: '$28.00M',
      },
    },
    {
      image:
        "url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1920&q=80')",
      info: {
        location: 'Cliffside Villa in Bali, Indonesia',
        price: '$2.50M',
      },
    },
  ];
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  return (
    <section className="relative h-screen w-full text-white">
      {/* Background Images (crossfade) */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: s.image }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-screen-2xl mx-auto px-4 flex flex-col justify-end">
        {/* Bottom Content Area */}
        <div className="w-full pb-10">
          {/* Main Title */}
          <div className="mb-4">
            <h1 className="text-6xl md:text-8xl font-serif font-light">
              The World's
            </h1>
            <h1 className="text-6xl md:text-8xl font-serif font-medium">
              Luxury Marketplace
            </h1>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Left: Stats */}
            <div className="text-xs uppercase tracking-widest">
              <span>One Search</span>
              <span className="mx-2 opacity-50">•</span>
              <span>560,000+ Listings</span>
              <span className="mx-2 opacity-50">•</span>
              <span>21,000+ Trusted Sellers</span>
              <span className="mx-2 opacity-50">•</span>
              <span>120 Countries</span>
            </div>

            {/* Right: Slider & Info */}
            <div className="flex items-center gap-4">
              {/* Slider Dots */}
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`w-2 h-2 rounded-full transition-opacity ${i === index ? 'bg-white opacity-100' : 'bg-white opacity-50 hover:opacity-100'}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <button onClick={prev} className="p-2 opacity-50 hover:opacity-100 transition-opacity">
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <button onClick={next} className="p-2 opacity-50 hover:opacity-100 transition-opacity">
                <ArrowRightIcon className="w-5 h-5" />
              </button>

              {/* Property Info */}
              <div className="hidden md:block text-xs uppercase tracking-widest transition-opacity duration-500">
                <span>{slides[index].info.location}</span>
                <span className="mx-2 opacity-50">•</span>
                <span>{slides[index].info.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

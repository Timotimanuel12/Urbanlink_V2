import React, { useMemo, useState } from 'react';
import { HeartIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

//

const SearchCard = ({ item }) => (
  <div className="flex flex-col group cursor-pointer">
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
      <img src={item.image} alt={item.address} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute top-3 left-3 flex gap-2">
        {item.tags?.map((tag, idx) => (
          <span key={idx} className="bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm">{tag}</span>
        ))}
      </div>
      <div className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-gray-100 transition"><HeartIcon className="w-4 h-4 text-black" /></div>
    </div>
    <div className="pt-4">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-black">{item.price}</h3>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Contact ✉</span>
      </div>
      <p className="text-sm text-gray-600 mt-1">{item.beds} Beds • {item.baths} Baths • {item.size}</p>
      <p className="text-sm text-gray-500 mt-1 truncate">{item.address}</p>
      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
        <span className="text-xs font-serif font-bold text-gray-400 uppercase tracking-widest">{item.agency}</span>
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

const baseResults = [
  { id: 1, price: '$1,161,356', priceValue: 1161356, beds: 3, baths: 2, size: '140 Sqm', address: 'Villa in Crete, Greece', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80', agency: 'Sotheby’s', tags: ['1/9'] },
  { id: 2, price: '$4,500,000', priceValue: 4500000, beds: 4, baths: 3, size: '180 Sqm', address: 'House in Banner Elk, North Carolina, United States', image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80', agency: 'Christie’s', tags: ['Video'] },
  { id: 3, price: 'Price On Request', priceValue: null, beds: 5, baths: 4, size: '191 Sqm', address: 'House in Mauren, Liechtenstein', image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80', agency: 'Knight Frank', tags: ['1/33'] },
  { id: 4, price: '$5,806,782', priceValue: 5806782, beds: 6, baths: 5, size: '250 Sqm', address: 'Villa in Carvalhal, Setubal, Portugal', image: 'https://images.unsplash.com/photo-1502005229762-cf1b2c8cdac0?auto=format&fit=crop&w=800&q=80', agency: 'Savills', tags: ['1/10'] },
  { id: 5, price: '$700,000', priceValue: 700000, beds: 3, baths: 2, size: '120 Sqm', address: 'House in Marbella, Spain', image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80', agency: 'Local Agency', tags: ['New 5 days ago'] },
  { id: 6, price: '$19,750,000', priceValue: 19750000, beds: 5, baths: 5, size: '300 Sqm', address: 'Estate in Franklin, Tennessee, United States', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', agency: 'eXp Realty', tags: [] },
  { id: 7, price: '$10,950,000', priceValue: 10950000, beds: 7, baths: 6, size: '350 Sqm', address: 'Retreat in Snowmass, Colorado, United States', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80', agency: 'Sotheby’s', tags: [] },
  { id: 8, price: '$2,500,000', priceValue: 2500000, beds: 3, baths: 3, size: '160 Sqm', address: 'Villa in Bali, Indonesia', image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80', agency: 'Local Agency', tags: ['1/28'] },
];

const makeResults = (count = 48) => Array.from({ length: count }, (_, i) => ({ ...baseResults[i % baseResults.length], id: i + 1 }));

const BuyProperty = () => {
  const [page, setPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({ minBeds: 2, homeType: 'any', newBuilds: false, minPrice: 0, maxPrice: 0, query: '' });
  const perPage = 16;

  const allResults = useMemo(() => makeResults(64), []);
  const filtered = useMemo(() => allResults.filter((item) => {
    const bedsOk = item.beds >= (filters.minBeds || 0);
    const hasRange = !!filters.minPrice || !!filters.maxPrice;
    const price = item.priceValue ?? null;
    const priceOk = !hasRange ? true : (price !== null && (!filters.minPrice || price >= filters.minPrice) && (!filters.maxPrice || price <= filters.maxPrice));
    const locationOk = !filters.query ? true : item.address.toLowerCase().includes(String(filters.query).toLowerCase());
    return bedsOk && priceOk && locationOk;
  }), [allResults, filters]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = useMemo(() => filtered.slice((page - 1) * perPage, (page - 1) * perPage + perPage), [filtered, page]);
  const shownItems = useMemo(() => paginated.slice(0, visibleCount), [paginated, visibleCount]);

  return (
    <div className="pt-28 min-h-screen bg-white">
      <div className="relative h-[520px] w-full">
        <img
          src="https://images.unsplash.com/photo-1555242083-39b33730316d?auto=format&fit=crop&w=1920&q=80"
          alt="City skyline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 drop-shadow-md">Luxury Real Estate Worldwide</h1>
          <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row items-center gap-2 w-full max-w-4xl shadow-2xl">
            <div className="flex-1 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2 text-left">
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Location</label>
              <input
                type="text"
                placeholder="City, Region, Country"
                value={filters.query}
                onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))}
                className="w-full outline-none text-gray-900 placeholder-gray-800 font-medium"
              />
            </div>
            <div className="w-full md:w-48 border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2 text-left">
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Price</label>
              <select
                value={`${filters.minPrice}-${filters.maxPrice || ''}`}
                onChange={(e) => {
                  const v = e.target.value;
                  if (v === 'any') return setFilters((f) => ({ ...f, minPrice: 0, maxPrice: 0 }));
                  const [min, max] = v.split('-');
                  setFilters((f) => ({ ...f, minPrice: Number(min || 0), maxPrice: Number(max || 0) }));
                }}
                className="w-full bg-white text-gray-900 font-medium outline-none"
              >
                <option value="any">Any Price</option>
                <option value="0-1000000">Up to $1M</option>
                <option value="1000000-5000000">$1M–$5M</option>
                <option value="5000000-10000000">$5M–$10M</option>
                <option value="10000000-">$10M+</option>
              </select>
            </div>
            <div className="w-full md:w-40 px-4 py-2 text-left">
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Beds</label>
              <select
                value={String(filters.minBeds || 0)}
                onChange={(e) => setFilters((f) => ({ ...f, minBeds: Number(e.target.value || 0) }))}
                className="w-full bg-white text-gray-900 font-medium outline-none"
              >
                <option value="0">Any Beds</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            <button
              onClick={() => { setPage(1); setVisibleCount(8); }}
              className="w-full md:w-auto bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-md font-bold text-sm transition uppercase tracking-wide"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="sticky top-[112px] z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-4 py-4">
          <div className="mb-2">
            <h1 className="text-2xl font-serif text-black">Buy Property</h1>
            <p className="text-xs text-gray-400">Explore homes across popular locations</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => setIsFilterOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-medium"><AdjustmentsHorizontalIcon className="w-4 h-4" />Filters</button>
            
            <div className="ml-auto flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium hover:bg-gray-50">Save Search <HeartIcon className="w-4 h-4"/></button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto">
        <div className="flex">
          <div className={`w-full px-4 py-6 transition-all duration-300`}>
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-500">{filtered.length} listings</p>
              <div className="text-sm text-gray-900 flex items-center gap-1 cursor-pointer">Sort: Premium <span className="text-xs">▼</span></div>
            </div>
            <div className={`grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}>
              {shownItems.map((item) => (<SearchCard key={item.id} item={item} />))}
            </div>
            {visibleCount < 16 ? (
              <div className="mt-12 flex justify-center"><button onClick={() => setVisibleCount(16)} className="px-6 py-3 border rounded-full text-sm font-semibold hover:bg-gray-50">View more</button></div>
            ) : (
              <div className="mt-12 flex flex-col items-center gap-4">
                <div className="text-sm text-gray-600">Page {page} of {totalPages}</div>
                <div className="flex justify-center gap-2">
                  <button onClick={() => { setPage((p) => Math.max(1, p - 1)); setVisibleCount(8); }} className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-50">‹</button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button key={n} onClick={() => { setPage(n); setVisibleCount(8); }} className={`w-10 h-10 border rounded-full flex items-center justify-center ${n === page ? 'bg-black text-white' : 'hover:bg-gray-50'}`}>{n}</button>
                  ))}
                  <button onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); setVisibleCount(8); }} className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-50">❯</button>
                </div>
              </div>
            )}
          </div>
    </div>
  </div>
  {isFilterOpen && (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-sm font-semibold uppercase tracking-wide">Filters</h2>
            <button onClick={() => setIsFilterOpen(false)} className="text-gray-500 hover:text-black">✕</button>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Bedrooms</div>
              <div className="flex flex-wrap gap-2">
                {[0,1,2,3,4,5].map((n) => (
                  <button
                    key={n}
                    onClick={() => setFilters((f) => ({ ...f, minBeds: n }))}
                    className={`px-4 py-2 rounded-full border text-sm font-medium ${filters.minBeds === n ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-300 hover:border-black'}`}
                  >
                    {n === 0 ? 'Any' : `${n}+`}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Price Range</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="minPrice" className="block text-xs text-gray-600 mb-1">Min Price</label>
                  <input
                    id="minPrice"
                    type="number"
                    min="0"
                    step="50000"
                    value={filters.minPrice}
                    onChange={(e) => setFilters((f) => ({ ...f, minPrice: Number(e.target.value || 0) }))}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-black focus:outline-none text-gray-800"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label htmlFor="maxPrice" className="block text-xs text-gray-600 mb-1">Max Price</label>
                  <input
                    id="maxPrice"
                    type="number"
                    min="0"
                    step="50000"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters((f) => ({ ...f, maxPrice: Number(e.target.value || 0) }))}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-black focus:outline-none text-gray-800"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Home Type</div>
              <div className="flex flex-wrap gap-2">
                {['any','house','villa','apartment','townhouse'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilters((f) => ({ ...f, homeType: t }))}
                    className={`px-4 py-2 rounded-full border text-sm font-medium ${filters.homeType === t ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-300 hover:border-black'}`}
                  >
                    {t === 'any' ? 'Any' : t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input id="newbuilds" type="checkbox" checked={filters.newBuilds} onChange={(e) => setFilters((f) => ({ ...f, newBuilds: e.target.checked }))} />
              <label htmlFor="newbuilds" className="text-sm text-gray-700">New Builds</label>
            </div>
          </div>
          <div className="p-4 border-t flex justify-between">
            <button onClick={() => { setFilters({ minBeds: 2, homeType: 'any', newBuilds: false, minPrice: 0, maxPrice: 0 }); setPage(1); setVisibleCount(8); }} className="px-4 py-2 rounded-full border text-sm font-medium">Clear</button>
            <button onClick={() => { setIsFilterOpen(false); setPage(1); setVisibleCount(8); }} className="px-4 py-2 rounded-full bg-black text-white text-sm font-semibold">Apply</button>
          </div>
        </div>
      </div>
    </div>
  )}
  </div>
);
};

export default BuyProperty;

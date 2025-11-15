import React, { useState } from 'react';

// --- SVG Icons for property details ---
const BedIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
);
const BathIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
);
const AreaIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v4m0 0h-4m4 0l-5-5" /></svg>
);
const MapIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
);
const ListIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
);

// --- Reusable Property Card Component ---
const PropertyCard = ({ property, isSelected, onClick }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 cursor-pointer ${
        isSelected ? 'ring-2 ring-blue-500 shadow-2xl' : 'hover:shadow-2xl hover:-translate-y-1'
      }`}
      onClick={() => onClick(property)}
    >
      <div className="relative h-48">
        <img 
          className="h-full w-full object-cover" 
          src={property.imageUrl} 
          alt={property.title} 
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/e2e8f0/64748b?text=Image+Not+Available"; }}
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">For Sale</span>
      </div>
      <div className="p-4">
        <p className="text-xl font-bold text-blue-700 mb-1">{property.price}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{property.title}</h3>
        <p className="text-sm text-gray-500 truncate mb-3">{property.address}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-600 pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-1">
            <BedIcon className="w-4 h-4" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center space-x-1">
            <BathIcon className="w-4 h-4" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center space-x-1">
            <AreaIcon className="w-4 h-4" />
            <span>{property.area} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Mock Data for Properties ---
const properties = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop',
    price: 'Rp 2.5 M',
    title: 'Modern Minimalist House',
    address: 'Jl. Senopati, Jakarta Selatan',
    beds: 4,
    baths: 3,
    area: 250,
    lat: -6.2460,
    lng: 106.8149
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-b3b3676b7e50?q=80&w=2070&auto=format&fit=crop',
    price: 'Rp 1.8 M',
    title: 'Cozy Family Home',
    address: 'Jl. Kemang, Jakarta Selatan',
    beds: 3,
    baths: 2,
    area: 180,
    lat: -6.2597,
    lng: 106.8142
  },
  // ... other properties ...
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
    price: 'Rp 3.1 M',
    title: 'Luxury Villa with Pool',
    address: 'Jl. Cilandak, Jakarta Selatan',
    beds: 5,
    baths: 4,
    area: 400,
    lat: -6.2890,
    lng: 106.7983
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop',
    price: 'Rp 1.2 M',
    title: 'Suburban Starter Home',
    address: 'Jl. Bintaro, Tangerang Selatan',
    beds: 2,
    baths: 2,
    area: 120,
    lat: -6.2725,
    lng: 106.6789
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop',
    price: 'Rp 800 Jt',
    title: 'Classic Townhouse',
    address: 'Jl. BSD, Tangerang',
    beds: 3,
    baths: 2,
    area: 150,
    lat: -6.3039,
    lng: 106.6418
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-010a2c70905c?q=80&w=2070&auto=format&fit=crop',
    price: 'Rp 4.5 M',
    title: 'Spacious Modern Design',
    address: 'Jl. Pondok Indah, Jakarta Selatan',
    beds: 4,
    baths: 4,
    area: 350,
    lat: -6.2577,
    lng: 106.7808
  },
];

// --- Map Placeholder Component ---
const MapView = ({ selectedProperty }) => {
  return (
    <div className="rounded-xl overflow-hidden relative h-full bg-gray-200">
      {/* Map Placeholder Image */}
      <img
        src="https://placehold.co/1000x800/e9e9e9/b0b0b0?text=Map+Placeholder"
        alt="Map Placeholder"
        className="w-full h-full object-cover"
      />

      {/* Selected Property Info Box */}
      {selectedProperty && (
        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-xl p-4 max-w-md animate-entrance" style={{ animationDelay: '150ms' }}>
          <div className="flex">
            <img 
              src={selectedProperty.imageUrl} 
              alt={selectedProperty.title}
              className="w-16 h-16 rounded-lg object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/e2e8f0/64748b?text=Img"; }}
            />
            <div className="ml-3 flex-1 min-w-0">
              <h3 className="font-bold text-gray-800 truncate">{selectedProperty.title}</h3>
              <p className="text-blue-600 font-semibold">{selectedProperty.price}</p>
              <p className="text-xs text-gray-500 truncate">{selectedProperty.address}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Map Controls (Placeholder) */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-50 transition-all duration-300 hover:scale-110">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
        </button>
        <button className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-50 transition-all duration-300 hover:scale-110">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
        </button>
      </div>
    </div>
  );
};

// --- The Main Property Page Component ---
const Propertypage = () => {
  const [selectedProperty, setSelectedProperty] = useState(properties[0]);
  const [viewMode, setViewMode] = useState('both'); // 'both', 'list', 'map'
  const [sortBy, setSortBy] = useState('price-low');

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
  };

  const sortedProperties = [...properties].sort((a, b) => {
    // Basic sorting logic (you can make this more robust)
    const priceA = parseInt(String(a.price).replace(/[^0-9]/g, '')) * (String(a.price).includes('M') ? 1000 : 1);
    const priceB = parseInt(String(b.price).replace(/[^0-9]/g, '')) * (String(b.price).includes('M') ? 1000 : 1);

    switch (sortBy) {
      case 'price-high':
        return priceB - priceA;
      case 'price-low':
        return priceA - priceB;
      case 'area':
        return b.area - a.area;
      default:
        return a.id - b.id; // 'newest' placeholder
    }
  });

  return (
    <div className="bg-gray-50 min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Font import and animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-entrance {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
      
      {/* Reduced top padding */}
      <div className="container mx-auto p-4 md:p-8 pt-20 md:pt-24">
        
        {/* Header and Controls with animation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 animate-entrance">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Property Listings
            </h1>
            <p className="text-gray-600 mt-1">{properties.length} properties available</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">View:</span>
              <div className="flex bg-white rounded-lg shadow-sm border border-gray-200">
                <button 
                  className={`p-2 rounded-l-lg transition-all duration-300 ${viewMode === 'both' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100 hover:scale-110'}`}
                  onClick={() => setViewMode('both')}
                  title="Split View"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                </button>
                <button 
                  className={`p-2 transition-all duration-300 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100 hover:scale-110'}`}
                  onClick={() => setViewMode('list')}
                  title="List View"
                >
                  <ListIcon className="w-5 h-5" />
                </button>
                <button 
                  className={`p-2 rounded-r-lg transition-all duration-300 ${viewMode === 'map' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100 hover:scale-110'}`}
                  onClick={() => setViewMode('map')}
                  title="Map View"
                >
                  <MapIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">Sort by:</span>
              <select 
                className="p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="area">Area: Largest First</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Content Layout with animation and delay */}
        <div className="animate-entrance" style={{ animationDelay: '200ms' }}>
          {viewMode === 'both' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Map Section */}
              <div className="lg:order-2 h-[600px]">
                <div className="bg-white rounded-xl shadow-lg h-full">
                  <MapView 
                    selectedProperty={selectedProperty} 
                  />
                </div>
              </div>
              
              {/* Property List Section */}
              <div className="lg:order-1 h-[600px]">
                <div className="bg-white rounded-xl shadow-lg p-4 h-full flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex-shrink-0">
                    Available Properties
                  </h2>
                  <div className="space-y-4 overflow-y-auto pr-2 flex-grow">
                    {sortedProperties.map((property) => (
                      <PropertyCard 
                        key={property.id} 
                        property={property} 
                        isSelected={selectedProperty?.id === property.id}
                        onClick={handlePropertySelect}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ) : viewMode === 'list' ? (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProperties.map((property) => (
                  <PropertyCard 
                    key={property.id} 
                    property={property} 
                    isSelected={selectedProperty?.id === property.id}
                    onClick={handlePropertySelect}
                  />
                ))}
              </div>
            </div>
          ) : ( // 'map' view
            <div className="bg-white rounded-xl shadow-lg h-[700px]">
              <MapView 
                selectedProperty={selectedProperty} 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Propertypage;
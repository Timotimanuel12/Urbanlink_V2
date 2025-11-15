import React,
{ useState, useRef, useEffect } from "react";

// --- Icons ---
const SearchIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor" // Will be gray-600 from the parent button
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

// --- Category Dropdown Component ---
const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const dropdownRef = useRef(null);

  const locations = [
    "All Categories",
    "Bekasi",
    "Bogor",
    "Depok",
    "Jakarta Barat",
    "Jakarta Selatan",
    "Kabupaten Tangerang",
    "Kota Tangerang",
    "Kota Tangerang Selatan",
  ];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (location) => {
    setSelectedCategory(location);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Button to toggle dropdown */}
      <button
        type="button"
        // Updated borders to blend with the white search button
        className="flex h-10 w-full items-center justify-between border-t border-b border-l border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate">{selectedCategory}</span>
        {/* Chevron icon removed as requested */}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {locations.map((location) => (
              <a
                href="#"
                key={location}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(location);
                }}
                className={`block px-4 py-2 text-sm ${
                  selectedCategory === location
                    ? 'bg-blue-700 text-white' // Darker blue
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {location}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main Search Component ---
const Search = () => {
  return (
    <div className="relative w-full max-w-md"> {/* Made it smaller */}
      {/* Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');
      `}</style>
      
      <form
        className="flex w-full items-center shadow-lg rounded-full" // Fully rounded, larger shadow
        onSubmit={(e) => e.preventDefault()}
        style={{ fontFamily: "'Nunito', sans-serif" }} // Apply font
      >
        {/* Search Input */}
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Lokasi, Area, Jenis Properti"
            // Light and bright gray placeholder
            className="h-10 w-full rounded-l-full border border-gray-300 border-r-0 px-5 py-2 text-sm placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Category Dropdown - Made smaller */}
        <div className="w-40">
          <CategoryDropdown />
        </div>

        {/* Search Button - Changed to white */}
        <button
          type="submit"
          className="flex h-10 items-center justify-center rounded-r-full border border-gray-300 border-l-0 bg-white px-4 py-2 text-gray-600 hover:bg-gray-50 focus:outline-none"
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default Search;
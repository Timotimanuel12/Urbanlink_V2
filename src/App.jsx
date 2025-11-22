import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
// import Categories from "./Components/Categories/categories.jsx";

//Pages
import Homepage from './pages/Homepage.jsx';
import Propertypage from './pages/Propertypage.jsx';
import KprCalculator from './pages/KPR.jsx';
import SellPropertyForm from './pages/JualRumah.jsx';
import CityListings from './pages/CityListings.jsx';
import SearchResults from './pages/SearchResults.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <main>
          {/* The Routes component will switch which page is shown */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/property" element={<Propertypage />} />
            <Route path= "/KPR" element={<KprCalculator/>} />
            <Route path= "/jualrumah" element={<SellPropertyForm/>} />
            <Route path="/listings/:cityName" element={<CityListings />} />
            <Route path="/search" element={<SearchResults />} />     
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;


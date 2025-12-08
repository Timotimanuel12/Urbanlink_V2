import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';

//Pages
import Homepage from './pages/Homepage.jsx';
import Propertypage from './pages/Propertypage.jsx';
import PropertyDetails from './pages/PropertyDetails.jsx';
import KprCalculator from './pages/KPR.jsx';
import SellPropertyForm from './pages/JualRumah.jsx';
import CityListings from './pages/CityListings.jsx';
import SearchResults from './pages/SearchResults.jsx';
import BuyProperty from './pages/BuyProperty.jsx';
import Contact from './pages/Contact.jsx';
import JoinAgent from './pages/JoinAgent.jsx';
import Journal from './pages/Journal.jsx';
import ArticleDetail from './pages/ArticleDetail.jsx'; // 1. Import this

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/property" element={<Propertypage />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            
            <Route path="/KPR" element={<KprCalculator/>} />
            <Route path="/jualrumah" element={<SellPropertyForm/>} />
            
            <Route path="/listings/:cityName" element={<CityListings />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/buy" element={<BuyProperty />} />     
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/join-agent" element={<JoinAgent />} />
            
            {/* Journal Routes */}
            <Route path="/journal" element={<Journal />} />
            {/* 2. Add the dynamic route here */}
            <Route path="/journal/:id" element={<ArticleDetail />} />
            
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
import React from 'react';
import Hero from '../Components/Hero/Hero.jsx'; 
// 1. Import the Categories component
import Categories from '../Components/HCategories/categories.jsx';

// You can also import other homepage-specific sections here
// import Features from '../Components/Features/Features';

const Homepage = () => {
  return (
    <>
      <Hero />
      
      {/* 2. Add the Categories component here */}
      <Categories />

      {/* <Features /> */}
      {/* <Testimonials /> */}
    </>
  );
};

export default Homepage;


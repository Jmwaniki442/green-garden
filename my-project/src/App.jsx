 import React from "react";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Features from "./components/sections/Features";
import Products from "./components/sections/Products";
import Testimonials from "./components/sections/Testimonials";
import Contacts from "./components/sections/Contacts";
const App = () => {
  return (
    <div className="min-h-screen bg-lightblue-50 text-lightblue-800">
      <Header />
      <Navigation />
      <Hero />
      <Products />
      <Features />
      <Testimonials />
      <Stats />
      <Contacts />
    </div>
  );
};

export default App;

 import React from "react";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Hero from "./components/sections/Hero";
const App = () => {
  return (
    <div className="min-h-screen bg-lightblue-50 text-lightblue-800">
      <Header />
      <Navigation />
      <Hero />
    </div>
  );
};

export default App;

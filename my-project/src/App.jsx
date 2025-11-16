import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Products from "./components/sections/Products";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import Contacts from "./components/sections/Contacts";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="bg-lightblue-50 text-lightblue-800">
      {/* Top Navigation */}
      <Header />
      

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="pt-20">
        <Stats />
      </section>

      {/* About Section */}
      <section className="pt-20">
        <About />
      </section>

      {/* Products Section */}
      <section className="pt-20">
        <Products />
      </section>

      {/* Features Section */}
      <section className="pt-20">
        <Features />
      </section>

      {/* Testimonials Section */}
      <section className="pt-20">
        <Testimonials />
      </section>

      {/* Contacts Section */}
      <section className="pt-20">
        <Contacts />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;

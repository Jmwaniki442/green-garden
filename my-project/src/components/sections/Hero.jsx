import React from "react";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/8805182/pexels-photo-8805182.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
        alt="Fresh organic groceries"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div
        className="relative z-10 text-center text-white px-6 max-w-2xl animate-fadeIn"
      >
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
          Fresh Organic Groceries with{" "}
          <span className="text-primary">GreenGarden</span>
        </h1>

        <p className="text-lg md:text-xl mb-8">
          Delivering fresh produce, dairy, and pantry essentials straight to your door.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button text="Shop Now" variant="primary" />
          <Button text="View Products" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

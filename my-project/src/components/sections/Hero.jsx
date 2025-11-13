import React from "react";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center text-white px-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
          Fresh Organic Groceries with{" "}
          <span className="text-primary">GreenGarden</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Delivering fresh produce, dairy, and pantry essentials straight to your door.
        </p>
        <Button text="Shop Now" variant="primary" />
      </div>
    </section>
  );
};

export default Hero;

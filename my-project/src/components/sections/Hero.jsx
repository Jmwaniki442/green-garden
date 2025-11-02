import React from "react";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section id="hero" className="pt-24 bg-neutralLight">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Shop Fresh Groceries Delivered to Your Doorstep
          </h2>
          <p className="text-lg mb-6">
            Discover organic produce, dairy, and pantry essentials — all in one
            place.
          </p>
          <Button text="Shop Now" variant="primary" />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg"
            alt="Fresh groceries"
            className="rounded-2xl shadow-lg w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

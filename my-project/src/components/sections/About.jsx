import React from "react";
import Section from "../common/Section";

const About = () => {
  return (
    <Section id="about" title="About GreenGarden" bg="bg-green-50">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/6148830/pexels-photo-6148830.jpeg"
            alt="GreenGarden groceries and produce"
            className="rounded-2xl shadow-lg w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">
            Our Story
          </h3>
          <p className="text-gray-700 mb-4">
            GreenGarden was born from a passion for healthy eating and local produce. We connect you directly to local farmers and suppliers, ensuring that every basket delivers freshness, quality, and convenience.
          </p>
          <p className="text-gray-700">
            Our mission is simple: make healthy, fresh, and affordable groceries accessible to everyone. Experience the joy of farm-to-table delivery with GreenGarden.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;

import React from "react";
import Section from "../common/Section";

const features = [
  {
    title: "Fast Delivery",
    desc: "Groceries at your doorstep in under 2 hours.",
    image: "https://images.pexels.com/photos/7363242/pexels-photo-7363242.jpeg",
    alt: "Fast delivery of groceries",
    credit: "Photo by Anna Shvets on Pexels",
  },
  {
    title: "Fresh Produce",
    desc: "We deliver straight from local farms.",
    image: "https://images.pexels.com/photos/461208/pexels-photo-461208.jpeg",
    alt: "Fresh vegetables and fruits",
    credit: "Photo by Jonathan Borba on Pexels",
  },
  {
    title: "Affordable Prices",
    desc: "Save more on every basket.",
    image: "https://images.pexels.com/photos/5094493/pexels-photo-5094493.jpeg",
    alt: "Affordable grocery shopping with discounts",
    credit: "Photo by Anna Shvets on Pexels",
  },
];

const Features = () => {
  return (
    <Section id="features" title="Why Choose FreshBasket?" bg="bg-white">
      <div className="grid md:grid-cols-3 gap-10 text-center">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-neutralLight rounded-2xl shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-40 object-cover rounded mb-4"
              loading="lazy"
            />
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;

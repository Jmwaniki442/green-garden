import React from "react";
import { Truck, Leaf, Tag } from "lucide-react";

const features = [
  {
    icon: <Truck size={32} />,
    title: "Fast Delivery",
    desc: "Groceries delivered to your doorstep in under 2 hours.",
    image:
      "https://images.pexels.com/photos/7363242/pexels-photo-7363242.jpeg",
  },
  {
    icon: <Leaf size={32} />,
    title: "Fresh Produce",
    desc: "We deliver straight from local farms.",
    image:
      "https://images.pexels.com/photos/6148830/pexels-photo-6148830.jpeg",
  },
  {
    icon: <Tag size={32} />,
    title: "Affordable Prices",
    desc: "Save more on every basket.",
    image:
      "https://images.pexels.com/photos/5094493/pexels-photo-5094493.jpeg",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-green-50">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-green-800">
          Why Choose GreenGarden?
        </h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-2 duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 md:h-48 object-cover rounded mb-4"
                loading="lazy"
              />
              <div className="flex justify-center mb-4 text-green-700">
                {item.icon}
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <button className="mt-2 px-4 py-2 md:px-6 md:py-3 bg-green-700 text-white rounded hover:bg-green-800 transition w-full sm:w-auto">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

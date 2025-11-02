import React from "react";
import { Truck, Leaf, Tag } from "lucide-react";

const features = [
  { icon: <Truck size={32} />, title: "Fast Delivery", desc: "Groceries at your doorstep in under 2 hours." },
  { icon: <Leaf size={32} />, title: "Fresh Produce", desc: "We deliver straight from local farms." },
  { icon: <Tag size={32} />, title: "Affordable Prices", desc: "Save more on every basket." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-heading font-bold mb-10">Why Choose FreshBasket?</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div key={index} className="p-6 bg-neutralLight rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex justify-center mb-4 text-primary">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

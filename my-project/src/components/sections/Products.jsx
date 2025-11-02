import React from "react";
import Card from "../common/Card";

const products = [
  {
    name: "Fresh Broccoli",
    price: "Ksh 150/kg",
    image: "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg", // Broccoli
  },
  {
    name: "Organic Cauliflower",
    price: "Ksh 180/kg",
    image: "https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg", // Cauliflower
  },
  {
    name: "Ripe Bananas",
    price: "Ksh 130/bunch",
    image: "https://images.pexels.com/photos/5945845/pexels-photo-5945845.jpeg", // Radishes
  },
  
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-neutralLight">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-heading font-bold mb-10">Fresh Vegetables</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

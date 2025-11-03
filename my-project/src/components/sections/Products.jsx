import React from "react";
import Card from "../common/Card";

const products = [
  {
    name: "Radishes",
    price: "Ksh 150/kg",
    image:
      "https://plus.unsplash.com/premium_photo-1723485627473-7227c17bf7ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=704", // Broccoli
  },
  {
    name: " Fresh Brocolli",
    price: "Ksh 180/kg",
    image:
      "https://plus.unsplash.com/premium_photo-1702403157830-9df749dc6c1e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740", // Cauliflower
  },
  {
    name: "Fresh Banana",
    price: "Ksh 130/bunch",
    image:
      "https://images.pexels.com/photos/5945845/pexels-photo-5945845.jpeg", // Radishes
  },
  {
    name: "Purple Cabbage",
    price: "Ksh 200/kg",
    image:
      "https://images.unsplash.com/photo-1692958208988-227f4d09b8b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674", // Purple Cabbage updated
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-green-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-10">
          Fresh Vegetables
        </h2>

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

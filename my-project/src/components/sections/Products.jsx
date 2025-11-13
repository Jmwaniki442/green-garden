import React from "react";
import Card from "../common/Card";

const products = [
  {
    name: "Radishes",
    price: "Ksh 150/kg",
    image:
      "https://plus.unsplash.com/premium_photo-1723485627473-7227c17bf7ef?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=704",
  },
  {
    name: "Fresh Broccoli",
    price: "Ksh 180/kg",
    image:
      "https://plus.unsplash.com/premium_photo-1702403157830-9df749dc6c1e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
  },
  {
    name: "Cauliflower",
    price: "Ksh 200/kg",
    image:
      "https://images.pexels.com/photos/34637173/pexels-photo-34637173.jpeg",
  },
  {
    name: "Purple Cabbage",
    price: "Ksh 200/kg",
    image:
      "https://images.unsplash.com/photo-1692958208988-227f4d09b8b0?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1674",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-neutralLight">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-10">
          Fresh Vegetables from <span className="text-green-700">GreenGarden</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              alt={product.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

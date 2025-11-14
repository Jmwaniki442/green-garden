import React, { useEffect, useState } from "react";
import Card from "../common/Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use environment variable for API URL
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    // Fetch products from backend
    fetch(`${API_URL}/api/products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [API_URL]);

  if (loading)
    return <p className="text-center py-10">Loading products...</p>;
  if (error)
    return (
      <p className="text-center py-10 text-red-500">
        {error}
      </p>
    );

  return (
    <section id="products" className="py-20 bg-neutralLight">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-10">
          Fresh Vegetables from{" "}
          <span className="text-green-700">GreenGarden</span>
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

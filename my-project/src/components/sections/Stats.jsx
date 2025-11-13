import React from "react";

const Stats = () => {
  return (
    <section className="bg-green-600 py-12">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Our Fresh Impact
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-green-500 rounded-2xl shadow-md p-6">
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="mt-2">Happy Customers</p>
          </div>

          <div className="bg-green-500 rounded-2xl shadow-md p-6">
            <h3 className="text-4xl font-bold">120+</h3>
            <p className="mt-2">Fresh Products</p>
          </div>

          <div className="bg-green-500 rounded-2xl shadow-md p-6">
            <h3 className="text-4xl font-bold">15+</h3>
            <p className="mt-2">Local Farms</p>
          </div>

          <div className="bg-green-500 rounded-2xl shadow-md p-6">
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="mt-2">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

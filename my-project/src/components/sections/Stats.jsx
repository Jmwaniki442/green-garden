import React from "react";

const Stats = () => {
  return (
    <section className="bg-green-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-8">
          Our Fresh Impact
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-4xl font-bold text-green-700">500+</h3>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-4xl font-bold text-green-700">120+</h3>
            <p className="text-gray-600 mt-2">Fresh Products</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-4xl font-bold text-green-700">15+</h3>
            <p className="text-gray-600 mt-2">Local Farms</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-4xl font-bold text-green-700">98%</h3>
            <p className="text-gray-600 mt-2">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

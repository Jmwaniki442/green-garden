import React from "react";

const Stats = () => {
  const stats = [
    { value: "500+", label: "Happy Customers" },
    { value: "120+", label: "Fresh Products" },
    { value: "15+", label: "Local Farms" },
    { value: "98%", label: "Customer Satisfaction" },
  ];

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto bg-green-600 rounded-xl py-6 px-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Fresh Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 text-center">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative py-4 flex flex-col items-center justify-center"
            >
              {/* Vertical Divider */}
              {index !== stats.length - 1 && (
                <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/40"></span>
              )}

              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-sm mt-1 opacity-90">{stat.label}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;

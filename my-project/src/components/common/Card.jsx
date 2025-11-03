import React from "react";

const Card = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 text-center">
        <h4 className="text-xl font-semibold text-green-800 mb-2">{name}</h4>
        <p className="text-gray-600 mb-4">{price}</p>
        <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;

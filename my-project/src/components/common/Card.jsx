
import React from "react";

const Card = ({ image, title, description, price, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition duration-300">
      {image && <img src={image} alt={title} className="w-full h-56 object-cover" />}
      <div className="p-6">
        {title && <h3 className="text-2xl font-semibold mb-2">{title}</h3>}
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {price && <p className="text-lg font-bold">{price}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;

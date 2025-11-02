import React from "react";
import Button from "./Button";

const Card = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-xl mb-4"
        loading="lazy"
      />
      <h4 className="text-lg font-bold mb-2">{name}</h4>
      <p className="text-primary mb-4">{price}</p>
      <Button text="Add to Cart" variant="secondary" />
    </div>
  );
};

export default Card;

import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Card = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center">
      <img
        src={image}
        alt={name} // accessibility
        className="w-full h-48 object-cover rounded-xl mb-4"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold text-green-800 mb-2">{name}</h3>
      <p className="text-gray-700 mb-4">{price}</p>
      {/* Optional CTA button */}
      <Button text="Add to Cart" variant="primary" />
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;

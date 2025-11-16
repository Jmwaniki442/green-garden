import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, image, price, children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {/* If image exists, show it */}
      {image && (
        <img
          src={image}
          alt={title || "Image"}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        {/* If children exist (Testimonials), render children instead of product layout */}
        {children ? (
          children
        ) : (
          <>
            {title && (
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            )}

            {price && (
              <p className="text-green-700 font-bold mt-2">{price}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Card;

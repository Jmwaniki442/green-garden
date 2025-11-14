
import React from "react";

const ResponsiveImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`w-full h-auto ${className}`}
    loading="lazy"
  />
);

export default ResponsiveImage;

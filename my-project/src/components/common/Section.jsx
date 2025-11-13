import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

/**
 * Section Wrapper Component
 * Ensures consistent section padding, background, and max width across pages.
 */
const Section = ({ id, title, children, bg = "bg-white", className = "" }) => {
  return (
    <section
      id={id}
      className={clsx(
        "py-16 md:py-24", // consistent vertical spacing
        bg,               // background color (default white)
        className         // any extra classes passed in
      )}
    >
      <div className="container mx-auto px-6">
        {title && (
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10 text-neutralDark">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

// ✅ PropTypes for type safety
Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  className: PropTypes.string,
};

export default Section;

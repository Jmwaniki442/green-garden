
import React from "react";

const Section = ({ children, id, className }) => (
  <section id={id} className={`py-20 ${className || ""}`}>
    <div className="max-w-6xl mx-auto px-6">{children}</div>
  </section>
);

export default Section;

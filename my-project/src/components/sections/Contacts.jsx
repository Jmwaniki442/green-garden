import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Section from "../common/Section";
import Button from "../common/Button";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Section id="contact" title="Get in Touch" bg="bg-neutralLight">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row gap-12">
        
        {/* Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <div className="flex items-center gap-4">
            <Phone className="text-primary" />
            <span className="font-semibold">+254 717 163105</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-primary" />
            <span className="font-semibold">support@greengarden.com</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-primary" />
            <span className="font-semibold">254 Nairobi, Kenya</span>
          </div>
          <p className="text-gray-600 mt-4">
            Have questions or feedback? Fill out the form, and we'll get back to you promptly!
          </p>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2">
          {submitted && (
            <p className="mb-4 text-green-600 font-semibold">Thank you! Your message has been sent.</p>
          )}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              rows="5"
              required
            />
            <Button text="Send Message" type="submit" variant="primary" />
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;

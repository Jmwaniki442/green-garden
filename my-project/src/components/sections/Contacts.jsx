import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Hide message after 3s
  };

  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-8">
          Get in Touch with Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Have a question or want to place an order? Reach out using the form
          below or contact us directly. We’d love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="text-left space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="text-green-600" size={28} />
              <p className="text-lg">+254 712 345 678</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-green-600" size={28} />
              <p className="text-lg">info@freshfarm.co.ke</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-green-600" size={28} />
              <p className="text-lg">Nairobi, Kenya</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-md space-y-6 relative"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 transition-all"
            >
              <Send size={20} />
              <span>Send Message</span>
            </button>

            {/* Success Message */}
            {isSubmitted && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 rounded-2xl backdrop-blur-sm transition-all">
                <CheckCircle className="text-green-600 mb-2" size={40} />
                <p className="text-green-700 font-semibold text-lg">
                  Message sent successfully!
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

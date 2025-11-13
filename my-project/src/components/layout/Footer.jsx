import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-neutralDark dark:bg-gray-900 text-white pt-16 pb-8 transition-colors duration-500">
      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-4">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-primary dark:text-green-400">
            GreenGarden
          </h3>
          <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
            Fresh, organic groceries delivered straight to your doorstep.  
            Eat healthy, live happy.
          </p>
          {/* Social Media */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="hover:text-primary dark:hover:text-green-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-primary dark:hover:text-green-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-primary dark:hover:text-green-400 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-primary dark:hover:text-green-400 focus:text-primary dark:focus:text-green-400 focus:outline-none transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-2 text-gray-300 dark:text-gray-400">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={18} /> +1 234 567 890
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={18} /> info@greengarden.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={18} /> 123 Green Street, City, Country
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-lg mb-4">Subscribe</h4>
          <p className="text-gray-300 dark:text-gray-400 mb-4">
            Get updates on new products and offers.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg text-gray-800 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-green-400 transition-colors"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 px-4 py-2 bg-primary dark:bg-green-600 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-700 dark:border-gray-800 pt-6 text-center text-gray-400 dark:text-gray-500 text-sm md:text-base transition-colors">
        &copy; {new Date().getFullYear()} GreenGarden. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

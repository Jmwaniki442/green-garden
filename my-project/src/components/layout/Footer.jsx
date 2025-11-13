import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

/**
 * Responsive Footer Component
 * Includes contact info, quick links, and branding
 */
const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-neutralDark text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-heading font-bold mb-4 text-primary">
            GreenGarden
          </h3>
          <p className="text-gray-300">
            Fresh, organic groceries delivered straight to your doorstep.  
            Eat healthy, live happy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={18} /> +1 234 567 890
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> info@greengarden.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> 123 Green Street, City, Country
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} GreenGarden. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-neutral-light">
      {/* Newsletter Section - Green Background */}
      <div className="bg-green-600 py-12 text-center">
        <h2 className="text-2xl font-semibold text-white mb-2">
          Get more discount off your order
        </h2>
        <p className="mb-6 text-green-200">Join our mailing list</p>
        <div className="flex justify-center flex-wrap gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-l-lg w-64 outline-none text-neutral-dark"
          />
          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-r-lg transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-neutral-dark border-t border-neutral-light pt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">GreenGarden</h3>
            <p className="text-secondary text-sm">
              Fresh, organic groceries delivered straight to your doorstep. Eat healthy, live happy.
            </p>
            <div className="flex gap-4 mt-4">
              <Linkedin className="w-5 h-5 hover:text-primary cursor-pointer" />
              <Facebook className="w-5 h-5 hover:text-primary cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-primary cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-primary cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Top Reviews</a></li>
              <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@greengarden.com</li>
              <li>Phone: +254 717 163105</li>
              <li>Address: Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm text-secondary bg-neutral-dark py-4">
        © {new Date().getFullYear()} GreenGarden. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

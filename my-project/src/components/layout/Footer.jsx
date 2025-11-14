import React from "react";

const Footer = () => {
  return (
    <footer className="text-neutral-light">
      {/* Upper Footer: Green Section */}
      <div className="bg-green-600 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Get more discount off your order
          </h2>
          <p className="mb-6 text-green-100">Join our mailing list</p>
          <div className="flex justify-center flex-wrap gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-l-full w-64 outline-none text-neutral-dark transition duration-300 focus:ring-2 focus:ring-accent"
            />
            <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-r-full transition duration-300">
              Shop Now
            </button>
          </div>

          {/* Footer Links */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-left text-white">
            <div>
              <h3 className="text-xl font-bold mb-4">GreenGarden</h3>
              <p className="text-green-100 text-sm">
                Fresh, organic groceries delivered straight to your doorstep. Eat healthy, live happy.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#hero" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#products" className="hover:text-accent transition-colors">Products</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Information</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#reviews" className="hover:text-accent transition-colors">Top Reviews</a></li>
                <li><a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-accent transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: info@greengarden.com</li>
                <li>Phone: +25717163105</li>
                <li>Address: 123 Green Street, City, Country</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer: Black Section */}
      <div className="bg-neutral-dark py-4">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-green-200">
          © {new Date().getFullYear()} GreenGarden. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

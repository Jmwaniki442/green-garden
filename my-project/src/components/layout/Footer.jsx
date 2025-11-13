<footer className="bg-neutral-dark text-neutral-light pt-12 pb-8">
  {/* Newsletter Section */}
  <div className="max-w-6xl mx-auto px-6 text-center mb-10">
    <h2 className="text-2xl font-semibold text-primary mb-2">
      Get more discount off your order
    </h2>
    <p className="mb-6 text-secondary">Join our mailing list</p>
    <div className="flex justify-center flex-wrap gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-3 rounded-l-lg w-64 outline-none text-neutral-dark"
      />
      <button className="bg-primary hover:bg-accent text-neutral-light px-6 py-3 rounded-r-lg">
        Shop Now
      </button>
    </div>
  </div>

  {/* Footer Links */}
  <div className="border-t border-neutral-light pt-10">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
      <div>
        <h3 className="text-xl font-bold mb-4 text-primary">GreenGarden</h3>
        <p className="text-secondary text-sm">
          Fresh, organic groceries delivered straight to your doorstep. Eat healthy, live happy.
        </p>
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
          <li>Phone: +25717163105</li>
          <li>Address: 123 Green Street, City, Country</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Copyright */}
  <div className="text-center mt-10 text-sm text-secondary">
    © {new Date().getFullYear()} GreenGarden. All rights reserved.
  </div>
</footer>

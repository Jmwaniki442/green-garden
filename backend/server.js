import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy Products Data
let products = [
  {
    id: 1,
    name: "Fresh Broccoli",
    description: "Organic broccoli, fresh from the farm.",
    price: 2.99,
    image:
      "https://images.pexels.com/photos/870898/pexels-photo-870898.jpeg?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Purple Cabbage",
    description: "Crunchy and healthy purple cabbage.",
    price: 1.99,
    image:
      "https://images.unsplash.com/photo-1692958208988-227f4d09b8b0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Fresh Carrots",
    description: "Sweet organic carrots packed with vitamins.",
    price: 1.49,
    image:
      "https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg?auto=format&fit=crop&w=800&q=80",
  },
];

// Routes
app.get("/", (req, res) => {
  res.send("GreenGarden Backend Running!");
});

// Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Get single product
app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// Add order (simplified)
app.post("/api/orders", (req, res) => {
  const { items, customer } = req.body;
  if (!items || !customer) {
    return res.status(400).json({ message: "Missing order details" });
  }
  // Here you would normally save to a database
  res.status(201).json({ message: "Order received!", order: { items, customer } });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

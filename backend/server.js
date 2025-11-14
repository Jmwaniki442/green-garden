import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Static products data
const products = [
  {
    name: "Radishes",
    price: "Ksh 150/kg",
    image:
      "https://plus.unsplash.com/premium_photo-1723485627473-7227c17bf7ef?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=704",
  },
  {
    name: "Fresh Broccoli",
    price: "Ksh 180/kg",
    image:
      "https://plus.unsplash.com/premium_photo-1702403157830-9df749dc6c1e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
  },
  {
    name: "Cauliflower",
    price: "Ksh 200/kg",
    image:
      "https://images.pexels.com/photos/34637173/pexels-photo-34637173.jpeg",
  },
  {
    name: "Purple Cabbage",
    price: "Ksh 200/kg",
    image:
      "https://images.unsplash.com/photo-1692958208988-227f4d09b8b0?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1674",
  },
];

// Default route
app.get("/", (req, res) => {
  res.send("GreenGarden API is running!");
});

// Products route
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

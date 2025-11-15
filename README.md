
#Live Demo

👉 https://green-garden-12.onrender.com


---

📌 Project Overview

GreenGarden is a modern, responsive website designed for gardening and landscaping services.
It focuses on:

Clean + aesthetic nature-themed design

Smooth user flow

Brand consistency

High performance (optimized with Vite)

Responsive UI for mobile, tablet, and desktop


This project includes a fully deployed backend API + frontend UI.


---

🎨 Brand Identity

🌈 Color System

Color	Hex	Usage

🌿 Primary Green	#2E7D32	Represents nature, growth, freshness
🌼 Accent Yellow	#F4B400	Calls-to-action, highlights
⚫ Neutral Dark	#1A1A1A	Text, contrast
⚪ Neutral Light	#F9F9F9	Background + spacing



---

✍️ Typography

Headings: Poppins — modern, premium, friendly

Body Text: Inter — optimized for readability and clean UI



---

🧩 Design Decisions

📐 Layout Accuracy

Pixel-perfect spacing using Figma Inspector

Consistent grid structure (Tailwind utilities)

Responsive breakpoints: sm, md, lg, xl


🎨 Creative Departures

improved content for SEO + brand tone

enhanced medium-screen layout for tablets

added more spacing for cleaner visual hierarchy



---

🏗 Component Architecture

GreenGarden uses a modular component-based structure:

HeroSection.jsx

AboutSection.jsx

Services.jsx

Gallery.jsx

Testimonials.jsx

ContactForm.jsx

Footer.jsx


Features:

Reusable components

Props-driven content

Clean folder separation

Config files for icons + constants



---

⚡ Performance Optimizations

Image lazy loading

Minimal bundle using Vite

CDN caching in production

Tailwind JIT engine

SVG icons instead of PNG



---

📸 Image Credits

All images are sourced from:

Pexels.com

Unsplash.com


(Free for personal and commercial use.)


---

🛠 Installation & Setup

1️⃣ Clone Repository

git clone https://github.com/YOUR-USERNAME/green-garden
cd green-garden

2️⃣ Install Dependencies

npm install

3️⃣ Run Development Server

npm run dev

4️⃣ Build Production Files

npm run build

5️⃣ Preview Build

npm run preview


---

🧰 Technologies Used

Frontend

React 18

Tailwind CSS v4

Vite v5

Lucide React Icons

Swiper.js


Backend

Express.js


CORS



---

🐛 Challenges & Solutions

1️⃣ Render Port Binding Failed

Cause: Vite preview didn’t expose the port.
Solution: Added:

vite preview --host 0.0.0.0 --port $PORT


---

2️⃣ API Calls Failing on Production

Cause: Hardcoded localhost URLs.
Solution: Used environment variable:

VITE_API_URL=https://green-garden-3.onrender.com


---

3️⃣ Tailwind Not Loading

Cause: Missing plugin configuration.
Solution: Added:

import tailwindcss from "@tailwindcss/vite";


---

🚀 Future Improvements

Admin dashboard for managing garden services

Full CMS integration

Booking/appointment system

Chatbot assistant for customer support

Blog section for gardening tips

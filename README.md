# GreenGarden
Live Demo

https://green-garden-3.onrender.com

Project Overview

GreenGarden is an online platform showcasing fresh, locally sourced vegetables. The website provides users with a seamless shopping experience, highlighting product freshness, quality, and accessibility.

Brand Identity
Color System

Primary: #16A34A (green) – represents freshness, growth, and sustainability

Secondary: #1F2937 (dark gray) – ensures readability and neutral background for product focus

Accent: #FBBF24 (yellow) – draws attention to calls-to-action and highlights

Typography

Headings: 'Poppins', sans-serif – modern and clean, improves readability for product titles

Body: 'Roboto', sans-serif – neutral, legible, and pairs well with headings

Design Decisions
Layout Adherence

Used Tailwind CSS utility classes for consistent spacing and alignment

Layout measured with 8pt grid system for uniform spacing

Tools: Figma for design mockups and alignment accuracy

Creative Departures

Implemented product emphasis using high-quality images

Content strategy focuses on transparency and sustainability

Medium (MD) breakpoint designed to enhance tablet experience with optimized grid

Component Architecture

Card Component: Reusable for each product

Products Section: Dynamically fetches data from backend

Hero Section: Centralized landing section with full-screen imagery

Components structured in /src/components for modularity and reusability

Performance Optimizations

Lazy loading product images

Tailwind JIT mode enabled to minimize CSS size

Optimized Vite build for fast page load

Image Credits

Images sourced from Unsplash and Pexels

Proper attribution included in project notes

Installation & Setup

Clone the repository:

git clone https://github.com/Jmwaniki442/green-garden.git


Install dependencies for frontend and backend:

cd backend
npm install
cd ../frontend
npm install


Set up environment variables:

# frontend/.env
VITE_API_URL=https://green-garden-3.onrender.com


Run locally:

# backend
npm run dev

# frontend
npm run dev

Technologies Used

React: v18.2.0

Tailwind CSS: latest v3+

Vite: v7.2.2

Other Packages: clsx, lucide-react, swiper

Challenges & Solutions

Removed MongoDB & Mongoose: Replaced with static JSON in backend for simplicity

Frontend API Integration: Configured VITE_API_URL to handle local and deployed environments

Responsive Grid: Implemented Tailwind CSS grid to work across LG, MD, and SM breakpoints

Future Improvements

Add shopping cart functionality with local storage or backend integration

Implement user authentication for personalized experience

Add search and filter functionality for products

Submission Requirements Checklist

 GitHub repository with clear commit history

 Meaningful commit messages

 .gitignore configured (no node_modules or dist/build folders)

 ESLint configuration included

 Code formatting consistent

 No console.log in production

 Screenshots in /screenshots folder showing:

LG, MD, SM breakpoints

Lighthouse scores

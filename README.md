# GoodDay Tours & Travel Website

A professional 4-page React travel website with React Router navigation.

## 📁 Project Structure

```
goodday-tours/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js      # Sticky header with top keyword bar + nav
│   │   ├── Header.css
│   │   ├── Footer.js      # Footer with keyword tags, links, contact
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js        # Landing page with hero, destinations, services
│   │   ├── Home.css
│   │   ├── AboutUs.js     # Story, team, values, why us
│   │   ├── AboutUs.css
│   │   ├── Gallery.js     # Filterable masonry gallery + lightbox
│   │   ├── Gallery.css
│   │   ├── ContactUs.js   # Contact form, info cards, FAQ accordion
│   │   └── ContactUs.css
│   ├── App.js             # Router setup
│   ├── App.css            # Global styles & variables
│   └── index.js           # Entry point
└── package.json
```

## 🚀 Getting Started

### Install & Run
```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Build for Production
```bash
npm run build
```

## ✨ Features
- **React Router** – client-side navigation between 4 pages
- **Sticky Header** – keyword strip at top + responsive hamburger menu
- **Home Page** – hero banner, destination cards, services, stats strip
- **About Page** – company story, team cards, values, why-choose-us
- **Gallery** – category filter tabs, masonry image grid, click-to-lightbox
- **Contact** – working form with validation, info cards, FAQ accordion
- **Footer** – keyword tags, quick links, services list, contact info
- **Fully Responsive** – mobile-first design
- **Google Fonts** – Playfair Display + DM Sans

## 🎨 Color Theme
- Forest Green `#0a3d2e` – primary brand colour
- Deep Green `#072a1f` – dark backgrounds
- Gold `#c9922a` – accent highlights
- Cream `#fdf6ec` – page background

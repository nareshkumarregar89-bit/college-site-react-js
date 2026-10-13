# Sunrise College - Modern React Application

A modular, component-driven React single-page application (SPA) created with Vite and React Router, migrating the original static college site into a clean, modern architecture.

---

## 📁 Project Folder Structure

```text
react-app/
├── public/
│   └── images/
│       ├── logo.jpg               # Sunrise College logo
│       └── campus.jpg             # Campus hero banner image
├── src/
│   ├── components/
│   │   ├── common/                # Shared layout & UI components
│   │   │   ├── Header.jsx         # Site header with branding & logo
│   │   │   ├── Navbar.jsx         # Navigation bar with active route highlighting
│   │   │   ├── Footer.jsx         # Site footer with dynamic year & links
│   │   │   ├── CustomCursor.jsx   # Interactive physics cursor component
│   │   │   └── ScrollToTop.jsx    # Automatically scrolls to top on route changes
│   │   ├── home/                  # Home page section components
│   │   │   ├── HeroSection.jsx    # Hero welcome card with campus banner
│   │   │   ├── FeaturesGrid.jsx   # 4 core feature cards
│   │   │   └── NoticeBoard.jsx    # Latest announcements list
│   │   ├── about/                 # About page section components
│   │   │   ├── AboutHero.jsx      # Legacy & history narrative
│   │   │   ├── VisionMission.jsx  # Vision, mission & guiding pillars
│   │   │   └── FacilitiesList.jsx # Campus facilities overview
│   │   ├── courses/               # Courses section components
│   │   │   ├── CourseTable.jsx    # Reusable modern course table
│   │   │   └── AdvisorCTA.jsx     # Academic advisor contact call-to-action
│   │   └── contact/               # Contact section components
│   │       ├── ContactInfo.jsx    # Campus address, phone, email & timings
│   │       └── EnquiryForm.jsx    # Controlled interactive form with success state
│   ├── data/
│   │   └── siteData.js            # Centralized content store (courses, notices, info)
│   ├── hooks/
│   │   └── usePhysicsCursor.js    # Custom React hook for lerp cursor physics & trail
│   ├── pages/
│   │   ├── HomePage.jsx           # Route: /
│   │   ├── AboutPage.jsx          # Route: /about
│   │   ├── CoursesPage.jsx        # Route: /courses
│   │   └── ContactPage.jsx        # Route: /contact
│   ├── styles/
│   │   ├── variables.css          # Design tokens & color variables
│   │   ├── layout.css             # Layout, cards, tables, forms, responsive rules
│   │   └── cursor.css             # Physics cursor styles & keyframe animations
│   ├── App.jsx                    # Root app layout & React Router routing
│   ├── main.jsx                   # React root mount with BrowserRouter
│   └── index.css                  # Master CSS importing style modules
├── index.html                     # HTML shell with Google Fonts & metadata
├── package.json                   # Project scripts and dependencies
└── vite.config.js                 # Vite configuration
```

---

## 🚀 Getting Started

To run the development server locally:

```bash
cd react-app
npm install
npm run dev
```

The application will be live at `http://localhost:5173/`.

### Building for Production

```bash
npm run build
```

This compiles optimized client bundles into `react-app/dist/`.

---

## ✨ Key Features & Improvements

1. **Component-Based Architecture**: Eliminates redundant HTML markup duplicated across multiple pages into reusable, modular components.
2. **Centralized Data Layer (`siteData.js`)**: Courses, announcements, and campus info are decoupled from presentation, making content updates trivial.
3. **SPA Routing (`react-router-dom`)**: Seamless client-side navigation between Home, About Us, Courses, and Contact Us without full-page reloads.
4. **Interactive Controlled Form**: The admission enquiry form handles user input in state, offers a clear button, and shows a submission confirmation alert.
5. **Physics Cursor Hook (`usePhysicsCursor.js`)**: Encapsulates the liquid physics cursor, magnetic button attraction, and stardust particle trails inside a clean React lifecycle hook with proper cleanup.

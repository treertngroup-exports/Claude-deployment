import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Certificates from "./components/Certificates";
import Quality from "./components/Quality";
import WhyChoose from "./components/WhyChoose";
import Founders from "./components/Founders";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import GalleryPage from "./pages/GalleryPage";
import AboutUs from "./pages/AboutUs";


import ExportScrollImage from "./components/ExportScrollImage";

// Home Page Layout
function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Gallery />
      <Certificates />
      <Quality />
      <WhyChoose />
      <Founders />
      <Contact />
    </div>
  );
}

// Wrapper to control route-based effects
function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      {/* ✅ Only show scroll animation on HOME PAGE */}
      {isHome && <ExportScrollImage />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about-us" element={<AboutUs />} />

        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;

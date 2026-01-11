import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import ExportJourney from "./components/ExportJourney";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Certificates from './components/Certificates';
import Quality from './components/Quality';
import WhyChoose from './components/WhyChoose';
import Founders from './components/Founders';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import GalleryPage from './pages/GalleryPage';

// Home Page Composition
function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <ExportJourney />
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

// Scroll to top on route change (important for /gallery)
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col relative">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

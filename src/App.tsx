import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import GalleryPage from "./pages/GalleryPage";
import AboutUs from "./pages/AboutUs";
import ExportStory from "./components/ExportStory";
import Contact from "./components/Contact";

/* =========================
   Home Page
========================= */
function Home() {
  return (
    <div className="min-h-screen">
      <ExportStory />
      <Contact />
    </div>
  );
}

/* =========================
   App Layout
========================= */
function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

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

/* =========================
   Root App
========================= */
export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

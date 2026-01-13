import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Hero from "./components/ExportStory";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
// import Gallery from "./components/Gallery";
import Certificates from "./components/Certificates";
import Quality from "./components/Quality";
import WhyChoose from "./components/WhyChoose";
import Founders from "./components/Founders";
import Contact from "./components/Contact";

import GalleryPage from "./pages/GalleryPage";
import AboutUs from "./pages/AboutUs";

/* =========================
   Home Page
========================= */
function Home() {
  return (
    <div className="min-h-screen">
       {/*<Hero />
      <Stats />
      <Services />
       <Gallery /> 
      <Certificates />
      <Quality />
      <WhyChoose />
      <Founders />
      <Contact />*/}
      <ExportStory />
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

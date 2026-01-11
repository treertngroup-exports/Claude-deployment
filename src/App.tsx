import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import ExportJourney from "./components/ExportJourney"; // 👈 NEW

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

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        {/* Floating Cinematic Export Journey */}
        <ExportJourney />

        {/* Navbar always on top */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow relative z-0">
          <div className="max-w-7xl mx-auto flex gap-12 px-4">
            
            {/* Main content column */}
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<GalleryPage />} />
              </Routes>
            </div>
        
            {/* Right visual spacer for floating cards */}
            <div className="hidden lg:block w-[420px]" />
          </div>
        </main>


        {/* Footer & Floating WhatsApp */}
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

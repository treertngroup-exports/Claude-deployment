import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import AboutUs from "./pages/AboutUs";
import Credibility from "./pages/Credibility";
import ContactPage from "./pages/ContactPage"; // ✅ ADD THIS

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/credibility" element={<Credibility />} />
          <Route path="/contact" element={<ContactPage />} /> {/* ✅ ADD */}
        </Routes>
      </Layout>
    </Router>
  );
}

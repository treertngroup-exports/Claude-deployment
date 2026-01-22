import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import AboutUs from "./pages/AboutUs";
import Credibility from "./pages/Credibility";


export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/credibility" element={<Credibility />} />
        </Routes>
      </Layout>
    </Router>
  );
}

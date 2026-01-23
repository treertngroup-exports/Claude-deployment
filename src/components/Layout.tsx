import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Only add top padding for non-home pages
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />

      <main className={`${isHome ? "" : "pt-32"} min-h-screen`}>
        {children}
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

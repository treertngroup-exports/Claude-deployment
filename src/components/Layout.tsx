import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {/* Push content below fixed navbar */}
      <main className="pt-32 min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

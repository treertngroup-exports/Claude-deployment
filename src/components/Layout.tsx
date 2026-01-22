import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {/* This spacer pushes all content below the fixed navbar */}
      <main className="pt-32">{children}</main>
    </>
  );
}

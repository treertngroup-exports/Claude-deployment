import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2200); // slightly longer for visual impact

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="max-w-5xl w-full px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* =========================
            Left: Welcome & Brand
        ========================= */}
        <div className="text-center md:text-left">
          <img
            src="/logo.png"
            alt="TREERT"
            className="w-24 mb-6 mx-auto md:mx-0"
          />

          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-primary-700">TREERT</span>
          </h1>

          {/* Loader Bar */}
          <div className="w-56 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-primary-700 animate-loader-bar" />
          </div>
        </div>

        {/* =========================
            Right: Business Visuals
        ========================= */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {/* Agriculture */}
          <div className="rounded-2xl overflow-hidden shadow-soft">
            <img
              src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
              alt="Agriculture farming"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Export / Logistics */}
          <div className="rounded-2xl overflow-hidden shadow-soft">
            <img
              src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
              alt="Global logistics"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Packaging */}
          <div className="rounded-2xl overflow-hidden shadow-soft col-span-2">
            <img
              src="https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif"
              alt="Agricultural packaging"
              className="w-full h-40 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

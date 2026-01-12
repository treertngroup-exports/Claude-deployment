import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1800); // adjust timing if needed

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="TREERT"
          className="w-24 mx-auto mb-6 animate-pulse"
        />

        {/* Brand Name */}
        <h1 className="font-display text-2xl font-bold text-gray-900 tracking-wide">
          TREERT
        </h1>

        <p className="text-sm text-gray-500 mt-2 tracking-widest uppercase">
          Exports & Imports
        </p>

        {/* Loading Bar */}
        <div className="mt-8 w-48 h-1 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-primary-700 animate-loader-bar" />
        </div>
      </div>
    </div>
  );
}

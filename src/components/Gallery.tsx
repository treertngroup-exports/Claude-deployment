import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=80' },
  { id: 2, src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80' },
  { id: 3, src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80' },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white/70 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <img
              key={img.id}
              src={img.src}
              onClick={() => setSelected(i)}
              className="rounded-2xl cursor-pointer shadow-lg hover:scale-105 transition"
            />
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-white">
            <X />
          </button>
          <img src={galleryImages[selected].src} className="max-h-[80vh] rounded-xl" />
        </div>
      )}
    </section>
  );
}

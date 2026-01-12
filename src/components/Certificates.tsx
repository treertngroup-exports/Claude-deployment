import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Certificates = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: 'https://drive.google.com/thumbnail?id=1XCfemS3R0p4LC_YQ4dvldc5fHrXeHIU3&auto=compress&cs=tinysrgb&w=1200',
      thumb: 'https://drive.google.com/thumbnail?id=1XCfemS3R0p4LC_YQ4dvldc5fHrXeHIU3&auto=compress&cs=tinysrgb&w=600',
      title: 'Coconut Development Board State Centre Kolkata',
    },
    {
      id: 2,
      src: 'https://drive.google.com/thumbnail?id=1nzF3cJdx5uWVn_UDxfV-Hq0I_8UmmCgK&auto=compress&cs=tinysrgb&w=1200',
      thumb: 'https://drive.google.com/thumbnail?id=1nzF3cJdx5uWVn_UDxfV-Hq0I_8UmmCgK&auto=compress&cs=tinysrgb&w=600',
      title: 'Spices Board India',
    },
    {
      id: 3,
      src: 'https://drive.google.com/thumbnail?id=1Ig6V80TNYFUVghhOdi_Im_20U3LK-wUj&auto=compress&cs=tinysrgb&w=1200',
      thumb: 'https://drive.google.com/thumbnail?id=1Ig6V80TNYFUVghhOdi_Im_20U3LK-wUj&auto=compress&cs=tinysrgb&w=600',
      title: 'FSSAI',
    },
    {
      id: 4,
      src: 'https://drive.google.com/thumbnail?id=1Bic6LAdejJ2WP29T_-SsNntdKvN5uZZ7&auto=compress&cs=tinysrgb&w=1200',
      thumb: 'https://drive.google.com/thumbnail?id=1Bic6LAdejJ2WP29T_-SsNntdKvN5uZZ7&auto=compress&cs=tinysrgb&w=600',
      title: 'MSME',
    },
    {
      id: 5,
      src: 'https://drive.google.com/thumbnail?id=16tUIOxiwW6-GoSxBACyrS2IFbbvg_KVs&auto=compress&cs=tinysrgb&w=1200',
      thumb: 'https://drive.google.com/thumbnail?id=16tUIOxiwW6-GoSxBACyrS2IFbbvg_KVs&auto=compress&cs=tinysrgb&w=600',
      title: 'APEDA',
    },
  ];

  const handlePrevious = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1
    );
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImageIndex(null);
  };

  return (
    <section id="certificates" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            <span className="text-primary-700">Credibility</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We proudly hold registrations and authorizations from India's most recognized regulatory authorities,
            ensuring the highest standards of quality, compliance, and export excellence.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="p-6 flex items-center justify-center h-64">
                <img
                  src={image.thumb}
                  alt={image.title}
                  className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImageIndex(null)}
          onKeyDown={handleKeyDown}
          role="dialog"
          tabIndex={0}
        >
          {/* Close */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300"
            aria-label="Close"
          >
            <X size={26} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hidden md:flex"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hidden md:flex"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image */}
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <p className="mt-6 text-center text-gray-300 text-sm">
              {selectedImageIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;

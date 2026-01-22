import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GalleryPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: 'https://drive.google.com/thumbnail?id=1-1U12NbKwKEVL1HQ5ZUoLlanHzOJKV1N&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1-1U12NbKwKEVL1HQ5ZUoLlanHzOJKV1N&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 1',
      category: 'Fruits',
    },
    {
      id: 2,
      src: 'https://drive.google.com/thumbnail?id=10mZxmuPx2Q-0YVci3P9gnRD--HJypOu9&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=10mZxmuPx2Q-0YVci3P9gnRD--HJypOu9&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 2',
      category: 'Vegetables',
    },
    {
      id: 3,
      src: 'https://drive.google.com/thumbnail?id=13Xx7fIxviuk6qlvhnt_I4rKpsUT39BPe&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=13Xx7fIxviuk6qlvhnt_I4rKpsUT39BPe&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 3',
      category: 'Fruits',
    },
    {
      id: 4,
      src: 'https://drive.google.com/thumbnail?id=12CHCWZhjNYZE10vX3IhcCydSUcLG_J-7&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=12CHCWZhjNYZE10vX3IhcCydSUcLG_J-7&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 4',
      category: 'Vegetables',
    },
    {
      id: 5,
      src: 'https://drive.google.com/thumbnail?id=13g98iV9-8hE1Nfrk29HF1n_jO8MF38e3&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=13g98iV9-8hE1Nfrk29HF1n_jO8MF38e3&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 5',
      category: 'Fruits',
    },
    {
      id: 6,
      src: 'https://drive.google.com/thumbnail?id=13go-MAyft1VbP375LPZDQRG-Qp35hngl&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=13go-MAyft1VbP375LPZDQRG-Qp35hngl&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 6',
      category: 'Vegetables',
    },
    {
      id: 7,
      src: 'https://drive.google.com/thumbnail?id=14kSTxfgOuFNep6ty2t-YP7MloGI6j1ph&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=14kSTxfgOuFNep6ty2t-YP7MloGI6j1ph&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 7',
      category: 'Fruits',
    },
    {
      id: 8,
      src: 'https://drive.google.com/thumbnail?id=17jE7RNBboZquqlLE_Sh1093slcB4GvAt&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=17jE7RNBboZquqlLE_Sh1093slcB4GvAt&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 8',
      category: 'Vegetables',
    },
    {
      id: 9,
      src: 'https://drive.google.com/thumbnail?id=17L21paAhUIlb7KhQnabctI4D5jjDpV3s&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=17L21paAhUIlb7KhQnabctI4D5jjDpV3s&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 9',
      category: 'Fruits',
    },
    {
      id: 10,
      src: 'https://drive.google.com/thumbnail?id=17tToEa8kps_P4TTqJUa_u0GL6fJLrfj1&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=17tToEa8kps_P4TTqJUa_u0GL6fJLrfj1&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 10',
      category: 'Vegetables',
    },
    {
      id: 11,
      src: 'https://drive.google.com/thumbnail?id=18GIG7ny5nGs3riYXGH_gOonX8mYz8oV4&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=18GIG7ny5nGs3riYXGH_gOonX8mYz8oV4&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 11',
      category: 'Vegetables',
    },
    {
      id: 12,
      src: 'https://drive.google.com/thumbnail?id=18HulIQMIDvbtIaozEO5B7uXS4uqqDUlH&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=18HulIQMIDvbtIaozEO5B7uXS4uqqDUlH&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 12',
      category: 'Fruits',
    },
    {
      id: 13,
      src: 'https://drive.google.com/thumbnail?id=19zlHF2X1TGOILfDXbgXDSo5-04kdIPsO&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=19zlHF2X1TGOILfDXbgXDSo5-04kdIPsO&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 13',
      category: 'Vegetables',
    },
    {
      id: 14,
      src: 'https://drive.google.com/thumbnail?id=1BP5SkoOFJWOJ2kA1yJr--ZhxxgJnCdLt&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1BP5SkoOFJWOJ2kA1yJr--ZhxxgJnCdLt&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 14',
      category: 'Fruits',
    },
    {
      id: 15,
      src: 'https://drive.google.com/thumbnail?id=1Bw7YFr3r36ABSoNUY42kxUafOavj3WXn&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1Bw7YFr3r36ABSoNUY42kxUafOavj3WXn&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 15',
      category: 'Vegetables',
    },
    {
      id: 16,
      src: 'https://drive.google.com/thumbnail?id=1HSpbtr-2r4aTDUk3e3nnKnmhqerhQ_r3&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1HSpbtr-2r4aTDUk3e3nnKnmhqerhQ_r3&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 16',
      category: 'Fruits',
    },
    {
      id: 17,
      src: 'https://drive.google.com/thumbnail?id=1HlLsCBNlQihcd6twC8JkLRfDGyiFaArI&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1HlLsCBNlQihcd6twC8JkLRfDGyiFaArI&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 17',
      category: 'Vegetables',
    },
    {
      id: 18,
      src: 'https://drive.google.com/thumbnail?id=1Iy-vfmVld8pEOmGYsQp79NVTOMCgnhPC&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1Iy-vfmVld8pEOmGYsQp79NVTOMCgnhPC&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 18',
      category: 'Fruits',
    },
    {
      id: 19,
      src: 'https://drive.google.com/thumbnail?id=1KpqLnR3gXr3VGx5x563UM3AzkEAT1BHX&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1KpqLnR3gXr3VGx5x563UM3AzkEAT1BHX&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 19',
      category: 'Vegetables',
    },
    {
      id: 20,
      src: 'https://drive.google.com/thumbnail?id=1LuXBc9-JxkB7Pk2TI7WyHPfwjql0FWXr&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1LuXBc9-JxkB7Pk2TI7WyHPfwjql0FWXr&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 20',
      category: 'Fruits',
    },
    {
      id: 21,
      src: 'https://drive.google.com/thumbnail?id=1NQNnKKn9m1u7pXHz1QhhnA7hu5AXe9lH&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1NQNnKKn9m1u7pXHz1QhhnA7hu5AXe9lH&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 21',
      category: 'Vegetables',
    },
    {
      id: 22,
      src: 'https://drive.google.com/thumbnail?id=1NUhoUAL7EoEBpIHuZhA5A9trEnjoHNSr&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1NUhoUAL7EoEBpIHuZhA5A9trEnjoHNSr&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 22',
      category: 'Fruits',
    },
    {
      id: 23,
      src: 'https://drive.google.com/thumbnail?id=1QApX1DbnUGNfuzKaig7eueVq2XFpXKya&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1QApX1DbnUGNfuzKaig7eueVq2XFpXKya&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 23',
      category: 'Vegetables',
    },
    {
      id: 24,
      src: 'https://drive.google.com/thumbnail?id=1SiOVMnHr3qFS2z4Cun2ufojqRpW0Ri4q&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1SiOVMnHr3qFS2z4Cun2ufojqRpW0Ri4q&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 24',
      category: 'Fruits',
    },
    {
      id: 25,
      src: 'https://drive.google.com/thumbnail?id=1Thl3M4TiVm0JeDSkaX1xIQr3_WBwRw4Q&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1Thl3M4TiVm0JeDSkaX1xIQr3_WBwRw4Q&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 25',
      category: 'Vegetables',
    },
    {
      id: 26,
      src: 'https://drive.google.com/thumbnail?id=1V47Bcq-lkeKLsYsG80phb0M3Dbe3x3Cz&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1V47Bcq-lkeKLsYsG80phb0M3Dbe3x3Cz&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 26',
      category: 'Fruits',
    },
    {
      id: 27,
      src: 'https://drive.google.com/thumbnail?id=1WQSRj-Wt1VARzBqHhkD4_sbybN3phEi8&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1WQSRj-Wt1VARzBqHhkD4_sbybN3phEi8&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 27',
      category: 'Vegetables',
    },
    {
      id: 28,
      src: 'https://drive.google.com/thumbnail?id=1Wfrj3kFA461pPEnJBGgQO7LfksjiRE58&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1Wfrj3kFA461pPEnJBGgQO7LfksjiRE58&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 28',
      category: 'Fruits',
    },
    {
      id: 29,
      src: 'https://drive.google.com/thumbnail?id=1YRdWcH5orD6bgIoT0JYq0RKI9yJbiaP3&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1YRdWcH5orD6bgIoT0JYq0RKI9yJbiaP3&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 29',
      category: 'Vegetables',
    },
    {
      id: 30,
      src: 'https://drive.google.com/thumbnail?id=1YT9K106dyYamg0PyMjrR6rTesagj9L5N&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1YT9K106dyYamg0PyMjrR6rTesagj9L5N&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 30',
      category: 'Vegetables',
    },
    {
      id: 31,
      src: 'https://drive.google.com/thumbnail?id=1YoH6Z0KNEuvatVtXLnfTIN7c8AQVSyO-&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1YoH6Z0KNEuvatVtXLnfTIN7c8AQVSyO-&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 31',
      category: 'Fruits',
    },
    {
      id: 32,
      src: 'https://drive.google.com/thumbnail?id=1ed86n_2f0UzVuLQeG7h7T1aFtUKgtX5h&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1ed86n_2f0UzVuLQeG7h7T1aFtUKgtX5h&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 32',
      category: 'Vegetables',
    },
    {
      id: 33,
      src: 'https://drive.google.com/thumbnail?id=1gTTVAOUNWBtj8HWfBesGmfqDGlpHwzQX&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1gTTVAOUNWBtj8HWfBesGmfqDGlpHwzQX&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 33',
      category: 'Fruits',
    },
    {
      id: 34,
      src: 'https://drive.google.com/thumbnail?id=1mtcsJkOGbxtHsoGJVhQ_2MNVV_RpSF9g&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1mtcsJkOGbxtHsoGJVhQ_2MNVV_RpSF9g&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 34',
      category: 'Vegetables',
    },
    {
      id: 35,
      src: 'https://drive.google.com/thumbnail?id=1nFa4f9dAdhgx8KpRukm1lkQv0n4yzOm9&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1nFa4f9dAdhgx8KpRukm1lkQv0n4yzOm9&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 35',
      category: 'Fruits',
    },
    {
      id: 36,
      src: 'https://drive.google.com/thumbnail?id=1nROUbKfL__NqxDLD424fAac9nLfkAL0U&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1nROUbKfL__NqxDLD424fAac9nLfkAL0U&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 36',
      category: 'Vegetables',
    },
    {
      id: 37,
      src: 'https://drive.google.com/thumbnail?id=1oPFH18MTQny299TsQSAJi7hfyXJoK-IK&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1oPFH18MTQny299TsQSAJi7hfyXJoK-IK&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 37',
      category: 'Fruits',
    },
    {
      id: 38,
      src: 'https://drive.google.com/thumbnail?id=1oXnptEJwnu4LyMwkxQ1bS7EP1HevevTH&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1oXnptEJwnu4LyMwkxQ1bS7EP1HevevTH&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 38',
      category: 'Vegetables',
    },
    {
      id: 39,
      src: 'https://drive.google.com/thumbnail?id=1psEXW1PznIzAczfCEQg3_ZYKp4lCG5g3&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1psEXW1PznIzAczfCEQg3_ZYKp4lCG5g3&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 39',
      category: 'Fruits',
    },
    {
      id: 40,
      src: 'https://drive.google.com/thumbnail?id=1q4akjR-mebmntDppGHfG3BR1kAkVAvAE&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1q4akjR-mebmntDppGHfG3BR1kAkVAvAE&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 40',
      category: 'Vegetables',
    },
    {
      id: 41,
      src: 'https://drive.google.com/thumbnail?id=1qa277TB7PeQekMAdj6iSo47OHtagLDWi&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1qa277TB7PeQekMAdj6iSo47OHtagLDWi&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 41',
      category: 'Fruits',
    },
    {
      id: 42,
      src: 'https://drive.google.com/thumbnail?id=1s56I09E7td4aywy86JsNEG_StjY8Dcw3&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1s56I09E7td4aywy86JsNEG_StjY8Dcw3&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 42',
      category: 'Vegetables',
    },
    {
      id: 43,
      src: 'https://drive.google.com/thumbnail?id=1sl9y2aM9NqPTM-NJUwfONjvGkk_DAUua&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1sl9y2aM9NqPTM-NJUwfONjvGkk_DAUua&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 43',
      category: 'Fruits',
    },
    {
      id: 44,
      src: 'https://drive.google.com/thumbnail?id=1xydCVVUK-t9ApJ9HhQzh7Y5zIqXtdm0D&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1xydCVVUK-t9ApJ9HhQzh7Y5zIqXtdm0D&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 44',
      category: 'Vegetables',
    },
    {
      id: 45,
      src: 'https://drive.google.com/thumbnail?id=1zCIqXqk9EOC9fUhn69PJB4u1Z4GTIDkH&auto=compress&cs=tinysrgb&w=800',
      thumb: 'https://drive.google.com/thumbnail?id=1zCIqXqk9EOC9fUhn69PJB4u1Z4GTIDkH&auto=compress&cs=tinysrgb&w=400',
      title: 'Image 45',
      category: 'Fruits',
    },
  ];

  const handlePrevious = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1);
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white page-offset pb-24">

      {/* Header */}
      <div className="container mx-auto px-6 pt-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Our Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A visual journey through our farms, produce, packing, and export excellence.
        </p>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {images.map((image, index) => (
            <div
              key={image.id}
              className="perspective-1000"
              onClick={() => setSelectedImageIndex(index)}
            >
              <div
                className="gallery-card preserve-3d group relative rounded-2xl overflow-hidden bg-white cursor-pointer"
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const midX = rect.width / 2;
                  const midY = rect.height / 2;
                  const rotateY = (x - midX) / 20;
                  const rotateX = -(y - midY) / 20;
                  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotateX(0) rotateY(0) translateY(0)";
                }}
              >
                {/* Image */}
                <img
                  src={image.thumb}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                  <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20">
                    <h3 className="text-white font-semibold text-lg">
                      {image.title}
                    </h3>
                    <p className="text-green-300 text-sm font-medium">
                      {image.category}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-zoom"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full hidden md:flex"
            onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next */}
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full hidden md:flex"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
          >
            <ChevronRight size={28} />
          </button>

          {/* Image */}
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].title}
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-2xl font-semibold">
                {images[selectedImageIndex].title}
              </h3>
              <p className="text-gray-400">
                {images[selectedImageIndex].category}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                {selectedImageIndex + 1} / {images.length}
              </p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default GalleryPage;

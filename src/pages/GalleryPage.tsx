import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImageIndex(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our complete collection of premium produce and farming operations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-64"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image.thumb}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-sm md:text-base">{image.title}</h3>
                  <span className="text-green-300 text-xs font-medium">{image.category}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImageIndex(null)}
          onKeyDown={handleKeyDown}
          role="dialog"
          tabIndex={0}
        >
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hidden sm:flex"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hidden sm:flex"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].title}
              className="w-full h-auto rounded-lg shadow-2xl animate-fade-in"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                {images[selectedImageIndex].title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-4">
                {images[selectedImageIndex].category}
              </p>
              <p className="text-gray-500 text-xs md:text-sm">
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

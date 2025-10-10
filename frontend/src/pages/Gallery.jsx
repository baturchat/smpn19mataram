import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      image: '/images/upacara-bendera.jpg',
      title: 'Upacara Bendera Senin',
      date: '15 Januari 2024',
    },
    {
      id: 2,
      image: '/images/literasi.jpg',
      title: 'Literasi Al-Quran',
      date: '10 Februari 2024',
    },
    {
      id: 3,
      image: '/images/futsal-smpn19.jpg',
      title: 'Lomba Osda Cup',
      date: '9 Oktober 2025',
    },
    {
      id: 4,
      image: '/images/vooting-day.jpg',
      title: 'Pemilihan Ketua Osis 2024/2025',
      date: '20 Maret 2024',
    },
    {
      id: 5,
      image: '/images/17-agustus.jpg',
      title: 'Peringatan Hari Kemerdekaan NKRI',
      date: '17 Agustus 2025',
    },
    {
      id: 6,
      image: '/images/foto-guru-mpls.jpg',
      title: 'Foto Bersama Guru Menjelang MPLS',
      date: '1 Mei 2025',
    },
    {
      id: 7,
      image: '/images/makan-mbg.jpg',
      title: 'Makanana Bergizi Gratis(MBG)',
      date: '6 Oktober 2024',
    },
    {
      id: 8,
      image: '/images/hut-kota-mataram.jpg',
      title: 'Festival Seni dan Budaya',
      date: '25 Mei 2024',
    },
    {
      id: 9,
      image: '/images/hut-smpn19-ke-20.jpg',
      title: 'HUT SMPN 19 Mataram KE 20',
      date: '6 Oktober 2025',
    },
    {
      id: 10,
      image: '/images/upacara-sekolah.jpg',
      title: 'Kegiatan Apel Senin',
      date: '15 Juni 2024',
    },
    {
      id: 11,
      image: '/images/makan-bersama-mpls.jpg',
      title: 'Kegiatan Makan Bersama MPLS',
      date: '1 Juli 2024',
    },
    {
      id: 12,
      image: '/images/bantuan-pgri.jpg',
      title: 'Bantuan PGRI',
      date: '2 Oktober 2025',
    },
  ];

  const openLightbox = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryItems[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryItems[newIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/banner-smpn19.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/90 to-[#1E40AF]/80"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Galeri Kegiatan</h1>
          <p className="text-lg mt-2 opacity-90">Dokumentasi kegiatan SMPN 19 Mataram</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => openLightbox(item, index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-black/80 mt-4 p-6 rounded-lg">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 text-sm">{selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
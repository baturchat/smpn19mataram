import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Computer, BookOpen, Heart, Award, Users, Building } from 'lucide-react';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const facilities = [
    {
      icon: Computer,
      title: 'Lab Komputer',
      description: 'Laboratorium komputer modern dengan 40 unit PC',
    },
    {
      icon: BookOpen,
      title: 'Perpustakaan',
      description: 'Koleksi lebih dari 5.000 buku dan e-library',
    },
    {
      icon: Heart,
      title: 'UKS',
      description: 'Unit Kesehatan Sekolah dengan tenaga medis profesional',
    },
    {
      icon: Award,
      title: 'Lapangan Olahraga',
      description: 'Lapangan basket, voli, dan futsal yang memadai',
    },
    {
      icon: Users,
      title: 'Aula',
      description: 'Ruang serbaguna berkapasitas 500 orang',
    },
    {
      icon: Building,
      title: 'Mushola',
      description: 'Tempat ibadah yang bersih dan nyaman',
    },
  ];

  const galleryImages = [
    { id: 1, title: 'Upacara Bendera', image: '/images/upacara-bendera.jpg' },
    { id: 2, title: 'Ekstrakurikuler Futsal', image: '/images/futsal-smp19.jpg' },
    { id: 3, title: 'Literasi Al-Quran', image: '/images/literasi.jpg' },
    { id: 4, title: 'Pemilihan Ketua Osis 2024/2025', image: '/images/vooting-day.jpg' },
  ];

  const stats = [
    { label: 'Siswa Aktif', value: '720+' },
    { label: 'Guru Berpengalaman', value: '45+' },
    { label: 'Ruang Kelas', value: '24' },
    { label: 'Tahun Berdiri', value: '1995' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/banner-smpn19.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/90 to-[#1E40AF]/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            SMP Negeri 19 Mataram
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Sekolah yang berprestasi, disiplin, dan inovatif di Nusa Tenggara Barat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/profil">
              <Button
                size="lg"
                className="bg-white text-[#1E40AF] hover:bg-gray-100 font-semibold px-8 py-6 text-base shadow-lg"
              >
                Lihat Profil Sekolah
              </Button>
            </Link>
            <Link to="/kontak">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E40AF] font-semibold px-8 py-6 text-base shadow-lg"
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/kepala-sekolah.jpg"
                alt="Kepala Sekolah"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] mb-4">
                Sambutan Kepala Sekolah
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Assalamu'alaikum Warahmatullahi Wabarakatuh,</p>
                <p>
                  Selamat datang di website resmi SMPN 19 Mataram. Sebagai institusi pendidikan,
                  kami berkomitmen untuk membentuk generasi muda yang cerdas, berkarakter, dan siap
                  menghadapi tantangan masa depan.
                </p>
                <p>
                  Dengan didukung oleh tenaga pendidik yang profesional dan fasilitas yang memadai,
                  kami terus berinovasi dalam memberikan pendidikan berkualitas untuk seluruh
                  siswa.
                </p>
                <p className="font-semibold text-[#1E40AF]">
                  Drs. Nasruddin, S.Pd.
                  <br />
                  <span className="text-sm text-gray-600">Kepala SMPN 19 Mataram</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] mb-4">
              Fasilitas Sekolah Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fasilitas lengkap dan modern untuk mendukung kegiatan belajar mengajar yang optimal
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-[#1E40AF] transition-colors duration-300">
                        <Icon className="h-6 w-6 text-[#1E40AF] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">
                          {facility.title}
                        </h3>
                        <p className="text-sm text-gray-600">{facility.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] mb-4">
              Galeri Kegiatan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dokumentasi berbagai kegiatan dan prestasi siswa SMPN 19 Mataram
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white font-semibold">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/galeri">
              <Button
                size="lg"
                className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-8"
              >
                Lihat Semua Galeri
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1E40AF] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#1E40AF] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mari bersama membangun pendidikan yang berkualitas
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Bergabunglah dengan keluarga besar SMPN 19 Mataram dan raih prestasi gemilang
          </p>
          <Link to="/prestasi">
            <Button
              size="lg"
              className="bg-[#FBBF24] text-gray-900 hover:bg-[#F59E0B] font-semibold px-8 py-6 text-base shadow-xl"
            >
              Lihat Prestasi Kami
            </Button>
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

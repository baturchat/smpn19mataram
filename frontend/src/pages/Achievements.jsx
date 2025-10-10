import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Trophy, Medal, Award, Calendar } from 'lucide-react';

const Achievements = () => {
  const [selectedYear, setSelectedYear] = useState('all');

  const achievements = [
    {
      id: 1,
      year: '2024',
      event: 'Olimpiade Sains Nasional (OSN) Matematika',
      position: 'Juara 1 Tingkat Provinsi',
      student: 'Ahmad Rizki Ramadhan',
      coach: 'Dra. Siti Aminah, M.Pd.',
      location: 'Mataram, NTB',
      date: 'Maret 2024',
    },
    {
      id: 2,
      year: '2024',
      event: 'Kompetisi Robotika Nasional',
      position: 'Juara 2 Tingkat Nasional',
      student: 'Putri Ayu Lestari & Tim',
      coach: 'Ahmad Fauzi, S.Pd., M.Pd.',
      location: 'Jakarta',
      date: 'Mei 2024',
    },
    {
      id: 3,
      year: '2024',
      event: 'Lomba Pidato Bahasa Inggris',
      position: 'Juara 1 Tingkat Kota',
      student: 'Siti Nurhaliza',
      coach: 'Linda Kartika, S.Pd.',
      location: 'Mataram, NTB',
      date: 'April 2024',
    },
    {
      id: 4,
      year: '2023',
      event: 'Olimpiade Sains Nasional (OSN) Fisika',
      position: 'Juara 3 Tingkat Provinsi',
      student: 'Muhammad Alfarizi',
      coach: 'Hendra Gunawan, S.Pd.',
      location: 'Mataram, NTB',
      date: 'November 2023',
    },
    {
      id: 5,
      year: '2023',
      event: 'Festival Lomba Seni Siswa Nasional (FLS2N) Tari Tradisional',
      position: 'Juara 2 Tingkat Provinsi',
      student: 'Kelompok Tari Nusantara',
      coach: 'Ni Wayan Suartini, S.Sn.',
      location: 'Mataram, NTB',
      date: 'September 2023',
    },
    {
      id: 6,
      year: '2023',
      event: 'Kompetisi Olahraga Pelajar Nasional (KOPNAS) Basket',
      position: 'Juara 1 Tingkat Kota',
      student: 'Tim Basket Putra',
      coach: 'Bambang Suryadi, S.Pd.',
      location: 'Mataram, NTB',
      date: 'Agustus 2023',
    },
  ];

  const years = ['all', '2024', '2023', '2022'];

  const filteredAchievements = useMemo(() => {
    if (selectedYear === 'all') return achievements;
    return achievements.filter((achievement) => achievement.year === selectedYear);
  }, [selectedYear, achievements]);

  const getPositionIcon = (position) => {
    if (position.includes('Juara 1')) return <Trophy className="h-6 w-6 text-[#FBBF24]" />;
    if (position.includes('Juara 2')) return <Medal className="h-6 w-6 text-gray-400" />;
    if (position.includes('Juara 3')) return <Award className="h-6 w-6 text-[#CD7F32]" />;
    return <Award className="h-6 w-6 text-[#1E40AF]" />;
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
          <h1 className="text-4xl md:text-5xl font-bold">Prestasi Siswa</h1>
          <p className="text-lg mt-2 opacity-90">Kebanggaan SMPN 19 Mataram</p>
        </div>
      </section>

      {/* Filter & Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Filter */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter Tahun</label>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Pilih tahun" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year === 'all' ? 'Semua Tahun' : year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Achievements List */}
          <div className="space-y-6">
            {filteredAchievements.map((achievement, index) => (
              <Card
                key={achievement.id}
                className="border-l-4 border-l-[#1E40AF] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="bg-blue-50 p-4 rounded-full">
                        {getPositionIcon(achievement.position)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{achievement.event}</h3>
                        <span className="bg-[#1E40AF] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {achievement.year}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-[#FBBF24]" />
                          <span className="font-semibold text-[#1E40AF]">
                            {achievement.position}
                          </span>
                        </div>

                        <div className="text-gray-700">
                          <span className="font-medium">Siswa:</span> {achievement.student}
                        </div>

                        <div className="text-gray-600 text-sm">
                          <span className="font-medium">Pembina:</span> {achievement.coach}
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {achievement.date}
                          </div>
                          <div>📍 {achievement.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAchievements.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada prestasi untuk tahun yang dipilih.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Achievements;
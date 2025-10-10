import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle2, User, Users, BookOpen } from 'lucide-react';

const Profile = () => {
  const visionMission = {
    vision:
      'Menjadi sekolah unggul yang menghasilkan lulusan berakhlak mulia, berprestasi, dan berwawasan global.',
    missions: [
      'Menyelenggarakan pendidikan yang berkualitas dan berlandaskan nilai-nilai keagamaan',
      'Mengembangkan potensi siswa melalui kegiatan akademik dan non-akademik',
      'Menciptakan lingkungan belajar yang kondusif dan inovatif',
      'Membangun kerjasama dengan berbagai pihak untuk meningkatkan mutu pendidikan',
      'Mengembangkan karakter siswa yang mandiri, kreatif, dan bertanggung jawab',
    ],
  };

  const organizationStructure = [
    { position: 'Kepala Sekolah', name: 'Drs. H. Nasruddin, S.Pd.' },
    { position: 'Wakil Kepala Kurikulum', name: 'Dra. Hj. Huriah, S.Pd.' },
    { position: 'Wakil Kepala Kesiswaan', name: 'H.M. Isnaini, S.Ag.' },
    { position: 'Wakil Kepala Sarana', name: 'Windri Estuningrum, S.Pd.' },
  ];

  const schoolData = [
    { label: 'NPSN', value: '50219509' },
    { label: 'Akreditasi', value: 'A (Unggul)' },
    { label: 'Luas Tanah', value: '5.280 m²' },
    { label: 'Status', value: 'Negeri' },
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold">Profil Sekolah</h1>
          <p className="text-lg mt-2 opacity-90">Mengenal lebih dekat SMPN 19 Mataram</p>
        </div>
      </section>

      {/* School History */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sejarah Singkat</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              SMP Negeri 19 Mataram didirikan pada tahun 1995 sebagai bagian dari upaya pemerintah
              untuk meningkatkan akses pendidikan menengah pertama di wilayah Nusa Tenggara Barat.
              Berlokasi strategis di Dasan Cermen, sekolah ini telah menjadi salah satu institusi
              pendidikan terkemuka di daerah.
            </p>
            <p>
              Berawal dari 6 rombongan belajar dengan 240 siswa, kini SMPN 19 Mataram telah
              berkembang menjadi sekolah dengan 24 rombongan belajar dan lebih dari 720 siswa.
              Dengan didukung oleh 45 tenaga pendidik profesional dan 15 tenaga kependidikan, kami
              terus berkomitmen memberikan pendidikan berkualitas.
            </p>
            <p>
              Sepanjang perjalanannya, SMPN 19 Mataram telah menorehkan berbagai prestasi baik di
              tingkat kota, provinsi, maupun nasional dalam bidang akademik, olahraga, seni, dan
              berbagai kompetisi lainnya.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Menjadi sekolah unggul yang menghasilkan lulusan berakhlak mulia, berprestasi,
                  dan berwawasan global.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Menyelenggarakan pendidikan berkualitas berlandaskan nilai-nilai keagamaan',
                    'Mengembangkan potensi siswa melalui kegiatan akademik dan non-akademik',
                    'Menciptakan lingkungan belajar yang kondusif dan inovatif',
                    'Membangun kerjasama untuk meningkatkan mutu pendidikan',
                    'Mengembangkan karakter siswa yang mandiri, kreatif, dan bertanggung jawab',
                  ].map((mission, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{mission}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Struktur Organisasi</h2>
            <p className="text-gray-600">Pimpinan dan wakil kepala sekolah</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { position: 'Kepala Sekolah', name: 'Drs. Nasruddin, M.Pd.' },
              { position: 'Wakil Kepala Kurikulum', name: 'Dra. Hj. Huriah, S.Pd..' },
              { position: 'Wakil Kepala Kesiswaan', name: 'H.M Isnaini, S.Ag.' },
              { position: 'Wakil Kepala Sarana', name: 'Windri Estuningrum, S.Pd.' },
            ].map((person, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-blue-600 shadow-md hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">{person.position}</h4>
                      <p className="text-blue-600 font-medium">{person.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School Data */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Sekolah</h2>
            <p className="text-gray-600">Informasi data sekolah</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'NPSN', value: '50219509', icon: Building2 },
              { label: 'Akreditasi', value: 'A (Unggul)', icon: Award },
              { label: 'Luas Tanah', value: '5.280 m²', icon: Building2 },
              { label: 'Status', value: 'Negeri', icon: Building2 },
            ].map((data, index) => {
              const Icon = data.icon;
              return (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="text-gray-600 font-medium">{data.label}</span>
                      </div>
                      <span className="text-blue-600 font-bold text-lg">{data.value}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;

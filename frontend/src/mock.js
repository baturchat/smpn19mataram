// Mock data for SMPN 19 Mataram website
// This file will be replaced with actual backend API calls

export const mockSchoolInfo = {
  name: 'SMPN 19 Mataram',
  address: 'Jl. Pendidikan No. 19, Mataram, Nusa Tenggara Barat 83127',
  phone: '(0370) 643700',
  email: 'SMPN19MATARAM@yahoo.co.id',
  established: '2004',
  accreditation: 'A (Unggul)',
  npsn: '50219509',
};

export const mockPrincipal = {
  name: 'Drs. H. Nasruddin M.Pd.',
  position: 'Kepala SMPN 19 Mataram',
  image: '/images/kepala-sekolah.jpg',
  message:
    'Selamat datang di website resmi SMPN 19 Mataram. Sebagai institusi pendidikan, kami berkomitmen untuk membentuk generasi muda yang cerdas, berkarakter, dan siap menghadapi tantangan masa depan.',
};

export const mockFacilities = [
  { id: 1, name: 'Lab Komputer', description: 'Laboratorium komputer modern dengan 40 unit PC' },
  { id: 2, name: 'Perpustakaan', description: 'Koleksi lebih dari 5.000 buku dan e-library' },
  { id: 3, name: 'UKS', description: 'Unit Kesehatan Sekolah dengan tenaga medis profesional' },
  { id: 4, name: 'Lapangan Olahraga', description: 'Lapangan basket, voli, dan futsal yang memadai' },
  { id: 5, name: 'Aula', description: 'Ruang serbaguna berkapasitas 500 orang' },
  { id: 6, name: 'Mushola', description: 'Tempat ibadah yang bersih dan nyaman' },
];

export const mockAchievements = [
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
];

export const mockGallery = [
  { id: 1, image: '/images/upacara-bendera.jpg', title: 'Upacara Bendera', date: '15 Januari 2024' },
  { id: 2, image: '/images/literasi.jpg', title: 'Kegiatan Literasi Al-Quran', date: '10 Februari 2024' },
  { id: 3, image: '/images/futsal-smpn19.jpg', title: 'Lomba Osda Cup', date: '5 Maret 2024' },
  { id: 4, image: '/images/vooting-day.jpg', title: 'Pemilihan Ketua Osis 2024/2025', date: '20 Maret 2024' },
];

export const mockStats = [
  { label: 'Siswa Aktif', value: '720+' },
  { label: 'Guru Berpengalaman', value: '45+' },
  { label: 'Ruang Kelas', value: '24' },
  { label: 'Tahun Berdiri', value: '2004' },
];

export const mockContactSubmit = async (formData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Pesan berhasil dikirim!' });
    }, 1000);
  });
};

export const mockAdminLogin = async (username, password) => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        resolve({ success: true, token: 'mock-token-123', user: { username: 'admin' } });
      } else {
        reject({ success: false, message: 'Username atau password salah!' });
      }
    }, 1000);
  });
};
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">SMPN 19 Mataram</h3>
                <p className="text-sm text-gray-400">Sekolah Unggul Berkarakter</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Membangun generasi unggul dengan pendidikan berkualitas dan karakter yang kuat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors duration-200">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/profil"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Profil Sekolah
                </Link>
              </li>
              <li>
                <Link
                  to="/prestasi"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Prestasi
                </Link>
              </li>
              <li>
                <Link
                  to="/galeri"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Galeri
                </Link>
              </li>
              <li>
                <Link
                  to="/kontak"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p>Jl. Dr. Soedjono, Dasan Cermen, Sandubaya, Mataram, NTB</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <p>(0370) 123456</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <p>smpn19mataram@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>Dibuat oleh Siswa SMPN 19 Mataram. Developer: Ibra Decode.</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} SMPN 19 Mataram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

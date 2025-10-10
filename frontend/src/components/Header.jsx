import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil', path: '/profil' },
    { name: 'Prestasi', path: '/prestasi' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Kontak', path: '/kontak' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3 md:gap-4">
            <img
              src="/images/smpn19-logo.jpg"
              alt="Logo SMPN 19"
              className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-lg"
            />
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold text-[#1E40AF] leading-tight">
                SMPN 19 Mataram
              </span>
              <span className="text-xs text-gray-600 hidden sm:block">Sekolah Berprestasi</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-[#1E40AF] bg-blue-50'
                    : 'text-gray-700 hover:text-[#1E40AF] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* NTB Logo */}
          <div className="hidden md:block">
            <img
              src="/images/ntb-logo.png"
              alt="Logo NTB"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-[#1E40AF] bg-blue-50'
                    : 'text-gray-700 hover:text-[#1E40AF] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

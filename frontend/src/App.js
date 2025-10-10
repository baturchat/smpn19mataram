import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Achievements from './pages/Achievements';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Toaster position="top-right" richColors />
        <Routes>
          {/* Public Routes with Header & Footer */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profil" element={<Profile />} />
                  <Route path="/prestasi" element={<Achievements />} />
                  <Route path="/galeri" element={<Gallery />} />
                  <Route path="/kontak" element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
          {/* Admin Login without Header & Footer */}
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

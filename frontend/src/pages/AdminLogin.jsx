import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Lock, User, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Mock login - will be integrated with backend later
    setTimeout(() => {
      if (formData.username === 'admin' && formData.password === 'admin123') {
        toast.success('Login berhasil!');
        // In production, store auth token and redirect
        navigate('/admin/dashboard');
      } else {
        setError('Username atau password salah!');
        toast.error('Login gagal!');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <img
            src="/images/smpn19-logo.jpg"
            alt="Logo SMPN 19"
            className="h-20 w-20 mx-auto mb-4 rounded-full shadow-lg"
          />
          <h1 className="text-3xl font-bold text-[#1E40AF]">Admin Panel</h1>
          <p className="text-gray-600 mt-2">SMPN 19 Mataram</p>
        </div>

        {/* Login Card */}
        <Card className="border-none shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">
              Login Administrator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="username">Username</Label>
                <div className="relative mt-2">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Masukkan username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Masukkan password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-[#1E40AF] hover:bg-[#1E3A8A] text-white py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                disabled={isLoading}
              >
                {isLoading ? 'Memproses...' : 'Login'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Lupa password?{' '}
                <a href="/kontak" className="text-[#1E40AF] hover:underline font-semibold">
                  Hubungi Admin
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Dibuat oleh Siswa SMPN 19 Mataram
            <br />
            Developer: Ibra Decode
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
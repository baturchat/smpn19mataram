import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be integrated with backend later
    console.log('Form submitted:', formData);
    toast.success('Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Jl. Pendidikan No. 19, Mataram, Nusa Tenggara Barat 83127',
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '(0370) 643700',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'SMPN19MATARAM@yahoo.co.id',
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Jumat: 07.00 - 15.00 WITA',
    },
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
          <h1 className="text-4xl md:text-5xl font-bold">Hubungi Kami</h1>
          <p className="text-lg mt-2 opacity-90">Kami siap membantu Anda</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-[#1E40AF]" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-gray-600 text-sm">{info.content}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Form & Map Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#1E40AF] mb-6">Kirim Pesan</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Masukkan nama lengkap"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subjek</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Masukkan subjek pesan"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tulis pesan Anda di sini..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#1E40AF] hover:bg-[#1E3A8A] text-white py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                  >
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="h-full min-h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.2982784757487!2d116.11563431478365!3d-8.580486293892474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdbf1b4b4b4b4b%3A0x1234567890abcdef!2sMataram%2C%20West%20Nusa%20Tenggara!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi SMPN 19 Mataram"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Card className="border-none shadow-lg bg-blue-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#1E40AF] mb-3">
                  Informasi Tambahan
                </h3>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Untuk informasi lebih lanjut mengenai pendaftaran siswa baru, program
                  ekstrakurikuler, atau pertanyaan lainnya, silakan hubungi kami melalui formulir
                  di atas atau datang langsung ke sekolah pada jam operasional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
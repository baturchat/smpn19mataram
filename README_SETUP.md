# SMPN 19 Mataram Website - Setup Guide

## 🚀 Quick Start

Website ini menggunakan:
- **Frontend**: React
- **Backend**: FastAPI + Supabase (PostgreSQL)
- **Styling**: TailwindCSS + Shadcn UI

## 📋 Prerequisites

1. Supabase account dan project sudah dibuat
2. Frontend dan Backend sudah running (via supervisorctl)

## 🗄️ Database Setup (Supabase)

### Step 1: Buat Tables di Supabase

1. Buka Supabase Dashboard: https://app.supabase.com
2. Pilih project: `ollsnjnonesrotkftdow`
3. Klik **SQL Editor** di sidebar kiri
4. Copy dan paste SQL berikut, lalu klik **Run**:

```sql
-- Contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Achievements table
CREATE TABLE IF NOT EXISTS achievements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    year TEXT NOT NULL,
    event TEXT NOT NULL,
    position TEXT NOT NULL,
    student TEXT NOT NULL,
    coach TEXT NOT NULL,
    location TEXT NOT NULL,
    date TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Gallery table
CREATE TABLE IF NOT EXISTS gallery (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    image TEXT NOT NULL,
    title TEXT NOT NULL,
    date TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- School Info table
CREATE TABLE IF NOT EXISTS school_info (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    established TEXT NOT NULL,
    accreditation TEXT NOT NULL,
    npsn TEXT NOT NULL,
    stats JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE school_info ENABLE ROW LEVEL SECURITY;

-- Create policies (allow all for now)
CREATE POLICY "Allow all operations on contacts" ON contacts FOR ALL USING (true);
CREATE POLICY "Allow all operations on achievements" ON achievements FOR ALL USING (true);
CREATE POLICY "Allow all operations on gallery" ON gallery FOR ALL USING (true);
CREATE POLICY "Allow all operations on school_info" ON school_info FOR ALL USING (true);
```

### Step 2: Seed Initial Data

Setelah tables berhasil dibuat, jalankan:

```bash
cd /app/backend
python3 setup_supabase.py seed
```

## 🌐 API Endpoints

Backend API tersedia di: `http://localhost:8001/api`

### Available Endpoints:

- `GET /api/` - API info
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages
- `GET /api/achievements?year=2024` - Get achievements (with optional year filter)
- `POST /api/achievements` - Create new achievement
- `GET /api/gallery` - Get all gallery items
- `POST /api/gallery` - Create new gallery item
- `DELETE /api/gallery/{id}` - Delete gallery item
- `GET /api/school-info` - Get school information
- `PUT /api/school-info` - Update school information

## 📁 Project Structure

```
/app
├── frontend/
│   ├── public/
│   │   └── images/          # Logo dan banner sekolah
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          # Shadcn UI components
│   │   │   ├── Header.jsx   # Header dengan navigasi
│   │   │   └── Footer.jsx   # Footer dengan kontak
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── AdminLogin.jsx
│   │   └── App.js
│   └── package.json
│
└── backend/
    ├── routes/
    │   ├── contact.py
    │   ├── achievements.py
    │   ├── gallery.py
    │   └── school_info.py
    ├── supabase_client.py
    ├── server.py
    ├── setup_supabase.py
    └── .env                  # Supabase credentials
```

## 🎨 Design Features

- Hero section dengan background image dan overlay
- Responsive design untuk semua device
- Smooth animations dan hover effects
- Cards dengan shadow dan border radius
- Color scheme: Blue (#1E40AF) dan Yellow (#FBBF24)
- Sticky header dengan navigation
- Footer dengan credit developer

## 🔧 Development

### Start Services

Services sudah auto-start via supervisor:

```bash
# Check status
sudo supervisorctl status

# Restart if needed
sudo supervisorctl restart frontend
sudo supervisorctl restart backend
```

### View Logs

```bash
# Frontend logs
tail -f /var/log/supervisor/frontend.*.log

# Backend logs
tail -f /var/log/supervisor/backend.*.log
```

## 🎯 Next Steps

1. ✅ Setup Supabase tables (run SQL above)
2. ✅ Seed initial data
3. 🔄 Integrate frontend with backend API (optional - currently using mock data)
4. 🎨 Customize content sesuai kebutuhan sekolah
5. 📸 Upload foto-foto sekolah ke `/app/frontend/public/images/`

## 📝 Notes

- Frontend saat ini menggunakan mock data untuk demo
- Backend API sudah siap dan tested dengan Supabase
- Untuk production, tambahkan authentication dan authorization
- Credit footer: "Dibuat oleh Siswa SMPN 19 Mataram. Developer: Ibra Decode."

## 🆘 Troubleshooting

### Backend error "table does not exist"
→ Jalankan SQL schema di Supabase Dashboard SQL Editor

### Frontend tidak load images
→ Pastikan file images ada di `/app/frontend/public/images/`

### CORS error
→ Backend sudah configured untuk allow all origins

---

**Developer**: Ibra Decode  
**School**: SMPN 19 Mataram

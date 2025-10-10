"""
Script to setup Supabase tables for SMPN 19 Mataram website
Run this once to create all necessary tables
"""

from supabase_client import supabase
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def create_tables():
    """Create all necessary tables in Supabase"""
    
    # Note: Supabase doesn't support raw SQL execution through Python client easily
    # Tables should be created via Supabase Dashboard SQL Editor
    
    sql_schema = """
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

-- Create policies (allow all for now, can be restricted later)
CREATE POLICY "Allow all operations on contacts" ON contacts FOR ALL USING (true);
CREATE POLICY "Allow all operations on achievements" ON achievements FOR ALL USING (true);
CREATE POLICY "Allow all operations on gallery" ON gallery FOR ALL USING (true);
CREATE POLICY "Allow all operations on school_info" ON school_info FOR ALL USING (true);
    """
    
    print("=" * 80)
    print("SUPABASE TABLE SETUP - SQL SCHEMA")
    print("=" * 80)
    print("\nCopy and run this SQL in your Supabase Dashboard > SQL Editor:\n")
    print(sql_schema)
    print("\n" + "=" * 80)
    print("After running the SQL, run seed_supabase.py to insert sample data")
    print("=" * 80)


def seed_initial_data():
    """Insert initial sample data"""
    try:
        logger.info("Seeding initial data...")
        
        # Insert achievements
        achievements = [
            {
                "year": "2024",
                "event": "Olimpiade Sains Nasional (OSN) Matematika",
                "position": "Juara 1 Tingkat Provinsi",
                "student": "Ahmad Rizki Ramadhan",
                "coach": "Dra. Siti Aminah, M.Pd.",
                "location": "Mataram, NTB",
                "date": "Maret 2024"
            },
            {
                "year": "2024",
                "event": "Kompetisi Robotika Nasional",
                "position": "Juara 2 Tingkat Nasional",
                "student": "Putri Ayu Lestari & Tim",
                "coach": "Ahmad Fauzi, S.Pd., M.Pd.",
                "location": "Jakarta",
                "date": "Mei 2024"
            },
            {
                "year": "2024",
                "event": "Lomba Pidato Bahasa Inggris",
                "position": "Juara 1 Tingkat Kota",
                "student": "Siti Nurhaliza",
                "coach": "Linda Kartika, S.Pd.",
                "location": "Mataram, NTB",
                "date": "April 2024"
            }
        ]
        
        response = supabase.table("achievements").insert(achievements).execute()
        logger.info(f"✅ Seeded {len(achievements)} achievements")
        
        # Insert gallery items
        gallery_items = [
            {"image": "/images/upacara-bendera.jpg", "title": "Upacara Bendera Senin", "date": "15 Januari 2024"},
            {"image": "/images/makan-mbg", "title": "Pembagian MBG", "date": "10 Agustus 2025"},
            {"image": "/images/futsal-smp19", "title": "Futsal SMPN 19", "date": "8 Oktober 2025"},
            {"image": "/images/literasi.jpg", "title": "Literasi Al Quran", "date": "20 Maret 2024"}
        ]
        
        response = supabase.table("gallery").insert(gallery_items).execute()
        logger.info(f"✅ Seeded {len(gallery_items)} gallery items")
        
        # Insert school info
        school_info = {
            "name": "SMPN 19 Mataram",
            "address": "Jl. Pendidikan No. 19, Mataram, Nusa Tenggara Barat 83127",
            "phone": "(0370) 643700",
            "email": "SMPN19MATARAM@yahoo.co.id",
            "established": "2004",
            "accreditation": "A (Unggul)",
            "npsn": "50219509",
            "stats": {
                "students": "720+",
                "teachers": "45+",
                "classrooms": "24"
            }
        }
        
        response = supabase.table("school_info").insert(school_info).execute()
        logger.info("✅ Seeded school info")
        
        logger.info("\n🎉 Data seeding completed!")
        
    except Exception as e:
        logger.error(f"Error seeding data: {str(e)}")
        logger.info("\nIf you see 'relation does not exist' error, run the SQL schema first!")


if __name__ == "__main__":
    import sys
    
    if len(sys.argv) > 1 and sys.argv[1] == "seed":
        seed_initial_data()
    else:
        create_tables()

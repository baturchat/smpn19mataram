"""Script to seed initial data into MongoDB"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path
from passlib.context import CryptContext

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


async def seed_data():
    # Connect to MongoDB
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    
    print("Starting data seeding...")
    
    # 1. Seed Achievements
    achievements = [
        {
            "id": "1",
            "year": "2024",
            "event": "Olimpiade Sains Nasional (OSN) Matematika",
            "position": "Juara 1 Tingkat Provinsi",
            "student": "Ahmad Rizki Ramadhan",
            "coach": "Dra. Siti Aminah, M.Pd.",
            "location": "Mataram, NTB",
            "date": "Maret 2024"
        },
        {
            "id": "2",
            "year": "2024",
            "event": "Kompetisi Robotika Nasional",
            "position": "Juara 2 Tingkat Nasional",
            "student": "Putri Ayu Lestari & Tim",
            "coach": "Ahmad Fauzi, S.Pd., M.Pd.",
            "location": "Jakarta",
            "date": "Mei 2024"
        },
        {
            "id": "3",
            "year": "2024",
            "event": "Lomba Pidato Bahasa Inggris",
            "position": "Juara 1 Tingkat Kota",
            "student": "Siti Nurhaliza",
            "coach": "Linda Kartika, S.Pd.",
            "location": "Mataram, NTB",
            "date": "April 2024"
        },
        {
            "id": "4",
            "year": "2023",
            "event": "Olimpiade Sains Nasional (OSN) Fisika",
            "position": "Juara 3 Tingkat Provinsi",
            "student": "Muhammad Alfarizi",
            "coach": "Hendra Gunawan, S.Pd.",
            "location": "Mataram, NTB",
            "date": "November 2023"
        },
        {
            "id": "5",
            "year": "2023",
            "event": "Festival Lomba Seni Siswa Nasional (FLS2N) Tari Tradisional",
            "position": "Juara 2 Tingkat Provinsi",
            "student": "Kelompok Tari Nusantara",
            "coach": "Ni Wayan Suartini, S.Sn.",
            "location": "Mataram, NTB",
            "date": "September 2023"
        },
        {
            "id": "6",
            "year": "2023",
            "event": "Kompetisi Olahraga Pelajar Nasional (KOPNAS) Basket",
            "position": "Juara 1 Tingkat Kota",
            "student": "Tim Basket Putra",
            "coach": "Bambang Suryadi, S.Pd.",
            "location": "Mataram, NTB",
            "date": "Agustus 2023"
        }
    ]
    
    # Clear existing and insert
    await db.achievements.delete_many({})
    if achievements:
        await db.achievements.insert_many(achievements)
    print(f"✅ Seeded {len(achievements)} achievements")
    
    # 2. Seed Gallery Items
    gallery_items = [
        {"id": "1", "image": "/images/upacara-bendera.jpg", "title": "Upacara Bendera Senin", "date": "15 Januari 2024"},
{"id": "2", "image": "/images/literasi.jpg", "title": "Literasi Al-Quran", "date": "10 Februari 2024"},
{"id": "3", "image": "/images/futsal-smpn19.jpg", "title": "Lomba Osda Cup", "date": "9 Oktober 2025"},
{"id": "4", "image": "/images/vooting-day.jpg", "title": "Pemilihan Ketua Osis 2024/2025", "date": "20 Maret 2024"},
{"id": "5", "image": "/images/17-agustus.jpg", "title": "Peringatan Hari Kemerdekaan NKRI", "date": "17 Agustus 2025"},
{"id": "6", "image": "/images/foto-guru-mpls.jpg", "title": "Foto Bersama Guru Menjelang MPLS", "date": "1 Mei 2025"},
{"id": "7", "image": "/images/makan-mbg.jpg", "title": "Makanan Bergizi Gratis (MBG)", "date": "6 Oktober 2024"},
{"id": "8", "image": "/images/hut-kota-mataram.jpg", "title": "Festival Seni dan Budaya", "date": "25 Mei 2024"},
{"id": "9", "image": "/images/hut-smpn19-ke-20.jpg", "title": "HUT SMPN 19 Mataram KE 20", "date": "6 Oktober 2025"},
{"id": "10", "image": "/images/upacara-sekolah.jpg", "title": "Kegiatan Apel Senin", "date": "15 Juni 2024"},
{"id": "11", "image": "/images/makan-bersama-mpls.jpg", "title": "Kegiatan Makan Bersama MPLS", "date": "1 Juli 2024"},
{"id": "12", "image": "/images/bantuan-pgri.jpg", "title": "Bantuan PGRI", "date": "2 Oktober 2025"}
    ]
    
    await db.gallery.delete_many({})
    if gallery_items:
        await db.gallery.insert_many(gallery_items)
    print(f"✅ Seeded {len(gallery_items)} gallery items")
    
    # 3. Seed School Info
    school_info = {
        "id": "1",
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
    
    await db.school_info.delete_many({})
    await db.school_info.insert_one(school_info)
    print("✅ Seeded school info")
    
    # 4. Create default admin user
    admin_exists = await db.admins.find_one({"username": "admin"})
    if not admin_exists:
        hashed_password = pwd_context.hash("admin123")
        admin = {
            "id": "1",
            "username": "admin",
            "email": "admin@smpn19mataram.sch.id",
            "password": hashed_password
        }
        await db.admins.insert_one(admin)
        print("✅ Created default admin user (username: admin, password: admin123)")
    else:
        print("ℹ️  Admin user already exists")
    
    print("\n🎉 Data seeding completed!")
    client.close()


if __name__ == "__main__":
    asyncio.run(seed_data())

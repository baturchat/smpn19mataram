from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
from datetime import datetime
import uuid


class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    status: str = 'new'  # new, read, replied
    created_at: datetime = Field(default_factory=datetime.utcnow)


class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


class Achievement(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    year: str
    event: str
    position: str
    student: str
    coach: str
    location: str
    date: str
    created_at: datetime = Field(default_factory=datetime.utcnow)


class AchievementCreate(BaseModel):
    year: str
    event: str
    position: str
    student: str
    coach: str
    location: str
    date: str


class GalleryItem(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    image: str
    title: str
    date: str
    created_at: datetime = Field(default_factory=datetime.utcnow)


class GalleryItemCreate(BaseModel):
    image: str
    title: str
    date: str


class SchoolStats(BaseModel):
    students: str
    teachers: str
    classrooms: str


class SchoolInfo(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    address: str
    phone: str
    email: str
    established: str
    accreditation: str
    npsn: str
    stats: SchoolStats


class Admin(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    username: str
    email: EmailStr
    password: str  # This will be hashed
    created_at: datetime = Field(default_factory=datetime.utcnow)


class AdminLogin(BaseModel):
    username: str
    password: str


class LoginResponse(BaseModel):
    success: bool
    token: str
    user: dict

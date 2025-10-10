from fastapi import APIRouter, HTTPException
from models import AdminLogin, LoginResponse
from database import db
from passlib.context import CryptContext
import logging
import os

logger = logging.getLogger(__name__)
router = APIRouter()

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


@router.post("/auth/login", response_model=LoginResponse)
async def login(credentials: AdminLogin):
    """Admin login endpoint"""
    try:
        # Find admin user
        admin = await db.admins.find_one({"username": credentials.username})
        
        if not admin:
            raise HTTPException(status_code=401, detail="Username atau password salah")
        
        # Verify password
        if not verify_password(credentials.password, admin["password"]):
            raise HTTPException(status_code=401, detail="Username atau password salah")
        
        # Generate token (simplified - in production use JWT)
        token = f"token_{admin['id']}"
        
        logger.info(f"Admin logged in: {credentials.username}")
        
        return LoginResponse(
            success=True,
            token=token,
            user={"username": admin["username"], "email": admin.get("email", "")}
        )
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error during login: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/auth/register")
async def register_admin(username: str, password: str, email: str):
    """Register a new admin (should be protected in production)"""
    try:
        # Check if username exists
        existing = await db.admins.find_one({"username": username})
        if existing:
            raise HTTPException(status_code=400, detail="Username sudah digunakan")
        
        # Hash password
        hashed_password = get_password_hash(password)
        
        # Create admin
        from models import Admin
        admin_obj = Admin(
            username=username,
            email=email,
            password=hashed_password
        )
        
        result = await db.admins.insert_one(admin_obj.dict())
        
        if result.inserted_id:
            logger.info(f"Admin created: {username}")
            return {"success": True, "message": "Admin berhasil dibuat"}
        else:
            raise HTTPException(status_code=500, detail="Gagal membuat admin")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error creating admin: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

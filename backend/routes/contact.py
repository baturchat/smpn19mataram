from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from supabase_client import supabase
import logging
from datetime import datetime

logger = logging.getLogger(__name__)
router = APIRouter()


class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


@router.post("/contact")
async def create_contact_message(message: ContactMessageCreate):
    """Submit a contact form message"""
    try:
        contact_data = {
            "name": message.name,
            "email": message.email,
            "subject": message.subject,
            "message": message.message,
            "status": "new",
            "created_at": datetime.utcnow().isoformat()
        }
        
        response = supabase.table("contacts").insert(contact_data).execute()
        
        if response.data:
            logger.info(f"Contact message created from: {message.email}")
            return {"success": True, "message": "Pesan berhasil dikirim!", "data": response.data[0]}
        else:
            raise HTTPException(status_code=500, detail="Failed to save contact message")
    except Exception as e:
        logger.error(f"Error creating contact message: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/contact")
async def get_contact_messages():
    """Get all contact messages"""
    try:
        response = supabase.table("contacts").select("*").order("created_at", desc=True).execute()
        return {"messages": response.data, "count": len(response.data)}
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

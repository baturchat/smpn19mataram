from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from supabase_client import supabase
import logging

logger = logging.getLogger(__name__)
router = APIRouter()


class SchoolStats(BaseModel):
    students: str
    teachers: str
    classrooms: str


class SchoolInfo(BaseModel):
    name: str
    address: str
    phone: str
    email: str
    established: str
    accreditation: str
    npsn: str
    stats: SchoolStats


@router.get("/school-info")
async def get_school_info():
    """Get school information"""
    try:
        response = supabase.table("school_info").select("*").limit(1).execute()
        
        if response.data and len(response.data) > 0:
            return response.data[0]
        
        # Return default data if not in database
        default_info = {
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
        
        return default_info
    except Exception as e:
        logger.error(f"Error fetching school info: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@router.put("/school-info")
async def update_school_info(info: SchoolInfo):
    """Update school information"""
    try:
        info_dict = info.dict()
        
        # Check if school info exists
        existing = supabase.table("school_info").select("id").limit(1).execute()
        
        if existing.data and len(existing.data) > 0:
            # Update existing
            response = supabase.table("school_info").update(info_dict).eq("id", existing.data[0]["id"]).execute()
        else:
            # Insert new
            response = supabase.table("school_info").insert(info_dict).execute()
        
        logger.info("School info updated")
        return {"success": True, "message": "School info updated", "data": response.data[0]}
    except Exception as e:
        logger.error(f"Error updating school info: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

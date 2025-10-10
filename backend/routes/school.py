from fastapi import APIRouter, HTTPException
from models import SchoolInfo
from database import db
import logging

logger = logging.getLogger(__name__)
router = APIRouter()


@router.get("/school-info")
async def get_school_info():
    """Get school information"""
    try:
        # Try to get from database first
        school_info = await db.school_info.find_one()
        
        if school_info:
            return school_info
        
        # If not in database, return default data
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
    """Update school information (admin only - add auth later)"""
    try:
        info_dict = info.dict()
        
        # Update or insert
        await db.school_info.replace_one(
            {},
            info_dict,
            upsert=True
        )
        
        logger.info("School info updated")
        return {"success": True, "message": "School info updated"}
    except Exception as e:
        logger.error(f"Error updating school info: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel
from supabase_client import supabase
from typing import Optional
import logging
from datetime import datetime

logger = logging.getLogger(__name__)
router = APIRouter()


class AchievementCreate(BaseModel):
    year: str
    event: str
    position: str
    student: str
    coach: str
    location: str
    date: str


@router.get("/achievements")
async def get_achievements(year: Optional[str] = Query(None)):
    """Get all achievements with optional year filter"""
    try:
        query = supabase.table("achievements").select("*")
        
        if year and year != 'all':
            query = query.eq("year", year)
        
        response = query.order("created_at", desc=True).execute()
        return {"achievements": response.data, "count": len(response.data)}
    except Exception as e:
        logger.error(f"Error fetching achievements: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/achievements")
async def create_achievement(achievement: AchievementCreate):
    """Create a new achievement record"""
    try:
        achievement_data = achievement.dict()
        achievement_data["created_at"] = datetime.utcnow().isoformat()
        
        response = supabase.table("achievements").insert(achievement_data).execute()
        
        if response.data:
            logger.info(f"Achievement created: {achievement.event}")
            return {"success": True, "data": response.data[0]}
        else:
            raise HTTPException(status_code=500, detail="Failed to create achievement")
    except Exception as e:
        logger.error(f"Error creating achievement: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/achievements/{achievement_id}")
async def get_achievement(achievement_id: str):
    """Get a single achievement by ID"""
    try:
        response = supabase.table("achievements").select("*").eq("id", achievement_id).execute()
        
        if response.data:
            return response.data[0]
        else:
            raise HTTPException(status_code=404, detail="Achievement not found")
    except Exception as e:
        logger.error(f"Error fetching achievement: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from supabase_client import supabase
import logging
from datetime import datetime

logger = logging.getLogger(__name__)
router = APIRouter()


class GalleryItemCreate(BaseModel):
    image: str
    title: str
    date: str


@router.get("/gallery")
async def get_gallery():
    """Get all gallery items"""
    try:
        response = supabase.table("gallery").select("*").order("created_at", desc=True).execute()
        return {"gallery": response.data, "count": len(response.data)}
    except Exception as e:
        logger.error(f"Error fetching gallery items: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/gallery")
async def create_gallery_item(item: GalleryItemCreate):
    """Create a new gallery item"""
    try:
        item_data = item.dict()
        item_data["created_at"] = datetime.utcnow().isoformat()
        
        response = supabase.table("gallery").insert(item_data).execute()
        
        if response.data:
            logger.info(f"Gallery item created: {item.title}")
            return {"success": True, "data": response.data[0]}
        else:
            raise HTTPException(status_code=500, detail="Failed to create gallery item")
    except Exception as e:
        logger.error(f"Error creating gallery item: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@router.delete("/gallery/{item_id}")
async def delete_gallery_item(item_id: str):
    """Delete a gallery item"""
    try:
        response = supabase.table("gallery").delete().eq("id", item_id).execute()
        
        if response.data:
            logger.info(f"Gallery item deleted: {item_id}")
            return {"success": True, "message": "Gallery item deleted"}
        else:
            raise HTTPException(status_code=404, detail="Gallery item not found")
    except Exception as e:
        logger.error(f"Error deleting gallery item: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

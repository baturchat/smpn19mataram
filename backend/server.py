from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path

# Import route modules
from routes import contact, achievements, gallery, school_info

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI(title="SMPN 19 Mataram API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Root endpoint
@api_router.get("/")
async def root():
    return {"message": "SMPN 19 Mataram API - Supabase Backend"}

# Include all route modules
api_router.include_router(contact.router, tags=["Contact"])
api_router.include_router(achievements.router, tags=["Achievements"])
api_router.include_router(gallery.router, tags=["Gallery"])
api_router.include_router(school_info.router, tags=["School Info"])

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

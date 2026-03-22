from fastapi import APIRouter

router = APIRouter()

@router.get("/blog")
def get_blog():
    return {"message": "Blog works"}
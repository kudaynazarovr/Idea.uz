from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
import os
from fastapi.staticfiles import StaticFiles

from routers import users
from crud import get_current_user


app = FastAPI()

if not os.path.exists('media'):
    os.makedirs('media')

app.add_middleware(
    CORSMiddleware,
    # allow_origins=['http://localhost:5173', 'http://localhost:19006'],
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.mount("/media", StaticFiles(directory="media"), name="media")


app.include_router(users.users_router)

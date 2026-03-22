from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status, Form
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from typing import Annotated    
from jose import JWTError

from schemas import Token, RefreshTokenRequest
from models import User
from database import get_db
from crud import *


users_router = APIRouter(prefix='/users', tags=['users'])


@users_router.post('/token', response_model=Token)
async def login_for_access_token(  
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: AsyncSession = Depends(get_db),
):
    user = await authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Incorrect username or password',
            headers={'WWW-Authenticate': 'Bearer'}
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={'sub': user.username}, expires_delta=access_token_expires
    )
    refresh_token = create_refresh_token(
        data={'sub': user.username},
        expire_delta=timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)
    )
    return Token(access_token=access_token, refresh_token=refresh_token, token_type='bearer')


@users_router.post('/refresh', response_model=Token)
async def refresh_access_token(body: RefreshTokenRequest):
    refresh_token = body.refresh_token

    try: 
        payload = jwt.decode(refresh_token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get('sub')
        if username is None:
            raise HTTPException(status_code=401, detail='Invalid refresh token')
    except JWTError:
        raise HTTPException(status_code=401, detail='Invalid refresh token')

    new_access_token = create_access_token(
        data={'sub': username},
        expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    new_refresh_token = create_refresh_token(
        data={"sub": username},
        expire_delta=timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)
    )
    
    return {
        'access_token': new_access_token,
        'refresh_token': new_refresh_token,
        'token_type': 'bearer'
    }
        


async def read_users_me(current_user: Annotated[User, Depends(get_current_active_user)],):
    return current_user


@users_router.get('/users/me/items')
async def read_own_items(current_user: Annotated[User, Depends(get_current_active_user)],):
    return [{'itme_id': 'Foo', 'owner': current_user.username}]

            
@users_router.post('/register')
async def register(user_in: UserCreate, db:AsyncSession = Depends(get_db)):
    if await get_user(db, user_in.username):
        raise HTTPException(status_code=400, detail='Username уже занят')
    if await get_user_by_email(db, user_in.email):
        raise HTTPException(status_code=400, detail='Email уже зарегистрирован')
    user = await create_user(db, user_in)
    return user

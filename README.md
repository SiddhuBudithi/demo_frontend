# 🚀 Full Stack Demo Application — Django REST + React

A complete full-stack web application built with **Django REST Framework**, **React**, and **Supabase PostgreSQL**, featuring full CRUD operations, a dashboard visualization, and external API integration.

---

## 📌 Features

### 🛠 Backend (Django + DRF)
- REST API built using Django REST Framework
- PostgreSQL database using Supabase
- CRUD operations for `Item` model
- Reporting endpoint for dashboard visualization
- External API integration: GitHub user fetcher
- CORS enabled for frontend communication
- Production-ready (Gunicorn + Whitenoise)

### 🎨 Frontend (React)
- Interactive CRUD UI for items
- Dashboard with Chart.js visualization
- GitHub user viewer page
- Axios-based API service layer
- React Router navigation
- Environment-based configuration

### 🚀 Deployment
- Backend deployed using **Render**
- Frontend deployed using **Vercel**
- Database hosted on **Supabase**

---


---

## ⚙️ Tech Stack

**Backend:** Django 6, DRF, PostgreSQL, dj-database-url, CORS headers  
**Frontend:** React 19, Chart.js, Axios, React Router  
**DevOps:** Supabase, Render, Vercel, Gunicorn, Whitenoise  

---

# 🛠 Backend Setup (Django)

1. Install dependencies
 
cd demo_backend
python -m venv .venv
source .venv/Scripts/activate    # Windows
pip install -r requirements.txt


2. create .env file

DJANGO_SECRET_KEY=your-secret-key
DEBUG=1
ALLOWED_HOSTS=*
DATABASE_URL=<postgresql://postgres:8J!Yhq!tT.$5.Q6@db.narfytwkivknleecdcdx.supabase.co:5432/postgres>

3. Run migrations

python manage.py makemigrations
python manage.py migrate

4. Start backend Server

python manage.py runserver

then backend runs at http://localhost:8000/


# 🛠 Frontend Setup (React)

1. Install dependencies

cd demo_frontend
npm install

2. create .env file

REACT_APP_API_URL=http://localhost:8000/api

3. Start React app

npm start

then frontend runs at http://localhost:3000/


API Endpoints

| Method | Endpoint           | Description     |
| ------ | ------------------ | --------------- |
| GET    | `/api/items/`      | List all items  |
| POST   | `/api/items/`      | Create new item |
| GET    | `/api/items/<id>/` | Retrieve item   |
| PUT    | `/api/items/<id>/` | Update item     |
| DELETE | `/api/items/<id>/` | Delete item     |

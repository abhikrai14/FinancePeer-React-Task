# Financepeer React Task

- Backend - Django
- Frontend - React.js
- Database - PostgreSQL

## setup backend
- Add postgres database credentials to django settings.py
```
cd backend/backend/settings.py
subl settings.py

DATABASES = {
    'default': {
        # 'ENGINE': 'django.db.backends.sqlite3',
        # 'NAME': BASE_DIR / 'db.sqlite3',
        'ENGINE': 'django.db.backends.postgresql_psycopg2',

        'NAME': 'react_task',

        'USER': 'postgres',

        'PASSWORD': 'po6S.dance',

        'HOST': 'localhost',

        'PORT': '5432',
    }
}
```
- makemigrations and migrate models to database
```
py manage.py makemigrations
py manage.py migrate
```
- Start Backend Server
```
py manage.py runserver
```

## setup frontend

cd forntend
npm install
npm start

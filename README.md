# Financepeer React Task

- Backend - Django
- Frontend - React.js
- Database - PostgreSQL

## Steps for backend setup
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

        'PASSWORD': 'abhik14',

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

## Steps for frontend setup

- cd forntend
- npm install
- npm start

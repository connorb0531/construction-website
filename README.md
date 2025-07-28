# Construction Website

## Quick setup instructions

### 1. Clone repository

```bash
git clone https://github.com/connorb0531/construction-website.git
```

### 2. Install dependencies

Install backend dependencies:

```bash
cd ./server
npm install express mongoose cors dotenv nodemailer
npm install -D tailwindcss@3.4.3 postcss autoprefixer
```

Install frontend dependencies:

```bash
cd ./client
npm install axios react-router-dom
```

### 3. Setup environment variables

Create a `.env` file inside `client` directory:

```servclienter/.env:
REACT_APP_API_BASE_URL= *empty string for local dev*
```

Create a `.env` file inside `server` directory:

```server/.env:
MONGO_URI=
PORT=
EMAIL_USER=
EMAIL_PASS=
```

### 4. Run servers locally (for development)

Start backend API:

```bash
cd server
npm start dev
```
Start frontend React app (in a separate terminal):

```bash
cd client
npm start
```

### 5. Access the app
* Frontend: http://localhost:{FRONTEND_PORT}
* API: http://localhost:{BACKEND_PORT}


## Credits
Connor Buckley

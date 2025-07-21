# Construction Website

## Quick setup instructions

### 1. Clone repository

```bash
git clone <repo-url>
cd project-root
```

### Install dependencies

Install backend dependencies:

```bash
cd ../server
npm install
```

Install frontend dependencies:

```bash
cd ../client
npm install
```

### 3. Install driver for MongoDB

```bash
npm install mongodb
```

### 4. Environment variables

Create a `.env` file inside `server` directory:

```server/.env:
MONGO_URI=
PORT=5000
```

Create a `.env` file inside `client` directory:

```servclienter/.env:
REACT_APP_API_BASE_URL= *blank string for local dev
```

### 5. Tailwind CSS setup
```bash
npm install -D tailwindcss@3.4.3 postcss autoprefixer
```

### 6. Run servers locally (for development)

Start backend API:

```bash
cd server
npm run dev
```
Start frontend React app (in a separate terminal):

```bash
cd client
npm start
```

### 7. Access the app
* Frontend: http://localhost:3000
* API: http://localhost:5000/api/projects


## Credits
Connor Buckley

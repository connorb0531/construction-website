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

### 3. Environment variables

Create a `.env` file inside `server` directory:

```server/.env:
MONGO_URI=<your MongoDB Atlas connection string>
PORT=5000
```

### 4. Tailwind CSS setup
```bash
npm install -D tailwindcss@3.4.3 postcss autoprefixer
```

### 5. Run servers locally (for development)

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

### 6. Access the app
* Frontend: http://localhost:3000
* API: http://localhost:5000/api/projects


## Credits
Connor Buckley

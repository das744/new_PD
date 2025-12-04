# 1. Setup Backend Project
mkdir backend
cd backend
npm init -y

# 2. Install Dependencies 
npm install express pg cors dotenv

# 3. Create Backend Files
server.js → main server file

# 4. Create .env file and add all variables
.env → environment variables

# 5. Run Backend
node server.js
Backend running at http://localhost:5000

# 6. Test API
http://localhost:5000/submissions → should return JSON format.
# User Profile Management API

A RESTful API for managing user profiles with JWT authentication built with Express.js and MongoDB.

## Features

- User registration and authentication
- JWT-based protected routes
- User profile CRUD operations
- Secure password hashing

## Screenshots
- User Registration
![Screenshot (384)](https://github.com/user-attachments/assets/11b086f2-b70d-478d-9a63-ba4ff1a6f9df)

- User Login
![Screenshot (385)](https://github.com/user-attachments/assets/3bb7976c-345b-4662-b888-10c45d0dc22f)

- Get Users
![Screenshot (386)](https://github.com/user-attachments/assets/3efd8cd8-0451-4755-b990-f230226395d2)

- Update User
![Screenshot (387)](https://github.com/user-attachments/assets/97499fec-0d17-44d1-a193-f87fbb39ca77)

## Tech Stack

- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/user-profile-api.git
   cd user-profile-api
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/user-profile-api
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   ```

4. Start the server
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Authentication

- `POST /api/users` - Register a new user
- `POST /api/users/login` - Authenticate a user and get token

### User Profile

- `GET /api/users/:id` - Get user profile (Protected)
- `PUT /api/users/:id` - Update user profile (Protected)

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. 

To access protected endpoints, include the JWT token in the Authorization header:
```
Authorization: Bearer YOUR_JWT_TOKEN
```

## Testing with Postman

A Postman collection is provided in the repository. Import the collection to test the API endpoints.

### Quick Test Guide

1. Register a new user using POST /api/users
2. Login with the registered user to get the JWT token
3. Include the token in the Authorization header for protected routes
4. Test GET and PUT operations on the user profile
5. 

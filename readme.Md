# User Authentication API

This is a RESTful API for user authentication using JWT (JSON Web Token). The API includes routes for user registration and login. The purpose of this API is to provide a simple, secure way to manage user authentication, which can be consumed by any external application.

## Features
- User Registration
- User Login
- JWT-based authentication
- Secure password hashing

## Tech Stack
- Node.js
- Express.js
- JSON Web Token (JWT)
- Bcrypt for password hashing

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables by creating a `.env` file in the root directory:
   ```
   PORT=3000
   JWT_SECRET=your_jwt_secret_key
   DB_URI=your_database_uri
   ```

5. Start the server:
   ```bash
   npm start
   ```

## Endpoints

### 1. Register a new user
**POST** `/register`

#### Request
- Content-Type: `application/json`
  
Body parameters:
```json
{
  "username": "exampleuser",
  "email": "user@example.com",
  "password": "examplepassword"
}
```

#### Response
Success:
```json
{
  "message": "User registered successfully"
}
```
Failure:
```json
{
  "error": "Email already exists"
}
```

### 2. User login
**POST** `/login`

#### Request
- Content-Type: `application/json`

Body parameters:
```json
{
  "email": "user@example.com",
  "password": "examplepassword"
}
```

#### Response
Success:
```json
{
  "token": "your_jwt_token"
}
```
Failure:
```json
{
  "error": "Invalid credentials"
}
```

## JWT Token
After logging in, the server responds with a JWT. This token should be included in the `Authorization` header for all subsequent requests to protected routes.

Header format:
```
Authorization: Bearer your_jwt_token
```

## Middleware
The API uses middleware to protect certain routes. Any routes that require authentication will validate the JWT token provided in the request headers.

## Error Handling
The API responds with appropriate HTTP status codes and error messages for different error scenarios, such as invalid credentials or token expiration.

## Security
- Passwords are hashed using Bcrypt before being stored in the database.
- JWT tokens are signed with a secret key, which should be kept secure.

## License
This project is licensed under the MIT License.
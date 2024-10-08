# User Authentication API

This is a **RESTful API** for user authentication using **JWT (JSON Web Token)**. The API provides routes for user registration and login, ensuring a simple and secure way to manage user authentication, which can be consumed by any external application.

## Use Online this API for Free
https://userauthapifree.vercel.app/

## Features
- **User Registration**: Allows new users to create an account.
- **User Login**: Authenticates users and provides a JWT for secure access.
- **JWT-based Authentication**: Ensures that API calls are authenticated using JSON Web Tokens.
- **Secure Password Hashing**: Utilizes Bcrypt to hash passwords before storing them in the database.
- **User Input Validation**: Implements JOI for validating user registration inputs.
- **HTML Input Sanitization**: Uses middleware to sanitize input, preventing XSS attacks.

## Tech Stack
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web application framework for Node.js.
- **JSON Web Token (JWT)**: Standard for securely transmitting information between parties.
- **Bcrypt**: Library for hashing passwords.
- **JOI**: Validation library for data schemas.
- **HTML Sanitization Middleware**: Prevents XSS attacks by sanitizing user input.

## Installation

### Prerequisites
- Node.js
- MySQL (or any compatible database)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pikupik/userauthapi.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd userauthapi
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Install MySQL2 (optional)**:
   ```bash
   npm install mysql2
   ```

5. **Set up environment variables** by creating a `.env` file in the root directory:
   ```env
   PORT=3000
   JWT_SECRET=your_jwt_secret_key

   # MySQL Configuration
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=your_database_user
   DB_PASS=your_database_password
   DB_NAME=your_database_name

   # Or you can use a database URL
   DB_URI=your_database_uri
   ```

6. **Create the database and user table**:
   Use the following SQL command to create the required table:
   ```sql
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(255) NOT NULL,
       email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

7. **Start the server**:
   ```bash
   npm start
   ```

## How to Use?
1. Use the veecel link if youre online use or
2. Install depenencies and open POSTMAN. Follow this steps.

## Endpoints

### 1. Register a New User
**POST** `/api/apivckit/register`

#### Request
- **Content-Type**: `application/json`
  
**Body parameters**:
```json
{
  "username": "exampleuser",
  "email": "user@example.com",
  "password": "examplepassword"
}
```

#### Response
**Success**:
```json
{
  "message": "User registered successfully"
}
```

**Failure**:
```json
{
  "error": "Email already exists"
}
```

### 2. User Login
**POST** `/api/apivckit/login`

#### Request
- **Content-Type**: `application/json`

**Body parameters**:
```json
{
  "email": "user@example.com",
  "password": "examplepassword"
}
```

#### Response
**Success**:
```json
{
  "token": "your_jwt_token"
}
```

**Failure**:
```json
{
  "error": "Invalid credentials"
}
```

### 3. Access a Protected Route
**GET** `/api/apivckit/protected-route`

**Header format**:
```
Authorization: Bearer your_jwt_token
```

#### Response
**Success**:
```json
{
  "message": "This is a protected route",
  "user": {
    "id": x,
    "email": "youremail@email.com",
    "iat": xxxxxxxx,
    "exp": xxxxxxxx
  }
}
```

**Failure**:
```json
{
  "error": "Invalid Token"
}
```

## Middleware
The API uses middleware to protect certain routes and sanitize inputs. 
- **Authentication Middleware**: Validates the JWT token for protected routes.
- **HTML Sanitization Middleware**: Cleans user input to prevent XSS attacks, ensuring that any potentially harmful scripts or HTML tags are removed before processing.

## Error Handling
The API responds with appropriate HTTP status codes and error messages for various error scenarios, such as invalid credentials or token expiration.

## Security
- Passwords are hashed using Bcrypt before being stored in the database.
- JWT tokens are signed with a secret key, which should be kept secure.
- HTML sanitization helps to prevent XSS vulnerabilities by sanitizing user input.

## Contribution
We welcome contributions! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any questions or issues, feel free to reach out via [GitHub Issues](https://github.com/pikupik/userauthapi/issues).

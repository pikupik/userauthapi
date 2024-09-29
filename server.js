const express = require('express');
const cors = require('cors');

// Middleware
const errorHandler = require('./src/middleware/errorHandlingMiddleware');
const sanitizeInput = require('./src/middleware/sanitizationMiddleware');

//auth authRoutes
const authRoutes = require('./src/routes/authRoutes')
const protectedRoutes = require('./src/routes/protectedRoutes')



const app = express();
const port = process.env.PORT || 5000;

// Middleware untuk parsing JSON
app.use(express.json());
app.use(cors());

// Middleware untuk sanitasi input
app.use(sanitizeInput);

// Routing Apps
app.use('/apivckit', authRoutes); // Untuk authentication
app.use('/apivckit', protectedRoutes); // login yang dilindungi

// Middleware untuk error handling
app.use(errorHandler);

// Menjalankan server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
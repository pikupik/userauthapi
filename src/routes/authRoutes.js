const express = require('express')
const { registerUserController, loginUserController } = require('../controllers/authController')
const { registerValidation } = require('../middleware/validationMiddleware')


const router = express.Router()

//register routes
router.post('/register', registerValidation, registerUserController)

//login routes
router.post('/login', loginUserController)

module.exports = router
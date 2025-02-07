// routes.js

const express = require('express');
const router = express.Router();
const userController = require('../controller/user'); // Make sure the correct path is used

// Correct route definition with the middleware
router.post('/register', userController.registerUser[0], userController.registerUser[1]);

// Define the login route correctly
router.post('/login', userController.loginUser);

module.exports = router;

const express = require('express');
const { register, login} = require('../controllers/authController');
// const passport = require('passport');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;


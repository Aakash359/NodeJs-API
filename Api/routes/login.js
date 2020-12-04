const express = require('express')
const router = express.Router()
const Login =   require('../controllers/login.js');

// Path Of Login Api...............................

router.post('/', Login.create);

module.exports = router
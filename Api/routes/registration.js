const express = require('express')
const router = express.Router()
const Registration =   require('../controllers/registration.js');

// Create a new registration record...................

router.post('/', Registration.create);




module.exports = router

const express = require('express')
const router = express.Router()
const UserRole =   require('../controllers/userRole.js');

// Update a employee with id

router.put('/:id', UserRole.update);

module.exports = router
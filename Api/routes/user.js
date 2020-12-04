const express = require('express')
const router = express.Router()
const User =   require('../controllers/user.js');

// Create a new user record 

router.post('/', User.create);

// Delete a user record with id

router.delete('/:id', User.delete);

// Retrieve all users
router.get('/', User.findAll);


module.exports = router
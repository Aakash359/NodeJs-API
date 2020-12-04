const express = require('express')
const router = express.Router()
const Controllers =   require('../controllers/controllers.js');

// Create a new customer record...................

router.post('/', Controllers.create);

// Delete a customer record with id.................

router.delete('/:id', Controllers.delete);

// Retrieve all customers from tha table...............
router.get('/', Controllers.findAll);


module.exports = router

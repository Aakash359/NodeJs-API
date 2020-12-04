const express = require('express')
const router = express.Router()
const Bank =   require('../controllers/bank.js');

// Create a new bank record..............

router.post('/', Bank.create);

// Delete a bank record with id...........

router.delete('/:id', Bank.delete);

// Retrieve all banks from tha table...............
router.get('/', Bank.findAll);


module.exports = router
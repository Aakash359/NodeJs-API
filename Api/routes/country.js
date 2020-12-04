const express = require('express')
const router = express.Router()


// Country dropdown Api

router.post('/', Country.create);

module.exports = router
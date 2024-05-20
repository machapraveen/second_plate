const express = require('express');
const router = express.Router();

// Sample delivery route
router.get('/', (req, res) => {
    res.send('Delivery route');
});

module.exports = router;

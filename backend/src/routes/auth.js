const express = require('express');
const router = express.Router();

// Sample auth route
router.get('/', (req, res) => {
    res.send('Auth route');
});

module.exports = router;

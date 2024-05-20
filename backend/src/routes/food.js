const express = require('express');
const router = express.Router();

// Sample food route
router.get('/', (req, res) => {
    res.send('Food route');
});

module.exports = router;

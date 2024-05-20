const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.auth = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

exports.isVendor = (req, res, next) => {
    if (req.user.role !== 'vendor') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};

exports.isDeliveryPersonnel = (req, res, next) => {
    if (req.user.role !== 'delivery') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};

exports.isCharity = (req, res, next) => {
    if (req.user.role !== 'charity') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};


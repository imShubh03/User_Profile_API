import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from the token
            req.user = await User.findById(decoded.id).select('-password');

            next();
        } catch (error) {
            console.error(error);
            return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
};

// Check if user is accessing their own profile
const checkUserAuthorization = async (req, res, next) => {
    try {
        if (req.user._id.toString() !== req.params.id) {
            return res.status(403).json({
                message: 'Forbidden: You can only access your own profile',
            });
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export { protect, checkUserAuthorization };
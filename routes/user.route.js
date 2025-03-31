import express from 'express';
import {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
} from '../controllers/user.controller.js';
import { protect, checkUserAuthorization } from '../middlewares/auth.middleware.js';

const router = express.Router();

// @route   POST /api/users
// @desc    Register a new user
// @access  Public
router.post('/', registerUser);

// @route   POST /api/users/login
// @desc    Auth user & get token
// @access  Public
router.post('/login', loginUser);

// @route   GET /api/users/:id
// @desc    Get user profile
// @access  Private
router.get('/:id', protect, checkUserAuthorization, getUserProfile);

// @route   PUT /api/users/:id
// @desc    Update user profile
// @access  Private
router.put('/:id', protect, checkUserAuthorization, updateUserProfile);

export default router;
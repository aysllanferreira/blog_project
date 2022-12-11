/* eslint-disable import/extensions */
import express from 'express';
import {
  registerUser, loginUser, getUser, fetchUserById,
} from '../controllers/index.js';

const router = express.Router();

router.get('/', getUser);
router.get('/fetchUser', fetchUserById);

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;

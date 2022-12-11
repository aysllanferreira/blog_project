/* eslint-disable import/extensions */
import express from 'express';
import {
  registerUser, loginUser, getUser, fetchUserById, updateUser,
} from '../controllers/index.js';

const router = express.Router();

router.get('/', getUser);
router.get('/fetchUser', fetchUserById);

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/update', updateUser);

export default router;

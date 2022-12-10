/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
import dotenv from 'dotenv';
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

dotenv.config();

export const registerUser = async (req, res) => {
  const {
    username, email, password, confirmPassword, createdAt, admin,
  } = req.body;

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const existedUser = await User.findOne({ email });

  switch (true) {
    case !username:
      return res.status(400).json({
        message: 'Username is required',
      });
    case username.length < 3:
      return res.status(400).json({
        message: 'Username must be at least 3 characters long',
      });
    case !email:
      return res.status(400).json({
        message: 'Email is required',
      });
    case !emailRegex.test(email):
      return res.status(400).json({
        message: 'Email is invalid',
      });
    case existedUser !== null:
      return res.status(400).json({
        message: 'Email is already exist',
      });
    case !password:
      return res.status(400).json({
        message: 'Password is required',
      });
    case password.length < 6:
      return res.status(400).json({
        message: 'Password must be at least 6 characters long',
      });
      // Password special character
    case !/[!@#$%^&*]/.test(password):
      return res.status(400).json({
        message: 'Password must contain at least one special character',
      });
      // Password uppercase
    case !/[A-Z]/.test(password):
      return res.status(400).json({
        message: 'Password must contain at least one uppercase letter',
      });
      // Password lowercase
    case !/[a-z]/.test(password):
      return res.status(400).json({
        message: 'Password must contain at least one lowercase letter',
      });
      // Password number
    case !/[0-9]/.test(password):
      return res.status(400).json({
        message: 'Password must contain at least one number',
      });
    case !confirmPassword:
      return res.status(400).json({
        message: 'Confirm password is required',
      });
    case password !== confirmPassword:
      return res.status(400).json({
        message: 'Passwords do not match',
      });
    default:
      break;
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedToken = await bcrypt.hash(password, salt);

    await User.create({
      username,
      email,
      password: hashedToken,
      createdAt,
      admin,
    });

    res.status(201).json({
      message: 'User created successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const verifyEmail = await User.findOne({ email });

  if (!email) return res.status(400).json({ message: 'Email is required' });
  if (!password) return res.status(400).json({ message: 'Password is required' });
  if (!verifyEmail) return res.status(400).json({ message: 'Email does not exist' });

  const verifyPassword = await bcrypt.compare(password, verifyEmail.password);

  if (!verifyPassword) return res.status(400).json({ message: 'Email or password is incorrect' });

  try {
    const token = jwt.sign({ id: verifyEmail._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Save token in headers for private route
    res.setHeader('Authorization', `Bearer ${token}`);

    res.status(200).json({
      message: 'User logged in successfully',
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

// Private Route Bearer Token

export const getUser = async (req, res) => {
  const { id } = req.params;

  // Verify Bearer Token
  if (!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' });
  const token = req.headers.authorization.split(' ')[1];

  const isCustomAuth = token.length < 500;

  let decodedData;

  if (token && isCustomAuth) {
    decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decodedData?.id;
  } else decodedData = jwt.verify(token, process.env.JWT_SECRET);

  if (!decodedData?.id) return res.status(401).json({ message: 'Unauthorized!!!' });

  try {
    const user = await User.findById(id);

    res.status(200).json({
      message: 'User fetched successfully',
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

const router = express.Router();

export default router;

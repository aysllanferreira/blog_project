/* eslint-disable import/extensions */
import * as dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import userRoutes from './routes/user.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoutes);

const PORT = process.env.PORT || 3300;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.log(error.message));

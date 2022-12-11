import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  age: {
    type: Number,
  },
  bio: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  github: {
    type: String,
  },
  instagram: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model('User', userSchema);

export default User;

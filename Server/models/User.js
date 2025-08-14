import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    _id : {
        type: String , 
        required: true
    },

  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    default: 'Hello, I am using Pixora!'
  },
  profile_picture: {
    type: String,
    default: 'https://via.placeholder.com/150'
  },
  cover_photo: {
    type: String,
    default: 'https://via.placeholder.com/150'
  },
  location: {
    type: String,
    default: '',
  },
  followers: [{
    type: String,
    ref: 'User'
  }],
  following: [{
    type: String,
    ref: 'User'
  }],
  connections: [{
    type: String,
    ref: 'User'
  }],
} , { timestamps: true , minimize: false });

const User = mongoose.model('User', UserSchema);

export default User;

import {Inngest} from 'inngest';
import User from '../models/User.js';

export const inngest = new Inngest({id : "Pixora-app" });



const syncUser = functions.createUser({
  name: 'Sync User',
  description: 'Sync user data with external service',
  handler: async (event) => {
    const { id , first_name , last_name , email_address , image_url } = event.data;
    let username = email_address[0].email_address.split('@')[0];

    const User = await User.findOne({username})

    if(User){
        username = username + Math.floor(Math.random() * 1000);
    }
    const userData = {
        _id: id,
        full_name: first_name + ' ' + last_name,
        email: email_address[0].email_address,
        profile_picture: image_url,
        username
    }
    await User.create(userData);
  },
});

// update user data
export const updateUser = functions.createUser({
  name: 'Update User',
  description: 'Update user data in external service',
  handler: async (event) => {
    const { id, first_name, last_name, email_address, image_url } = event.data;
    const UpdatedUserData = {
        
        full_name: first_name + ' ' + last_name,
        email: email_address[0].email_address,
        profile_picture: image_url
    }
    await User.findByIdAndUpdate(id, UpdatedUserData);
  },
});

// delete user data
export const deleteUser = functions.createUser({
  name: 'Delete User',
  description: 'Delete user data in external service',
  handler: async (event) => {
    const { id } = event.data;
    await User.findByIdAndDelete(id);
  },
});

export const functions = [syncUser, updateUser , deleteUser];

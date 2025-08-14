import { Inngest } from "inngest";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "Pixora-app" });

// Sync user data
export const syncUser = inngest.createFunction(
  { name: "Sync User", id: "sync-user-fn" }, // Explicit unique ID
  { event: "user/sync" }, // Event name that will trigger this function
  async ({ event }) => {
    const { id, first_name, last_name, email_address, image_url } = event.data;

    let username = email_address[0].email_address.split("@")[0];
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      username += Math.floor(Math.random() * 1000);
    }

    const userData = {
      _id: id,
      full_name: `${first_name} ${last_name}`,
      email: email_address[0].email_address,
      profile_picture: image_url,
      username,
    };

    await User.create(userData);
  }
);

// Update user data
export const updateUser = inngest.createFunction(
  { name: "Update User", id: "update-user-fn" },
  { event: "user/update" },
  async ({ event }) => {
    const { id, first_name, last_name, email_address, image_url } = event.data;

    const UpdatedUserData = {
      full_name: `${first_name} ${last_name}`,
      email: email_address[0].email_address,
      profile_picture: image_url,
    };

    await User.findByIdAndUpdate(id, UpdatedUserData);
  }
);

// Delete user data
export const deleteUser = inngest.createFunction(
  { name: "Delete User", id: "delete-user-fn" },
  { event: "user/delete" },
  async ({ event }) => {
    const { id } = event.data;
    await User.findByIdAndDelete(id);
  }
);

export const functions = [syncUser, updateUser, deleteUser];

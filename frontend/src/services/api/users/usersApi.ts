import instance from "@/services/axios/axiosConfig";
import endpoints from "@/services/endpoints/constants";
import type { RegisteredUser, User } from "@/types/type";

// Fetch all users
async function getAllUsers() {
  try {
    const response = await instance.get(endpoints.users);
    return response.data;
  } catch (error) {
    console.error("Error fetching all users", error);
    throw error;
  }
}

// Fetch one user by ID
async function getOneUser(userId: string) {
  try {
    const response = await instance.get(`${endpoints.users}/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}`, error);
    throw error;
  }
}

// Fetch one user by Email
async function getUserByEmail(email: string) {
  try {
    const response = await instance.get(`${endpoints.users}?email=${email}`);
    if (response.data && response.data.length > 0) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error(`Error fetching user by email`, error);
    throw error;
  }
}

// Login user
async function login(credentials: { email: string; password: string }) {
  try {
    const user = await getUserByEmail(credentials.email);
    if (user.length == 0) {
      return {
        message: "User not found!",
        isLogged: false,
        data: null,
      };
    }
    const validUser = user[0].password == credentials.password;
    if (validUser) {
      return {
        message: "Successfully logged in!",
        isLogged: true,
        data: user,
      };
    } else {
      return {
        message: "Invalid email or password!",
        isLogged: false,
        data: null,
      };
    }
  } catch (error) {
    console.error("Error logging in", error);
    throw error;
  }
}

// Register new user
async function register(userData: RegisteredUser) {
  try {
    const duplicateEmail = await getUserByEmail(userData.email);
    console.log(duplicateEmail);
    if (duplicateEmail.length > 0) {
      return {
        message: "duplicate email",
        data: null,
      };
    }
    const response = await instance.post(endpoints.users, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

// Delete user by ID
async function deleteUser(userId: string) {
  try {
    const response = await instance.delete(`${endpoints.users}/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}`, error);
    throw error;
  }
}

// Ban a user by ID
async function banUser(userId: string) {
  try {
    const response = await instance.patch(`${endpoints.users}/${userId}/ban`);
    return response.data;
  } catch (error) {
    console.error(`Error banning user with ID ${userId}`, error);
    throw error;
  }
}

// Unban a user by ID
async function unBanUser(userId: string) {
  try {
    const response = await instance.patch(`${endpoints.users}/${userId}/unban`);
    return response.data;
  } catch (error) {
    console.error(`Error unbanning user with ID ${userId}`, error);
    throw error;
  }
}

// Update user data by ID
async function updateUser(userId: string, userData: User) {
  try {
    const response = await instance.put(
      `${endpoints.users}/${userId}`,
      userData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating user with ID ${userId}`, error);
    throw error;
  }
}

// Create a new user
async function postUser(userData: RegisteredUser) {
  try {
    const response = await instance.post(endpoints.users, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating new user", error);
    throw error;
  }
}

const authController = {
  getAllUsers,
  getOneUser,
  login,
  register,
  deleteUser,
  banUser,
  unBanUser,
  updateUser,
  postUser,
};

export default authController;

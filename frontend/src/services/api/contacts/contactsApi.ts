import type { NewContact } from "../../../types/type";
import instance from "../../axios/axiosConfig";
import endpoints from "../../endpoints/constants";

// Fetch all contacts
async function getAllContacts() {
  try {
    const response = await instance.get(endpoints.contacts);
    return response.data;
  } catch (error) {
    console.error("Error fetching all contacts", error);
    throw error;
  }
}

// Fetch one contact by ID
async function getOneContact(contactId: string) {
  try {
    const response = await instance.get(`${endpoints.contacts}/${contactId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching contact with ID ${contactId}`, error);
    throw error;
  }
}

// Delete contact by ID
async function deleteContact(contactId: string) {
  try {
    const response = await instance.delete(
      `${endpoints.contacts}/${contactId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error deleting contact with ID ${contactId}`, error);
    throw error;
  }
}

// Update contact data by ID
async function updateContact(contactId: string, contactData: any) {
  try {
    const response = await instance.patch(
      `${endpoints.contacts}/${contactId}`,
      contactData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating contact with ID ${contactId}`, error);
    throw error;
  }
}

// Create a new contact
async function postContact(contactData: NewContact) {
  try {
    const response = await instance.post(endpoints.contacts, contactData);
    return response.data;
  } catch (error) {
    console.error("Error creating new contact", error);
    throw error;
  }
}

const contactsController = {
  getAllContacts,
  getOneContact,
  deleteContact,
  updateContact,
  postContact,
};

export default contactsController;

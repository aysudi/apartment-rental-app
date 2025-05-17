import type { NewApartment } from "../../../types/type";
import instance from "../../axios/axiosConfig";
import endpoints from "../../endpoints/constants";

// Fetch all apartments
async function getAllApartments() {
  try {
    const response = await instance.get(endpoints.apartments);
    return response.data;
  } catch (error) {
    console.error("Error fetching all apartments", error);
    throw error;
  }
}

// Fetch one apartment by ID
async function getOneApartment(apartmentId: string) {
  try {
    const response = await instance.get(
      `${endpoints.apartments}?id=${apartmentId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching apartment with ID ${apartmentId}`, error);
    throw error;
  }
}

// Delete apartment by ID
async function deleteApartment(apartmentId: string) {
  try {
    const response = await instance.delete(
      `${endpoints.apartments}/${apartmentId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error deleting apartment with ID ${apartmentId}`, error);
    throw error;
  }
}

// Update apartment data by ID
async function updateApartment(
  apartmentId: string,
  apartmentData: NewApartment
) {
  try {
    const response = await instance.put(
      `${endpoints.apartments}/${apartmentId}`,
      apartmentData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating apartment with ID ${apartmentId}`, error);
    throw error;
  }
}

// Create a new apartment
async function postApartment(apartmentData: NewApartment) {
  try {
    const response = await instance.post(endpoints.apartments, apartmentData);
    return response.data;
  } catch (error) {
    console.error("Error creating new apartment", error);
    throw error;
  }
}

const apartmentsController = {
  getAllApartments,
  getOneApartment,
  deleteApartment,
  updateApartment,
  postApartment,
};

export default apartmentsController;

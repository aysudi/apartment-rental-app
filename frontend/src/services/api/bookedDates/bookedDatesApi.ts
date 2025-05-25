import type { BookedDate } from "@/types/type";
import instance from "../../axios/axiosConfig";
import endpoints from "../../endpoints/constants";

// Fetch all bookedDates
async function getAllBookedDates() {
  try {
    const response = await instance.get(endpoints.bookedDates);
    return response.data;
  } catch (error) {
    console.error("Error fetching all bookedDates", error);
    throw error;
  }
}

// Fetch one bookedDate by ID
async function getOneBookedDate(bookedDateId: string) {
  try {
    const response = await instance.get(
      `${endpoints.bookedDates}?id=${bookedDateId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching bookedDate with ID ${bookedDateId}`, error);
    throw error;
  }
}

// Delete bookedDate by ID
async function deleteBookedDate(bookedDateId: string) {
  try {
    const response = await instance.delete(
      `${endpoints.bookedDates}/${bookedDateId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error deleting bookedDate with ID ${bookedDateId}`, error);
    throw error;
  }
}

// Update bookedDate data by ID
async function updateBookedDate(
  bookedDateId: string,
  bookedDateData: BookedDate
) {
  try {
    const response = await instance.put(
      `${endpoints.bookedDates}/${bookedDateId}`,
      bookedDateData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating bookedDate with ID ${bookedDateId}`, error);
    throw error;
  }
}

// Create a new bookedDate
async function postBookedDate(bookedDateData: BookedDate) {
  try {
    const response = await instance.post(endpoints.bookedDates, bookedDateData);
    return response.data;
  } catch (error) {
    console.error("Error creating new bookedDate", error);
    throw error;
  }
}

const bookedDatesController = {
  getAllBookedDates,
  getOneBookedDate,
  deleteBookedDate,
  updateBookedDate,
  postBookedDate,
};

export default bookedDatesController;

import type { Booking } from "@/types/type";
import instance from "../../axios/axiosConfig";
import endpoints from "../../endpoints/constants";

// Fetch all bookings
async function getAllBookings() {
  try {
    const response = await instance.get(endpoints.bookings);
    return response.data;
  } catch (error) {
    console.error("Error fetching all bookings", error);
    throw error;
  }
}

// Fetch one booking by ID
async function getOneBooking(bookingId: string) {
  try {
    const response = await instance.get(
      `${endpoints.bookings}?id=${bookingId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching booking with ID ${bookingId}`, error);
    throw error;
  }
}

// Delete booking by ID
async function deleteBooking(bookingId: string) {
  try {
    const response = await instance.delete(
      `${endpoints.bookings}/${bookingId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error deleting booking with ID ${bookingId}`, error);
    throw error;
  }
}

// Update booking data by ID
async function updateBooking(bookingId: string, bookingData: Booking) {
  try {
    const response = await instance.put(
      `${endpoints.bookings}/${bookingId}`,
      bookingData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating booking with ID ${bookingId}`, error);
    throw error;
  }
}

// Create a new booking
async function postBooking(bookingData: Booking) {
  try {
    const response = await instance.post(endpoints.bookings, bookingData);
    return response.data;
  } catch (error) {
    console.error("Error creating new booking", error);
    throw error;
  }
}

const bookingsController = {
  getAllBookings,
  getOneBooking,
  deleteBooking,
  updateBooking,
  postBooking,
};

export default bookingsController;

import type { PostedReview } from "@/types/type";
import instance from "../../axios/axiosConfig";
import endpoints from "../../endpoints/constants";

// Fetch all reviews
async function getAllReviews() {
  try {
    const response = await instance.get(endpoints.reviews);
    return response.data;
  } catch (error) {
    console.error("Error fetching all reviews", error);
    throw error;
  }
}

// Fetch one review by ID
async function getOneReview(reviewId: string) {
  try {
    const response = await instance.get(`${endpoints.reviews}?id=${reviewId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching review with ID ${reviewId}`, error);
    throw error;
  }
}

// Delete review by ID
async function deleteReview(reviewId: string) {
  try {
    const response = await instance.delete(`${endpoints.reviews}/${reviewId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting review with ID ${reviewId}`, error);
    throw error;
  }
}

// Update review data by ID
async function updateReview(reviewId: string, reviewData: PostedReview) {
  try {
    const response = await instance.put(
      `${endpoints.reviews}/${reviewId}`,
      reviewData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating review with ID ${reviewId}`, error);
    throw error;
  }
}

// Create a new review
async function postReview(reviewData: PostedReview) {
  try {
    const response = await instance.post(endpoints.reviews, reviewData);
    console.log("hello");
    return response.data;
  } catch (error) {
    console.error("Error creating new review", error);
    throw error;
  }
}

const reviewsController = {
  getAllReviews,
  getOneReview,
  deleteReview,
  updateReview,
  postReview,
};

export default reviewsController;

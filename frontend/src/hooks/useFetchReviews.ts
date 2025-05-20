import { useState, useEffect } from "react";
import reviewsController from "@/services/api/reviews/reviewsApi";

const useFetchReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const data = await reviewsController.getAllReviews();
        setReviews(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch reviews");
        setLoading(false);
      }
    };

    fetchApartments();
  }, []);

  return { reviews, loading, error };
};

export default useFetchReviews;

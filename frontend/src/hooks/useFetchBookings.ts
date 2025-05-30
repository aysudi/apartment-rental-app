import { useState, useEffect } from "react";
import type { CreatedBooking } from "@/types/type";
import bookingsController from "@/services/api/bookings/bookingsApi";

const useFetchBookings = () => {
  const [bookings, setBookings] = useState<CreatedBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await bookingsController.getAllBookings();
        setBookings(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch bookings");
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return { bookings, loading, error };
};

export default useFetchBookings;

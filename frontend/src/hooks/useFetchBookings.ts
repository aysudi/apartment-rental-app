import { useState, useEffect } from "react";
import type { Booking } from "@/types/type";
import bookingsController from "@/services/api/bookings/bookingsApi";

const useFetchBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
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

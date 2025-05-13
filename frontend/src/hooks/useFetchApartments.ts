import { useState, useEffect } from "react";
import apartmentsController from "../services/api/apartments/apartmentsApi";

const useFetchApartments = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const data = await apartmentsController.getAllApartments();
        setApartments(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch apartments");
        setLoading(false);
      }
    };

    fetchApartments();
  }, []);

  return { apartments, loading, error };
};

export default useFetchApartments;

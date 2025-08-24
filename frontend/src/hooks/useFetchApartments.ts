import { useState, useEffect } from "react";
import apartmentsController from "../services/api/apartments/apartmentsApi";
import type { Apartment } from "@/types/type";

const useFetchApartments = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const data = await apartmentsController.getAllApartments();
        console.log("debugging apartments: ", data);
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

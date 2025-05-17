import { useState, useEffect } from "react";
import apartmentsController from "../services/api/apartments/apartmentsApi";
import type { Apartment } from "../types/type";

const useFetchOneApartment = (id: string) => {
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchApartment = async () => {
      try {
        const data = await apartmentsController.getOneApartment(id);
        setApartment(data);
      } catch (err) {
        setError("Failed to fetch apartment");
      } finally {
        setLoading(false);
      }
    };

    fetchApartment();
  }, [id]);

  return { apartment, loading, error };
};

export default useFetchOneApartment;

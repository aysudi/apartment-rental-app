import { useState, useEffect } from "react";
import type { User } from "../types/type";
import authController from "@/services/api/users/usersApi";

const useFetchOneUser = (id: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      try {
        const data = await authController.getOneUser(id);
        setUser(data);
      } catch (err) {
        setError("Failed to fetch user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  return { user, loading, error };
};

export default useFetchOneUser;

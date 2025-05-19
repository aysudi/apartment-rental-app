import authController from "@/services/api/users/usersApi";
import type { User } from "@/types/type";
import {
  createContext,
  useState,
  useContext,
  useEffect,
  type ReactNode,
} from "react";

type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const savedUser = JSON.parse(localStorage.getItem("user") || "null");
      if (savedUser?.id) {
        try {
          const userFromAPI = await authController.getOneUser(savedUser.id);
          setUser(userFromAPI[0]);
        } catch (error) {
          console.error("Error fetching user:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const res = await authController.login(credentials);
      if (res.data.length > 0) {
        const user = res.data[0];
        setUser(user);
        localStorage.setItem(
          "user",
          JSON.stringify({ id: user.id, role: user.role })
        );
        localStorage.setItem("wishlist", JSON.stringify([]));
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("wishlist");
  };

  const value: AuthContextType = {
    user,
    setUser,
    login,
    logout,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

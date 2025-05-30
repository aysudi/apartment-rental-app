import { useAuth } from "@/context/AuthContext";
import type { Apartment } from "@/types/type";
import { Star, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

type Props = {
  apartment: Apartment;
  idx: number;
};

const ApartmentCard = ({ apartment, idx }: Props) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      } catch (err) {
        console.error("Error parsing wishlist from localStorage", err);
      }
    }
  }, []);

  const isFavorite = favorites.includes(apartment.id);

  const toggleFavorite = () => {
    if (!user) {
      navigate("/login");
      toast.error("Login to add the apartment to wishlist");
      return;
    }

    const current = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    ) as string[];

    let updated: string[];
    if (current.includes(apartment.id)) {
      updated = current.filter((id) => id !== apartment.id);
    } else {
      updated = [...current, apartment.id];
    }

    setFavorites(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div
      id={`apartment-card${idx}`}
      className="flex flex-col gap-3 bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative">
        <div className="md:h-[13rem] h-[18rem] lg:h-[18rem] w-full">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={apartment.coverImage}
            alt="Apartment"
          />
        </div>
        <div
          onClick={toggleFavorite}
          className={`absolute top-4 right-4 flex justify-center items-center rounded-full p-2 cursor-pointer ${
            isFavorite ? "bg-red-500" : "bg-white"
          }`}
        >
          <Heart
            className={`${isFavorite ? "text-white" : "text-black"}`}
            size={24}
          />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <Link
          to={`/apartment-details/${apartment.id}`}
          className="font-medium text-lg cursor-pointer hover:underline truncate"
        >
          {apartment.title}
        </Link>
        <p className="text-gray-500 text-sm truncate">{apartment.location}</p>
        <div className="flex items-center gap-2">
          <Star size={16} />
          <span>{apartment.avgRating}</span>
          <span>
            ({apartment.reviews ? apartment.reviews.length : 0} reviews)
          </span>
        </div>
        <div className="flex justify-between items-center gap-2 mt-3 md:flex-col xl:flex-row">
          <div className="flex gap-1 items-center text-lg">
            <span className="font-bold">${apartment.pricePerNight}</span> /{" "}
            <span className="text-gray-600">night</span>
          </div>
          <Link
            to={`/apartment-details/${apartment.id}`}
            className="py-2 px-6 text-sm bg-[#FF9A1E] text-white rounded-md hover:bg-[#f18502] transition-all duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;

import { Star, Heart } from "lucide-react";
import useFetchApartments from "../../../hooks/useFetchApartments";
import type { Apartment } from "../../../types/type";
import { Link } from "react-router";
import ApartmentsSkeleton from "@/components/ApartmentsSkeleton";

const Apartments = () => {
  const { apartments, loading, error } = useFetchApartments();

  if (loading) {
    return <ApartmentsSkeleton />;
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="w-[90%] mx-auto py-[6.1rem] flex flex-col gap-4">
      <h1 className="font-bold text-3xl">Find Your Perfect Apartment</h1>
      <div className=" grid grid-cols-4 mt-2">
        {apartments &&
          apartments.map((apartment: Apartment, idx) => {
            return (
              <div
                key={idx}
                id={`apartment-card${idx}`}
                className="flex flex-col gap-3"
              >
                <div className="relative">
                  <div className="h-[18rem] ">
                    <img
                      className="w-[100%] h-[100%] object-cover rounded-2xl "
                      src={apartment.coverImage}
                      alt=""
                    />
                  </div>
                  <div className="absolute h-5 top-[1rem] right-[1rem] flex justify-center items-center rounded-[50%] px-3 py-5 bg-white cursor-pointer ">
                    <Heart size={19} />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <Link
                    to={`/apartment-details/${apartment.id}`}
                    className="font-medium text-lg cursor-pointer hover:underline "
                  >
                    {apartment.title}
                  </Link>
                  <p className="text-gray-500">{apartment.location} </p>
                  <div className="flex gap-1 items-center">
                    <Star size={16} />
                    <span>{apartment.avgRating} </span>
                    <span>
                      ({apartment.reviews ? apartment.reviews.length : 0}{" "}
                      reviews)
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <div className="flex gap-1 items-center text-lg">
                      <span className="font-bold">
                        ${apartment.pricePerNight}
                      </span>
                      /<span className="text-gray-600">night</span>
                    </div>
                    <Link
                      to={`/apartment-details?id=${apartment.id}`}
                      className="py-2 w-[7rem] rounded-lg border flex items-center justify-center font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Apartments;

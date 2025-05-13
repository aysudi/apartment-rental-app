import { Star } from "lucide-react";
import useFetchApartments from "../../../hooks/useFetchApartments";
import type { Apartment } from "../../../types/type";
import { Link } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";

const Apartments = () => {
  const { apartments, loading, error } = useFetchApartments();

  if (loading) {
    return (
      <div className="w-[90%] mx-auto py-[6.1rem] flex flex-col gap-4">
        <h1 className="font-bold text-3xl">Apartments</h1>
        <div className="grid grid-cols-5 gap-3">
          {[...Array(20)].map((_, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="h-[18rem]">
                <Skeleton className="w-full h-full rounded-2xl" />
              </div>
              <div className="flex justify-between px-3">
                <div className="flex flex-col">
                  <Skeleton className="w-3/4 h-6 mb-2" />
                  <Skeleton className="w-1/2 h-5" />
                  <Skeleton className="w-1/2 h-5" />
                </div>
                <div>
                  <Skeleton className="w-12 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="w-[90%] mx-auto py-[6.1rem] flex flex-col gap-4">
      <h1 className="font-bold text-3xl">Apartments</h1>
      <div className=" grid grid-cols-5 ">
        {apartments &&
          apartments.map((apartment: Apartment, idx) => {
            return (
              <div
                key={idx}
                id={`apartment-card${idx}`}
                className="flex flex-col gap-3"
              >
                <div className="h-[18rem] ">
                  <img
                    className="w-[100%] h-[100%] object-cover rounded-2xl "
                    src={apartment.coverImage}
                    alt=""
                  />
                </div>
                <div className="flex justify-between px-3">
                  <div className="flex flex-col">
                    <Link
                      to={`/apartment-details?id=${apartment.id}`}
                      className="font-medium text-lg cursor-pointer hover:underline "
                    >
                      {apartment.title}
                    </Link>
                    <p className="text-gray-600">{apartment.location} </p>
                    <p className="text-gray-600">{apartment.type} </p>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <Star size={17} />
                      <span>{apartment.avgRating}</span>
                    </div>
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

{
  /* <div className="flex flex-col gap-3">
  <div className="h-[18rem] ">
    <img
      className="w-[100%] h-[100%] object-cover rounded-2xl "
      src="https://a0.muscache.com/im/pictures/26a43325-6538-4d5b-88d3-cf7034fa751e.jpg?im_w=1200"
      alt=""
    />
  </div>
  <div className="flex justify-between px-3">
    <div className="flex flex-col">
      <h4 className="font-medium text-lg">Protaras</h4>
      <p className="text-gray-600">Jul 12-17</p>
    </div>
    <div>
      <div className="flex gap-2 items-center">
        <Star size={17} />
        <span>4.8</span>
      </div>
    </div>
  </div>
</div>; */
}

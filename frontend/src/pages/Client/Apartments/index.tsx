import useFetchApartments from "../../../hooks/useFetchApartments";
import type { Apartment } from "../../../types/type";
import ApartmentsSkeleton from "@/components/ApartmentsSkeleton";
import ApartmentCard from "@/components/ApartmentCard";

const Apartments = () => {
  const { apartments, loading, error } = useFetchApartments();

  if (loading) {
    return <ApartmentsSkeleton />;
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="w-[90%] mx-auto py-[6.1rem] flex flex-col gap-4">
      <h1 className="font-bold text-3xl">Find Your Perfect Apartment</h1>
      <div className=" grid grid-cols-4 mt-2 gap-8">
        {apartments &&
          apartments.map((apartment: Apartment, idx: number) => {
            return <ApartmentCard key={idx} idx={idx} apartment={apartment} />;
          })}
      </div>
    </div>
  );
};

export default Apartments;

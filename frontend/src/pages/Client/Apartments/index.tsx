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
    <div className="w-full max-w-7xl mx-auto pt-[7rem] pb-16 px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-3xl text-center mb-6">
        Find Your Perfect Apartment
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {apartments &&
          apartments.map((apartment: Apartment, idx: number) => (
            <ApartmentCard key={idx} idx={idx} apartment={apartment} />
          ))}
      </div>
    </div>
  );
};

export default Apartments;

import useFetchApartments from "../../../hooks/useFetchApartments";
import type { Apartment } from "../../../types/type";
import ApartmentCard from "@/components/Client/ApartmentCard";
import { useEffect, useState } from "react";
import ApartmentsSearchSortFilter from "@/components/Client/FindApartments/ApartmentsSearchSortFilter";
import ApartmentsSkeleton from "@/components/Client/ApartmentsSkeleton";

const Apartments = () => {
  const { apartments, loading, error } = useFetchApartments();
  const [filteredData, setFilteredData] = useState<Apartment[] | null>(null);

  useEffect(() => {
    if (apartments.length > 0) {
      setFilteredData(apartments);
    }
  }, [apartments]);

  if (loading) {
    return (
      <ApartmentsSkeleton
        setFilteredData={setFilteredData}
        apartments={apartments}
      />
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="w-full max-w-7xl mx-auto pt-[7rem] pb-16 px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-3xl text-center mb-6">Find Your Stay</h1>

      <ApartmentsSearchSortFilter
        setFilteredData={setFilteredData}
        apartments={apartments}
      />

      <h1 className="font-bold text-2xl mb-4 mt-10">Apartments</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
        {filteredData &&
          filteredData.map((apartment: Apartment, idx: number) => (
            <ApartmentCard key={idx} idx={idx} apartment={apartment} />
          ))}
      </div>
    </div>
  );
};

export default Apartments;

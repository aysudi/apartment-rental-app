import ApartmentsSearchSortFilter from "@/components/Client/FindApartments/ApartmentsSearchSortFilter";
import { Skeleton } from "@/components/ui/skeleton";
import type { Apartment } from "@/types/type";

type Props = {
  setFilteredData: React.Dispatch<React.SetStateAction<Apartment[] | null>>;
  apartments: Apartment[];
};

const ApartmentsSkeleton = ({ setFilteredData, apartments }: Props) => {
  return (
    <div className="w-full max-w-7xl mx-auto pt-[7rem] pb-16 px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-3xl text-center mb-6">Find Your Stay</h1>

      <ApartmentsSearchSortFilter
        setFilteredData={setFilteredData}
        apartments={apartments}
      />

      <h1 className="font-bold text-2xl mb-4 mt-10">Apartments</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
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
};

export default ApartmentsSkeleton;

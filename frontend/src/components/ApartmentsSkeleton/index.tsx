import { Skeleton } from "@/components/ui/skeleton";

const ApartmentsSkeleton = () => {
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
};

export default ApartmentsSkeleton;

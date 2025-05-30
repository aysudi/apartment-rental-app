import ApartmentCard from "@/components/ApartmentCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import useFetchApartments from "@/hooks/useFetchApartments";
import type { Apartment } from "@/types/type";

const Wishlist = () => {
  const { apartments, loading, error } = useFetchApartments();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) return <div>{error}</div>;

  const favorites: string[] = JSON.parse(
    localStorage.getItem("wishlist") || "[]"
  );

  return (
    <div className="min-h-full h-[100vh] w-full max-w-7xl mx-auto pt-[7rem] pb-16 px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-3xl">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
        {apartments &&
          apartments.map((apartment: Apartment, idx: number) => {
            if (favorites.includes(apartment.id)) {
              return (
                <ApartmentCard key={idx} idx={idx} apartment={apartment} />
              );
            }
            return null;
          })}
        <div className="w-[100vw]">
          {favorites.length == 0 && (
            <p className="w-full text-lg text-gray-600">
              You haven’t added any apartments to your wishlist yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

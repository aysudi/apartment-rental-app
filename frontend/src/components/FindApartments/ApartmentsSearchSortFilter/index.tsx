import type { Apartment } from "@/types/type";
import ApartmentsPriceRange from "../ApartmentsPriceRange";
import ApartmentsSearch from "../ApartmentsSearch";
import ApartmentsSort from "../ApartmentsSort";
import ApartmentsTypeSet from "../ApartmentsTypeSet";
import { useState } from "react";
import ApartmentsFeaturesFilter from "../ApartmentsFeaturesFilter";
import ApartmentRatingFilter from "../ApartmentRatingFilter";
import { SlidersHorizontal } from "lucide-react";

type Props = {
  setFilteredData: React.Dispatch<React.SetStateAction<Apartment[] | null>>;
  apartments: Apartment[];
};

const ApartmentsSearchSortFilter = ({ setFilteredData, apartments }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("");

  const handleApply = () => {
    let filtered = [...apartments];

    if (searchQuery) {
      filtered = filtered.filter((apt) =>
        [apt.title, apt.location, apt.description]
          .join(" ")
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }

    if (type) {
      filtered = filtered.filter((apt) => apt.type === type);
    }

    if (minPrice) {
      filtered = filtered.filter((apt) => apt.pricePerNight >= +minPrice);
    }
    if (maxPrice) {
      filtered = filtered.filter((apt) => apt.pricePerNight <= +maxPrice);
    }

    if (minRating) {
      filtered = filtered.filter((apt) => apt.avgRating >= +minRating);
    }

    if (features.length > 0) {
      filtered = filtered.filter((apt) =>
        features.every((f) => apt.features.includes(f))
      );
    }

    if (sortBy === "priceLow") {
      filtered.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (sortBy === "priceHigh") {
      filtered.sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.avgRating - a.avgRating);
    } else if (sortBy === "newest") {
      filtered.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
    }

    setFilteredData(filtered);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <SlidersHorizontal size={20} />
          Filter Listings
        </h3>
        <button
          onClick={handleApply}
          className="bg-[#FF9A1E] hover:opacity-90 text-white px-5 py-2 text-sm font-semibold rounded-md shadow cursor-pointer"
        >
          Apply Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ApartmentsSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <ApartmentsTypeSet setType={setType} type={type} />

        <ApartmentsPriceRange
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        <ApartmentsSort sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <ApartmentsFeaturesFilter features={features} setFeatures={setFeatures} />

      <ApartmentRatingFilter
        minRating={minRating}
        setMinRating={setMinRating}
      />
    </div>
  );
};

export default ApartmentsSearchSortFilter;

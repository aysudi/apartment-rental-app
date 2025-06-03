import React, { useState } from "react";
import type { Apartment } from "@/types/type";

type Props = {
  setFeatures: React.Dispatch<React.SetStateAction<string[]>>;
  features: string[];
  apartments: Apartment[];
};

const ApartmentsFeaturesFilter = ({
  apartments,
  setFeatures,
  features,
}: Props) => {
  const [visibleCount, setVisibleCount] = useState(20);

  const toggleFeature = (feature: string) => {
    setFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const allFeatures = Array.from(
    new Set(apartments?.flatMap((apt) => apt.features))
  );

  const isAllShown = visibleCount >= allFeatures.length;

  const handleToggleView = () => {
    if (isAllShown) {
      setVisibleCount(20); // reset to 20
    } else {
      setVisibleCount((prev) => Math.min(prev + 10, allFeatures.length));
    }
  };

  return (
    <div className="mt-6">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Features
      </label>
      <div className="flex flex-wrap gap-3 mb-4">
        {allFeatures.slice(0, visibleCount).map((f) => (
          <button
            key={f}
            onClick={() => toggleFeature(f)}
            className={`px-3 py-1 text-sm rounded-full transition cursor-pointer hover:bg-[#ff9a1ee0] hover:text-white ${
              features.includes(f)
                ? "bg-[#FF9A1E] text-white border-transparent"
                : "bg-gray-100 text-gray-800 border-gray-300"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {allFeatures.length > 20 && (
        <div className="">
          <button
            onClick={handleToggleView}
            className="text-md bg-[#FF9A1E] text-white py-1 px-5 rounded-2xl font-semibold  cursor-pointer"
          >
            {isAllShown ? "Close" : "View more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ApartmentsFeaturesFilter;

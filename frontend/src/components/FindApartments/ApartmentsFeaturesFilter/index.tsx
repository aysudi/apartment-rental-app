type Props = {
  setFeatures: React.Dispatch<React.SetStateAction<string[]>>;
  features: string[];
};

const ApartmentsFeaturesFilter = ({ setFeatures, features }: Props) => {
  const toggleFeature = (feature: string) => {
    setFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const allFeatures = ["Wi-Fi", "Pool", "Kitchen", "AC", "Parking"];

  return (
    <div className="mt-6">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Features
      </label>
      <div className="flex flex-wrap gap-3">
        {allFeatures.map((f) => (
          <button
            key={f}
            onClick={() => toggleFeature(f)}
            className={`px-3 py-1 text-sm rounded-full border transition ${
              features.includes(f)
                ? "bg-[#FF9A1E] text-white border-transparent"
                : "bg-gray-100 text-gray-800 border-gray-300"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ApartmentsFeaturesFilter;

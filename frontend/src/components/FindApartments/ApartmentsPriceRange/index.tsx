type Props = {
  minPrice: string;
  maxPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
};

const ApartmentsPriceRange = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}: Props) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-600">
        Price Range ($)
      </label>
      <div className="flex gap-2 mt-1">
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9A1E]"
        />
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9A1E]"
        />
      </div>
    </div>
  );
};

export default ApartmentsPriceRange;

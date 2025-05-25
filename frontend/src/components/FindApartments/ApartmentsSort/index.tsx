type Props = {
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
};

const ApartmentsSort = ({ sortBy, setSortBy }: Props) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-600">Sort By</label>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="mt-1 w-full border px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-[#FF9A1E]"
      >
        <option value="">Select</option>
        <option value="priceLow">💸 Price: Low to High</option>
        <option value="priceHigh">💰 Price: High to Low</option>
        <option value="rating">⭐ Rating</option>
        <option value="newest">🆕 Newest</option>
      </select>
    </div>
  );
};

export default ApartmentsSort;

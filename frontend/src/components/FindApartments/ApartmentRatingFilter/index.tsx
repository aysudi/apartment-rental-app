type Props = {
  setMinRating: React.Dispatch<React.SetStateAction<string>>;
  minRating: string;
};

const ApartmentRatingFilter = ({ minRating, setMinRating }: Props) => {
  return (
    <div className="mt-6 max-w-xs">
      <label className="block text-sm font-medium text-gray-600">
        Minimum Rating
      </label>
      <input
        type="number"
        step={0.1}
        min="0"
        max="5"
        value={minRating}
        onChange={(e) => setMinRating(e.target.value)}
        className="mt-1 w-full border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9A1E]"
      />
    </div>
  );
};

export default ApartmentRatingFilter;

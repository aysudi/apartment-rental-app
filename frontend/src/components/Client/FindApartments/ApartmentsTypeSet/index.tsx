type Props = {
  setType: React.Dispatch<React.SetStateAction<string>>;
  type: string;
};

const ApartmentsTypeSet = ({ setType, type }: Props) => {
  const allTypes = [
    "apartment",
    "villa",
    "treehouse",
    "castle",
    "studio",
    "house",
    "loft",
    "penthouse",
    "bungalow",
    "farmhouse",
    "resort",
    "mansion",
  ];

  return (
    <div>
      <label className="text-sm font-medium text-gray-600">Type</label>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="mt-1 w-full border px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-[#FF9A1E]"
      >
        <option value="">All Types</option>
        {allTypes &&
          allTypes.map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
      </select>
    </div>
  );
};

export default ApartmentsTypeSet;

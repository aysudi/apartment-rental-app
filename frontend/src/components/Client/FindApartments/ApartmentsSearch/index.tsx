import { Search } from "lucide-react";

type Props = {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
};

const ApartmentsSearch = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-600">Search</label>
      <div className="relative mt-1">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={16}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Keywords or location"
          className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E] text-sm"
        />
      </div>
    </div>
  );
};

export default ApartmentsSearch;

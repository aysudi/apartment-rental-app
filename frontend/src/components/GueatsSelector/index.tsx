const GuestsSelector = ({
  guestsQuantity,
  setGuestsQuantity,
}: {
  guestsQuantity: number;
  setGuestsQuantity: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="flex gap-2 flex-col mt-2">
      <h4 className="font-semibold text-sm">Guests</h4>
      <div className="w-full flex gap-2">
        <span
          onClick={() => setGuestsQuantity((prev) => prev - 1)}
          className="py-2 px-4 border rounded-lg bg-white hover:bg-gray-100 cursor-pointer"
        >
          -
        </span>
        <input
          type="number"
          min="1"
          step="1"
          value={guestsQuantity}
          onChange={(e) => setGuestsQuantity(Number(e.target.value))}
          className="p-2 bg-white w-[75%] rounded-lg border text-center"
        />
        <span
          onClick={() => setGuestsQuantity((prev) => (prev < 6 ? prev + 1 : 6))}
          className="py-2 px-4 border rounded-lg bg-white hover:bg-gray-100 cursor-pointer"
        >
          +
        </span>
      </div>
      <span className="text-gray-500 text-sm">
        This apartment can accommodate up to 6 guests
      </span>
    </div>
  );
};

export default GuestsSelector;

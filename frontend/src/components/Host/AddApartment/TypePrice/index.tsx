const TypePrice = ({ formik }: { formik: any }) => {
  const allTypes = [
    "island",
    "apartment",
    "villa",
    "pool",
    "treehouse",
    "castle",
    "cabin",
    "cottage",
    "townhouse",
    "penthouse",
    "duplex",
    "studio",
    "bungalow",
    "loft",
    "house",
    "farmhouse",
    "resort",
    "tinyhome",
    "mansion",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="relative">
        <label
          htmlFor="type"
          className="block text-xl font-semibold text-gray-800 mb-3"
        >
          Apartment Type
        </label>
        <select
          id="type"
          name="type"
          value={formik.values.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-4 border-2 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E] ${
            formik.touched.type && formik.errors.type
              ? "border-red-500"
              : "border-gray-300"
          }`}
        >
          <option value="">Select type</option>
          {allTypes.map((type, idx) => {
            const formattedType =
              type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
            return (
              <option key={idx} value={type}>
                {formattedType}
              </option>
            );
          })}
        </select>
        {formik.touched.type && formik.errors.type && (
          <div className="text-red-500 text-sm mt-2 ml-1">
            {formik.errors.type}
          </div>
        )}
      </div>

      <div className="relative">
        <label
          htmlFor="pricePerNight"
          className="block text-xl font-semibold text-gray-800 mb-3"
        >
          Price Per Night ($)
        </label>
        <input
          type="number"
          id="pricePerNight"
          name="pricePerNight"
          value={formik.values.pricePerNight}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-4 border-2 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E] ${
            formik.touched.pricePerNight && formik.errors.pricePerNight
              ? "border-red-500"
              : "border-gray-300"
          }`}
          placeholder="Enter price per night"
        />
        {formik.touched.pricePerNight && formik.errors.pricePerNight && (
          <div className="text-red-500 text-sm mt-2 ml-1">
            {formik.errors.pricePerNight}
          </div>
        )}
      </div>
    </div>
  );
};

export default TypePrice;

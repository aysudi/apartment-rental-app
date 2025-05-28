const Description = ({ formik }: { formik: any }) => {
  return (
    <div className="relative">
      <label
        htmlFor="description"
        className="block text-xl font-semibold text-gray-800 mb-3"
      >
        Apartment Description
      </label>
      <textarea
        id="description"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`w-full p-4 border-2 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E] ${
          formik.touched.description && formik.errors.description
            ? "border-red-500"
            : "border-gray-300"
        }`}
        placeholder="Enter apartment description"
      />
      {formik.touched.description && formik.errors.description && (
        <div className="text-red-500 text-sm mt-2 ml-1">
          {formik.errors.description}
        </div>
      )}
    </div>
  );
};

export default Description;

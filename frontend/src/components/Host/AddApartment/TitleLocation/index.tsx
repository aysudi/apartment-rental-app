const TitleLocation = ({ formik }: { formik: any }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="relative">
        <label
          htmlFor="title"
          className="block text-xl font-semibold text-gray-800 mb-3"
        >
          Apartment Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-4 border-2 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E] ${
            formik.touched.title && formik.errors.title
              ? "border-red-500"
              : "border-gray-300"
          }`}
          placeholder="Enter apartment title"
        />
        {formik.touched.title && formik.errors.title && (
          <div className="text-red-500 text-sm mt-2 ml-1">
            {formik.errors.title}
          </div>
        )}
      </div>

      <div className="relative">
        <label
          htmlFor="location"
          className="block text-xl font-semibold text-gray-800 mb-3"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-4 border-2 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E] ${
            formik.touched.location && formik.errors.location
              ? "border-red-500"
              : "border-gray-300"
          }`}
          placeholder="Enter the location of your apartment"
        />
        {formik.touched.location && formik.errors.location && (
          <div className="text-red-500 text-sm mt-2 ml-1">
            {formik.errors.location}
          </div>
        )}
      </div>
    </div>
  );
};

export default TitleLocation;

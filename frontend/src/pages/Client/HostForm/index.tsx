import addApartmentSchema from "@/validation/addApartmentSchema";
import { useFormik } from "formik";
import { useState } from "react";

const HostForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      type: "",
      location: "",
      pricePerNight: "",
      description: "",
      features: [],
      rules: [],
      images: [],
    },
    onSubmit: (values) => {
      console.log("Form submitted", values);
    },
    validationSchema: addApartmentSchema,
  });

  const [featureInput, setFeatureInput] = useState("");
  const [ruleInput, setRuleInput] = useState("");

  const handleAddFeature = () => {
    if (featureInput) {
      formik.setFieldValue("features", [
        ...formik.values.features,
        featureInput,
      ]);
      setFeatureInput("");
    }
  };

  const handleAddRule = () => {
    if (ruleInput) {
      formik.setFieldValue("rules", [...formik.values.rules, ruleInput]);
      setRuleInput("");
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] pt-[7.5rem] pb-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl border-2 border-[#FF9A1E] overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-center text-[#FF9A1E] mb-8 tracking-wide">
            Become a Host & List Your Apartment
          </h1>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Apartment Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

          {/* Apartment Type and Price Per Night in Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Apartment Type */}
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
                <option value="Studio">Studio</option>
                <option value="1-Bedroom">1-Bedroom</option>
                <option value="2-Bedroom">2-Bedroom</option>
                <option value="Penthouse">Penthouse</option>
              </select>
              {formik.touched.type && formik.errors.type && (
                <div className="text-red-500 text-sm mt-2 ml-1">
                  {formik.errors.type}
                </div>
              )}
            </div>

            {/* Price Per Night */}
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

          {/* Features */}
          <div className="relative">
            <label
              htmlFor="features"
              className="block text-xl font-semibold text-gray-800 mb-3"
            >
              Features
            </label>
            <div className="space-y-2">
              {formik.values.features.length > 0 && (
                <div className="flex items-center gap-2 pb-2">
                  {formik.values.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-100 rounded-md"
                    >
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}
              <input
                type="text"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                className={`w-full p-4 border-2 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E] ${
                  formik.touched.features && formik.errors.features
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Add a feature (e.g., Pool, Wi-Fi, etc.)"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="bg-[#FF9A1E] text-white py-2 px-6 rounded-full mt-2 hover:bg-[#e07b0b] transition duration-300 cursor-pointer"
              >
                Add Feature
              </button>
            </div>
          </div>

          {/* Rules */}
          <div className="relative">
            <label
              htmlFor="rules"
              className="block text-xl font-semibold text-gray-800 mb-3"
            >
              Rules
            </label>
            <div className="space-y-2">
              {formik.values.rules.length > 0 && (
                <div className="flex items-center gap-2 pb-2">
                  {formik.values.rules.map((rule, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 px-3 bg-gray-100 rounded-2xl"
                    >
                      <span className="text-sm">{rule}</span>
                    </div>
                  ))}
                </div>
              )}
              <input
                type="text"
                value={ruleInput}
                onChange={(e) => setRuleInput(e.target.value)}
                className={`w-full p-4 border-2 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E] ${
                  formik.touched.rules && formik.errors.rules
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Add a rule (e.g., No Pets, No Smoking, etc.)"
              />
              <button
                type="button"
                onClick={handleAddRule}
                className="bg-[#FF9A1E] text-white py-2 px-6 rounded-full mt-2 hover:bg-[#e07b0b] transition duration-300 cursor-pointer"
              >
                Add Rule
              </button>
            </div>
          </div>

          {/* Upload Images */}
          <div className="relative">
            <label
              htmlFor="images"
              className="block text-xl font-semibold text-gray-800 mb-3"
            >
              Upload Images
            </label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              onChange={(e) => formik.setFieldValue("images", e.target.files)}
              onBlur={formik.handleBlur}
              className={`w-full p-4 border-2 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E] ${
                formik.touched.images && formik.errors.images
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.images && formik.errors.images && (
              <div className="text-red-500 text-sm mt-2 ml-1">
                {formik.errors.images}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-[#FF9A1E] text-white py-4 px-12 rounded-3xl text-xl font-semibold hover:bg-[#e07b0b] transition duration-300 transform hover:scale-105 cursor-pointer"
            >
              Submit Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HostForm;

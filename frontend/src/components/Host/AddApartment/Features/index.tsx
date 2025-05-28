import { useState } from "react";

const Features = ({ formik }: { formik: any }) => {
  const [featureInput, setFeatureInput] = useState("");

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      formik.setFieldValue("features", [
        ...formik.values.features,
        featureInput.trim(),
      ]);
      setFeatureInput("");
    }
  };

  return (
    <div className="relative">
      <label
        htmlFor="features"
        className="block text-xl font-semibold text-gray-800 mb-3"
      >
        Features
      </label>
      <div className="space-y-2">
        {formik.values.features.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pb-2">
            {formik.values.features.map((feature: string, index: string) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-100 rounded-2xl text-sm border border-[#FF9A1E]"
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
  );
};

export default Features;

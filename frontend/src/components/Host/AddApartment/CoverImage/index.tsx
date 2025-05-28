import { useState } from "react";

const CoverImage = ({ formik }: { formik: any }) => {
  const [isCoverImgUrl, setIsCoverImgUrl] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor="coverImage"
        className="block text-xl font-semibold text-gray-800 mb-1"
      >
        Cover Image
      </label>
      <div className="flex gap-1 sm:gap-4 mb-3 flex-col sm:flex-row">
        <button
          type="button"
          onClick={() => setIsCoverImgUrl(false)}
          className={`${
            !isCoverImgUrl ? "bg-[#FF9A1E]" : "bg-gray-300"
          } text-white py-2 px-6 rounded-full mt-2 cursor-pointer`}
        >
          Upload File
        </button>
        <button
          type="button"
          onClick={() => setIsCoverImgUrl(true)}
          className={`${
            isCoverImgUrl ? "bg-[#FF9A1E]" : "bg-gray-300"
          } text-white py-2 px-6 rounded-full mt-2 cursor-pointer`}
        >
          Provide URL
        </button>
      </div>

      {isCoverImgUrl ? (
        <input
          key="cover-url"
          type="text"
          id="coverImage"
          name="coverImage"
          value={formik.values.coverImage || ""}
          onChange={(e) => formik.setFieldValue("coverImage", e.target.value)}
          onBlur={formik.handleBlur}
          className={`w-full p-4 border-2 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E] ${
            formik.touched.coverImage && formik.errors.coverImage
              ? "border-red-500"
              : "border-gray-300"
          }`}
          placeholder="Enter image URL"
        />
      ) : (
        <input
          key="cover-file"
          type="file"
          id="coverImage"
          name="coverImage"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const imageUrl = URL.createObjectURL(file);
              formik.setFieldValue("coverImage", imageUrl);
            }
          }}
          onBlur={formik.handleBlur}
          className={`w-full p-4 border-2 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E] ${
            formik.touched.coverImage && formik.errors.coverImage
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
      )}

      {formik.touched.coverImage && formik.errors.coverImage && (
        <div className="text-red-500 text-sm mt-2 ml-1">
          {formik.errors.coverImage}
        </div>
      )}
    </div>
  );
};

export default CoverImage;

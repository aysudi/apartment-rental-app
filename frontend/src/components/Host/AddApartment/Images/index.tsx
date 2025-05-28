import { useState } from "react";

const Images = ({ formik }: { formik: any }) => {
  const [isImagesUrl, setIsImagesUrl] = useState(false);
  const [imageUrlInput, setImageUrlInput] = useState("");

  const handleAddImageUrl = () => {
    if (imageUrlInput.trim()) {
      if (!formik.values.images.includes(imageUrlInput.trim())) {
        formik.setFieldValue("images", [
          ...(formik.values.images || []),
          imageUrlInput.trim(),
        ]);
      }
      setImageUrlInput("");
    }
  };

  const handleDeleteImage = (index: number) => {
    const updatedImages = formik.values.images.filter(
      (_: string, i: number) => i !== index
    );
    formik.setFieldValue("images", updatedImages);
  };

  return (
    <div className="relative">
      <label
        htmlFor="images"
        className="block text-xl font-semibold text-gray-800 mb-1"
      >
        Images
      </label>

      <div className="flex gap-1 sm:gap-4 mb-3 flex-col sm:flex-row">
        <button
          type="button"
          onClick={() => setIsImagesUrl(false)}
          className={`${
            !isImagesUrl ? "bg-[#FF9A1E]" : "bg-gray-300"
          } text-white py-2 px-6 rounded-full mt-2 cursor-pointer`}
        >
          Upload File
        </button>
        <button
          type="button"
          onClick={() => setIsImagesUrl(true)}
          className={`${
            isImagesUrl ? "bg-[#FF9A1E]" : "bg-gray-300"
          } text-white py-2 px-6 rounded-full mt-2 cursor-pointer`}
        >
          Provide URL
        </button>
      </div>

      {isImagesUrl ? (
        <>
          <input
            key="images-url"
            type="text"
            id="images"
            name="images"
            value={imageUrlInput}
            onChange={(e) => setImageUrlInput(e.target.value)}
            onBlur={formik.handleBlur}
            placeholder="Enter image URL"
            className="w-full p-4 border-2 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E]"
          />
          <button
            type="button"
            onClick={handleAddImageUrl}
            className="bg-[#FF9A1E] text-white py-2 px-4 rounded-full mt-2 cursor-pointer"
          >
            Add URL
          </button>
        </>
      ) : (
        <input
          key="images-file"
          type="file"
          id="images"
          name="images"
          accept="image/*"
          multiple
          onChange={(e) => {
            const files = e.target.files;
            if (files && files.length > 0) {
              const newImageUrls = Array.from(files).map((file) =>
                URL.createObjectURL(file)
              );
              const existingImages = formik.values.images || [];
              const updatedImages = [
                ...existingImages,
                ...newImageUrls.filter((url) => !existingImages.includes(url)),
              ];
              formik.setFieldValue("images", updatedImages);
              e.target.value = "";
            }
          }}
          onBlur={formik.handleBlur}
          className={`w-full p-4 border-2 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E] ${
            formik.touched.images && formik.errors.images
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
      )}

      {formik.touched.images && formik.errors.images && (
        <div className="text-red-500 text-sm mt-2 ml-1">
          {formik.errors.images}
        </div>
      )}

      {/* Display images previews with delete button */}
      {formik.values.images?.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-4">
          {formik.values.images.map((img: string, idx: number) => (
            <div key={idx} className="relative">
              <img
                src={img}
                alt={`Uploaded ${idx}`}
                className="w-22 h-20 object-cover rounded-md border"
              />
              <button
                type="button"
                onClick={() => handleDeleteImage(idx)}
                className="absolute top-[-3px] right-[-6px] bg-gray-400 text-white text-xs rounded-full py-1 px-2 cursor-pointer"
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Images;

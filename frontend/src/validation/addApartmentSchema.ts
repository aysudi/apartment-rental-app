import * as Yup from "yup";

const addApartmentSchema = Yup.object({
  title: Yup.string().required("Apartment title is required"),
  type: Yup.string().required("Apartment type is required"),
  location: Yup.string().required("Location is required"),
  pricePerNight: Yup.number()
    .required("Price per night is required")
    .positive()
    .min(1),
  description: Yup.string().required("Description is required"),
  images: Yup.array().min(1, "At least one image is required"),
});

export default addApartmentSchema;

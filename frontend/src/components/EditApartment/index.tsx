import { useEffect } from "react";
import { useFormik } from "formik";
import { toast } from "sonner";
import apartmentsController from "@/services/api/apartments/apartmentsApi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const apartmentTypes = [
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

const EditApartmentModal = ({
  open,
  onOpenChange,
  apartment,
  setApartment,
  updateApartments,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  apartment: any;
  setApartment: (apt: any) => void;
  updateApartments: (fn: (prev: any[]) => any[]) => void;
}) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      location: "",
      pricePerNight: "",
      coverImage: "",
      description: "",
      type: "apartment",
      images: [],
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        await apartmentsController.updateApartment(apartment.id, values);
        toast.success("Apartment successfully edited");
        updateApartments((prev) =>
          prev.map((apt) =>
            apt.id === apartment.id ? { ...apt, ...values } : apt
          )
        );
        onOpenChange(false);
        setApartment(null);
      } catch (error) {
        toast.error("Failed to update apartment");
      }
    },
  });

  useEffect(() => {
    if (apartment) {
      formik.setValues({
        title: apartment.title || "",
        location: apartment.location || "",
        pricePerNight: apartment.pricePerNight || "",
        coverImage: apartment.coverImage || "",
        description: apartment.description || "",
        type: apartment.type || "apartment",
        images: apartment.images || [],
      });
    }
  }, [apartment]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#FF9A1E]">
            Edit Apartment
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={formik.handleSubmit}
          className="mt-4 grid grid-cols-2 gap-4"
        >
          <div className="col-span-2">
            <label className="block text-sm font-medium">Title</label>
            <Input
              name="title"
              placeholder="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Location</label>
            <Input
              name="location"
              placeholder="Location"
              value={formik.values.location}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Price per Night</label>
            <Input
              type="number"
              name="pricePerNight"
              placeholder="Price per Night"
              value={formik.values.pricePerNight}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              rows={4}
              placeholder="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Cover Image URL</label>
            <Input
              name="coverImage"
              placeholder="Cover Image URL"
              value={formik.values.coverImage}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Type</label>
            <select
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              className="w-full border px-3 py-2 rounded-md"
            >
              {apartmentTypes.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
          {formik.values.images.map((img: string, index: number) => (
            <div key={index} className="col-span-1">
              <label className="block text-sm font-medium">
                Image URL {index + 1}
              </label>
              <Input
                name={`images[${index}]`}
                placeholder={`Image URL ${index + 1}`}
                value={img}
                onChange={formik.handleChange}
              />
            </div>
          ))}
          <div className="col-span-2">
            <Button
              type="submit"
              className="w-full bg-[#FF9A1E] text-white hover:bg-[#e88810] cursor-pointer"
            >
              Update Apartment
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditApartmentModal;

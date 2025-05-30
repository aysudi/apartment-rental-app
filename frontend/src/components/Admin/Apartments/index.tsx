import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import useFetchApartments from "@/hooks/useFetchApartments";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Sparkle, Home, MapPin, DollarSign, ImageIcon } from "lucide-react";

type Apartment = {
  id: string;
  title: string;
  type: string;
  location: string;
  pricePerNight: number;
  coverImage: string;
};

const AdminApartments = () => {
  const { apartments, loading } = useFetchApartments();
  const [open, setOpen] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null
  );
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    location: "",
    pricePerNight: "",
    coverImage: "",
  });

  useEffect(() => {
    if (selectedApartment) {
      setFormData({
        title: selectedApartment.title,
        type: selectedApartment.type,
        location: selectedApartment.location,
        pricePerNight: selectedApartment.pricePerNight.toString(),
        coverImage: selectedApartment.coverImage,
      });
    }
  }, [selectedApartment]);

  const handleEdit = (apt: Apartment) => {
    setSelectedApartment(apt);
    setOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this apartment?")) {
      console.log("Deleting", id);
    }
  };

  const handleSubmit = () => {
    if (selectedApartment) {
      console.log("Updating apartment:", formData);
    } else {
      console.log("Adding new apartment:", formData);
    }
    setOpen(false);
    setSelectedApartment(null);
    setFormData({
      title: "",
      type: "",
      location: "",
      pricePerNight: "",
      coverImage: "",
    });
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-8 bg-gradient-to-br from-white to-orange-50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold flex items-center gap-2 text-[#FF9A1E]">
          <Sparkle className="text-[#FF9A1E]" /> Manage Apartments
        </h1>
        <Button
          className="bg-[#FF9A1E] hover:bg-[#f18502] text-white"
          onClick={() => {
            setSelectedApartment(null);
            setOpen(true);
          }}
        >
          ➕ Add New Apartment
        </Button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow border">
        <Table className="min-w-full bg-white">
          <TableHeader className="bg-[#FF9A1E]/10 text-[#FF9A1E]">
            <TableRow>
              <TableHead>🏠 Title</TableHead>
              <TableHead>🏷️ Type</TableHead>
              <TableHead>📍 Location</TableHead>
              <TableHead>💰 Price</TableHead>
              <TableHead>🖼️ Image</TableHead>
              <TableHead>⚙️ Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apartments.map((apt: Apartment) => (
              <TableRow
                key={apt.id}
                className="hover:bg-orange-50/40 transition-all"
              >
                <TableCell className="font-medium">{apt.title}</TableCell>
                <TableCell>
                  <Badge variant="outline">{apt.type}</Badge>
                </TableCell>
                <TableCell>{apt.location}</TableCell>
                <TableCell>${apt.pricePerNight}</TableCell>
                <TableCell>
                  <img
                    src={apt.coverImage}
                    alt="cover"
                    className="w-20 h-12 object-cover rounded border"
                  />
                </TableCell>
                <TableCell className="space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(apt)}
                  >
                    ✏️ Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(apt.id)}
                  >
                    🗑️ Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#FF9A1E]">
              {selectedApartment ? "Edit Apartment" : "Add New Apartment"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="flex items-center gap-2">
              <Home className="text-[#FF9A1E]" />
              <Input
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Type</Badge>
              <Input
                placeholder="Type"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              />
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-pink-500" />
              <Input
                placeholder="Location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="text-green-500" />
              <Input
                type="number"
                placeholder="Price per Night"
                value={formData.pricePerNight}
                onChange={(e) =>
                  setFormData({ ...formData, pricePerNight: e.target.value })
                }
              />
            </div>
            <div className="flex items-center gap-2">
              <ImageIcon className="text-purple-500" />
              <Input
                placeholder="Cover Image URL"
                value={formData.coverImage}
                onChange={(e) =>
                  setFormData({ ...formData, coverImage: e.target.value })
                }
              />
            </div>
            <Button
              className="w-full mt-4 bg-[#FF9A1E] hover:bg-[#f18502] text-white"
              onClick={handleSubmit}
            >
              {selectedApartment ? "💾 Update Apartment" : "✨ Add Apartment"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminApartments;

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
import { Badge } from "@/components/ui/badge";
import useFetchApartments from "@/hooks/useFetchApartments";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Sparkle } from "lucide-react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import apartmentsController from "@/services/api/apartments/apartmentsApi";
import EditApartmentModal from "@/components/EditApartment";

const AdminApartments = () => {
  const { apartments: initialApartments, loading } = useFetchApartments();
  const [editOpen, setEditOpen] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState<any>(null);
  const [apartmentsState, setApartmentsState] = useState<any[]>([]);

  useEffect(() => {
    if (initialApartments) setApartmentsState(initialApartments);
  }, [initialApartments]);

  const handleEdit = (apartment: any) => {
    setSelectedApartment(apartment);
    setEditOpen(true);
  };

  const handleDelete = (apartmentId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apartmentsController.deleteApartment(apartmentId);
          setApartmentsState((prev) =>
            prev.filter((apartment) => apartment.id !== apartmentId)
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your apartment has been deleted.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong while deleting.",
            icon: "error",
          });
        }
      }
    });
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-8 bg-gradient-to-br from-white to-orange-50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold flex items-center gap-2 text-[#FF9A1E]">
          <Sparkle className="text-[#FF9A1E]" /> Manage Apartments
        </h1>
        <Link
          to={"/admin/add-apartment"}
          className="bg-[#FF9A1E] hover:bg-[#f18502] text-white rounded-xl py-2 px-3"
        >
          ➕ Add New Apartment
        </Link>
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
            {apartmentsState.map((apt) => (
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
                    className="cursor-pointer"
                  >
                    ✏️ Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(apt.id)}
                    className="cursor-pointer"
                  >
                    🗑️ Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <EditApartmentModal
        open={editOpen}
        onOpenChange={setEditOpen}
        apartment={selectedApartment}
        setApartment={setSelectedApartment}
        updateApartments={setApartmentsState}
      />
    </div>
  );
};

export default AdminApartments;

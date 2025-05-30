import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useFetchBookings from "@/hooks/useFetchBookings";
import LoadingSpinner from "@/components/LoadingSpinner";
import {
  CalendarDays,
  DollarSign,
  User2,
  Home,
  MapPin,
  CheckCircle,
  XCircle,
} from "lucide-react";
import type { CreatedBooking } from "@/types/type";

const AdminBookingsPage = () => {
  const { bookings, loading } = useFetchBookings();
  const [processingId, setProcessingId] = useState<string | null>(null);

  const handleStatusUpdate = (
    id: string,
    newStatus: "confirmed" | "cancelled"
  ) => {
    setProcessingId(id);
    setTimeout(() => {
      console.log(`Booking ${id} set to ${newStatus}`);
      setProcessingId(null);
    }, 800);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="px-8 py-14 bg-gradient-to-br from-gray-50 via-white to-orange-50 min-h-screen">
      <h1 className="text-4xl font-bold text-[#FF9A1E] mb-6 flex items-center gap-2">
        <CalendarDays className="text-[#FF9A1E]" /> Manage Bookings
      </h1>

      <div className="overflow-x-auto rounded-lg shadow border">
        <Table className="min-w-full bg-white">
          <TableHeader className="bg-[#FF9A1E]/10 text-[#FF9A1E]">
            <TableRow>
              <TableHead>👤 User</TableHead>
              <TableHead>🏠 Apartment</TableHead>
              <TableHead>📍 Location</TableHead>
              <TableHead>💰 Total</TableHead>
              <TableHead>📆 Date</TableHead>
              <TableHead>🚦 Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking: CreatedBooking, idx) => (
              <TableRow
                key={idx}
                className="hover:bg-orange-50/40 transition-all"
              >
                <TableCell className="py-4">
                  <div className="flex flex-col">
                    <span className="flex items-center gap-1 font-medium text-blue-600">
                      <User2 className="w-4 h-4" /> {booking.user.username}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {booking.user.email}
                    </span>
                  </div>
                </TableCell>

                <TableCell className="py-4 text-orange-600 font-medium">
                  <div className="flex items-center gap-1">
                    <Home className="w-4 h-4" /> {booking.apartment.title}
                  </div>
                </TableCell>

                <TableCell className="py-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-pink-500" />
                    {booking.apartment.location}
                  </div>
                </TableCell>

                <TableCell className="py-4 text-green-600 font-semibold">
                  <DollarSign className="inline w-4 h-4" /> $
                  {booking.totalPrice}
                </TableCell>

                <TableCell className="py-4">
                  {new Date(booking.createdAt).toLocaleDateString("en-GB")}
                </TableCell>

                <TableCell className="py-4">
                  {booking.status === "pending" ? (
                    <div className="flex flex-col gap-2 items-start">
                      <Badge
                        variant="secondary"
                        className="w-fit px-2 py-1 rounded-full text-xs"
                      >
                        ⏳ Pending Confirmation
                      </Badge>
                      <div className="flex gap-2 mt-1">
                        <Button
                          size="sm"
                          className="flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-3 py-1 text-sm cursor-pointer"
                          disabled={processingId === booking.id}
                          onClick={() =>
                            handleStatusUpdate(booking.id, "confirmed")
                          }
                        >
                          <CheckCircle className="w-4 h-4" /> Confirm
                        </Button>
                        <Button
                          size="sm"
                          className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white rounded-full px-3 py-1 text-sm cursor-pointer"
                          disabled={processingId === booking.id}
                          onClick={() =>
                            handleStatusUpdate(booking.id, "cancelled")
                          }
                        >
                          <XCircle className="w-4 h-4" /> Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex justify-center">
                      <Badge
                        variant={
                          booking.status === "cancelled"
                            ? "destructive"
                            : "default"
                        }
                        className="capitalize"
                      >
                        {booking.status}
                      </Badge>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminBookingsPage;

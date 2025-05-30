import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import useFetchBookings from "@/hooks/useFetchBookings";
import LoadingSpinner from "@/components/LoadingSpinner";
import { CalendarDays, DollarSign, User2, Home } from "lucide-react";

const AdminBookings = () => {
  const { bookings, loading } = useFetchBookings();

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 via-white to-orange-50 min-h-screen">
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
            {bookings.map((booking, idx) => (
              <TableRow
                key={idx}
                className="hover:bg-orange-50/40 transition-all"
              >
                <TableCell className="flex flex-col gap-1">
                  <span className="flex items-center gap-1 font-medium">
                    <User2 className="w-4 h-4 text-blue-500" />
                    {booking.user.username}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {booking.user.email}
                  </span>
                </TableCell>
                <TableCell className="flex items-center gap-1">
                  <Home className="w-4 h-4 text-[#FF9A1E]" />
                  {booking.apartment.title}
                </TableCell>
                <TableCell>{booking.apartment.location}</TableCell>
                <TableCell className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-green-500" />$
                  {booking.totalPrice}
                </TableCell>
                <TableCell>
                  {new Date(booking.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      booking.status === "cancelled"
                        ? "destructive"
                        : booking.status === "completed"
                        ? "default"
                        : "secondary"
                    }
                    className="capitalize"
                  >
                    {booking.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminBookings;

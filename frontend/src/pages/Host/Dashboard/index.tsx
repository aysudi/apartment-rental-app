import LoadingSpinner from "@/components/LoadingSpinner";
import { useAuth } from "@/context/AuthContext";
import useFetchApartments from "@/hooks/useFetchApartments";
import React from "react";
import LineChart from "@/components/Host/Dashboard/LineChart";
import BarChart from "@/components/Host/Dashboard/BarChart";
import PieChart from "@/components/Host/Dashboard/PieChart";

const HostDashboard: React.FC = () => {
  const { apartments: allApartments, loading } = useFetchApartments();
  const { user, loading: userLoading } = useAuth();

  if (loading || userLoading) return <LoadingSpinner />;

  const apartments = allApartments?.filter((app) => app.host.id == user?.id);

  const totalRevenue = apartments.reduce(
    (acc, apt) => acc + apt.pricePerNight * apt.rentalCount,
    0
  );

  return (
    <div className="px-6 py-10 space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#FF9A1E]">Host Dashboard</h1>
        <div className="space-x-4">
          <button className="bg-[#FF9A1E] text-white px-6 py-2 rounded-lg hover:bg-[#e88810] cursor-pointer">
            Add New Apartment
          </button>
          <button className="bg-[#36A2EB] text-white px-6 py-2 rounded-lg hover:bg-[#2e8fca] cursor-pointer">
            View Bookings
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#FF9A1E]">
          <h2 className="text-xl font-semibold">Total Revenue</h2>
          <p className="text-3xl font-bold text-[#FF9A1E]">
            ${totalRevenue.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#36A2EB]">
          <h2 className="text-xl font-semibold">Total Bookings</h2>
          <p className="text-3xl font-bold text-[#36A2EB]">
            {apartments.reduce((acc, apt) => acc + apt.rentalCount, 0)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#FF6384]">
          <h2 className="text-xl font-semibold">Apartments Listed</h2>
          <p className="text-3xl font-bold text-[#FF6384]">
            {apartments.length}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LineChart apartments={apartments} />

        <BarChart apartments={apartments} />
      </div>

      <PieChart apartments={apartments} />
    </div>
  );
};

export default HostDashboard;

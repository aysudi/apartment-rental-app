import type { Apartment } from "@/types/type";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
} from "recharts";

const BarChart = ({ apartments }: { apartments: Apartment[] }) => {
  const barChartData = apartments.map((apt) => ({
    name: apt.title,
    bookings: apt.rentalCount,
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Bookings by Apartment</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsBarChart data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="bookings" fill="#FF9A1E" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;

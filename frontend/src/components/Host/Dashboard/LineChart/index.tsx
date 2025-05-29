import {
  LineChart as RechartsLineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
} from "recharts";
import dayjs from "dayjs";
import type { Apartment } from "@/types/type";

const ApartmentRevenueChart = ({ apartments }: { apartments: Apartment[] }) => {
  const lineChartData = apartments.map((apt) => ({
    date: dayjs(apt.createdAt).format("MMM D"),
    revenue: apt.pricePerNight * apt.rentalCount,
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Revenue Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsLineChart data={lineChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ApartmentRevenueChart;

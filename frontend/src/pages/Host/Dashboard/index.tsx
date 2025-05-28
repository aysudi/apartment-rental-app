import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Sample Data for the charts
const lineChartData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4000 },
  { name: "May", revenue: 6000 },
  { name: "Jun", revenue: 5500 },
  { name: "Jul", revenue: 7000 },
];

const barChartData = [
  { name: "Apt 1", bookings: 12 },
  { name: "Apt 2", bookings: 19 },
  { name: "Apt 3", bookings: 3 },
  { name: "Apt 4", bookings: 5 },
  { name: "Apt 5", bookings: 2 },
];

const pieChartData = [
  { name: "Pending", value: 25 },
  { name: "Completed", value: 40 },
  { name: "Cancelled", value: 35 },
];

const HostDashboard: React.FC = () => {
  return (
    <div className="px-6 py-10 space-y-10">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#FF9A1E]">Host Dashboard</h1>
        <div className="space-x-4">
          <button className="bg-[#FF9A1E] text-white px-6 py-2 rounded-lg hover:bg-[#e88810]">
            Add New Apartment
          </button>
          <button className="bg-[#36A2EB] text-white px-6 py-2 rounded-lg hover:bg-[#2e8fca]">
            View Bookings
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 - Total Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#FF9A1E]">
          <h2 className="text-xl font-semibold">Total Revenue</h2>
          <p className="text-3xl font-bold text-[#FF9A1E]">$45,000</p>
        </div>

        {/* Card 2 - Total Bookings */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#36A2EB]">
          <h2 className="text-xl font-semibold">Total Bookings</h2>
          <p className="text-3xl font-bold text-[#36A2EB]">150</p>
        </div>

        {/* Card 3 - Pending Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#FF6384]">
          <h2 className="text-xl font-semibold">Pending Tasks</h2>
          <p className="text-3xl font-bold text-[#FF6384]">7</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart - Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Revenue Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Bookings by Apartment */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Bookings by Apartment</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="bookings" fill="#FF9A1E" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Doughnut Chart - Task Status */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Task Status</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#FF9A1E"
              paddingAngle={5}
            >
              {pieChartData.map((entry, index) => {
                console.log(entry);
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={["#FF9A1E", "#36A2EB", "#FF6384"][index]}
                  />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HostDashboard;

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";
import useFetchBookings from "@/hooks/useFetchBookings";
import useFetchApartments from "@/hooks/useFetchApartments";
import useFetchUsers from "@/hooks/useFetchUsers";
import LoadingSpinner from "@/components/LoadingSpinner";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a4de6c"];

const AdminDashboard = () => {
  const { apartments, loading: apartmentsLoading } = useFetchApartments();
  const { users, loading: usersLoading } = useFetchUsers();
  const { bookings, loading: bookingsLoading } = useFetchBookings();

  if (usersLoading || apartmentsLoading || bookingsLoading)
    return <LoadingSpinner />;

  const totalEarnings = bookings.reduce((sum, b) => sum + b.totalPrice, 0);

  const bookingsChart = bookings.map((booking) => ({
    name: booking.apartment.title,
    price: booking.totalPrice,
  }));

  const userRoleDistribution = [
    { name: "admin", value: users.filter((u) => u.role === "admin").length },
    { name: "host", value: users.filter((u) => u.role === "host").length },
    { name: "client", value: users.filter((u) => u.role === "client").length },
  ];

  const apartmentTypes = apartments.reduce(
    (acc: Record<string, number>, apt) => {
      acc[apt.type] = (acc[apt.type] || 0) + 1;
      return acc;
    },
    {}
  );
  const apartmentTypeChart = Object.keys(apartmentTypes).map((key) => ({
    name: key,
    value: apartmentTypes[key],
  }));

  const revenueOverTime = bookings.map((b) => ({
    date: new Date(b.createdAt).toLocaleDateString(),
    revenue: b.totalPrice,
  }));

  return (
    <div className="px-6 py-12 space-y-8 bg-gradient-to-br from-slate-100 via-white to-slate-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">
        📊 Admin Dashboard
      </h1>

      <Tabs defaultValue="overview">
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg">
              <CardContent className="p-6 space-y-2">
                <h2 className="text-sm text-muted-foreground">Total Users</h2>
                <p className="text-3xl font-extrabold text-blue-800">
                  {users.length}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-100 to-green-50 shadow-lg">
              <CardContent className="p-6 space-y-2">
                <h2 className="text-sm text-muted-foreground">
                  Total Bookings
                </h2>
                <p className="text-3xl font-extrabold text-green-800">
                  {bookings.length}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-yellow-100 to-yellow-50 shadow-lg">
              <CardContent className="p-6 space-y-2">
                <h2 className="text-sm text-muted-foreground">
                  Total Earnings
                </h2>
                <p className="text-3xl font-extrabold text-yellow-800">
                  ${totalEarnings.toFixed(2)}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">
                  📊 Revenue by Apartment
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={bookingsChart}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="price" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">
                  👥 User Role Distribution
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={userRoleDistribution}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={100}
                    >
                      {userRoleDistribution.map((entry, index) => {
                        console.log(entry);
                        return (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        );
                      })}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">
                  🏠 Apartment Types
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={apartmentTypeChart}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={40}
                      outerRadius={80}
                    >
                      {apartmentTypeChart.map((entry, index) => {
                        console.log(entry);
                        return (
                          <Cell
                            key={`type-cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        );
                      })}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">
                  📅 Revenue Over Time
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueOverTime}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#ff7f50"
                      strokeWidth={2}
                    />
                    <Legend />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;

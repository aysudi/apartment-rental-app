import type { Apartment } from "@/types/type";
import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "recharts";

const PieChart = ({ apartments }: { apartments: Apartment[] }) => {
  const typeCounts: Record<string, number> = {};
  apartments.forEach((apt) => {
    typeCounts[apt.type] = (typeCounts[apt.type] || 0) + 1;
  });

  const pieChartData = Object.entries(typeCounts).map(([type, count]) => ({
    name: type,
    value: count,
  }));

  const COLORS = ["#FF9A1E", "#36A2EB", "#FF6384", "#4BC0C0", "#9966FF"];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Apartment Types</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsPieChart>
          <Pie
            data={pieChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            paddingAngle={5}
          >
            {pieChartData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;

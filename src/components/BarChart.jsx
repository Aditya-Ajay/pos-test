import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", value: 20000 },
  { month: "Feb", value: 40000 },
  { month: "Mar", value: 60000 },
  { month: "Apr", value: 80000 },
  { month: "May", value: 100000 },
  { month: "Jun", value: 75000 },
  { month: "Jul", value: 55000 },
  { month: "Aug", value: 65000 },
  { month: "Sep", value: 90000 },
  { month: "Oct", value: 40000 },
  { month: "Nov", value: 30000 },
  { month: "Dec", value: 100000 },
];

const Barchart = () => {
  return (
   
    <div className="chart-box">
      <h2 className="title">Monthly Sales Bar Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(tick) => `${tick / 1000}k`} />
          <Tooltip formatter={(value) => `${value / 1000}k`} />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;

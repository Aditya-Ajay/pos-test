import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 40000 },
  { name: "Feb", value: 30000 },
  { name: "Mar", value: 50000 },
  { name: "Apr", value: 70000 },
  { name: "May", value: 60000 },
  { name: "Jun", value: 80000 },
  { name: "Jul", value: 85000 },
  { name: "Aug", value: 75000 },
  { name: "Sep", value: 55000 },
  { name: "Oct", value: 62000 },
  { name: "Nov", value: 73000 },
  { name: "Dec", value: 84000 },
];


function CustomAreaChart() {
  return (
    <ResponsiveContainer width="100%" height={330} style={{marginTop:'4%'}}>
      
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
      >
        <CartesianGrid
                  stroke="#206A47"
          // strokeDasharray="3 3"
          strokeOpacity={0.1}
          vertical={false} // Removes vertical (Y-axis) grid lines
        />
        <defs>
          <clipPath id="clip-path">
            <rect x="0" y="0" width="100%" height="100%" />
          </clipPath>
        </defs>

        {/* X Axis with Custom Font Size */}
        <XAxis
          dataKey="name"
          tick={{ fill: "#4B4F53", fontSize: 14 }}
          tickMargin={10} // Added margin for spacing between tick and graph
        />

        {/* Y Axis with Hardcoded Coordinates */}
        <YAxis
          ticks={[0, 20000, 40000, 60000, 80000, 100000]} // Hardcoded tick values in raw numbers
          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} // Format to display $0K, $20K, $40K, etc.
          tick={{ fill: "#4B4F53", fontSize: 14 }}
          axisLine={false}
          tickLine={false}
          tickMargin={10} // Added margin for spacing between tick and graph
        />

        <Tooltip />

        

        <defs>
        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#93F8BE" stopOpacity={1} />
    <stop offset="30%" stopColor="#93F8BE" stopOpacity={0.9} />
    <stop offset="50%" stopColor="#93F8BE" stopOpacity={0.7} />
    <stop offset="60%" stopColor="#93F8BE" stopOpacity={0.5} />
    <stop offset="80%" stopColor="#CFFFE0" stopOpacity={0.3} />
    <stop offset="90%" stopColor="#FFFFFF" stopOpacity={0.15} />
    <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.1} />
</linearGradient>

        </defs>

        <Area
          type="monotone"
          dataKey="value"
          stroke="#24983F"
          strokeWidth={3}
          fill="url(#colorGradient)"
          clipPath="url(#clip-path)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default CustomAreaChart;

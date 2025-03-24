import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRevenueAnalytics } from "../redux/Analytics/AnalyticsSlice";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function CustomAreaChart({ timeRange }) {
  const dispatch = useDispatch();
  const { revenueData ,statusRevenueAnalytics} = useSelector((state) => state.analytics);

  useEffect(() => {
    dispatch(fetchRevenueAnalytics(timeRange))
  }, [dispatch, timeRange]);

  // Generate X-axis labels based on timeRange
  const getXAxisLabels = ()  => {
    switch (timeRange) {
      case "today":
        return Array.from({ length: 24 }, (_, i) => `${i % 12 || 12} ${i < 12 ? "AM" : "PM"} - ${(i + 1) % 12 || 12} ${i + 1 < 12 ? "AM" : "PM"}`);
      case "week":
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      case "month":
        return ["Week 1", "Week 2", "Week 3", "Week 4"];
      case "year":
        return ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Septr", "Oct", "Nov", "Dec"];
      default:
        return [];
    }
  };

  // Map revenueData to match the X-axis labels
  const xAxisLabels = getXAxisLabels();
  const chartData = xAxisLabels.map((label, index) => ({
    name: label,
    revenue: revenueData[index]?.revenue || 0,
    profit: revenueData[index]?.profit || 0,
  }));

  return (
    <div className="relative">
      {statusRevenueAnalytics=== "loading" && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-500"></div>
        </div>
      )}
      
      <ResponsiveContainer width="100%" height={330} style={{ marginTop: "4%" }}>
        <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 50, bottom: 20 }}>
          <CartesianGrid stroke="#206A47" strokeOpacity={0.1} vertical={false} />

          <defs>
            <linearGradient id="colorGradientProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#93F8BE" stopOpacity={1} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.1} />
            </linearGradient>
            
            <linearGradient id="colorGradientValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B7E2E9" stopOpacity={1} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" tick={{ fill: "#4B4F53", fontSize: 14 }} tickMargin={10} />
          <YAxis
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
            tick={{ fill: "#4B4F53", fontSize: 14 }}
            axisLine={false}
            tickLine={false}
            tickMargin={10}
          />
          
          <Tooltip />
          
          <Area type="monotone" dataKey="profit" stroke="#24983F" strokeWidth={3} fill="url(#colorGradientProfit)" />
          <Area type="monotone" dataKey="revenue" stroke="#1593A7" strokeWidth={3} fill="url(#colorGradientValue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomAreaChart;
  
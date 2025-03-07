import { 
    AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer, 
    CartesianGrid 
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
  
  const maxValue = Math.max(...data.map((d) => d.value));
  
  const SimpleAreaChart = () => {
    return (
      <div className="chart-box">
        <h2 className="title">Monthly Sales Area Chart</h2>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data} background="#fff"> {/* Set chart background to white */}
            <defs>
              {/* Linear gradient with smooth fade */}
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#008000" stopOpacity={1} />  {/* Solid green */}
                <stop offset="100%" stopColor="#008000" stopOpacity={0.1} /> {/* Fading green */}
              </linearGradient>
            </defs>
  
            {/* CartesianGrid: Only horizontal lines above the green area */}
            <CartesianGrid stroke="#ccc" strokeDasharray="0 0" vertical={false} horizontal={true} />
  
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(tick) => `${tick / 1000}k`} domain={[0, maxValue + 20000]} />
            <Tooltip formatter={(value) => `$${(value / 1000).toFixed(1)}k`} />
  
            {/* Area with smooth gradient */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#006400" // Bold dark green border
              strokeWidth={3}
              fill="url(#colorGreen)" // Gradient fill
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default SimpleAreaChart;
  
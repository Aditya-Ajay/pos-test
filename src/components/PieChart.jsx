import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "First Time", value: 400, color: "#302691" },
  { name: "Repeat", value: 300, color: "#FF6313" }
];

const PieChartWithOverlap = () => {
  return (
    <div className="box">
      <div className="flex mt-[-28px] justify-between">
        <div>
          <h4
            className="font-inter font-semibold text-xl leading-[24.2px] pt-2.5"
            style={{ width: '300px', fontWeight: '640', height: '24px', fontSize: '1.9rem' }}
          >
            Customer Analytics
          </h4>        </div>
        <div className="flex gap-2">
          <button className="border border-black-200 text-gray-500 px-5 py-2 rounded-sm text-xl">
            Today</button>
          <button className="border border-black-200 text-gray-500 px-5 py-2 rounded-sm text-xl">
            Week</button>
          <button className="border border-black-200 text-gray-500 px-5 py-2 rounded-sm text-xl">
            Month</button>
          <button className="border border-black-200 text-gray-500 px-5 py-2 rounded-sm text-xl">
            Year</button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <ResponsiveContainer width="50%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70} // Adjusted to give some overlap space
              outerRadius={100}
              paddingAngle={0} // No space between slices
              dataKey="value"
              startAngle={0}
              endAngle={360}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="none" // Ensures no borders between slices
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-around items-start pr-2 w-1/2">
          {data.map((entry, index) => (
            <div key={index} className="flex flex-col items-center gap-5">
              <div className="text-4xl font-semibold">{entry.value}</div>
              <div className="text-4xl" style={{ color: entry.color }}>
                {entry.name}
              </div>
              <div className="flex items-center gap-1 border border-green-300 bg-green-100 p-1 mt-1 w-20">
                <span className="text-green-900 text-xl">↑</span>
                <span className="text-green-900 text-xl">+22%</span>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default PieChartWithOverlap;

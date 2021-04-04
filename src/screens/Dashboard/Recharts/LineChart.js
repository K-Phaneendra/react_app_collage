import React from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const RELineChart = (props) => {
  const data = [
    { name: "Page A", uv: 300 },
    { name: "Page B", uv: 220 },
    { name: "Page C", uv: 430 },
    { name: "Page D", uv: 410 },
  ];

  return (
    // <ResponsiveContainer>
    <LineChart width={300} height={400}  data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    </LineChart>
    // </ResponsiveContainer>
  );
};

export default RELineChart;

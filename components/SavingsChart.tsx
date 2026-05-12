"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Current Spend",
    value: 1500,
  },
  {
    name: "Optimized Spend",
    value: 960,
  },
];

export default function SavingsChart() {
  return (
    <div className="w-full h-[350px]">

      <ResponsiveContainer width="100%" height="100%">

        <BarChart data={data}>

          <XAxis dataKey="name" stroke="#888888" />

          <YAxis stroke="#888888" />

          <Tooltip />

          <Bar
            dataKey="value"
            radius={[12, 12, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}
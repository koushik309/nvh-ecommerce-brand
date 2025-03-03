"use client";

import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const data = [
  {
    name: "Eternal Youth",
    revenue: 18500,
    growth: 24,
  },
  {
    name: "Silken Touch",
    revenue: 15200,
    growth: 18,
  },
  {
    name: "Pure Bliss",
    revenue: 12800,
    growth: 15,
  },
  {
    name: "Radiance Revival",
    revenue: 9600,
    growth: 12,
  },
  {
    name: "Velvet Veil",
    revenue: 8200,
    growth: 8,
  },
];

export function ProductPerformanceChart() {
  return (
    <ChartContainer
      config={{
        sales: {
          label: "Sales",
          color: "hsl(var(--primary))",
        },
      }}
    >
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ left: 20, bottom: 20, top: 20, right: 20 }}
        >
          <XAxis
            type="number"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <YAxis
            type="category"
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            width={100}
          />
          <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
          <Legend />
          <Bar
            dataKey="revenue"
            name="Revenue"
            fill="currentColor"
            className="fill-primary"
            radius={[0, 4, 4, 0]}
          ></Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

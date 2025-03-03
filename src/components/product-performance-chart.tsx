"use client";

import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
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
    ></ChartContainer>
  );
}

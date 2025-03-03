"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { ageGroup: "18-24", customers: 15, fill: "#999999" },
  { ageGroup: "25-34", customers: 30, fill: "#ffffff" },
  { ageGroup: "35-44", customers: 25, fill: "#cccccc" },
  { ageGroup: "45-54", customers: 18, fill: "#aaaaaa" },
  { ageGroup: "55-64", customers: 8, fill: "#777777" },
  { ageGroup: "65+", customers: 4, fill: "#555555" },
];

const chartConfig = {
  customers: {
    label: "Customers",
  },
  "18-24": {
    label: "18-24",
    color: "#999999",
  },
  "25-34": {
    label: "25-34",
    color: "#ffffff",
  },
  "35-44": {
    label: "35-44",
    color: "#cccccc",
  },
  "45-54": {
    label: "45-54",
    color: "#aaaaaa",
  },
  "55-64": {
    label: "55-64",
    color: "#777777",
  },
  "65+": {
    label: "65+",
    color: "#555555",
  },
} satisfies ChartConfig;

export function CustomerValueChart() {
  const totalCustomers = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.customers, 0);
  }, []);

  return (
    <Card className="flex flex-col h-full border-0 bg-transparent">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[280px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="customers"
              nameKey="ageGroup"
              innerRadius={60}
              strokeWidth={1}
              stroke="#ffffff"
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalCustomers.toLocaleString()}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-xs"
                        >
                          Customers
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm pt-2">
        <div className="flex items-center gap-2 font-medium leading-none">
          Primary demographic: 25-34 age group{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground text-xs">
          55% of customers are between 25-44 years old
        </div>
      </CardFooter>
    </Card>
  );
}

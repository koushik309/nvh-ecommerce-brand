"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { day: 1, sales: 2100, profits: 525 },
  { day: 2, sales: 2200, profits: 550 },
  { day: 3, sales: 2200, profits: 500 },
  { day: 4, sales: 2200, profits: 575 },
  { day: 5, sales: 2200, profits: 625 },
  { day: 6, sales: 2200, profits: 600 },
  { day: 7, sales: 2200, profits: 650 },
  { day: 8, sales: 2500, profits: 625 },
  { day: 9, sales: 2700, profits: 675 },
  { day: 10, sales: 2800, profits: 700 },
  { day: 11, sales: 2600, profits: 650 },
  { day: 12, sales: 2900, profits: 725 },
  { day: 13, sales: 2700, profits: 675 },
  { day: 14, sales: 1800, profits: 430 },
  { day: 15, sales: 1700, profits: 400 },
  { day: 16, sales: 1600, profits: 385 },
  { day: 17, sales: 2000, profits: 550 },
  { day: 18, sales: 3200, profits: 850 },
  { day: 19, sales: 3200, profits: 800 },
  { day: 20, sales: 3200, profits: 875 },
  { day: 21, sales: 3200, profits: 825 },
  { day: 22, sales: 3600, profits: 900 },
  { day: 23, sales: 3400, profits: 850 },
  { day: 24, sales: 3700, profits: 925 },
  { day: 25, sales: 3900, profits: 975 },
  { day: 26, sales: 3800, profits: 950 },
  { day: 27, sales: 4000, profits: 1000 },
  { day: 28, sales: 4200, profits: 1050 },
];

const chartConfig = {
  sales: {
    label: "sales",
    color: "hsl(var(--chart-1))",
  },
  profits: {
    label: "profits",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function SalesChart() {
  return (
    <Card className="w-full h-min pt-5 bg-muted/50">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sales)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-sales)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-profits)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-profits)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="sales"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-profits)"
              stackId="a"
            />
            <Area
              dataKey="profits"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-sales)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

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
  { stage: "Total Traffic", visitors: 19200 },
  { stage: "Product Page", visitors: 10120 },
  { stage: "Add to Cart", visitors: 4860 },
  { stage: "Checkout", visitors: 2110 },
  { stage: "Purchases", visitors: 820 },
];

const chartConfig = {
  visitors: {
    label: "visitors",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function TraficsChart() {
  return (
    <Card className="w-full pt-[40px] h-min  bg-muted/50">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
            }}
          >
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="stage"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" fill="var(--color-visitors)" radius={8}>
              <LabelList
                position="top"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

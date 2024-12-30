import { SalesChart } from "@/components/sales-chart";
import { TraficsChart } from "@/components/tracfic-chart";
import { TrendingUp } from "lucide-react";

const metrics = [
  {
    id: 1,
    title: "Total Sales",
    value: "$68,450",
    percentageChange: "↑ 12%",
    changeDescription: "from last month",
    changeStyle: "bg-green-200 text-green-700",
  },
  {
    id: 2,
    title: "Total Orders",
    value: "820",
    percentageChange: "↑ 8%",
    changeDescription: "from last month",
    changeStyle: "bg-green-200 text-green-700",
  },
  {
    id: 3,
    title: "Net Profits",
    value: "$18,200",
    percentageChange: "↑ 5%",
    changeDescription: "from last month",
    changeStyle: "bg-green-200 text-green-700",
  },
  {
    id: 4,
    title: "Conversion Rate",
    value: "4.2%",
    percentageChange: "↓ 0.5%",
    changeDescription: "from last month",
    changeStyle: "bg-red-200 text-red-700",
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <section
            key={metric.id}
            className="p-4 pl-6 h-32 w-auto rounded-xl bg-muted/50 flex flex-col gap-1"
          >
            <span className="text-foreground/50">{metric.title}</span>
            <h3 className="text-3xl font-bold mt-1">{metric.value}</h3>
            <p className="text-foreground/40">
              <span
                className={`${metric.changeStyle} font-bold py-0.5 px-3 rounded text-xs mr-1`}
              >
                {metric.percentageChange}
              </span>
              {metric.changeDescription}
            </p>
          </section>
        ))}
      </div>
      <div className="flex gap-4  flex-1 rounded-xl">
        <div className="flex w-1/2 lg:w-[55%] relative">
          <SalesChart />

          <div className="absolute inset-6 flex flex-col gap-2 w-max h-min">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              April - June 2025
            </div>
          </div>
        </div>
        <div className="flex w-1/2 lg:w-[45%] ">
          <TraficsChart />
        </div>
      </div>
    </div>
  );
}

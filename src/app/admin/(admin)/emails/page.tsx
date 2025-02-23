import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Mail } from "lucide-react";

const SubscribersDashboard = () => {
  const metrics = [
    {
      id: "total-subscribers",
      title: "Total Subscribers",
      value: "2,547",
      description: "+180 from last month",
      icon: Users,
    },
    {
      id: "growth-rate",
      title: "Growth Rate",
      value: "12.3%",
      description: "Increased by 7% from last month",
      icon: TrendingUp,
    },
    {
      id: "engagement-rate",
      title: "Engagement Rate",
      value: "68.5%",
      description: "Average email open rate",
      icon: Mail,
    },
  ];

  return (
    <div className="p-4 md:p-5 pt-0 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.id} className="bg-muted/10 border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubscribersDashboard;

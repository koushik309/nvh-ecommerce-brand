import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import p1 from "../../public/1.jpg";
import { Progress } from "@/components/ui/progress";
import { Package, Pencil, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProductsCard() {
  return (
    <Card className="bg-muted max-w-60 cursor-pointer hover:bg-zinc-700 transition-colors">
      <CardHeader className="p-2 relative">
        <Image
          width={1070}
          height={1070}
          src={p1}
          alt="Product Image"
          className="rounded-lg"
        />
        <Badge
          variant="secondary"
          className="absolute inset-2 left-3 w-min h-min"
        >
          128$
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-col items-start  p-2">
        <p className="flex items-center justify-between w-full">
          <span>Orders: 1160</span>
          <span className="flex items-center gap-1 text-xs opacity-60">
            <TrendingUp className="size-4" />
            +12 Today
          </span>
        </p>

        <p className="flex items-center justify-between w-full">
          <span>Stock: 38%</span>
          <span className="flex items-center gap-1 text-xs opacity-60">
            <Package className="size-4" />
            1160/3055
          </span>
        </p>
      </CardContent>
    </Card>
  );
}

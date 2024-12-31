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

export default function ProductsCard() {
  return (
    <Card className="bg-muted max-w-60">
      <CardHeader className="p-2">
        <Image
          width={1070}
          height={1070}
          src={p1}
          alt="Product Image"
          className="rounded-lg"
        />
      </CardHeader>
      <CardContent className="flex flex-col items-start  p-2">
        <p className="flex items-center justify-between w-full">
          <span>Price: 128$</span>
          <button className="flex items-center gap-1 text-xs opacity-60 hover:opacity-100 transition-opacity">
            <Pencil className="size-4" />
            edit price
          </button>
        </p>

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

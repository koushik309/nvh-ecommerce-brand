import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { Package, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProductsCard({
  price,
  image,
  stock,
  name,
}: {
  price: number;
  image: StaticImageData;
  stock: number;
  name: string;
}) {
  return (
    <Card className="bg-muted max-w-60 max-h-min cursor-pointer hover:bg-zinc-700 transition-colors">
      <CardHeader className="p-2 relative">
        <Image
          width={1070}
          height={1070}
          src={image}
          alt="Product Image"
          className="rounded-lg"
        />
        <Badge
          variant="secondary"
          className="absolute inset-2 left-3 w-min h-min"
        >
          ${price}
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-col items-start  p-2">
        <p className="w-full">{name}</p>

        <p className="flex items-center justify-between w-full">
          <span>Orders: {stock}</span>
          <span className="flex items-center gap-1 text-xs opacity-60">
            <TrendingUp className="size-4" />+{Math.floor(stock * 0.01)} Today
          </span>
        </p>

        <p className="flex items-center justify-between w-full">
          <span>Stock: 38%</span>
          <span className="flex items-center gap-1 text-xs opacity-60">
            <Package className="size-4" />
            {stock}/{stock * 3}
          </span>
        </p>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

export default function ProductsCard({
  price,
  image,
  category,
  name,
}: {
  price: number;
  image: StaticImageData;
  category: string;
  name: string;
}) {
  return (
    <Card className="bg-[#F8F8F8] max-w-60 cursor-pointer text-black hover:opacity-80 transition-opacity">
      <CardHeader className="p-2">
        <Image
          width={1070}
          height={1070}
          src={image}
          alt="Product Image"
          className="rounded-lg"
        />
      </CardHeader>
      <CardContent className="flex flex-col items-start  p-4 pt-2">
        <p className="w-full font-medium flex items-center justify-between">
          <span>{name}</span>
          <span>{price}$</span>
        </p>

        <span className="text-sm text-black/60">{category}</span>
      </CardContent>
    </Card>
  );
}
{
  /* <Card className="bg-black cursor-pointer text-black hover:opacity-80 transition-opacity">
<CardHeader className="p-2">
  <Image
    src={image}
    alt="Product Image"
    className="rounded-lg"
  />
</CardHeader>
<CardContent className="flex flex-col items-start  p-4 pt-2">
        <p className="w-full font-medium flex items-center justify-between">
          <span>the name</span>
          <span>the price</span>
        </p>
        <span className="text-sm text-black">the category</span>
      </CardContent>
</Card> */
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProductsCard from "./products-card";
import { StaticImageData } from "next/image";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SheetDemo({
  price,
  image,
  stock,
  name,
  category,
}: {
  price: number;
  image: StaticImageData;
  stock: number;
  name: string;
  description: string;
  category: string;
  rating: number;
  tags: string[];
}) {
  const categories = [
    "Moisturizers",
    "Sunscreens",
    "Night Care",
    "Eye Care",
    "Cleansers",
    "Serums",
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ProductsCard image={image} price={price} stock={stock} name={name} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit products Info</SheetTitle>
          <SheetDescription>
            Make changes to your products here. Click save when you&apos;re
            done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Name
            </Label>
            <Input id="username" className="col-span-3" placeholder={name} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Price
            </Label>
            <Input
              id="name"
              className="col-span-3"
              defaultValue={price}
              type="number"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Stock
            </Label>
            <Input
              id="username"
              className="col-span-3"
              type="number"
              defaultValue={stock}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Category
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder={category} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {categories.map((e) => (
                    <SelectItem key={e} value={e}>
                      {e}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

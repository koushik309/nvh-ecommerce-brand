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
import * as React from "react";
import { ShoppingBag } from "lucide-react";

export function CardButton({}: {}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative group">
          <ShoppingBag strokeWidth={1} />
          <p className="absolute size-4 rounded-xl flex justify-center items-center bg-white -right-1 -top-1 group-hover:size-8 transition-all duration-300">
            <span className="text-xs group-hover:text-lg text-black transition-all duration-300">
              0
            </span>
          </p>
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            Make changes to your products here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Name
            </Label>
            <Input
              id="username"
              className="col-span-3"
              placeholder={"afsfadsfa"}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Price
            </Label>
            <Input
              id="name"
              className="col-span-3"
              defaultValue={12}
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
              defaultValue={23232}
            />
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

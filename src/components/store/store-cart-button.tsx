"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { products } from "@/lib/app-data";
import Image from "next/image";
import Link from "next/link";

export function CardButton() {
  const [quantity, setQuantity] = useState(1);
  const [checkoutClick, setCheckoutClick] = useState("Continue to Checkout");
  const [cartProducts, setCartProducts] = useState([
    {
      productId: 1,
      items: 1,
    },
  ]);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative group p-1">
          <ShoppingBag strokeWidth={1} />
          <p className="absolute size-4 rounded-xl flex justify-center items-center bg-white right-0 top-1 group-hover:size-8 transition-all duration-300">
            <span className="text-xs group-hover:text-lg text-black transition-all duration-300">
              {cartProducts.length}
            </span>
          </p>
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        {cartProducts.length ? (
          <>
            <div className="my-4 flex flex-col justify-start items-center gap-4">
              <div className="flex gap-4 items-center p-2 w-full rounded-xl">
                <div className="min-h-20 min-w-20 size-20 rounded-lg bg-slate-500 overflow-clip">
                  <Image
                    src={products[cartProducts[0].productId].image}
                    alt={products[cartProducts[0].productId].name}
                  />
                </div>
                <div className="flex w-full flex-col justify-start items-start">
                  <span className="text-lg">
                    {products[cartProducts[0].productId].name}
                  </span>
                  <span className="opacity-80">
                    ${" "}
                    {products[cartProducts[0].productId].price *
                      cartProducts[0].items}{" "}
                    USD
                  </span>
                  <div className="flex justify-between w-full items-center">
                    <button
                      onClick={() => setCartProducts(() => [])}
                      className="underline underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
                    >
                      Remove
                    </button>
                    <div className="flex items-center border border-white/40 rounded-xl px-2 py-1">
                      <button
                        className="text-white/60 hover:text-white"
                        onClick={() =>
                          setQuantity((prev) => Math.max(1, prev - 1))
                        }
                      >
                        <Minus className="size-4" />
                      </button>
                      <input
                        type="number"
                        className="w-12 text-center bg-transparent outline-none"
                        value={quantity}
                        min="1"
                        onChange={(e) =>
                          setQuantity(Math.max(1, Number(e.target.value)))
                        }
                      />
                      <button
                        className="text-white/60 hover:text-white"
                        onClick={() => setQuantity((prev) => prev + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto border-t-2 py-4 w-full flex flex-col gap-4 items-center justify-between">
              <p className="flex justify-between w-full text-lg text-white/80">
                <span>Subtotal:</span>
                <span>$ 129.00 USD</span>
              </p>
              <Button
                type="submit"
                className={`w-full ${
                  checkoutClick === "Checkout is disabled" &&
                  "bg-red-300 hover:bg-red-200"
                }`}
                onClick={() => setCheckoutClick("Checkout is disabled")}
              >
                {checkoutClick}
              </Button>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-8 justify-center items-center h-full">
            <span>No items added to your basket</span>
            <SheetClose asChild>
              <Link href={"/products"}>
                <Button type="submit">Start Shopping</Button>
              </Link>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

"use client";
import { notFound, useParams } from "next/navigation";

import { products } from "@/lib/app-data";
import { Button } from "@/components/ui/button";
import { Euro, HeartHandshake, Minus, Plus, Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProductsCard from "@/components/store/product-card-store";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const { productName } = useParams();
  const product = products.find((p) => p.route === productName);
  const randomNumber = Math.floor(Math.random() * 3);

  if (!product) return notFound();

  return (
    <>
      <main className="max-w-5xl mx-auto py-6 px-6">
        <nav className="text-white/60 text-sm mb-6">
          <Link
            href="/"
            className="hover:text-white transition-colors duration-300"
          >
            Home
          </Link>{" "}
          /{" "}
          <Link
            href="/products"
            className="hover:text-white transition-colors duration-300"
          >
            Products
          </Link>{" "}
          /
          <span className="text-white">
            {" "}
            {product.name} {product.category}
          </span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold ">
              {product.name} {product.category}
            </h1>
            <div className="flex items-center mt-3">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="ml-1  text-lg">{product.rating}</span>
              <span className="ml-2 text-white/80 text-sm">
                ({Math.floor(product.price * 1.5)} reviews)
              </span>
            </div>
            <p className="text-2xl font-semibold mt-4">${product.price}</p>
            <p className="mt-4 text-white/70">{product.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/80 text-black text-sm rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-12">
              <div className="flex items-center border border-white/40 rounded-xl px-4 py-2.5">
                <button
                  className="text-white/60 hover:text-white"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  className="w-24 text-center text-lg font-semibold bg-transparent outline-none"
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
              <Button className="rounded-xl py-6 px-20">Add to Cart</Button>
            </div>
          </div>
        </div>
      </main>

      <section className="flex w-full justify-around items-center py-20">
        <div className="flex flex-col justify-center items-center max-w-80">
          <Truck strokeWidth={1} className="size-20" />
          <h3 className="text-3xl my-2">Free shipping</h3>
          <p className="text-center">
            Enjoy the convenience of free shipment on all your orders.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-80">
          <HeartHandshake strokeWidth={1} className="size-20" />
          <h3 className="text-3xl my-2">Easy refund</h3>
          <p className="text-center">
            Shop with confidence that our easy refund policy has got.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-80">
          <Euro strokeWidth={1} className="size-20" />
          <h3 className="text-3xl my-2">Flexible payment</h3>
          <p className="text-center">
            We understand that flexibility is key to payments.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-light text-white mb-3">
            Recent products
          </h2>
          <p className="text-lg text-neutral-400">
            Ethically sourced rare oils, carefully selected for their
            extraordinary benefits
          </p>
        </div>
        <div className="flex items-center gap-5 justify-center">
          {products
            .filter((i) => product.id !== i.id)
            .slice(randomNumber, randomNumber + 3)
            .map((product) => (
              <Link key={product.route} href={`/products/${product.route}`}>
                <ProductsCard
                  image={product.image}
                  price={product.price}
                  category={product.category}
                  name={product.name}
                />
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}

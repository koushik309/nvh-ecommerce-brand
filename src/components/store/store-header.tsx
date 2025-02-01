import Link from "next/link";
import { CardButton } from "./store-cart-button";
import { Menu } from "lucide-react";

export default function Header({ products }: { products?: boolean }) {
  return (
    <header className="py-5 sm:py-10 px-4 flex flex-col gap-6 sm:gap-10 max-w-screen-xl mx-auto">
      <h1 className="text-center text-4xl sm:text-6xl md:text-7xl font-bold uppercase">
        NZAR Velvet Hour
      </h1>
      <div
        className={`flex justify-between w-full items-center mx-auto ${
          products && "max-w-screen-lg"
        }`}
      >
        <Link href="/">
          <h2 className="font-medium text-2xl">NVH®</h2>
        </Link>
        {!products && (
          <nav>
            <ul className="hidden md:flex gap-10">
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <a href="#our-collection">Our Collection</a>
              </li>
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <a href="#client-favorites">Client Favorites</a>
              </li>
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <a href="#why-nvh">Why NVH®</a>
              </li>
              <li className="hover:underline underline-offset-8 cursor-pointer">
                <a href="#about-the-brand">About The Brand</a>
              </li>
            </ul>
          </nav>
        )}

        <div className="flex gap-4">
          {!products && <Menu strokeWidth={1} className="size-7 md:hidden" />}

          <CardButton />
        </div>
      </div>
    </header>
  );
}

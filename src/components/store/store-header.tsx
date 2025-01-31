import Link from "next/link";
import { CardButton } from "./store-cart-button";

export default function Header({ products }: { products?: boolean }) {
  return (
    <header>
      <header className="py-10 px-4 flex flex-col gap-10">
        <h1 className="text-center text-7xl font-bold uppercase">
          NZAR Velvet Hour
        </h1>
        <div
          className={`flex justify-between w-full items-center ${
            products && "max-w-screen-lg mx-auto"
          }`}
        >
          <Link href="/">
            <h2 className="font-medium text-2xl">NVH®</h2>
          </Link>
          {!products && (
            <nav>
              <ul className="flex gap-10">
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

          <CardButton />
        </div>
      </header>
    </header>
  );
}

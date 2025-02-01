import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function BestSeller() {
  return (
    <section
      id="client-favorites"
      className="py-24 max-w-screen-lg mx-auto select-none"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl mb-3 font-light">Client Favorites</h2>
        <p className="text-lg text-neutral-400">
          Our signature formulations that have earned global recognition
        </p>
      </div>
      <div className="w-full relative flex flex-row gap-10 items-center justify-center h-[280px] bg-[#F8F8F8] rounded-xl">
        <span className="absolute -right-12 top-6 text-lg bg-black rotate-45 py-1.5 px-20">
          139$
        </span>
        <Image
          src="/best.png"
          alt="Eternal Youth Serum"
          width={600}
          height={763}
          className="absolute left-28 bottom-4 h-[330px] w-auto"
        />

        <div className="ml-48">
          <h3 className="text-5xl font-semibold text-black mb-2">
            Eternal Youth
          </h3>
          <p className="text-black text-lg mb-6 max-w-[380px]">
            A luxury serum enriched with vitamins C and E to restore your
            skin&apos;s natural glow.
          </p>
          <button className="py-2.5 flex items-center gap-2 hover:bg-black/80 transition-colors duration-300 px-8 bg-black rounded-lg font-medium">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

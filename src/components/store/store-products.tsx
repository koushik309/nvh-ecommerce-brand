import { products } from "@/lib/app-data";
import ProductsCard from "@/components/store/product-card-store";

export default function Products() {
  return (
    <section id="our-collection" className="py-24 max-w-screen-md mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-light text-white mb-3">Our Collection</h2>
        <p className="text-lg text-neutral-400">
          Each product is a masterpiece of luxury skincare innovation
        </p>
      </div>
      <div className="flex gap-4 flex-wrap justify-start w-full h-full rounded-xl p-2">
        {products.map((product) => (
          <ProductsCard
            key={product.price}
            image={product.image}
            price={product.price}
            category={product.category}
            name={product.name}
          />
        ))}
      </div>
    </section>
  );
}

import OrdersTabs from "@/components/orders-tabs";
import ProductsCard from "@/components/products-card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { products } from "@/lib/app-data";

export default function Products() {
  return (
    <main className="flex h-full w-full flex-col gap-4 p-4 pt-0">
      <div className="w-full flex flex-col gap-2 md:flex-row justify-between items-center p-2 bg-muted/50 rounded-xl">
        <OrdersTabs />
        <Button>
          <PlusCircle />
          Add Product
        </Button>
      </div>

      <div className="flex gap-4 flex-wrap justify-start w-full h-full bg-muted/50 rounded-xl p-2">
        {products.map((product) => (
          <ProductsCard
            key={product.id}
            image={product.image}
            price={product.price}
            stock={product.stock}
          />
        ))}
      </div>
    </main>
  );
}

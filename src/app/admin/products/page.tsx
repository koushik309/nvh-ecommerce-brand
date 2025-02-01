import OrdersTabs from "@/components/orders-tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { products } from "@/lib/app-data";
import { SheetDemo } from "@/components/product-sheet";

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
          <SheetDemo
            key={product.id}
            name={product.name}
            description={product.description}
            category={product.category}
            price={product.price}
            stock={product.stock}
            image={product.image}
            rating={product.rating}
            tags={product.tags}
          />
        ))}
      </div>
    </main>
  );
}

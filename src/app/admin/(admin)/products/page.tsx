"use client";
import { PackageX } from "lucide-react";
import { products } from "@/lib/app-data";
import { SheetDemo } from "@/components/product-sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { AddProductSheet } from "@/components/add-product-sheet";

export default function Products() {
  const [activeTab, setActiveTab] = useState("all-products");

  const getFilteredProducts = () => {
    switch (activeTab) {
      case "all-products":
        return products;
      case "best-sellers":
        return [...products].sort((a, b) => b.stock - a.stock).splice(0, 3);
      case "out-of-stock":
      case "archived":
        return [];
      default:
        return products;
    }
  };

  const getEmptyStateMessage = () => {
    switch (activeTab) {
      case "out-of-stock":
        return "No products are currently out of stock.";
      case "archived":
        return "No products have been archived yet.";
      default:
        return "No products found.";
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <main className="flex h-full w-full flex-col gap-4 p-4 pt-0">
      <div className="w-full flex flex-col gap-2 md:flex-row justify-between items-center p-2 bg-muted/10 border rounded-xl">
        <Tabs defaultValue="all-products" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all-products">All Products</TabsTrigger>
            <TabsTrigger value="best-sellers">Best Sellers</TabsTrigger>
            <TabsTrigger value="out-of-stock">Out of Stock</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddProductSheet />
      </div>
      <div className="flex gap-4 flex-wrap w-full h-full bg-muted/10 border rounded-xl p-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
          ))
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-64 text-muted-foreground">
            <PackageX className="size-12 mb-4" strokeWidth={1} />
            <p className="text-lg font-medium mb-2">{getEmptyStateMessage()}</p>
            <p className="text-sm">
              Try selecting a different category or add a new product.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

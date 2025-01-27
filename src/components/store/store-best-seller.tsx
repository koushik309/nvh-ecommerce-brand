import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BestSeller = () => {
  return (
    <section
      id="client-favorites"
      className="py-12 md:py-24 px-4 max-w-screen-lg mx-auto"
    >
      <div className="text-center space-y-4 mb-8 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-light">Client Favorites</h2>
        <p className="text-lg text-muted-foreground">
          Our signature formulations that have earned global recognition
        </p>
      </div>

      <Card className="relative overflow-hidden">
        <Badge
          variant="default"
          className="absolute -right-12 top-6 rotate-45 py-1.5 px-20 bg-black hover:bg-black"
        >
          $139
        </Badge>

        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative w-full md:w-1/2 h-[280px] md:h-[330px]">
              <Image
                src="/best.png"
                alt="Eternal Youth Serum"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-semibold">
                  Eternal Youth
                </h3>
                <p className="text-lg text-muted-foreground">
                  A luxury serum enriched with vitamins C and E to restore your
                  skin's natural glow.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-black hover:bg-black/90 text-white"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default BestSeller;

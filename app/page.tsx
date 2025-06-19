import HeroSection from "@/components/home/HeroSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FeaturedIngredientsSection from "@/components/home/FeaturedIngredientsSection";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Skin Serene Cosmetics. Discover natural and luxurious skincare products for a radiant complexion.",
};

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center text-primary mb-12">
            Our Featured Collection
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {products.length > 3 && (
            <div className="text-center mt-12">
              <Link href="/products">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 group"
                >
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <FeaturedIngredientsSection />
      <TestimonialsSection />
    </div>
  );
}

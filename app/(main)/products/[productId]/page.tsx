"use client"; // Mark as client component for potential client-side interactions, though data fetching could be server-side.

import { products } from "@/data/products";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Star,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/products/ProductCard";

// This function could be used with generateStaticParams if this were a server component.
// export async function generateStaticParams() {
//   return products.map((product) => ({
//     productId: product.id,
//   }));
// }

// Metadata generation would typically happen in a server component.
// export async function generateMetadata({ params }: { params: { productId: string } }) {
//   const product = products.find(p => p.id === params.productId);
//   if (!product) {
//     return { title: 'Product Not Found' };
//   }
//   return {
//     title: product.name,
//     description: product.description,
//   };
// }

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = products.find((p) => p.id === productId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!product) {
    notFound();
  }

  const productImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.imageUrl];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + productImages.length) % productImages.length
    );
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  if (!isClient) {
    return <div className="py-12 text-center">Loading product details...</div>;
  }

  return (
    <div className="py-8 md:py-12">
      <div className="mb-6">
        <Link
          href="/products"
          className="inline-flex items-center text-sm text-primary hover:underline"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Products
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
            <AnimatePresence initial={false} custom={currentImageIndex}>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: currentImageIndex > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: currentImageIndex > 0 ? -50 : 50 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={productImages[currentImageIndex]}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  data-ai-hint="skincare product detail"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          {productImages.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-background/50 hover:bg-accent/50"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-background/50 hover:bg-accent/50"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentImageIndex === index
                        ? "bg-primary"
                        : "bg-border hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <span className="inline-block bg-accent/20 text-accent-foreground px-3 py-1 text-xs font-medium rounded-full">
            {product.category}
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            {product.name}
          </h1>
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < 4 ? "fill-current" : ""}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(123 reviews)</span>
          </div>
          <p className="text-2xl font-semibold text-foreground">
            {product.price}
          </p>
          <p className="text-foreground/80 leading-relaxed">
            {product.description}
          </p>

          {product.ingredients && product.ingredients.length > 0 && (
            <div>
              <h3 className="font-semibold text-md text-foreground mb-2">
                Key Ingredients:
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {product.ingredients.map((ing) => (
                  <li key={ing}>{ing}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1"
            >
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 flex-1"
            >
              <Tag className="mr-2 h-5 w-5" /> Add to Wishlist
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16 md:mt-24">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

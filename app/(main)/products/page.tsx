"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/products/ProductCard";
import ProductFilter from "@/components/products/ProductFilter";
import { products } from "@/data/products";
import type { Product } from "@/types";
import { motion } from "framer-motion";
// import type { Metadata } from 'next'; // Metadata should be defined in server component or page.tsx that is a server component.

// export const metadata: Metadata = { // This page is a client component, metadata should be handled differently or in a parent server component.
//   title: 'Our Products',
//   description: 'Explore the full range of Skin Serene Cosmetics. Find natural lotions, creams, oils, soaps, and scrubs.',
// };

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    []
  );

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Since this is a client component, we cannot export Metadata directly.
  // It should be handled by a parent server component or a separate page.tsx for metadata.
  // For now, this page will not have specific metadata set here.

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-center text-primary mb-4">
          Our Collection
        </h1>
        <p className="text-lg text-center text-muted-foreground mb-12">
          Discover skincare crafted with the finest natural ingredients for your
          serene beauty.
        </p>
      </motion.div>

      <ProductFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onFilterChange={setSelectedCategory}
      />

      {filteredProducts.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.map((product: Product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-muted-foreground py-12">
          No products found for the selected category. Try a different filter!
        </p>
      )}
    </div>
  );
}

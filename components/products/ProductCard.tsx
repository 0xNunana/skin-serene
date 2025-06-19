"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/types";
import { motion } from "framer-motion";
import { Eye, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 15px 25px hsla(var(--primary), 0.15)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group bg-card/80">
        <Link href={`/products/${product.id}`} className="block">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="skincare product bottle"
            />
          </div>
        </Link>
        <CardHeader className="pb-2">
          <Link href={`/products/${product.id}`}>
            <CardTitle className="font-headline text-lg tracking-normal text-primary group-hover:underline">
              {product.name}
            </CardTitle>
          </Link>
          <CardDescription className="text-sm text-muted-foreground pt-1">
            {product.category}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pt-0">
          <p className="text-xl font-semibold text-foreground">
            {product.price}
          </p>
        </CardContent>
        <CardFooter className="pt-2 flex gap-2">
          <Button
            variant="outline"
            asChild
            className="flex-1 border-primary text-primary hover:bg-primary/10"
          >
            <Link href={`/products/${product.id}`}>
              <Eye className="mr-2 h-4 w-4" /> View
            </Link>
          </Button>
          <Button
            variant="default"
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

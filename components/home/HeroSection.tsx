"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-28 xl:py-40 2xl:py-60 bg-gradient-to-br from-background to-secondary/30 rounded-lg shadow-lg overflow-hidden bg-[url('/hero1.jpg')]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-6">
              Discover Your Natural Radiance
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 mb-8">
              Indulge in our luxurious collection of natural skincare products,
              crafted to reveal your skin's serene beauty.
            </p>
            <Link href="/products">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground group"
              >
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

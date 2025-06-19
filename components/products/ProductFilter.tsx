"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ProductFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onFilterChange: (category: string | null) => void;
}

export default function ProductFilter({
  categories,
  selectedCategory,
  onFilterChange,
}: ProductFilterProps) {
  const allCategories = ["All Products", ...categories];

  return (
    <div className="mb-8">
      <ScrollArea className="hidden md:w-full whitespace-nowrap rounded-md">
        <div className="flex space-x-2 pb-2">
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={
                selectedCategory ===
                (category === "All Products" ? null : category)
                  ? "default"
                  : "outline"
              }
              onClick={() =>
                onFilterChange(category === "All Products" ? null : category)
              }
              className={`text-sm px-4 py-2 rounded-full transition-colors duration-200 ease-in-out
                ${
                  selectedCategory ===
                  (category === "All Products" ? null : category)
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-primary text-primary hover:bg-primary/10"
                }`}
            >
              {category}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex flex-wrap space-x-2 space-y-2 md:hidden pb-2">
        {allCategories.map((category) => (
          <Button
            key={category}
            variant={
              selectedCategory ===
              (category === "All Products" ? null : category)
                ? "default"
                : "outline"
            }
            onClick={() =>
              onFilterChange(category === "All Products" ? null : category)
            }
            className={`text-sm px-4 py-2 rounded-full transition-colors duration-200 ease-in-out
                ${
                  selectedCategory ===
                  (category === "All Products" ? null : category)
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-primary text-primary hover:bg-primary/10"
                }`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}

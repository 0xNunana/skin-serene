"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Ingredient } from "@/types";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface IngredientCardProps {
  ingredient: Ingredient;
}

export default function IngredientCard({ ingredient }: IngredientCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0px 10px 20px hsla(var(--primary), 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden h-full flex flex-col group">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={ingredient.imageUrl}
            alt={ingredient.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="natural ingredient botanical"
          />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-xl text-primary">
            {ingredient.name}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {ingredient.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <h4 className="text-sm font-semibold mb-2 text-foreground/80">
            Key Benefits:
          </h4>
          <ul className="space-y-1">
            {ingredient.benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start text-xs text-muted-foreground"
              >
                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

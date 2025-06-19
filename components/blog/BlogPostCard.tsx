"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BlogPost } from "@/types";
import { motion } from "framer-motion";
import { CalendarDays, UserCircle, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0px 8px 16px hsla(var(--primary), 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group bg-card/80">
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="abstract nature blog"
            />
          </div>
        </Link>
        <CardHeader className="pb-3">
          <Link href={`/blog/${post.slug}`}>
            <CardTitle className="font-headline text-xl tracking-normal text-primary group-hover:underline leading-tight">
              {post.title}
            </CardTitle>
          </Link>
          <div className="flex items-center space-x-3 text-xs text-muted-foreground pt-2">
            <div className="flex items-center">
              <CalendarDays className="h-3.5 w-3.5 mr-1.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <UserCircle className="h-3.5 w-3.5 mr-1.5" />
              <span>{post.author}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow pt-0 pb-4">
          <CardDescription className="text-sm text-foreground/70 line-clamp-3">
            {post.excerpt}
          </CardDescription>
        </CardContent>
        <CardFooter className="pt-2">
          <Button
            variant="link"
            asChild
            className="p-0 text-accent hover:text-accent/80"
          >
            <Link href={`/blog/${post.slug}`} className="group/link">
              Read More{" "}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

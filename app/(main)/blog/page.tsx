"use client";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // For client-side animations

// export const metadata: Metadata = {
//   title: "Skincare Blog",
//   description:
//     "Read the latest skincare tips, ingredient spotlights, and news from Skin Serene Cosmetics.",
// };

export default function BlogPage() {
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

  return (
    <div className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-4">
          Skin Serene Journal
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your source for skincare wisdom, natural beauty insights, and tips for
          a radiant life.
        </p>
      </motion.div>

      {blogPosts.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-muted-foreground py-12">
          No blog posts yet. Check back soon!
        </p>
      )}

      {/* Placeholder for Pagination or Infinite Scroll */}
      {blogPosts.length > 6 && ( // Example: show pagination if more than 6 posts
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Load More Posts
          </Button>
        </div>
      )}
    </div>
  );
}

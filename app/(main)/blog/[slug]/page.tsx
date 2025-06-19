"use client";

import { blogPosts } from "@/data/blog";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";
import Link from "next/link";
import { CalendarDays, UserCircle, ChevronLeft, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// export async function generateStaticParams() {
//   return blogPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const post = blogPosts.find((p) => p.slug === params.slug);
//   if (!post) {
//     return { title: "Post Not Found" };
//   }
//   return {
//     title: post.title,
//     description: post.excerpt,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt,
//       type: "article",
//       publishedTime: new Date(post.date).toISOString(), // Assuming date is parsable
//       authors: [post.author],
//       images: [
//         {
//           url: post.imageUrl,
//           alt: post.title,
//         },
//       ],
//     },
//   };
// }

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-8 md:py-12 max-w-3xl mx-auto">
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-primary hover:underline"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Blog
        </Link>
      </div>

      <header className="mb-8">
        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-1.5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <UserCircle className="h-4 w-4 mr-1.5" />
            <span>By {post.author}</span>
          </div>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-accent/20 text-accent-foreground"
              >
                <Tag className="h-3 w-3 mr-1.5" />
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      {post.imageUrl && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint="blog post featured"
          />
        </div>
      )}

      <MarkdownRenderer content={post.content} />

      {/* You could add related posts or a comment section here */}
      <div className="mt-12 border-t pt-8">
        <h3 className="font-headline text-xl font-semibold text-primary mb-4">
          Share this post:
        </h3>
        {/* Placeholder for social share buttons */}
        <div className="flex space-x-2">
          <span className="text-sm p-2 bg-muted rounded">Facebook (Share)</span>
          <span className="text-sm p-2 bg-muted rounded">Twitter (Share)</span>
          <span className="text-sm p-2 bg-muted rounded">LinkedIn (Share)</span>
        </div>
      </div>
    </article>
  );
}

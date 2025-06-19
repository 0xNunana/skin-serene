export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  images?: string[];
  type: "lotion" | "cream" | "oil" | "soap" | "scrub";
  category: string; // e.g. "Body Lotions", "Face Creams"
  featured?: boolean;
  ingredients?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
}

export interface Ingredient {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  benefits: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown content
  imageUrl: string;
  date: string; // e.g., "October 26, 2023"
  author: string;
  tags?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

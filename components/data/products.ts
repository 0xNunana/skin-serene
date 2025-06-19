import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Radiant Glow Body Lotion",
    description:
      "A luxurious body lotion infused with rosehip oil and vitamin E to deeply moisturize and leave your skin glowing.",
    price: "$28.00",
    imageUrl: "/lotion.jpg",
    images: [
      "https://placehold.co/600x600.png",
      "https://placehold.co/600x600.png",
      "https://placehold.co/600x600.png",
    ],
    type: "lotion",
    category: "Body Lotions",
    featured: true,
    ingredients: ["Rosehip Oil", "Vitamin E", "Shea Butter"],
  },
  {
    id: "2",
    name: "Velvet Smooth Face Cream",
    description:
      "A rich and nourishing face cream with hyaluronic acid and peptides to plump and hydrate your skin.",
    price: "$35.00",
    imageUrl: "https://placehold.co/600x600.png",
    images: [
      "https://placehold.co/600x600.png",
      "https://placehold.co/600x600.png",
    ],
    type: "cream",
    category: "Face Creams",
    featured: true,
    ingredients: ["Hyaluronic Acid", "Peptides", "Jojoba Oil"],
  },
  {
    id: "3",
    name: "Serene Night Body Oil",
    description:
      "A calming body oil with lavender and chamomile to soothe your senses and nourish your skin overnight.",
    price: "$32.00",
    imageUrl: "https://placehold.co/600x600.png",
    type: "oil",
    category: "Body Oils",
    ingredients: ["Lavender Oil", "Chamomile Extract", "Almond Oil"],
  },
  {
    id: "4",
    name: "Pure Bliss Handmade Soap",
    description:
      "Gently cleanse your skin with our handmade soap, crafted with natural oils and botanicals.",
    price: "$12.00",
    imageUrl: "https://placehold.co/600x600.png",
    type: "soap",
    category: "Soaps",
    featured: true,
    ingredients: ["Olive Oil", "Coconut Oil", "Calendula Petals"],
  },
  {
    id: "5",
    name: "Exfoliating Coffee Scrub",
    description:
      "Invigorate your skin with this natural coffee scrub that buffs away dead skin cells for a smoother complexion.",
    price: "$22.00",
    imageUrl: "https://placehold.co/600x600.png",
    type: "scrub",
    category: "Scrubs",
    ingredients: ["Ground Coffee", "Brown Sugar", "Coconut Oil"],
  },
  {
    id: "6",
    name: "Hydrating Rose Water Mist",
    description:
      "Refresh and hydrate your skin throughout the day with this gentle rose water mist.",
    price: "$18.00",
    imageUrl: "https://placehold.co/600x600.png",
    type: "lotion", // Using lotion type as a generic category for mists
    category: "Mists & Toners",
    ingredients: ["Rose Water", "Glycerin", "Aloe Vera"],
  },
];

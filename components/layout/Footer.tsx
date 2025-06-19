import Link from "next/link";
import { Instagram, Facebook, Twitter, Leaf } from "lucide-react";
import NewsletterForm from "@/components/forms/NewsletterForm";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Shop All", href: "/products" },
  { label: "Skincare Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/faq" }, // Example link
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="bg-background/80 border-t border-border/60 text-foreground/90 py-12">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-semibold text-primary">
                Skin Serene
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Natural, clean, elegant, luxurious, calming skincare for your
              serene skin.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4 text-primary">
              Stay Connected
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <NewsletterForm />
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4 text-primary">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-accent/20"
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6 text-primary hover:text-accent-foreground transition-colors" />
                  </Link>
                </Button>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-headline text-md font-semibold mb-2 text-primary">
                Customer Service
              </h4>
              <p className="text-sm text-muted-foreground">
                support@skinserene.example.com
              </p>
              <p className="text-sm text-muted-foreground">(555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/60 pt-8 mt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Skin Serene Cosmetics. All rights
            reserved.
          </p>
          <p className="mt-1">
            Designed with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            by 0xNunana.
          </p>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
}

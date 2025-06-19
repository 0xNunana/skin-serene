"use client";

import ContactForm from "@/components/forms/ContactForm";
import type { Metadata } from "next";
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // For client-side animations

// export const metadata: Metadata = {
//   title: "Contact Us",
//   description:
//     "Get in touch with Skin Serene Cosmetics. We are here to answer your questions and listen to your feedback.",
// };

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
    "aria-label": "Skin Serene on Instagram",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
    "aria-label": "Skin Serene on Facebook",
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
    "aria-label": "Skin Serene on Twitter",
  },
];

const InfoCard: React.FC<{
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}> = ({ icon: Icon, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-start space-x-4 p-4 bg-card/50 rounded-lg"
  >
    <Icon className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
    <div>
      <h3 className="font-headline text-lg font-semibold text-primary mb-1">
        {title}
      </h3>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  </motion.div>
);

export default function ContactPage() {
  return (
    <div className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We value your feedback and inquiries. Reach out to us through the form
          below or connect with us on social media.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <div className="space-y-6">
          <h2 className="font-headline text-2xl font-semibold text-primary mb-4">
            Contact Information
          </h2>
          <InfoCard icon={MapPin} title="Our Office">
            123 Serene Avenue, Beauty City, CA 90210
          </InfoCard>
          <InfoCard icon={Phone} title="Call Us">
            <a
              href="tel:+15551234567"
              className="hover:text-accent transition-colors"
            >
              (555) 123-4567
            </a>
          </InfoCard>
          <InfoCard icon={Mail} title="Email Us">
            <a
              href="mailto:support@skinserene.example.com"
              className="hover:text-accent transition-colors"
            >
              support@skinserene.example.com
            </a>
          </InfoCard>

          <div className="pt-4">
            <h3 className="font-headline text-lg font-semibold text-primary mb-3">
              Follow Our Journey
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full border-primary hover:bg-primary/10"
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social["aria-label"]}
                    >
                      <social.icon className="h-5 w-5 text-primary" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Optional Google Maps Embed Placeholder */}
      <div className="mt-16 md:mt-24">
        <h2 className="font-headline text-2xl sm:text-3xl font-bold text-center text-primary mb-8">
          Find Us Here
        </h2>
        <div className="aspect-video bg-muted rounded-lg shadow-md flex items-center justify-center">
          <p className="text-muted-foreground">
            Google Maps Embed (Placeholder)
          </p>
          {/* Example: <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe> */}
        </div>
      </div>
    </div>
  );
}

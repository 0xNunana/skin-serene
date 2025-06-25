"use client";

import Image from "next/image";
import type { Metadata } from "next";
import { motion } from "framer-motion"; // For client-side animations
import { CheckCircle, Droplets, Heart, Users, Milestone } from "lucide-react";

// export const metadata: Metadata = {
//   title: "About Skin Serene",
//   description:
//     "Learn about Skin Serene Cosmetics, our philosophy, natural ingredients, and commitment to quality.",
// };

const SectionWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={`py-12 md:py-16 ${className}`}
  >
    {children}
  </motion.section>
);

const FeatureCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <Icon className="h-12 w-12 text-[#FFD700] mb-4" />
    <h3 className="font-headline text-xl font-semibold text-primary mb-2">
      {title}
    </h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24 mx-auto px-6 sm:px-8 lg:px-12">
      <SectionWrapper className="bg-gradient-to-b from-background to-secondary/20 rounded-lg p-8 md:p-12 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-6"
        >
          The Essence of Skin Serene
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto"
        >
          At Skin Serene, we believe in the harmonious blend of nature and
          science to create skincare that not only pampers your skin but also
          calms your soul. Our journey began with a simple desire: to craft
          pure, effective, and luxurious products that you can trust.
        </motion.p>
      </SectionWrapper>

      {/* Placeholder for animated timeline or parallax */}
      <SectionWrapper>
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center text-primary mb-12">
          Our Journey
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Item 1 */}
          <div className="flex items-center w-full mb-8">
            <div className="w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-card rounded-lg shadow-md text-right"
              >
                <h3 className="font-headline text-lg font-semibold mb-1">
                  2020 - The Spark
                </h3>
                <p className="text-sm text-muted-foreground">
                  The idea for Skin Serene was born out of a passion for natural
                  remedies and self-care rituals.
                </p>
              </motion.div>
            </div>
            <div className="relative w-1/12 flex justify-center">
              <div className="h-full w-1 bg-border absolute"></div>
              <Milestone className="h-8 w-8 text-primary bg-background p-1 rounded-full z-10" />
            </div>
            <div className="w-1/2"></div>
          </div>
          {/* Timeline Item 2 */}
          <div className="flex items-center w-full mb-8">
            <div className="w-1/2"></div>
            <div className="relative w-1/12 flex justify-center">
              <div className="h-full w-1 bg-border absolute"></div>
              <Milestone className="h-8 w-8 text-primary bg-background p-1 rounded-full z-10" />
            </div>
            <div className="w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-card rounded-lg shadow-md text-left"
              >
                <h3 className="font-headline text-lg font-semibold  mb-1">
                  2021 - Formulation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Months of research and careful formulation led to our first
                  signature products.
                </p>
              </motion.div>
            </div>
          </div>
          {/* Timeline Item 3 */}
          <div className="flex items-center w-full">
            <div className="w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-card rounded-lg shadow-md text-right"
              >
                <h3 className="font-headline text-lg font-semibold  mb-1">
                  2023 - Launch
                </h3>
                <p className="text-sm text-muted-foreground">
                  Skin Serene officially launched, bringing our vision of
                  natural luxury to life.
                </p>
              </motion.div>
            </div>
            <div className="relative w-1/12 flex justify-center">
              <Milestone className="h-8 w-8 text-primary bg-background p-1 rounded-full z-10" />
            </div>
            <div className="w-1/2"></div>
          </div>
          {/* <p className="text-center text-muted-foreground mt-8 text-sm">
            This is a simplified timeline. Parallax effects can be added for a
            more dynamic experience.
          </p> */}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-secondary/20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/lorriane.jpeg"
              alt="Founder of Skin Serene Cosmetics"
              width={500}
              height={600}
              className="rounded-lg shadow-xl mx-auto"
              data-ai-hint="person professional portrait"
            />
          </motion.div>
          <div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">
              Meet Our Founder
            </h2>
            <p className="text-foreground/80 mb-4">
              Lorriane Nana Aba Biney, a passionate advocate for holistic
              wellness and natural beauty, founded Skin Serene with a vision to
              create skincare that nurtures both skin and spirit. With an eye
              for botany and cosmetics, Lorriane meticulously selects each
              ingredient for its efficacy and purity.
            </p>
            <p className="text-foreground/80">
              "My dream was to offer products that are not only effective but
              also a joy to use – a small moment of serenity in your busy day.
              We pour our heart into every bottle, ensuring it reflects our
              commitment to quality and care." - Lorriane B.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center text-primary mb-12">
          Our Ingredient Philosophy
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Droplets}
            title="Purely Natural"
            description="We harness the power of nature, using plant-based extracts, nourishing oils, and pure botanicals."
          />
          <FeatureCard
            icon={Heart}
            title="Cruelty-Free"
            description="Our products are, and always will be, cruelty-free. We believe in kindness to all beings."
          />
          <FeatureCard
            icon={CheckCircle}
            title="Sustainable Sourcing"
            description="We are committed to responsible sourcing and eco-friendly practices to protect our planet."
          />
        </div>
      </SectionWrapper>
    </div>
  );
}

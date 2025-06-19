import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Testimonial } from "@/types";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col bg-card/70 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-4">
        <Quote className="h-8 w-8 text-accent mb-2" />
        <CardTitle className="text-lg font-normal leading-relaxed text-foreground/90 font-body">
          "{testimonial.quote}"
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow" />
      <CardFooter className="flex items-center gap-3 mt-auto">
        <Avatar>
          <AvatarImage
            src={testimonial.avatarUrl}
            alt={testimonial.author}
            data-ai-hint="person portrait"
          />
          <AvatarFallback>
            {testimonial.author.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-headline text-md font-semibold text-primary">
            {testimonial.author}
          </p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </CardFooter>
    </Card>
  );
}

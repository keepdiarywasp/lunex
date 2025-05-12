"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "./ui/carousel";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Crypto Investor",
    avatar: "https://ext.same-assets.com/4269615189/1091138897.jpeg",
    highlight: "+42% portfolio growth",
    quote: "Lunexa has transformed my crypto trading strategy. The AI predictions are remarkably accurate and have helped me increase my returns by over 40% in just three months."
  },
  {
    name: "Sarah Johnson",
    role: "Day Trader",
    avatar: "https://ext.same-assets.com/4269615189/2062414329.jpeg",
    highlight: "+28% monthly returns",
    quote: "As someone who's tried multiple trading bots, Lunexa stands out with its intuitive interface and powerful AI. The customizable strategies adapt to market conditions better than anything I've used before."
  },
  {
    name: "Michael Chen",
    role: "Financial Advisor",
    avatar: "https://ext.same-assets.com/4269615189/1481089598.jpeg",
    highlight: "Reduced risk exposure by 35%",
    quote: "I recommend Lunexa to all my clients interested in crypto markets. The risk management features give them peace of mind while the AI maximizes their opportunities."
  },
  {
    name: "Emma Patel",
    role: "Retail Investor",
    avatar: "https://ext.same-assets.com/4269615189/1110800075.jpeg",
    highlight: "First profitable quarter ever!",
    quote: "As a beginner in crypto trading, Lunexa made everything simple and approachable. The AI assistant guided my decisions and helped me avoid common pitfalls."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#2b1665,transparent_70%)]" />

      <div className="container relative px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground">
            Thousands of traders are already using Lunexa to optimize their crypto investments. Here's what they have to say.
          </p>
        </div>

        <Carousel
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.name} className="pl-2 md:pl-4 xs:basis-full sm:basis-full md:basis-1/2 lg:basis-1/2">
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-4 sm:p-6 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-base">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="text-primary font-medium text-sm mb-3 flex items-center">
                    {testimonial.highlight}
                    <Star className="h-4 w-4 ml-2 fill-primary stroke-none" />
                  </p>

                  <blockquote className="text-muted-foreground italic text-base">
                    "{testimonial.quote}"
                  </blockquote>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative mr-2 h-8 w-8 rounded-full static" />
            <CarouselNext className="relative h-8 w-8 rounded-full static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

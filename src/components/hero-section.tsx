"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// Separate client component for the Spline background
function SplineBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <iframe
        src='https://my.spline.design/worldplanet-hs2d0MFsbg38O3ii5isz5JZ8/'
        frameBorder='0'
        width='100%'
        height='100%'
        title="3D World Planet Background"
        className="scale-[2.5] opacity-200 animate-[pulse3D_4s_ease-in-out_infinite]"
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-16 sm:pt-20 md:pt-32 pb-12 sm:pb-16 md:pb-24 overflow-hidden"
    >
      {/* 3D Background */}
      <SplineBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#6a3bbd,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,#3d1e8a,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#2a4ba0,transparent_40%)]" />

      <div className="container relative px-2 md:px-4 lg:px-2 xl:px-0 max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-2 sm:mb-3 animate-fade-in">
            NEXT GENERATION OF CRYPTO TRADING
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 animate-slide-up">
            Trade Smarter with <span className="text-gradient">AI-Powered</span> Crypto Insights
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay px-4 sm:px-0">
            Lunexa combines artificial intelligence with cutting-edge trading
            strategies to help you maximize your crypto investments with precision
            and ease.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 animate-fade-in-delay-2">
            <Link href="/signup">
              <Button className="btn-gradient h-12 px-8 text-base font-medium hover:scale-105 transition-transform">
                Get Started
              </Button>
            </Link>
            <Link href="#how-it-works" className="inline-flex items-center">
              <Button variant="link" className="text-base font-medium group">
                Learn how it works
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative mt-8 md:mt-16 max-w-6xl mx-auto animate-fade-up">
          <div className="relative w-full aspect-[16/8] rounded-xl overflow-hidden shadow-2xl border border-border/30 hover:shadow-primary/20 transition-shadow duration-500">
            <Image
              src="https://ext.same-assets.com/4269615189/2376341775.png"
              alt="Lunexa Dashboard"
              fill
              className="object-cover scale-110 transform hover:scale-105 transition-transform duration-700"
              quality={100}
              priority
            />
          </div>

          {/* Abstract gradient elements */}
          <div className="absolute -top-16 -left-16 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        </div>

        <div className="mt-12 sm:mt-16 md:mt-28">
          <p className="text-center text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-4 sm:mb-8 animate-fade-in-delay-2">
            FEATURED IN
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-4 items-center justify-items-center animate-fade-in-delay-3">
            <div className="text-muted-foreground/70 font-medium text-sm md:text-base hover:text-foreground transition-colors">Forbes</div>
            <div className="text-muted-foreground/70 font-medium text-sm md:text-base hover:text-foreground transition-colors">TechCrunch</div>
            <div className="text-muted-foreground/70 font-medium text-sm md:text-base hover:text-foreground transition-colors">Bloomberg</div>
            <div className="text-muted-foreground/70 font-medium text-sm md:text-base hover:text-foreground transition-colors">Coindesk</div>
            <div className="text-muted-foreground/70 font-medium text-sm md:text-base hover:text-foreground transition-colors">CoinTelegraph</div>
          </div>
        </div>
      </div>
    </section>
  );
}

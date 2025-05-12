"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import { Activity, BookOpen, Users } from "lucide-react";

export function MissionSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#4c2885,transparent_70%)]" />

      <div className="container relative px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-72 lg:h-96 w-full rounded-2xl border border-border/50 overflow-hidden flex items-center justify-center">
              <div className="relative z-10 p-8">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Image
                    src="https://ext.same-assets.com/4269615189/1204203070.png"
                    alt="Lunexa Mission"
                    width={60}
                    height={60}
                    className="opacity-90"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/30 to-transparent" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Lunexa, our mission is to democratize access to sophisticated crypto trading strategies through cutting-edge artificial intelligence.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              We believe that everyone should have access to the tools and insights traditionally reserved for institutional investors and trading firms. By harnessing the power of AI, we're leveling the playing field and empowering individual traders to achieve their financial goals.
            </p>
            <p className="text-base text-muted-foreground mb-10">
              Founded by a team of AI researchers and crypto enthusiasts, Lunexa was born from the desire to create a platform that combines deep technical analysis with an intuitive user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-4 flex items-center gap-3">
                <Activity className="h-5 w-5 text-primary" />
                <span className="text-sm">Cutting-edge research</span>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-4 flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm">Human-centered design</span>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

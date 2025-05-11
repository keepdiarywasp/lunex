"use client";

import { Card } from "./ui/card";

export function MissionSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#4c2885,transparent_70%)]" />

      <div className="container relative px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-72 lg:h-96 w-full rounded-2xl border border-border/50 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/30 to-transparent">
                <iframe src="https://my.spline.design/genkubgreetingrobot-kyRdqL9XlfaUcGhXSzU8mvor/" frameBorder="0" width="100%" height="100%"></iframe>
              </div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
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
              <div className="rounded-xl text-card-foreground shadow bg-card/50 backdrop-blur-sm border border-border/50 p-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity h-5 w-5 text-primary">
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                </svg>
                <span className="text-sm">Cutting-edge research</span>
              </div>
              <div className="rounded-xl text-card-foreground shadow bg-card/50 backdrop-blur-sm border border-border/50 p-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-5 w-5 text-primary">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span className="text-sm">Human-centered design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

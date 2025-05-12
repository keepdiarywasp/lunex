"use client";

import {
  BarChart3,
  Sliders,
  LineChart,
  ShieldCheck
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function FeaturesSection() {
  const features = [
    {
      id: "ai-analysis",
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Advanced AI Analysis",
      description: "Our sophisticated AI algorithms analyze market trends, news, and social sentiment in real-time to identify profitable trading opportunities."
    },
    {
      id: "trading-strategies",
      icon: <Sliders className="h-12 w-12 text-primary" />,
      title: "Customizable Trading Strategies",
      description: "Customize your trading bot with predefined strategies or create your own based on technical indicators, market conditions, and risk tolerance."
    },
    {
      id: "performance-tracking",
      icon: <LineChart className="h-12 w-12 text-primary" />,
      title: "Real-Time Performance Tracking",
      description: "Monitor your portfolio performance, trade history, and profitability metrics with our intuitive real-time dashboard."
    },
    {
      id: "security",
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
      title: "Bank-Grade Security",
      description: "Your assets are protected with military-grade encryption, multi-signature wallets, and biometric authentication."
    }
  ];

  return (
    <section id="features" className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#4c2885,transparent_40%)]" />

      <div className="container relative px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Advanced Trading Features</h2>
          <p className="text-muted-foreground">
            Lunexa combines cutting-edge AI technology with intuitive design to give you a powerful yet user-friendly trading experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors hover-lift reveal group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="rounded-full w-16 h-16 bg-primary/10 flex items-center justify-center mb-2 transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

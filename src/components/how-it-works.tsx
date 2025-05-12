"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Wallet, Bot, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Wallet className="h-12 w-12 text-primary" />,
      title: "Connect Your Wallet",
      description: "Securely connect your existing crypto wallets or exchanges to Lunexa with our advanced API integration system."
    },
    {
      icon: <Bot className="h-12 w-12 text-primary" />,
      title: "Set Up Your AI Assistant",
      description: "Configure your AI assistant with your trading preferences, risk tolerance, and investment goals."
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Automate Your Trading",
      description: "Let Lunexa analyze market trends and execute trades on your behalf based on sophisticated AI algorithms."
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#2b1665,transparent_70%)]" />

      <div className="container relative px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Getting started with Lunexa is easy. Follow these simple steps to begin your AI-powered crypto trading journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors hover-lift reveal group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="p-6">
                <div className="rounded-full w-16 h-16 bg-primary/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  {step.icon}
                </div>
                <CardTitle className="mt-4 text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6">
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 flex justify-center reveal" style={{ transitionDelay: '450ms' }}>
          <div className="relative w-full max-w-lg h-80 rounded-2xl border border-border/50 overflow-hidden hover:border-primary/60 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
            <Image
              src="https://ext.same-assets.com/4269615189/1998606599.svg"
              fill
              alt="Lunexa AI Assistant"
              className="object-contain p-8 transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

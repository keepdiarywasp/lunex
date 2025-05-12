"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: "Free",
      price: {
        monthly: "0",
        yearly: "0"
      },
      billing: "forever",
      description: "Perfect for beginners exploring the crypto market",
      features: [
        "Limited AI market analysis",
        "Manual trading only",
        "Basic portfolio tracking",
        "Email support"
      ],
      cta: "Start Free",
      href: "/signup",
      recommended: false
    },
    {
      name: "Pro",
      price: {
        monthly: "49",
        yearly: "39"
      },
      billing: isYearly ? "per month, billed yearly" : "per month",
      description: "For serious traders who want AI-powered advantages",
      features: [
        "Full AI market analysis",
        "Automated trading strategies",
        "Advanced portfolio tracking",
        "Priority support",
        "Custom alerts and notifications",
        "Trading across multiple exchanges",
        "Historical performance analysis"
      ],
      cta: "Get Pro",
      href: "/signup",
      recommended: true
    },
    {
      name: "Enterprise",
      price: {
        monthly: "Custom",
        yearly: "Custom"
      },
      billing: "pricing",
      description: "For teams and professional trading firms",
      features: [
        "Everything in Pro",
        "Unlimited trading bots",
        "Advanced API access",
        "Dedicated account manager",
        "Custom feature development",
        "White-label options",
        "Priority feature requests"
      ],
      cta: "Contact Us",
      href: "/signup",
      recommended: false
    }
  ];

  const getPrice = (plan) => {
    return isYearly ? plan.price.yearly : plan.price.monthly;
  };

  return (
    <section id="pricing" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#4c2885,transparent_60%)]" />

      <div className="container relative px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 reveal">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-muted-foreground">
            Choose the plan that best suits your trading needs. No hidden fees or commitments.
          </p>
        </div>

        <div className="flex justify-center items-center gap-3 mb-12 reveal" style={{ transitionDelay: '200ms' }}>
          <span className={`text-sm font-medium ${!isYearly ? 'text-primary' : 'text-muted-foreground'}`}>Monthly</span>

          <label className="price-switch">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <span className="price-switch-slider" />
          </label>

          <span className={`text-sm font-medium flex items-center gap-2 ${isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
            Yearly
            <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`bg-card/50 backdrop-blur-sm border ${plan.recommended ? 'border-primary' : 'border-border/50'} flex flex-col h-full relative hover-lift reveal`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Recommended
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-bold">${getPrice(plan)}</span>
                  <span className="ml-1 text-sm text-muted-foreground">/{plan.billing}</span>
                </div>
                <CardDescription className="mt-3">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={plan.href} className="w-full">
                  <Button
                    className={`w-full ${plan.recommended ? 'btn-gradient' : ''}`}
                    variant={plan.recommended ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12 reveal" style={{ transitionDelay: '750ms' }}>
          All plans include our 14-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  );
}

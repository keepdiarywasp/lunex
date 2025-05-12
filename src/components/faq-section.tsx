"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "./ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      id: "ai-algorithm",
      question: "How does Lunexa's AI trading algorithm work?",
      answer: "Lunexa's AI trading algorithm uses a combination of machine learning models, natural language processing, and technical analysis to identify market trends and make trading decisions. It analyzes historical data, market sentiments, news events, and on-chain metrics to predict price movements and execute trades based on your predefined risk parameters and investment goals."
    },
    {
      id: "crypto-safety",
      question: "Is my crypto safe with Lunexa?",
      answer: "Yes, your crypto assets are secure with Lunexa. We never take custody of your funds - our platform connects to your existing wallets and exchanges through secure API connections. We implement bank-grade security measures, including end-to-end encryption, two-factor authentication, and regular security audits to ensure your assets and data remain protected."
    },
    {
      id: "exchanges-support",
      question: "What exchanges does Lunexa support?",
      answer: "Lunexa currently supports integration with major cryptocurrency exchanges including Binance, Coinbase Pro, Kraken, FTX, Kucoin, and many others. We're constantly expanding our list of supported exchanges to provide you with more trading options and liquidity sources."
    },
    {
      id: "custom-strategies",
      question: "Can I customize the trading strategies?",
      answer: "Absolutely! Lunexa offers both pre-configured trading strategies and fully customizable options. You can adjust risk levels, set specific entry and exit conditions, choose which technical indicators to use, and even create complex strategies combining multiple signals and conditions."
    },
    {
      id: "experience-level",
      question: "How much experience do I need to use Lunexa?",
      answer: "Lunexa is designed to be accessible for traders of all experience levels. Beginners can start with our simple preset strategies and educational resources, while experienced traders can dive into advanced customization options. Our intuitive interface and AI assistant guide you through the process, making it easy to get started regardless of your trading background."
    },
    {
      id: "subscription-cancel",
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no questions asked. If you cancel within the first 14 days, you're eligible for our full money-back guarantee. After cancellation, you'll continue to have access to your subscription benefits until the end of your current billing period."
    }
  ];

  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#2b1665,transparent_70%)]" />

      <div className="container relative px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Everything you need to know about Lunexa and how it can transform your crypto trading experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Still have questions? We're here to help.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-primary/50 hover:border-primary transition-colors">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

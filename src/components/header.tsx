"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="container flex items-center justify-between h-14 sm:h-16 md:h-20 px-3 sm:px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">LUNEXA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#hero" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Testimonials
          </Link>
          <Link href="#faq" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" className="text-sm">Login</Button>
          </Link>
          <Link href="/signup">
            <Button className="btn-gradient text-sm font-medium">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="#hero" onClick={() => setIsMenuOpen(false)} className="text-base font-medium py-2 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#features" onClick={() => setIsMenuOpen(false)} className="text-base font-medium py-2 hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-base font-medium py-2 hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-base font-medium py-2 hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-base font-medium py-2 hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link href="#faq" onClick={() => setIsMenuOpen(false)} className="text-base font-medium py-2 hover:text-primary transition-colors">
                FAQ
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full btn-gradient">Get Started</Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

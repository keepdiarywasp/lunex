"use client";

import { useEffect } from "react";
import { initScrollAnimations } from "@/lib/scroll-animations";

export function ScrollAnimator() {
  useEffect(() => {
    const cleanup = initScrollAnimations();

    // Cleanup function
    return () => {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, []);

  // This component doesn't render anything
  return null;
}

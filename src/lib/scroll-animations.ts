"use client";

// Check if an element is in viewport
export function isElementInViewport(el: Element): boolean {
  if (!el) return false;

  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0
  );
}

// Reveal elements on scroll
export function revealOnScroll(): void {
  const reveals = document.querySelectorAll('.reveal');

  // Using for...of instead of forEach for better performance
  for (const element of reveals) {
    if (isElementInViewport(element)) {
      element.classList.add('active');
    }
  }
}

// Initialize the scroll animations
export function initScrollAnimations(): () => void {
  // Initial check on page load
  setTimeout(() => {
    revealOnScroll();
  }, 100);

  // Add event listener for scroll
  window.addEventListener('scroll', revealOnScroll, { passive: true });

  // Clean up on component unmount
  return () => {
    window.removeEventListener('scroll', revealOnScroll);
  };
}

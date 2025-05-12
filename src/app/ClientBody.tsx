"use client";

import { ThemeProvider } from "@/lib/theme-provider";
import { LanguageProvider } from "@/lib/language-provider";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider defaultTheme="dark">
      <LanguageProvider defaultLanguage="en">
        <div className="antialiased">{children}</div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

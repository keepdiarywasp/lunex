"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "es" | "fr" | "de" | "zh";

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Translations for different languages
const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.signup": "Sign Up",
    "hero.title": "Trade Smarter with AI-Powered Crypto Insights",
    "hero.subtitle": "Lunexa combines artificial intelligence with cutting-edge trading strategies to help you maximize your crypto investments with precision and ease.",
    "cta.getStarted": "Get Started",
    "cta.learnMore": "Learn how it works",
    // Add more translations as needed
  },
  es: {
    "nav.home": "Inicio",
    "nav.features": "Características",
    "nav.pricing": "Precios",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "nav.login": "Iniciar sesión",
    "nav.signup": "Registrarse",
    "hero.title": "Comercia más inteligentemente con información criptográfica impulsada por IA",
    "hero.subtitle": "Lunexa combina inteligencia artificial con estrategias de negociación de vanguardia para ayudarte a maximizar tus inversiones en criptomonedas con precisión y facilidad.",
    "cta.getStarted": "Empezar",
    "cta.learnMore": "Aprende cómo funciona",
    // Add more translations as needed
  },
  fr: {
    "nav.home": "Accueil",
    "nav.features": "Fonctionnalités",
    "nav.pricing": "Tarifs",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.login": "Connexion",
    "nav.signup": "S'inscrire",
    "hero.title": "Tradez plus intelligemment avec des insights crypto alimentés par l'IA",
    "hero.subtitle": "Lunexa combine l'intelligence artificielle avec des stratégies de trading de pointe pour vous aider à maximiser vos investissements crypto avec précision et facilité.",
    "cta.getStarted": "Commencer",
    "cta.learnMore": "Découvrez comment ça marche",
    // Add more translations as needed
  },
  de: {
    "nav.home": "Startseite",
    "nav.features": "Funktionen",
    "nav.pricing": "Preise",
    "nav.blog": "Blog",
    "nav.contact": "Kontakt",
    "nav.login": "Anmelden",
    "nav.signup": "Registrieren",
    "hero.title": "Handeln Sie intelligenter mit KI-gestützten Krypto-Einblicken",
    "hero.subtitle": "Lunexa kombiniert künstliche Intelligenz mit hochmodernen Handelsstrategien, um Ihnen zu helfen, Ihre Krypto-Investitionen mit Präzision und Leichtigkeit zu maximieren.",
    "cta.getStarted": "Loslegen",
    "cta.learnMore": "Erfahren Sie, wie es funktioniert",
    // Add more translations as needed
  },
  zh: {
    "nav.home": "首页",
    "nav.features": "功能",
    "nav.pricing": "定价",
    "nav.blog": "博客",
    "nav.contact": "联系我们",
    "nav.login": "登录",
    "nav.signup": "注册",
    "hero.title": "使用AI驱动的加密洞察力进行更智能的交易",
    "hero.subtitle": "Lunexa 将人工智能与尖端交易策略相结合，帮助您精确轻松地最大化加密货币投资。",
    "cta.getStarted": "开始使用",
    "cta.learnMore": "了解它如何工作",
    // Add more translations as needed
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  defaultLanguage = "en",
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  // Translation function
  const t = (key: string): string => {
    if (!translations[language][key]) {
      // Fallback to English if translation not found
      return translations.en[key] || key;
    }
    return translations[language][key];
  };

  // Load saved language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;

    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}

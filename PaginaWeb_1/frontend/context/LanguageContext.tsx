"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getTranslation } from "@/lib/i18n/dictionaries";
import { translateText } from "@/lib/i18n/translate";
import type { Idioma } from "@/types";

interface LanguageContextValue {
  lang: Idioma;
  mounted: boolean;
  setLang: (lang: Idioma) => void;
  t: (key: string) => string;
  tDynamic: (text: string) => Promise<string>;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "aaron_lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Idioma>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Idioma | null;
    if (stored === "es" || stored === "en") {
      setLangState(stored);
    }
    setMounted(true);
  }, []);

  const setLang = useCallback((newLang: Idioma) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  }, []);

  const t = useCallback(
    (key: string) => getTranslation(lang, key),
    [lang]
  );

  const tDynamic = useCallback(
    async (text: string) => {
      if (lang === "es") return text;
      return translateText(text, lang);
    },
    [lang]
  );

  const value = useMemo(
    () => ({ lang, mounted, setLang, t, tDynamic }),
    [lang, mounted, setLang, t, tDynamic]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  }
  return ctx;
}

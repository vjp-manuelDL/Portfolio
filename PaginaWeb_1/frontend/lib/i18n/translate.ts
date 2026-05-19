import type { Idioma } from "@/types";

const cache = new Map<string, string>();

export async function translateText(
  text: string,
  targetLang: Idioma
): Promise<string> {
  if (!text.trim()) return text;
  if (targetLang === "es") return text;

  const cacheKey = `${targetLang}:${text}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey)!;

  try {
    const params = new URLSearchParams({
      q: text,
      langpair: `es|${targetLang === "en" ? "en" : "es"}`,
    });
    const res = await fetch(
      `https://api.mymemory.translated.net/get?${params.toString()}`
    );
    const data = await res.json();
    const translated =
      data?.responseData?.translatedText?.trim() || text;
    cache.set(cacheKey, translated);
    return translated;
  } catch {
    return text;
  }
}

import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import SchemaOrg from "@/components/ui/SchemaOrg";

const serif = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
});

const sans = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Натяжные потолки в Москве — Установка под ключ | PotolokBel",
  description: "Натяжные потолки премиум качества в Москве. Бесплатный замер. Гарантия на все виды работ. Теневые, парящие, световые решения для вашего интерьера.",
  keywords: "натяжные потолки москва, установка натяжных потолков, теневые потолки, парящие потолки, дизайн интерьера москва",
  openGraph: {
    title: "PotolokBel — Премиальные натяжные потолки",
    description: "Проектируем и устанавливаем потолки под стиль вашего пространства",
    type: "website",
    locale: "ru_RU",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${serif.variable} ${sans.variable} antialiased`}
    >
      <body className="bg-premium-white text-premium-graphite font-sans">
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}

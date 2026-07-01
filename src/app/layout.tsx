import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import SchemaOrg from "@/components/ui/SchemaOrg";
import CustomCursor from "@/components/ui/CustomCursor";
import PageWrapper from "@/components/ui/PageWrapper";

const serif = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
});

const sans = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "PotolokBel — Архитектурные Решения в Натяжных Потолках",
  description: "Проектируем и монтируем натяжные потолки бизнес-класса в Москве. Теневой профиль, световые сценарии, идеальная геометрия.",
  keywords: ["натяжные потолки москва", "теневой профиль eurokraab", "световые линии", "архитектурные потолки", "премиальные потолки"],
  authors: [{ name: "PotolokBel" }],
  robots: "index, follow",
  openGraph: {
    title: "PotolokBel — Digital Experience",
    description: "Кинематографическая презентация архитектурных потолочных систем в Москве.",
    url: "https://potolokbel.ru",
    siteName: "PotolokBel",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "PotolokBel — Архитектурные Решения",
    description: "Премиальные натяжные потолки и световой дизайн.",
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
      className={`${serif.variable} ${sans.variable} antialiased selection:bg-luxury-brass selection:text-luxury-bg`}
    >
      <body className="bg-luxury-bg text-luxury-text font-sans overflow-x-hidden antialiased">
        <CustomCursor />
        <SchemaOrg />
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}

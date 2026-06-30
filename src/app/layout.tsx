import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "PotolokBel — Архитектурные Решения в Натяжных Потолках",
  description: "Bespoke потолочные системы для премиальных интерьеров. Дизайн, свет, архитектура.",
  openGraph: {
    title: "PotolokBel — Digital Experience",
    description: "Кинематографическая презентация архитектурных потолочных систем.",
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

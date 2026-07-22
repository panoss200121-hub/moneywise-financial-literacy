import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { I18nProvider } from "@/lib/i18n";
import { ProgressProvider } from "@/lib/progress";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Moneywise | Χρηματοοικονομική παιδεία για παιδιά",
  description: "Παιχνιδοποιημένη χρηματοοικονομική εκπαίδευση με μαθήματα, αποστολές, XP, WiseCoins και τοπική mock πρόοδο."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="el">
      <body className={inter.variable}>
        <I18nProvider>
          <ProgressProvider>
            <AppHeader />
            {children}
            <AppFooter />
          </ProgressProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

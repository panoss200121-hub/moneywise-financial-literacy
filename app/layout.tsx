import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppHeader } from "@/components/AppHeader";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Moneywise | Χρηματοοικονομικός αλφαβητισμός για παιδιά και εφήβους",
  description: "Διαδραστική χρηματοοικονομική εκπαίδευση με μαθήματα, κουίζ, αποστολές, διακρίσεις και πρόοδο για παιδιά και εφήβους."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="el">
      <body className={inter.variable}>
        <I18nProvider>
          <AppHeader />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { I18nProvider } from "@/lib/i18n";
import { ProgressProvider } from "@/lib/progress";
import { AudienceProvider } from "@/lib/audience";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Moneywise | Χρηματοοικονομική παιδεία για κάθε ηλικία",
  description: "Πρακτικά μαθήματα και δραστηριότητες χρηματοοικονομικής παιδείας για κάθε στάδιο της ζωής."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="el">
      <body className={inter.variable}>
        <I18nProvider>
          <ProgressProvider><AudienceProvider>
            <AppHeader />
            {children}
            <AppFooter />
          </AudienceProvider></ProgressProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

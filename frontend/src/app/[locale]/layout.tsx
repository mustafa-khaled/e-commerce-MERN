import type { Metadata } from "next";
import { Languages, Directions } from "@/constants/enums";
import { Roboto } from "next/font/google";
import { Locale } from "@/i18n.config";
import Header from "@/components/header";
import ReduxProvider from "@/providers/ReduxProvider";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
});

export async function generateStaticParams() {
  return [{ locale: Languages.ARABIC }, { locale: Languages.ENGLISH }];
}

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is the home page",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const locale = (await params).locale;

  return (
    <html
      lang={locale}
      dir={locale === Languages.ARABIC ? Directions.RTL : Directions.LTR}
    >
      <body className={roboto.className}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

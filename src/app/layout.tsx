import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/footer";


const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arscity",
  description: "ARS CITY — современная компания, специализирующаяся на продаже высококачественных отделочных материалов для вашего дома. Мы предлагаем широкий ассортимент керамической плитки, ламината и сопутствующих товаров для создания идеального интерьера",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${robotoSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

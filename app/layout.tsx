import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MachinaFitness",
  description: "Where fitness works for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

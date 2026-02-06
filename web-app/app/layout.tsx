import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

import { Footer } from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DOĞANLİFT | Geleceğin Asansör Teknolojileri",
  description: "Tokat ve çevre illerde profesyonel asansör montaj, bakım ve modernizasyon hizmetleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={`${inter.className} min-h-screen bg-black text-white selection:bg-blue-500/30`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

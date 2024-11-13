import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import { BellDot } from "lucide-react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rabbit Jobs | Find your dream job",
  description: "Rabbit Jobs | Best platform for finding your dream job, just swipe right!",
  icons: {
    icon: "/favicon/favicon.ico",
  },
  openGraph: {
    title: "Rabbit Jobs | Find your dream job",
    description: "Rabbit Jobs | Best platform for finding your dream job, just swipe right!",
    images: ["/og-background.png"],
    url: "https://fviec.vn",
    type: "website",
    siteName: "Rabbit Jobs",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased flex flex-col min-h-screen", {
          [geistSans.variable]: geistSans.variable,
          [geistMono.variable]: geistMono.variable,
        })}
      >
        <div className="p-3 bg-primary text-white text-center font-bold text-xs md:text-sm">
          <BellDot size={24} className="text-white inline-block mr-2" />
          We will release first version of this website on Q3 2025.
        </div>
        <Header />
        <main className="flex-1 min-h-screen">
          <Container>{children}</Container>
        </main>

        <Footer />
      </body>
    </html>
  );
}

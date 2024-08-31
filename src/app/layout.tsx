import { Header } from "@/components/Layout/Header";
import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "Capputeeno a e-commerce for selling mugs and t-shirts",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-ao">
      <body className={`${saira.className} bg-primary text-primary`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
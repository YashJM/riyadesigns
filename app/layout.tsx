import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riyadesigns.studio"),
  title: {
    default: "Riya Designs",
    template: "%s | Riya Designs",
  },
  description:
    "Riya Designs is a UI/UX and product strategy portfolio focused on clear, human-centered digital experiences.",
  openGraph: {
    title: "Riya Designs",
    description:
      "Creative portfolio for Riya Patel, UI/UX Designer and Product Strategist.",
    type: "website",
    url: "https://riyadesigns.studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riya Designs",
    description:
      "Creative portfolio for Riya Patel, UI/UX Designer and Product Strategist.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

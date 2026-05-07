import type { Metadata } from "next";
import Script from "next/script";
import { Akatab, Akshar } from "next/font/google";
import "./globals.css";

const akatab = Akatab({
  variable: "--font-akatab",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const akshar = Akshar({
  variable: "--font-akshar",
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className={`${akatab.variable} ${akshar.variable} h-full`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YG8DJWMFPP"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YG8DJWMFPP');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

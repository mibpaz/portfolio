import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import {
  Atkinson_Hyperlegible_Next,
  Space_Grotesk,
  Space_Mono,
} from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-space-grotesk",
});

const body = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-atkinson-hyperlegible-next",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashlc.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description:
    "Isadora Paz — software engineer specializing in web and mobile development. Explore my projects, skills, and background.",
  keywords: [
    "software engineer",
    "web developer",
    "mobile developer",
    "portfolio",
    "React",
    "Next.js",
    "Isadora Paz",
  ],
  authors: [{ name: "Isadora Paz", url: "https://ashlc.vercel.app" }],
  creator: "Isadora Paz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashlc.vercel.app",
    siteName: "Isadora's Portfolio",
    title: "Isadora's Portfolio",
    description:
      "Frontend web and mobile developer portfolio. Explore my projects, skills, and background.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Isadora's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isadora's Portfolio",
    description: "Frontend web and mobile developer portfolio.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "text-foreground bg-gradient-to-l from-background via-primary-900/30 to-background font-sans antialiased dark",
          display.variable,
          body.variable,
          mono.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative w-screen overflow-overlay">
            <Navbar />
            <main className="container">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

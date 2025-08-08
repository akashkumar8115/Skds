import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import type { Metadata } from "next";

const font = DM_Sans({ subsets: ["latin"], display: "swap", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Shri Kishori Design Studio – UI/UX & Web Design Agency",
  description:
    "Shri Kishori Design Studio is a creative UI/UX and web design agency specializing in high-converting digital experiences. We help businesses grow through beautiful and functional design.",
  keywords:
    "Shri Kishori Design Studio, UI/UX Design, Web Design, Creative Agency, Responsive Design, Figma, TailwindCSS, Next.js",
  authors: [{ name: "Shri Kishori Design Studio", url: "https://yourwebsite.com" }],
  metadataBase: new URL("https://yourwebsite.com"),
  openGraph: {
    title: "Shri Kishori Design Studio",
    description:
      "Creative UI/UX and web design studio delivering high-converting websites and digital products.",
    url: "https://yourwebsite.com",
    siteName: "Shri Kishori Design Studio",
    images: [
      {
        url: "https://yourwebsite.com/images/og-image.jpg", // replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Shri Kishori Design Studio OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Kishori Design Studio",
    description:
      "We craft stunning websites and UI/UX experiences for modern businesses.",
    images: ["https://yourwebsite.com/images/twitter-card.jpg"], // replace with actual Twitter card image
    creator: "@yourTwitterHandle", // optional
  },
  // themeColor: "#F7931A", // optional
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={font.className}>
        <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

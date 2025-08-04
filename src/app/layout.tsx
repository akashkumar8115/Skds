import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos"; // Direct import
import { Metadata } from "next";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Shri Kishori Design Studio",
    template: "%s | Shri Kishori Design Studio",
  },
  description:
    "Shri Kishori Design Studio: Creative design solutions for your brand. Explore our portfolio, services, and latest blog updates.",
  keywords: [
    "Design Studio",
    "Branding",
    "Portfolio",
    "UI/UX",
    "Web Design",
    "Shri Kishori",
  ],
  openGraph: {
    title: "Shri Kishori Design Studio",
    description: "Creative design solutions for your brand.",
    url: "https://yourdomain.com", // Replace with your actual domain
    siteName: "Shri Kishori Design Studio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Shri Kishori Design Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Kishori Design Studio",
    description: "Creative design solutions for your brand.",
    images: ["https://yourdomain.com/og-image.jpg"], // Replace with actual image URL
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://yourdomain.com", // Replace with your actual domain
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_VERIFICATION_CODE" // Replace with actual code
        />
      </head>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Aoscompo>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
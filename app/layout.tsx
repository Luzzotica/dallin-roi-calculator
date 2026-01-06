import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Communication ROI Calculator | Dallin Cooper",
  description:
    "Calculate the cost of poor communication in your organization and discover how Dallin Cooper's keynotes, workshops, and trainings can transform your team.",
  keywords: [
    "communication training",
    "keynote speaker",
    "workplace communication",
    "ROI calculator",
    "Dallin Cooper",
  ],
  openGraph: {
    title: "Communication ROI Calculator | Dallin Cooper",
    description:
      "Poor communication costs US businesses $1.2 trillion annually. Calculate your team's potential savings.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

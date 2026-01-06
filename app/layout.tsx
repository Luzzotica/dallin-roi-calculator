import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "Dallin Cooper | Leadership, Communication & Conflict Resolution Speaker",
  description:
    "Dallin Cooper is a leadership, conflict resolution, and communication speaker who helps audiences challenge their assumptions to communicate effectively and work with those they disagree with.",
  keywords: [
    "keynote speaker",
    "leadership speaker",
    "communication training",
    "conflict resolution",
    "Dallin Cooper",
    "corporate speaker",
  ],
  openGraph: {
    title: "Dallin Cooper | Keynote Speaker",
    description:
      "Leadership, conflict resolution, and communication speaker helping audiences challenge their assumptions.",
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
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

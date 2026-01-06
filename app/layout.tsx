import type { Metadata } from "next";
import { Bitter, Open_Sans, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
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
        className={`${bitter.variable} ${openSans.variable} ${oswald.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: "'Open Sans', Helvetica, Arial, sans-serif" }}
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

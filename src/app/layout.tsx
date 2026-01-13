import type { Metadata } from "next";
import "app/app/globals.css";
import { Header } from "app/widgets/header/ui/Header";
import { Footer } from "app/widgets/footer/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "NickGen - Free Game Nickname Generator | Cool & Unique Names",
    template: "%s | NickGen",
  },
  description:
    "Generate unique, cool, and memorable game nicknames instantly. Free nickname generator for LoL, Valorant, Fortnite, and all games. Create your perfect gaming identity with our powerful name generator.",
  keywords: [
    "nickname generator",
    "game nickname",
    "gaming name generator",
    "LoL nickname",
    "cool nicknames",
    "unique usernames",
    "gamer tag generator",
    "free nickname generator",
  ],
  authors: [{ name: "NickGen" }],
  creator: "NickGen",
  publisher: "NickGen",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NickGen",
    title: "NickGen - Free Game Nickname Generator",
    description:
      "Generate unique, cool, and memorable game nicknames instantly. Perfect for LoL, Valorant, Fortnite, and all games.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NickGen - Free Game Nickname Generator",
    description:
      "Generate unique, cool, and memorable game nicknames instantly.",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="gradient-bg min-h-screen text-slate-100 pattern-grid">
        <div className="relative min-h-screen flex flex-col">
          {/* Decorative orbs */}
          <div className="glow-orb w-96 h-96 bg-purple-600 top-0 left-1/4 -translate-x-1/2" />
          <div className="glow-orb w-80 h-80 bg-cyan-500 top-1/3 right-0" />
          <div className="glow-orb w-64 h-64 bg-pink-500 bottom-1/4 left-10" />

          <Header />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

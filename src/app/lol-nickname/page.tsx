import type { Metadata } from "next";
import { NicknameGenerator } from "app/features/nickname-generator";

export const metadata: Metadata = {
  title: "LoL Nickname Generator - League of Legends Names",
  description:
    "Generate perfect League of Legends nicknames instantly. Create Summoner names inspired by champions, ranks, and esports teams. Find your ideal LoL identity.",
  keywords: [
    "lol nickname generator",
    "league of legends names",
    "summoner name generator",
    "lol username",
    "lol gamer tag",
    "riot games name",
    "esports names",
  ],
  openGraph: {
    title: "LoL Nickname Generator - League of Legends Names",
    description:
      "Generate perfect League of Legends nicknames instantly. Create Summoner names inspired by champions and esports.",
  },
};

const LolNicknamePage = () => {
  const exampleNicknames = [
    "xXYasuoMainXx",
    "T1Zed",
    "HideOnAhri",
    "DiamondDiff",
    "ProLux123",
    "SKTFlash",
    "PentaEzreal",
    "ChallJinx",
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">LoL Nickname</span>
            <br />
            <span className="text-white">Generator</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-200">
            Generate the perfect Summoner name for League of Legends. Create
            names inspired by champions, ranks, and legendary esports teams like
            T1, G2, and more.
          </p>
        </section>

        {/* Generator */}
        <section className="mb-16">
          <NicknameGenerator style="lol" />
        </section>

        {/* Example Nicknames */}
        <section className="mb-16">
          <div className="card-glow rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Example LoL Nicknames
            </h2>
            <div className="flex flex-wrap gap-2">
              {exampleNicknames.map((name) => (
                <span
                  key={name}
                  className="px-3 py-1.5 bg-slate-700/50 rounded-lg text-sm text-slate-300 font-mono"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="max-w-4xl mx-auto">
          <div className="card-glow rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Creating the Perfect LoL Summoner Name
            </h2>
            <div className="prose prose-invert prose-slate max-w-none">
              <p className="text-slate-300 mb-4">
                Your Summoner name in League of Legends is more than just an
                identifier. It represents your playstyle, your main champions,
                and your dedication to the game. A great LoL nickname can
                reference your favorite champions, show your rank aspirations,
                or pay homage to legendary pro players.
              </p>
              <p className="text-slate-300 mb-4">
                Our LoL nickname generator combines elements from the League of
                Legends universe including champion names like Yasuo, Zed, and
                Ahri, rank references like Diamond and Challenger, and esports
                team prefixes like T1, G2, and SKT. Classic LoL formatting with
                xX and II adds authenticity to your Summoner name.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                LoL Nickname Styles
              </h3>
              <p className="text-slate-300 mb-4">
                League of Legends has developed its own unique naming culture
                over the years. One-trick pony players often include their main
                champion in their name, while competitive players might
                reference their target rank or current division. Esports fans
                love incorporating team names or player references.
              </p>
              <p className="text-slate-300">
                Whether you are a casual ARAM player or grinding ranked to reach
                Challenger, your Summoner name tells a story. Our generator
                helps you find a name that fits your League of Legends journey
                and the identity you want to project on the Rift.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LolNicknamePage;

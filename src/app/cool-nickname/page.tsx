import type { Metadata } from "next";
import { NicknameGenerator } from "app/features/nickname-generator";

export const metadata: Metadata = {
  title: "Cool Nickname Generator - Edgy & Powerful Gaming Names",
  description:
    "Generate cool, edgy, and powerful gaming nicknames instantly. Perfect for competitive gamers who want to stand out. Create memorable names with dark, cyber, and elite themes.",
  keywords: [
    "cool nickname generator",
    "edgy gaming names",
    "cool gamer tags",
    "powerful nicknames",
    "gaming identity",
    "dark nicknames",
    "cyber names",
  ],
  openGraph: {
    title: "Cool Nickname Generator - Edgy & Powerful Gaming Names",
    description:
      "Generate cool, edgy, and powerful gaming nicknames instantly. Perfect for competitive gamers.",
  },
};

const CoolNicknamePage = () => {
  const exampleNicknames = [
    "ShadowViper",
    "NeonReaper",
    "CyberPhantom",
    "DarkStrike99",
    "VoidHunter",
    "FrostBlade",
    "NovaAssassin",
    "ChaosDragon",
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Cool Nickname</span>
            <br />
            <span className="text-white">Generator</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-200">
            Create edgy, powerful, and memorable gaming names. Perfect for
            competitive gamers who want to intimidate opponents and stand out in
            any game.
          </p>
        </section>

        {/* Generator */}
        <section className="mb-16">
          <NicknameGenerator style="cool" />
        </section>

        {/* Example Nicknames */}
        <section className="mb-16">
          <div className="card-glow rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Example Cool Nicknames
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
              What Makes a Cool Gaming Nickname?
            </h2>
            <div className="prose prose-invert prose-slate max-w-none">
              <p className="text-slate-300 mb-4">
                Cool gaming nicknames combine powerful imagery with memorable
                sounds. They often feature elements of darkness, technology,
                mythology, and strength. A great cool nickname creates an
                immediate impression and becomes part of your gaming identity.
              </p>
              <p className="text-slate-300 mb-4">
                Our cool nickname generator uses carefully curated word
                combinations featuring prefixes like Dark, Shadow, Neon, Cyber,
                and Nova paired with powerful cores like Dragon, Phoenix, Blade,
                and Hunter. Optional suffixes add uniqueness with elements like
                X, Prime, Elite, and numbers.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                Best Uses for Cool Nicknames
              </h3>
              <p className="text-slate-300 mb-4">
                Cool nicknames work exceptionally well in competitive gaming
                environments. They are perfect for first-person shooters like
                Call of Duty and Valorant, battle royale games like Fortnite and
                Apex Legends, and fighting games where intimidation matters.
              </p>
              <p className="text-slate-300">
                These names project confidence and skill, making them ideal for
                ranked matches and tournament play. A well-chosen cool nickname
                can even give you a psychological edge over opponents who might
                take you more seriously based on your name alone.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoolNicknamePage;

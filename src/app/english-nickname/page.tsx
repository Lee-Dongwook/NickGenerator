import type { Metadata } from "next";
import { NicknameGenerator } from "app/features/nickname-generator";

export const metadata: Metadata = {
  title: "English Nickname Generator - Clean & Elegant Gaming Names",
  description:
    "Generate clean, elegant English nicknames for gaming. Create memorable names using nature, mythology, and sophisticated word combinations. Perfect for any game.",
  keywords: [
    "english nickname generator",
    "clean gaming names",
    "elegant nicknames",
    "simple usernames",
    "nature names",
    "sophisticated gamer tags",
  ],
  openGraph: {
    title: "English Nickname Generator - Clean & Elegant Gaming Names",
    description:
      "Generate clean, elegant English nicknames for gaming. Create memorable names for any platform.",
  },
};

const EnglishNicknamePage = () => {
  const exampleNicknames = [
    "SilentStorm",
    "MoonWatcher",
    "SwiftFoxRunner",
    "CalmOcean",
    "WiseOwlKeeper",
    "BraveStarLight",
    "TrueSageMind",
    "RoyalWolfSpirit",
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">English Nickname</span>
            <br />
            <span className="text-white">Generator</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-200">
            Create clean, elegant, and sophisticated gaming names. Perfect for
            players who prefer a more refined and timeless identity across all
            gaming platforms.
          </p>
        </section>

        {/* Generator */}
        <section className="mb-16">
          <NicknameGenerator style="english" />
        </section>

        {/* Example Nicknames */}
        <section className="mb-16">
          <div className="card-glow rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Example English Nicknames
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
              The Art of Elegant Gaming Nicknames
            </h2>
            <div className="prose prose-invert prose-slate max-w-none">
              <p className="text-slate-300 mb-4">
                English nicknames offer a timeless elegance that works across
                any gaming platform or genre. These names draw inspiration from
                nature, mythology, and refined vocabulary to create memorable
                identities that stand the test of time.
              </p>
              <p className="text-slate-300 mb-4">
                Our English nickname generator combines sophisticated prefixes
                like Silent, Swift, Wise, and Noble with nature-inspired cores
                featuring elements like Storm, Moon, Fox, and Oak. Elegant
                suffixes such as Walker, Keeper, and Seeker complete the name
                with a sense of purpose and depth.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                Why Choose English Nicknames
              </h3>
              <p className="text-slate-300 mb-4">
                Clean English nicknames are versatile and professional. They
                work well in any gaming community, from casual mobile games to
                serious esports competitions. These names age gracefully and
                rarely fall out of style, making them perfect for long-term
                gaming accounts.
              </p>
              <p className="text-slate-300">
                English nicknames are also ideal for streaming and content
                creation, where a clean and memorable name helps build your
                brand. They are easy to pronounce and remember, making them
                perfect for building recognition in any gaming community.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EnglishNicknamePage;

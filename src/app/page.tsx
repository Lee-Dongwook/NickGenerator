import Link from "next/link";
import { NicknameGenerator } from "app/features/nickname-generator";

const HomePage = () => {
  const categories = [
    {
      href: "/cool-nickname",
      title: "Cool Nicknames",
      description: "Edgy, powerful names for competitive gamers",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      href: "/lol-nickname",
      title: "LoL Nicknames",
      description: "Perfect names for League of Legends players",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      href: "/english-nickname",
      title: "English Nicknames",
      description: "Clean, elegant names for any game",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Game Nickname</span>
            <br />
            <span className="text-white">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-200">
            Create unique, memorable, and safe nicknames for your gaming
            identity. Instantly generate cool names for League of Legends,
            Valorant, Fortnite, and any game you play.
          </p>
          <div className="animate-fade-in animation-delay-400">
            <NicknameGenerator style="cool" />
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Choose Your Style
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.href}
                href={category.href}
                className="card-glow rounded-2xl p-6 group hover:scale-105 transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-slate-400 text-sm">{category.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="max-w-4xl mx-auto">
          <div className="card-glow rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Why Use NickGen for Your Gaming Nickname?
            </h2>
            <div className="prose prose-invert prose-slate max-w-none">
              <p className="text-slate-300 mb-4">
                Finding the perfect gaming nickname can be challenging. Your
                in-game name is your digital identity, representing you across
                countless gaming sessions and interactions. NickGen solves this
                problem by providing instant, unique, and memorable nickname
                suggestions tailored to your preferred style.
              </p>
              <p className="text-slate-300 mb-4">
                Our nickname generator uses sophisticated rule-based algorithms
                to create names that are not only cool and memorable but also
                appropriate for all gaming platforms. Every generated nickname
                is automatically filtered to ensure it meets community standards
                and platform guidelines.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                Features That Set Us Apart
              </h3>
              <ul className="text-slate-300 space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">-</span>
                  <span>
                    Instant generation with no sign-up required
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">-</span>
                  <span>
                    Multiple style categories for different gaming preferences
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">-</span>
                  <span>
                    Automatic filtering of inappropriate content
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">-</span>
                  <span>
                    One-click copy to clipboard functionality
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">-</span>
                  <span>
                    Mobile-friendly design for gaming on the go
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                Perfect for All Gaming Platforms
              </h3>
              <p className="text-slate-300">
                Whether you play League of Legends, Valorant, Fortnite, Call of
                Duty, Minecraft, or any other popular game, our generator
                creates names that work across all platforms. From competitive
                esports to casual gaming, find your perfect identity with
                NickGen.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;

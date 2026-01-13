import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NickGen, the free game nickname generator. Discover our mission to help gamers find their perfect gaming identity.",
};

const AboutPage = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <article className="card-glow rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            About NickGen
          </h1>

          <div className="prose prose-invert prose-slate max-w-none">
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-slate-300 mb-4">
              NickGen was created with a simple mission: help gamers find their
              perfect gaming identity quickly and easily. We understand that
              your nickname is more than just a name. It is your digital
              identity, your brand, and your first impression in every gaming
              community you join.
            </p>
            <p className="text-slate-300 mb-4">
              Whether you are a competitive esports player, a casual gamer, or
              someone just starting their gaming journey, finding the right
              nickname should be fun and effortless. That is exactly what
              NickGen provides.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              What We Offer
            </h2>
            <p className="text-slate-300 mb-4">
              NickGen offers multiple nickname styles to match your personality
              and gaming preferences:
            </p>
            <ul className="text-slate-300 space-y-2 mb-4">
              <li>
                <strong>Cool Nicknames:</strong> Edgy, powerful names for
                competitive gamers who want to make a statement.
              </li>
              <li>
                <strong>LoL Nicknames:</strong> Names inspired by League of
                Legends culture, champions, and the esports scene.
              </li>
              <li>
                <strong>English Nicknames:</strong> Clean, elegant names that
                work across any platform or community.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Our Technology
            </h2>
            <p className="text-slate-300 mb-4">
              NickGen uses a sophisticated rule-based generation system that
              combines carefully curated word pools to create unique and
              memorable nicknames. Every generated name passes through our
              content filtering system to ensure it is appropriate for all
              gaming platforms.
            </p>
            <p className="text-slate-300 mb-4">
              Our generator is designed to be fast, reliable, and respectful of
              your privacy. We do not require accounts, do not store your
              generated nicknames, and do not track individual users.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Safe and Appropriate Content
            </h2>
            <p className="text-slate-300 mb-4">
              We take content safety seriously. Our system automatically filters
              out inappropriate, offensive, or harmful content from all
              generated nicknames. This ensures that every suggestion you
              receive is suitable for use on any gaming platform.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Free Forever
            </h2>
            <p className="text-slate-300 mb-4">
              NickGen is and will always be free to use. We believe everyone
              deserves access to a quality nickname generator without paywalls
              or premium tiers. Our service is supported by advertisements,
              which allows us to keep it free for all users.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-slate-300 mb-4">
              We love hearing from our users. If you have suggestions, feedback,
              or questions, please reach out to us. Your input helps us improve
              NickGen for everyone.
            </p>
            <p className="text-slate-300">
              For business inquiries or support, please email us at:{" "}
              <span className="text-purple-400">contact@nickgen.com</span>
            </p>

            <div className="mt-12 pt-8 border-t border-slate-700/50">
              <p className="text-slate-400 text-sm">
                Thank you for using NickGen. Good luck finding your perfect
                gaming nickname!
              </p>
              <div className="mt-4 flex gap-4">
                <Link
                  href="/"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Start Generating
                </Link>
                <Link
                  href="/privacy"
                  className="text-slate-400 hover:text-slate-300 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-slate-400 hover:text-slate-300 transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AboutPage;

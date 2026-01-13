import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    generators: [
      { href: "/cool-nickname", label: "Cool Nicknames" },
      { href: "/lol-nickname", label: "LoL Nicknames" },
      { href: "/english-nickname", label: "English Nicknames" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/about", label: "About Us" },
    ],
  };

  return (
    <footer className="relative z-10 mt-auto border-t border-slate-700/50 bg-slate-900/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">
                N
              </div>
              <span className="text-xl font-bold">
                <span className="gradient-text">Nick</span>
                <span className="text-slate-300">Gen</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs">
              Generate unique and creative gaming nicknames instantly. Free,
              fast, and always safe for all gaming platforms.
            </p>
          </div>

          {/* Generators */}
          <div>
            <h3 className="font-semibold text-white mb-4">Generators</h3>
            <ul className="space-y-2">
              {footerLinks.generators.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              {currentYear} NickGen. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              Inappropriate or offensive terms are automatically excluded.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

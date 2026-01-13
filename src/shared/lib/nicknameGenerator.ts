// Rule-based nickname generator
// Generates nicknames using prefix + core + suffix pattern

import { containsProfanity } from "./profanityFilter";

type NicknameStyle = "cool" | "lol" | "english";

// Word pools for different styles
const WORD_POOLS = {
  cool: {
    prefixes: [
      "Dark",
      "Shadow",
      "Frost",
      "Storm",
      "Night",
      "Chaos",
      "Nova",
      "Cyber",
      "Neon",
      "Void",
      "Alpha",
      "Omega",
      "Zero",
      "Neo",
      "Ultra",
      "Hyper",
      "Mega",
      "Turbo",
      "Blaze",
      "Venom",
      "Phantom",
      "Ghost",
      "Stealth",
      "Rogue",
      "Savage",
      "Inferno",
      "Thunder",
      "Lightning",
      "Crimson",
      "Obsidian",
    ],
    cores: [
      "Wolf",
      "Dragon",
      "Phoenix",
      "Tiger",
      "Hawk",
      "Viper",
      "Serpent",
      "Raven",
      "Panther",
      "Lion",
      "Blade",
      "Edge",
      "Fang",
      "Claw",
      "Strike",
      "Hunter",
      "Slayer",
      "Reaper",
      "Warrior",
      "Knight",
      "Ninja",
      "Samurai",
      "Assassin",
      "Sniper",
      "Gunner",
      "Rider",
      "Walker",
      "Runner",
      "Breaker",
      "Crusher",
    ],
    suffixes: [
      "X",
      "Z",
      "V",
      "7",
      "9",
      "99",
      "777",
      "XIII",
      "Prime",
      "One",
      "Max",
      "Pro",
      "Elite",
      "Master",
      "Lord",
      "King",
      "God",
      "Boss",
      "Ace",
      "Legend",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  lol: {
    prefixes: [
      "xX",
      "Xx",
      "ll",
      "II",
      "oO",
      "TSM",
      "SKT",
      "T1",
      "G2",
      "FNC",
      "Hide",
      "Ban",
      "Feed",
      "Carry",
      "Mid",
      "Top",
      "Bot",
      "Jng",
      "Sup",
      "ADC",
      "Pro",
      "Best",
      "Only",
      "True",
      "Real",
      "Korean",
      "Faker",
      "Deft",
      "Chovy",
      "Zeus",
    ],
    cores: [
      "Yasuo",
      "Zed",
      "Ahri",
      "Lux",
      "Jinx",
      "Vayne",
      "Riven",
      "Lee",
      "Thresh",
      "Ezreal",
      "Smurf",
      "Noob",
      "Penta",
      "Diff",
      "Gap",
      "Flash",
      "Ult",
      "GG",
      "FF",
      "WP",
      "Elo",
      "LP",
      "Rank",
      "Diamond",
      "Master",
      "Chall",
      "Iron",
      "Gold",
      "Plat",
      "Silver",
    ],
    suffixes: [
      "Xx",
      "xX",
      "ll",
      "II",
      "123",
      "420",
      "69",
      "1",
      "2",
      "3",
      "OTP",
      "Main",
      "God",
      "King",
      "Only",
      "Fan",
      "Lover",
      "Player",
      "Gamer",
      "Pro",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  english: {
    prefixes: [
      "The",
      "Sir",
      "Lord",
      "Lady",
      "Captain",
      "Agent",
      "General",
      "Admiral",
      "Doctor",
      "Professor",
      "Master",
      "Grand",
      "Royal",
      "Noble",
      "Ancient",
      "Eternal",
      "Silent",
      "Swift",
      "Bold",
      "Brave",
      "Clever",
      "Wise",
      "Lucky",
      "Happy",
      "Calm",
      "Cool",
      "Chill",
      "Zen",
      "Pure",
      "True",
    ],
    cores: [
      "Storm",
      "Sky",
      "Star",
      "Moon",
      "Sun",
      "Cloud",
      "Wind",
      "Rain",
      "Snow",
      "Fire",
      "Fox",
      "Bear",
      "Wolf",
      "Eagle",
      "Owl",
      "Deer",
      "Swan",
      "Dove",
      "Crow",
      "Shark",
      "Oak",
      "Pine",
      "Rose",
      "Lily",
      "Sage",
      "Mint",
      "River",
      "Lake",
      "Ocean",
      "Stone",
    ],
    suffixes: [
      "Walker",
      "Keeper",
      "Watcher",
      "Seeker",
      "Hunter",
      "Rider",
      "Runner",
      "Dancer",
      "Singer",
      "Dreamer",
      "Heart",
      "Soul",
      "Mind",
      "Spirit",
      "Light",
      "Shine",
      "Glow",
      "Spark",
      "Flame",
      "Wave",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
};

// Random element selector
const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Generate single nickname
const generateSingleNickname = (style: NicknameStyle): string => {
  const pool = WORD_POOLS[style];

  const usePrefix = Math.random() > 0.3;
  const useSuffix = Math.random() > 0.3;

  const prefix = usePrefix ? getRandomElement(pool.prefixes) : "";
  const core = getRandomElement(pool.cores);
  const suffix = useSuffix ? getRandomElement(pool.suffixes) : "";

  // Different joining patterns based on style
  if (style === "lol") {
    return `${prefix}${core}${suffix}`;
  }

  // Add occasional number for cool style
  if (style === "cool" && Math.random() > 0.7) {
    const num = Math.floor(Math.random() * 999) + 1;
    return `${prefix}${core}${num}`;
  }

  return `${prefix}${core}${suffix}`.trim();
};

// Generate multiple unique nicknames with profanity filtering
export const generateNicknames = (
  style: NicknameStyle,
  count: number = 15,
  maxRetries: number = 100
): string[] => {
  const nicknames: Set<string> = new Set();
  let retries = 0;

  while (nicknames.size < count && retries < maxRetries) {
    const nickname = generateSingleNickname(style);

    // Skip if contains profanity or already exists
    if (!containsProfanity(nickname) && !nicknames.has(nickname)) {
      nicknames.add(nickname);
    }

    retries++;
  }

  return Array.from(nicknames);
};

// Get style from slug
export const getStyleFromSlug = (slug: string): NicknameStyle | null => {
  const styleMap: Record<string, NicknameStyle> = {
    "cool-nickname": "cool",
    "lol-nickname": "lol",
    "english-nickname": "english",
  };

  return styleMap[slug] || null;
};

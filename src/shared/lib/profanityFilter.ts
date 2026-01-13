// Profanity filter utility for server-side filtering
// Normalizes text and checks against blocklist

// Leetspeak normalization map
const LEETSPEAK_MAP: Record<string, string> = {
  "0": "o",
  "1": "i",
  "3": "e",
  "4": "a",
  "5": "s",
  "7": "t",
  "8": "b",
  "@": "a",
  "$": "s",
  "!": "i",
};

// English profanity list (common terms)
const ENGLISH_PROFANITY = [
  "fuck",
  "shit",
  "ass",
  "bitch",
  "damn",
  "crap",
  "dick",
  "cock",
  "pussy",
  "bastard",
  "slut",
  "whore",
  "fag",
  "nigger",
  "nigga",
  "cunt",
  "piss",
  "porn",
  "sex",
  "penis",
  "vagina",
  "boob",
  "tit",
  "nude",
  "naked",
  "rape",
  "kill",
  "murder",
  "hate",
  "nazi",
  "hitler",
  "kkk",
  "retard",
  "idiot",
  "stupid",
  "dumb",
  "moron",
];

// Korean profanity list
const KOREAN_PROFANITY = [
  "시발",
  "씨발",
  "씹",
  "개새끼",
  "병신",
  "지랄",
  "염병",
  "좆",
  "보지",
  "자지",
  "년",
  "놈",
  "새끼",
  "미친",
  "또라이",
  "정신병",
  "장애",
  "애미",
  "애비",
  "느금마",
  "ㅅㅂ",
  "ㅂㅅ",
  "ㅈㄹ",
  "ㅄ",
  "ㅗ",
  "꺼져",
  "닥쳐",
  "죽어",
];

// Combined blocklist
const BLOCKLIST = [...ENGLISH_PROFANITY, ...KOREAN_PROFANITY];

// Normalize text for comparison
const normalizeText = (text: string): string => {
  let normalized = text.toLowerCase();

  // Replace leetspeak characters
  normalized = normalized
    .split("")
    .map((char) => LEETSPEAK_MAP[char] || char)
    .join("");

  // Remove special characters and spaces
  normalized = normalized.replace(/[^a-z0-9\uAC00-\uD7A3]/g, "");

  return normalized;
};

// Check if text contains profanity
export const containsProfanity = (text: string): boolean => {
  const normalized = normalizeText(text);

  return BLOCKLIST.some((word) => {
    const normalizedWord = normalizeText(word);
    return normalized.includes(normalizedWord);
  });
};

// Filter array of nicknames and return only safe ones
export const filterNicknames = (nicknames: string[]): string[] => {
  return nicknames.filter((nickname) => !containsProfanity(nickname));
};

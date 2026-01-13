📌 Project Rules — Game Nickname Generator (Next.js)

1. Project Goal

Build a SEO-focused game nickname generator

Primary monetization: Google AdSense

MVP goal: validate traffic with minimal cost & complexity

No user accounts, no payments, no database

2. Tech Stack Rules

Framework: Next.js (App Router)

Rendering:

Pages: Static (SEO content)

Nickname generation: Server API Route

Deployment: Vercel (free tier)

3. Core Feature Rules

Nickname generation must be:

Rule-based (NOT AI)

Fast and deterministic

Zero external API dependency

Each generation returns:

Exactly 15 nicknames

Always safe (no profanity, sexual, hateful words)

4. Profanity & Inappropriate Content Filtering (MANDATORY)
4.1 Filtering Policy

Block:

Korean & English profanity

Sexual / pornographic terms

Obvious hateful expressions

Do NOT:

Show warnings to users

Ask users to modify input

Unsafe results are silently discarded and regenerated

4.2 Implementation Rules

Filtering MUST run server-side

Use open-source profanity filters:

@2toad/profanity

badwords-ko

Normalize nicknames before checking:

lowercase

remove special characters

basic leetspeak normalization (0→o, 1→i, 5→s)

Generation loop must:

Have a max retry limit (prevent infinite loop)

Always return full result count if possible

5. Nickname Generation Rules
5.1 Structure
[Prefix] + [Core] + [Suffix]


Prefix: optional

Core: mandatory

Suffix: optional

5.2 Style Categories

cool / edgy

english

gamer / LoL style

short & simple

6. UX Rules

No login

No popups

No error messages related to filtering

One-click copy to clipboard

Mobile-first layout

7. SEO Rules (CRITICAL)
7.1 Page Structure

Each category has its own route:

/lol-nickname

/english-nickname

/cool-nickname

7.2 SEO Requirements per Page

<h1> exactly once

400–600 characters of descriptive text

<h2> sections (2–3)

Example nicknames rendered as static text

Metadata (title, description) must be explicitly defined

8. Ads & Compliance

Ads shown only after initial page load

Focus ad placement on result area

Include disclaimer text:

“Inappropriate or offensive terms are automatically excluded.”

9. Out of Scope (DO NOT BUILD)

User authentication

Nickname availability checking

User history or favorites

AI generation

Paid features

10. Success Criteria

≥ 1,000 daily page views → continue

< 300 daily page views → pivot category or keyword

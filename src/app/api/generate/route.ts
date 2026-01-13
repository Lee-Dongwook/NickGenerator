import { NextRequest, NextResponse } from "next/server";
import { generateNicknames, getStyleFromSlug } from "app/shared/lib/nicknameGenerator";

export const GET = (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const styleParam = searchParams.get("style");

  // Default to cool if no style provided
  const style = styleParam as "cool" | "lol" | "english" || "cool";

  // Validate style
  const validStyles = ["cool", "lol", "english"];
  if (!validStyles.includes(style)) {
    return NextResponse.json(
      { error: "Invalid style. Use: cool, lol, or english" },
      { status: 400 }
    );
  }

  // Generate nicknames
  const nicknames = generateNicknames(style, 15, 100);

  return NextResponse.json({
    nicknames,
    style,
    count: nicknames.length,
  });
};

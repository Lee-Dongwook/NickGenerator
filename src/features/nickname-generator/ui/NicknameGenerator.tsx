"use client";

import { useState, useCallback } from "react";
import { NicknameList } from "./NicknameList";

interface INicknameGeneratorProps {
  style: "cool" | "lol" | "english";
  initialNicknames?: string[];
}

export const NicknameGenerator = ({
  style,
  initialNicknames = [],
}: INicknameGeneratorProps) => {
  const [nicknames, setNicknames] = useState<string[]>(initialNicknames);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generateNicknames = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/generate?style=${style}`);
      const data = await response.json();
      if (data.nicknames) {
        setNicknames(data.nicknames);
      }
    } catch (error) {
      console.error("Failed to generate nicknames:", error);
    } finally {
      setIsLoading(false);
    }
  }, [style]);

  const handleCopy = useCallback(async (nickname: string, index: number) => {
    try {
      await navigator.clipboard.writeText(nickname);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Generate Button */}
      <div className="text-center mb-8">
        <button
          type="button"
          onClick={generateNicknames}
          disabled={isLoading}
          className="btn-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Generating...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Generate Nicknames
            </span>
          )}
        </button>
      </div>

      {/* Results */}
      {nicknames.length > 0 && (
        <div className="animate-fade-in">
          <NicknameList
            nicknames={nicknames}
            onCopy={handleCopy}
            copiedIndex={copiedIndex}
          />
        </div>
      )}
    </div>
  );
};

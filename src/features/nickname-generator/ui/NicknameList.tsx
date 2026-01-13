interface INicknameListProps {
  nicknames: string[];
  onCopy: (nickname: string, index: number) => void;
  copiedIndex: number | null;
}

export const NicknameList = ({
  nicknames,
  onCopy,
  copiedIndex,
}: INicknameListProps) => {
  return (
    <div className="card-glow rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">
          Generated Nicknames
        </h3>
        <span className="text-sm text-slate-400">{nicknames.length} names</span>
      </div>

      <ul className="space-y-2">
        {nicknames.map((nickname, index) => (
          <li
            key={`${nickname}-${index}`}
            className="nickname-item flex items-center justify-between group"
            onClick={() => onCopy(nickname, index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onCopy(nickname, index);
              }
            }}
          >
            <span
              className="font-mono text-slate-200 group-hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {nickname}
            </span>

            <span
              className={`text-xs px-2 py-1 rounded transition-all duration-200 ${
                copiedIndex === index
                  ? "bg-green-500/20 text-green-400"
                  : "bg-slate-700/50 text-slate-400 opacity-0 group-hover:opacity-100"
              }`}
            >
              {copiedIndex === index ? "Copied!" : "Click to copy"}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-slate-500 text-center">
        Click any nickname to copy to clipboard
      </p>
    </div>
  );
};

/** Small download glyph (arrow into tray), sized to sit inline with text. */
export function DownloadIcon({
  size = 12,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={`shrink-0 ${className}`.trim()}
    >
      <path
        d="M12 3v11m0 0l-4.5-4.5M12 14l4.5-4.5M4 16v3a2 2 0 002 2h12a2 2 0 002-2v-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Centered horizontal rule matching Figma case-study separators (#FFC8C8, ~1002px max). */
export function FigmaPinkDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex w-full justify-center py-[clamp(1.25rem,5vw,2rem)] ${className}`}
      aria-hidden
    >
      <img
        src="/figma/georges-section-line.svg"
        alt=""
        width={1002}
        height={1}
        className="block h-[2px] w-full max-w-[1002px]"
      />
    </div>
  );
}

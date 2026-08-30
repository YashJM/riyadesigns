/**
 * Decorative star-chart compass rendered as a hero accent — two clearly
 * visible rings (one grey, one amber), a vertical bearing line with faint
 * diagonals, and three markers joined by a straight-line constellation path.
 * The markers span the breadth of product design, not just UI craft:
 * research (magnifier), product thinking (a small flow diagram), and UX/UI
 * (a toggle) — so it reads as "this is a product designer's sky," covering
 * strategy and discovery as much as visual craft.
 * The horizontal bearing line lives in the DOM (home-hero.tsx) so it can
 * sit exactly under the heading.
 * Pure SVG; the outer rings drift slowly via CSS (motion-safe only).
 */

type NamedStar = {
  cx: number;
  cy: number;
  label: string;
  r?: number;
  icon?: "magnifier" | "flow" | "toggle";
};

const NAMED_STARS: NamedStar[] = [
  { cx: 500, cy: 215, label: "Polaris", r: 3.4, icon: "magnifier" },
  { cx: 660, cy: 775, label: "Capella", r: 2.2, icon: "flow" },
  { cx: 340, cy: 775, label: "Sirius", r: 2.2, icon: "toggle" },
];

const MARQUEE = { x: 620, y: 210, w: 90, h: 64 };
const marqueeCenter = { x: MARQUEE.x + MARQUEE.w / 2, y: MARQUEE.y + MARQUEE.h / 2 };

// Straight-segment constellation path linking the markers, real-sky style.
const constellationPath = [
  `M ${NAMED_STARS[0].cx} ${NAMED_STARS[0].cy}`,
  `L ${marqueeCenter.x} ${marqueeCenter.y}`,
  `L ${NAMED_STARS[1].cx} ${NAMED_STARS[1].cy}`,
  `L ${NAMED_STARS[2].cx} ${NAMED_STARS[2].cy}`,
  `L ${NAMED_STARS[0].cx} ${NAMED_STARS[0].cy}`,
].join(" ");


export function StarCompass({ className = "" }: { className?: string }) {
  const cx = 500;
  const cy = 500;

  return (
    <svg
      viewBox="0 0 1000 1000"
      className={className}
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* two solid rings — one grey, one amber, dialed back to stay subtle */}
      <circle cx={cx} cy={cy} r={260} stroke="rgba(233,240,255,0.2)" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={410} stroke="rgba(245,166,35,0.22)" strokeWidth="1" />

      {/* faint vertical bearing line only — the horizontal line lives in the
          DOM, positioned to sit exactly under the heading */}
      <line x1={cx} y1={62} x2={cx} y2={938} stroke="rgba(233,240,255,0.1)" strokeWidth="1" />

      {/* diagonal angle lines */}
      <g stroke="rgba(233,240,255,0.06)" strokeWidth="1">
        <line x1={216} y1={216} x2={784} y2={784} />
        <line x1={784} y1={216} x2={216} y2={784} />
      </g>

      {/* two slow rotating dashed rings, independent speeds, for a touch of life */}
      <g className="celestial-spin-slow" style={{ transformOrigin: "500px 500px" }}>
        <circle cx={cx} cy={cy} r={470} stroke="rgba(245,166,35,0.11)" strokeWidth="1" strokeDasharray="2 14" />
      </g>
      <g className="celestial-spin-slower" style={{ transformOrigin: "500px 500px" }}>
        <circle cx={cx} cy={cy} r={492} stroke="rgba(233,240,255,0.05)" strokeWidth="1" strokeDasharray="1 26" />
      </g>

      {/* center marker */}
      <g stroke="rgba(233,240,255,0.24)" strokeWidth="1">
        <line x1={cx - 10} y1={cy} x2={cx + 10} y2={cy} />
        <line x1={cx} y1={cy - 10} x2={cx} y2={cy + 10} />
      </g>

      {/* N / S bearings on the vertical line */}
      <text x={cx} y={40} fill="rgba(233,240,255,0.26)" fontSize="20" fontFamily="var(--font-jetbrains), monospace" textAnchor="middle">N</text>
      <text x={cx} y={968} fill="rgba(233,240,255,0.26)" fontSize="20" fontFamily="var(--font-jetbrains), monospace" textAnchor="middle">S</text>

      {/* constellation path linking Polaris, the marquee, Capella and Sirius */}
      <path d={constellationPath} stroke="var(--amber-hi)" strokeWidth="1" strokeDasharray="1 6" strokeLinecap="round" opacity="0.28" />

      {/* named stars — two rendered as design-tool glyphs */}
      {NAMED_STARS.map((s) => (
        <g key={s.label}>
          {s.icon === "magnifier" ? (
            <>
              <circle cx={s.cx} cy={s.cy} r="24" fill="rgba(245,166,35,0.12)" />
              <circle
                cx={s.cx - 3}
                cy={s.cy - 3}
                r="8.5"
                stroke="rgba(255,224,163,0.75)"
                strokeWidth="1.7"
              />
              <line
                x1={s.cx + 2.5}
                y1={s.cy + 2.5}
                x2={s.cx + 10}
                y2={s.cy + 10}
                stroke="rgba(255,224,163,0.75)"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </>
          ) : s.icon === "flow" ? (
            <>
              <circle cx={s.cx} cy={s.cy} r="24" fill="rgba(245,166,35,0.12)" />
              {/* a tiny flow / decision-tree diagram — product thinking, not a UI tool */}
              <g stroke="rgba(255,224,163,0.55)" strokeWidth="1.3">
                <line x1={s.cx - 11} y1={s.cy - 8} x2={s.cx + 9} y2={s.cy} />
                <line x1={s.cx - 11} y1={s.cy + 8} x2={s.cx + 9} y2={s.cy} />
              </g>
              <circle cx={s.cx - 11} cy={s.cy - 8} r="3" fill="rgba(255,224,163,0.8)" />
              <circle cx={s.cx - 11} cy={s.cy + 8} r="3" fill="rgba(255,224,163,0.8)" />
              <circle cx={s.cx + 9} cy={s.cy} r="3" fill="rgba(255,224,163,0.8)" />
            </>
          ) : s.icon === "toggle" ? (
            <>
              <circle cx={s.cx} cy={s.cy} r="22" fill="rgba(245,166,35,0.12)" />
              <rect
                x={s.cx - 12}
                y={s.cy - 6}
                width="24"
                height="12"
                rx="6"
                stroke="rgba(255,224,163,0.75)"
                strokeWidth="1.4"
              />
              <circle cx={s.cx + 6} cy={s.cy} r="4" fill="rgba(255,224,163,0.75)" />
            </>
          ) : (
            <>
              <circle cx={s.cx} cy={s.cy} r={(s.r ?? 2.4) * 3} fill="rgba(245,166,35,0.1)" />
              <circle cx={s.cx} cy={s.cy} r={s.r ?? 2.4} fill="rgba(255,225,170,0.75)" />
            </>
          )}
          <text
            x={s.cx + (s.icon ? 26 : 14)}
            y={s.cy + 4}
            fill={s.icon ? "rgba(233,240,255,0.5)" : "rgba(233,240,255,0.34)"}
            fontSize="14"
            fontFamily="var(--font-jetbrains), monospace"
            letterSpacing="0.5"
          >
            {s.label}
          </text>
        </g>
      ))}

      {/* a Figma-style selection marquee — corner handles, dashed */}
      <g stroke="rgba(255,224,163,0.5)" strokeWidth="1.1" opacity="0.75">
        <rect x={MARQUEE.x} y={MARQUEE.y} width={MARQUEE.w} height={MARQUEE.h} strokeDasharray="4 4" />
        {[
          [MARQUEE.x, MARQUEE.y],
          [MARQUEE.x + MARQUEE.w, MARQUEE.y],
          [MARQUEE.x, MARQUEE.y + MARQUEE.h],
          [MARQUEE.x + MARQUEE.w, MARQUEE.y + MARQUEE.h],
        ].map(([hx, hy]) => (
          <rect key={`${hx}-${hy}`} x={hx - 3.5} y={hy - 3.5} width="7" height="7" fill="rgba(255,224,163,0.6)" stroke="none" />
        ))}
      </g>
    </svg>
  );
}

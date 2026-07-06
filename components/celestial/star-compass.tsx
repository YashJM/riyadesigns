/**
 * Decorative celestial compass / star-chart rendered behind the hero name.
 * Pure SVG; the outer rings rotate slowly via CSS (motion-safe only).
 */

type NamedStar = { cx: number; cy: number; label: string; r?: number };

const NAMED_STARS: NamedStar[] = [
  { cx: 500, cy: 250, label: "Polaris", r: 3.2 },
  { cx: 640, cy: 150, label: "Vega", r: 2.4 },
  { cx: 760, cy: 470, label: "Arcturus", r: 2.6 },
  { cx: 300, cy: 640, label: "Sirius", r: 2.2 },
];

const CARDINALS: Array<{ x: number; y: number; label: string }> = [
  { x: 500, y: 58, label: "N" },
  { x: 942, y: 508, label: "E" },
  { x: 500, y: 956, label: "S" },
  { x: 58, y: 508, label: "W" },
];

const INTERCARDINALS: Array<{ x: number; y: number; label: string }> = [
  { x: 350, y: 178, label: "NW" },
  { x: 650, y: 178, label: "NE" },
  { x: 650, y: 838, label: "SE" },
  { x: 350, y: 838, label: "SW" },
];

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
      <defs>
        <radialGradient id="compass-fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(233,240,255,0.14)" />
          <stop offset="62%" stopColor="rgba(233,240,255,0.07)" />
          <stop offset="100%" stopColor="rgba(233,240,255,0)" />
        </radialGradient>
      </defs>

      {/* concentric rings */}
      <g stroke="url(#compass-fade)" strokeWidth="1">
        {[150, 240, 330, 420].map((r) => (
          <circle key={r} cx={cx} cy={cy} r={r} />
        ))}
      </g>

      {/* cardinal + intercardinal axes */}
      <g stroke="rgba(233,240,255,0.06)" strokeWidth="1">
        <line x1={cx} y1={70} x2={cx} y2={930} />
        <line x1={70} y1={cy} x2={930} y2={cy} />
        <line x1={216} y1={216} x2={784} y2={784} />
        <line x1={784} y1={216} x2={216} y2={784} />
      </g>

      {/* slowly rotating tick ring */}
      <g className="celestial-spin-slow" style={{ transformOrigin: "500px 500px" }}>
        <circle
          cx={cx}
          cy={cy}
          r={462}
          stroke="rgba(245,166,35,0.14)"
          strokeWidth="1"
          strokeDasharray="2 14"
        />
      </g>
      <g className="celestial-spin-slower" style={{ transformOrigin: "500px 500px" }}>
        <circle
          cx={cx}
          cy={cy}
          r={486}
          stroke="rgba(233,240,255,0.05)"
          strokeWidth="1"
          strokeDasharray="1 26"
        />
      </g>

      {/* center marker */}
      <g stroke="rgba(233,240,255,0.28)" strokeWidth="1">
        <line x1={cx - 9} y1={cy} x2={cx + 9} y2={cy} />
        <line x1={cx} y1={cy - 9} x2={cx} y2={cy + 9} />
      </g>

      {/* named stars */}
      {NAMED_STARS.map((s) => (
        <g key={s.label}>
          <circle cx={s.cx} cy={s.cy} r={(s.r ?? 2.4) * 3} fill="rgba(245,166,35,0.14)" />
          <circle cx={s.cx} cy={s.cy} r={s.r ?? 2.4} fill="rgba(255,225,170,0.85)" />
          <text
            x={s.cx + 12}
            y={s.cy + 4}
            fill="rgba(233,240,255,0.4)"
            fontSize="14"
            fontFamily="var(--font-jetbrains), monospace"
            letterSpacing="0.5"
          >
            {s.label}
          </text>
        </g>
      ))}

      {/* cardinal labels */}
      {CARDINALS.map((c) => (
        <text
          key={c.label}
          x={c.x}
          y={c.y}
          fill="rgba(233,240,255,0.32)"
          fontSize="22"
          fontFamily="var(--font-jetbrains), monospace"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {c.label}
        </text>
      ))}

      {/* intercardinal labels */}
      {INTERCARDINALS.map((c) => (
        <text
          key={c.label}
          x={c.x}
          y={c.y}
          fill="rgba(233,240,255,0.16)"
          fontSize="14"
          fontFamily="var(--font-jetbrains), monospace"
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="1"
        >
          {c.label}
        </text>
      ))}
    </svg>
  );
}

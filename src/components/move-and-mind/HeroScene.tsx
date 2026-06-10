'use client'

import { useReducedMotion } from 'framer-motion'

/* Palette */
const SAND = '#FDFBF7'
const SUNSET = '#D97706'

/** Tileable wave path — period 240 so a -240 translateX loops seamlessly. */
function wavePath(baseY: number, amp: number, bottom: number) {
  const seg = 120
  const start = -480
  let d = `M${start},${baseY} q${seg / 2},${-amp} ${seg},0`
  let x = start + seg
  for (let i = 0; i < 22; i++) {
    d += ` t${seg},0`
    x += seg
  }
  return `${d} L${x},${bottom} L${start},${bottom} Z`
}

/* ---------------- Bus ---------------- */
/** A coastal tour coach, facing right. Origin at the road contact point (0,0). */
function Bus({ reduce }: { reduce: boolean | null }) {
  const spin = (cx: number) => (
    <g transform={`translate(${cx},-9)`}>
      <g
        style={
          reduce
            ? undefined
            : {
                transformBox: 'fill-box',
                transformOrigin: 'center',
                animation: 'wheel-spin 1.1s linear infinite',
              }
        }
      >
        <circle r={13} fill="#181c1b" />
        <circle r={6.5} fill="#cdd2cf" />
        <circle r={2} fill="#5b625e" />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <rect
            key={a}
            x={-1}
            y={-6.5}
            width={2}
            height={13}
            fill="#9aa19c"
            transform={`rotate(${a})`}
          />
        ))}
      </g>
    </g>
  )

  return (
    <g>
      {/* ground shadow */}
      <ellipse cx={0} cy={6} rx={78} ry={7} fill="#000" opacity={0.22} />

      {/* body */}
      <rect x={-72} y={-60} width={144} height={50} rx={11} fill="#f1eee6" />
      {/* roof trim */}
      <rect x={-72} y={-60} width={144} height={7} rx={11} fill="#dcd7ca" />
      {/* window band */}
      <rect x={-62} y={-52} width={126} height={20} rx={5} fill="#22363f" />
      {/* windows split */}
      {[-46, -27, -8, 13, 32].map((x) => (
        <rect key={x} x={x} y={-52} width={2.5} height={20} fill="#f1eee6" />
      ))}
      {/* windshield glare */}
      <path d="M40,-52 L62,-52 L62,-37 L40,-37 Z" fill="#3b5763" opacity={0.9} />
      <path d="M44,-50 L58,-50 L48,-39 L44,-39 Z" fill="#6f93a0" opacity={0.5} />
      {/* sunset livery swoosh */}
      <path
        d="M-72,-22 C -30,-30 30,-14 72,-22 L72,-12 C 30,-6 -30,-16 -72,-12 Z"
        fill={SUNSET}
      />
      <rect x={-72} y={-12} width={144} height={3} fill="#b45309" />
      {/* door */}
      <rect x={48} y={-31} width={14} height={19} rx={2} fill="#2b3f48" />
      <rect x={54.5} y={-31} width={1.5} height={19} fill="#f1eee6" />
      {/* destination board */}
      <rect x={44} y={-58} width={22} height={6} rx={1} fill="#101a18" />
      <text
        x={55}
        y={-53}
        fill={SUNSET}
        fontSize="5"
        letterSpacing="1"
        textAnchor="middle"
        fontFamily="var(--font-bebas), sans-serif"
      >
        GOA
      </text>
      {/* lights */}
      <rect x={64} y={-22} width={6} height={5} rx={1.5} fill="#ffe39a" />
      <rect x={-70} y={-22} width={5} height={5} rx={1.5} fill="#e2624a" />

      {spin(-44)}
      {spin(44)}
    </g>
  )
}

/* ---------------- Palm ---------------- */
function Palm({ x, scale, color }: { x: number; scale: number; color: string }) {
  return (
    <g transform={`translate(${x},760) scale(${scale})`}>
      {/* trunk */}
      <path
        d="M0,0 C -4,-50 6,-95 -2,-140"
        fill="none"
        stroke={color}
        strokeWidth={9}
        strokeLinecap="round"
      />
      {/* fronds */}
      <g
        transform="translate(-2,-140)"
        style={{
          transformBox: 'fill-box',
          transformOrigin: 'bottom center',
        }}
      >
        {[-58, -28, 0, 28, 58, 90, -90].map((a, i) => (
          <path
            key={i}
            d="M0,0 Q40,-14 78,2 Q40,2 0,4 Z"
            fill={color}
            transform={`rotate(${a})`}
          />
        ))}
      </g>
    </g>
  )
}

export default function HeroScene() {
  const reduce = useReducedMotion()
  const anim = (a: string) => (reduce ? undefined : { animation: a })

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e1a17" />
          <stop offset="42%" stopColor="#21302b" />
          <stop offset="70%" stopColor="#8a431b" />
          <stop offset="88%" stopColor="#c9701d" />
          <stop offset="100%" stopColor="#e89233" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe7b8" stopOpacity="0.9" />
          <stop offset="40%" stopColor={SUNSET} stopOpacity="0.35" />
          <stop offset="100%" stopColor={SUNSET} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sunDisc" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#fff2d4" />
          <stop offset="55%" stopColor="#ffc760" />
          <stop offset="100%" stopColor="#f59324" />
        </radialGradient>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c47a2c" />
          <stop offset="22%" stopColor="#6a5a3a" />
          <stop offset="100%" stopColor="#16201d" />
        </linearGradient>
        <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c6440" />
          <stop offset="100%" stopColor="#2c2418" />
        </linearGradient>
        <clipPath id="seaClip">
          <rect x={-480} y={418} width={2400} height={210} />
        </clipPath>
      </defs>

      {/* ---------- Sky ---------- */}
      <rect x={0} y={0} width={1440} height={628} fill="url(#sky)" />

      {/* Sun + halo */}
      <circle
        cx={980}
        cy={415}
        r={230}
        fill="url(#sunGlow)"
        style={
          reduce
            ? undefined
            : {
                transformBox: 'fill-box',
                transformOrigin: 'center',
                animation: 'sun-pulse 8s ease-in-out infinite',
              }
        }
      />
      <circle cx={980} cy={408} r={66} fill="url(#sunDisc)" />

      {/* Distant headlands on the horizon */}
      <path d="M-40,420 Q220,346 520,420 Z" fill="#16201d" opacity={0.9} />
      <path d="M860,420 Q1140,330 1480,420 Z" fill="#101a17" opacity={0.95} />

      {/* ---------- Sea ---------- */}
      <rect x={0} y={418} width={1440} height={210} fill="url(#sea)" />
      <g clipPath="url(#seaClip)">
        {/* sun glitter column */}
        <g style={anim('twinkle 4s ease-in-out infinite')}>
          {[440, 460, 482, 506, 532, 560, 590].map((y, i) => (
            <rect
              key={y}
              x={980 - (14 + i * 9)}
              y={y}
              width={(14 + i * 9) * 2}
              height={3}
              rx={1.5}
              fill="#ffdca0"
              opacity={0.5 - i * 0.05}
            />
          ))}
        </g>
        {/* drifting foam lines */}
        <path d={wavePath(470, 6, 628)} fill={SAND} fillOpacity={0.05} style={anim('wave 16s linear infinite')} />
        <path d={wavePath(516, 8, 628)} fill={SAND} fillOpacity={0.07} style={anim('wave 11s linear infinite')} />
        <path d={wavePath(566, 10, 628)} fill={SAND} fillOpacity={0.1} style={anim('wave 8s linear infinite')} />
      </g>

      {/* ---------- Coastal road (the journey) ---------- */}
      <rect x={0} y={612} width={1440} height={52} fill="#1b2224" />
      <rect x={0} y={612} width={1440} height={3} fill="#2f3a3c" />

      {/* ---------- Beach ---------- */}
      <rect x={0} y={660} width={1440} height={100} fill="url(#sand)" />

      {/* centre dashes */}
      <g style={anim('wave 6s linear infinite')}>
        {Array.from({ length: 28 }).map((_, i) => (
          <rect key={i} x={-480 + i * 90} y={636} width={42} height={3} rx={1.5} fill={SUNSET} opacity={0.5} />
        ))}
      </g>

      {/* route markers */}
      {[
        { x: 70, label: 'HYDERABAD', anchor: 'start' as const },
        { x: 1370, label: 'GOA', anchor: 'end' as const },
      ].map((c) => (
        <text
          key={c.label}
          x={c.x}
          y={605}
          fill={SAND}
          fillOpacity={0.45}
          fontSize={20}
          letterSpacing={3}
          textAnchor={c.anchor}
          fontFamily="var(--font-bebas), sans-serif"
        >
          {c.label}
        </text>
      ))}

      {/* The bus */}
      <g style={reduce ? { transform: 'translateX(840px)' } : { animation: 'drive-across 17s linear infinite' }}>
        <g style={anim('bob 1.4s ease-in-out infinite')}>
          <g transform="translate(0,648) scale(0.92)">
            <Bus reduce={reduce} />
          </g>
        </g>
      </g>

      {/* Palms (Goa side) */}
      <g style={anim('palm-sway 6s ease-in-out infinite')} opacity={0.9}>
        <Palm x={1300} scale={0.95} color="#0d1512" />
      </g>
      <g style={anim('palm-sway 7.5s ease-in-out infinite')} opacity={0.85}>
        <Palm x={1380} scale={0.7} color="#0d1512" />
      </g>

    </svg>
  )
}

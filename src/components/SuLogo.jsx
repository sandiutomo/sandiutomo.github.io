export default function SuLogo({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs>
        {/* ── Gradients ── */}
        <radialGradient id="mix-fill" cx="50%" cy="40%" r="60%">
          <stop offset="0%"   stopColor="#5AC8FA" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#5856D6" stopOpacity="0.10"/>
        </radialGradient>

        <linearGradient id="mix-blob" x1="15" y1="20" x2="95" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#5AC8FA"/>
          <stop offset="100%" stopColor="#5856D6"/>
        </linearGradient>

        <linearGradient id="mix-border" x1="60" y1="4" x2="60" y2="116" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.70)"/>
          <stop offset="40%"  stopColor="rgba(255,255,255,0.20)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.04)"/>
        </linearGradient>

        <linearGradient id="mix-inner-border" x1="60" y1="6" x2="60" y2="114" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.22)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0.00)"/>
        </linearGradient>

        {/* ── Filters ── */}
        <filter id="mix-shadow">
          <feDropShadow dx="0" dy="5" stdDeviation="9" floodColor="#000" floodOpacity="0.35"/>
        </filter>

        {/* Blue glow (Logo B style) */}
        <filter id="mix-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur"/>
          <feFlood floodColor="#007AFF" floodOpacity="0.55" result="c"/>
          <feComposite in="c" in2="blur" operator="in" result="glow"/>
          <feMerge>
            <feMergeNode in="glow"/>
            <feMergeNode in="glow"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* ── Clip path ── */}
        <clipPath id="mix-clip">
          <circle cx="60" cy="60" r="56"/>
        </clipPath>
      </defs>

      {/* ── Glass circle container ── */}
      {/* Base translucent layer */}
      <circle cx="60" cy="60" r="56" fill="rgba(255,255,255,0.08)" filter="url(#mix-shadow)"/>
      {/* Tinted fill */}
      <circle cx="60" cy="60" r="56" fill="url(#mix-fill)"/>

      {/* Bottom shadow zone (glass depth) */}
      <rect clipPath="url(#mix-clip)" x="4" y="96" width="112" height="20" fill="rgba(0,0,0,0.12)"/>

      {/* Top specular arc */}
      <path
        clipPath="url(#mix-clip)"
        d="M 4 60 A 56 56 0 0 1 116 60 L 116 30 A 56 56 0 0 0 4 30 Z"
        fill="rgba(255,255,255,0.15)"
      />

      {/* Outer glass edge */}
      <circle cx="60" cy="60" r="55.25" fill="none" stroke="url(#mix-border)" strokeWidth="1.5"/>
      {/* Inner glass edge */}
      <circle cx="60" cy="60" r="53"    fill="none" stroke="url(#mix-inner-border)" strokeWidth="0.75"/>

      {/* ── Animated letterforms ── */}
      <g className="logo-blob" filter="url(#mix-glow)">

        {/* ── S — horizontally mirrored (new_x = 83 - old_x) ── */}
        <path
          d="M 57 38
             C 57 30, 48 26, 39 29
             C 30 32, 27 39, 33 45
             C 39 51, 49 52, 52 58
             C 55 64, 53 72, 45 76
             C 37 80, 27 78, 26 70"
          stroke="url(#mix-blob)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"
          fill="none"
        />
        {/* S top terminal — mirrored position, cyan */}
        <circle cx="57" cy="38" r="6"   fill="#5AC8FA"/>
        {/* S bottom terminal — mirrored position, indigo */}
        <circle cx="26" cy="70" r="6"   fill="#5856D6"/>
        {/* S mid nodes — mirrored positions */}
        <circle cx="33" cy="45" r="3.5" fill="url(#mix-blob)" opacity="0.65"/>
        <circle cx="52" cy="58" r="3.5" fill="url(#mix-blob)" opacity="0.65"/>

        {/* ── U ── */}
        {/* Left arm */}
        <line x1="68" y1="32" x2="68" y2="70" stroke="url(#mix-blob)" strokeWidth="12" strokeLinecap="round"/>
        {/* Right arm */}
        <line x1="88" y1="32" x2="88" y2="70" stroke="url(#mix-blob)" strokeWidth="12" strokeLinecap="round"/>
        {/* Bowl */}
        <path
          d="M 68 70 C 68 83, 88 83, 88 70"
          stroke="url(#mix-blob)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"
          fill="none"
        />
        {/* U top terminal blobs */}
        <circle cx="68" cy="32" r="6" fill="#5AC8FA"/>
        <circle cx="88" cy="32" r="6" fill="#5856D6"/>

      </g>
    </svg>
  )
}

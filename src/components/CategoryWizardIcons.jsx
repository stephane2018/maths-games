/* ---- SVG Icons for Category Wizard ---- */

export function NumbersIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="8" width="16" height="32" rx="4" stroke={color} strokeWidth="3" />
      <text x="12" y="30" textAnchor="middle" fill={color} fontSize="18" fontWeight="bold" fontFamily="system-ui">7</text>
      <line x1="26" y1="24" x2="44" y2="24" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="35" y1="15" x2="35" y2="33" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function PowersIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <text x="14" y="36" fill={color} fontSize="28" fontWeight="bold" fontFamily="system-ui">x</text>
      <text x="34" y="18" fill={color} fontSize="16" fontWeight="bold" fontFamily="system-ui">n</text>
    </svg>
  );
}

export function GeometryIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <polygon points="24,6 42,42 6,42" stroke={color} strokeWidth="3" strokeLinejoin="round" fill="none" />
      <circle cx="24" cy="30" r="10" stroke={color} strokeWidth="2" strokeDasharray="4 3" />
    </svg>
  );
}

export function MeasuresIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="14" width="36" height="20" rx="3" stroke={color} strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <line key={i} x1={10 + i * 5} y1="14" x2={10 + i * 5} y2={i % 2 === 0 ? 24 : 20} stroke={color} strokeWidth="2" strokeLinecap="round" />
      ))}
      <text x="24" y="31" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold" fontFamily="system-ui">cm</text>
    </svg>
  );
}

export function DataIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="28" width="8" height="14" rx="2" fill={color} opacity="0.4" />
      <rect x="20" y="18" width="8" height="24" rx="2" fill={color} opacity="0.6" />
      <rect x="32" y="8" width="8" height="34" rx="2" fill={color} opacity="0.9" />
      <line x1="4" y1="42" x2="44" y2="42" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function ProblemsIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="20" r="14" stroke={color} strokeWidth="3" />
      <text x="24" y="26" textAnchor="middle" fill={color} fontSize="18" fontWeight="bold" fontFamily="system-ui">?</text>
      <path d="M18 36 L24 42 L30 36" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const THEME_ICONS = {
  numbers: NumbersIcon,
  powers: PowersIcon,
  geometry: GeometryIcon,
  problems: ProblemsIcon,
};

/* ---- Decorative math background SVG ---- */
export function MathBackground() {
  return (
    <svg className="category-bg-svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EEF2FF" />
          <stop offset="100%" stopColor="#F0FDF4" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#bgGrad)" />
      {/* Floating math symbols */}
      <g opacity="0.08" fill="#3B82F6">
        <text x="50" y="80" fontSize="60" fontWeight="bold" fontFamily="system-ui">+</text>
        <text x="480" y="120" fontSize="50" fontWeight="bold" fontFamily="system-ui">{'\u00d7'}</text>
        <text x="100" y="250" fontSize="70" fontWeight="bold" fontFamily="system-ui">{'\u00f7'}</text>
        <text x="420" y="300" fontSize="55" fontWeight="bold" fontFamily="system-ui">=</text>
        <text x="30" y="450" fontSize="45" fontWeight="bold" fontFamily="system-ui">%</text>
        <text x="500" y="500" fontSize="65" fontWeight="bold" fontFamily="system-ui">{'\u03c0'}</text>
        <text x="250" y="150" fontSize="40" fontWeight="bold" fontFamily="system-ui">{'\u221a'}</text>
        <text x="350" y="680" fontSize="50" fontWeight="bold" fontFamily="system-ui">{'\u2211'}</text>
        <text x="80" y="650" fontSize="55" fontWeight="bold" fontFamily="system-ui">{'\u0394'}</text>
        <text x="500" y="750" fontSize="60" fontWeight="bold" fontFamily="system-ui">{'\u221e'}</text>
      </g>
      <g opacity="0.06" fill="#EF4444">
        <text x="300" y="80" fontSize="50" fontWeight="bold" fontFamily="system-ui">{'\u2212'}</text>
        <text x="150" y="400" fontSize="60" fontWeight="bold" fontFamily="system-ui">{'\u2248'}</text>
        <text x="450" y="450" fontSize="45" fontWeight="bold" fontFamily="system-ui">{'\u2260'}</text>
        <text x="200" y="600" fontSize="55" fontWeight="bold" fontFamily="system-ui">{'\u2264'}</text>
        <text x="400" y="180" fontSize="50" fontWeight="bold" fontFamily="system-ui">{'\u00b2'}</text>
      </g>
      {/* Decorative shapes */}
      <g opacity="0.05" stroke="#8B5CF6" strokeWidth="2" fill="none">
        <polygon points="520,600 560,550 600,600" />
        <circle cx="70" cy="350" r="35" />
        <rect x="430" y="350" width="40" height="40" rx="6" />
      </g>
    </svg>
  );
}

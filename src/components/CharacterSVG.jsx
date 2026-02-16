const BLUE_COLORS = {
  skin: '#FDBCB4', skinDark: '#E8A090',
  shirt: '#3B82F6', shirtDark: '#2563EB', shirtPattern: '#60A5FA',
  pants: '#1E293B', shoes: '#2563EB',
  hair: '#4A3728', hairDark: '#362818', cheeks: '#FF9999',
};

const RED_COLORS = {
  skin: '#FDBCB4', skinDark: '#E8A090',
  shirt: '#EF4444', shirtDark: '#DC2626', shirtPattern: '#F87171',
  pants: '#1E293B', shoes: '#DC2626',
  hair: '#2C1810', hairDark: '#1A0E08', cheeks: '#FF9999',
};

function HairRound({ c }) {
  return (
    <g>
      <path d="M-14 -18 Q-15 -34 0 -34 Q15 -34 14 -18" fill={c.hair} />
      <path d="M-12 -20 Q-13 -30 0 -31 Q13 -30 12 -20" fill={c.hairDark} opacity="0.3" />
    </g>
  );
}

function HairSpiky({ c }) {
  return (
    <g>
      <path d="M-12 -18 L-9 -36 L-4 -24 L0 -34 L4 -22 L8 -33 L12 -18" fill={c.hair} />
      <path d="M-10 -18 L-7 -30 L-3 -22 L1 -28 L5 -21 L9 -27 L11 -18" fill={c.hairDark} opacity="0.25" />
    </g>
  );
}

function HairFlat({ c }) {
  return (
    <g>
      <rect x="-14" y="-30" width="28" height="15" rx="6" fill={c.hair} />
      <rect x="-12" y="-28" width="24" height="10" rx="5" fill={c.hairDark} opacity="0.2" />
    </g>
  );
}

export function Character({ team = 'blue', index = 0, flipped = false }) {
  const c = team === 'blue' ? BLUE_COLORS : RED_COLORS;
  const patId = `pat-${team}`;
  const hairStyles = ['round', 'spiky', 'flat'];
  const hairStyle = hairStyles[index % 3];
  const sizes = [1, 0.9, 0.82];
  const scale = sizes[index];
  const leanAngles = [-12, -8, -15];
  const lean = leanAngles[index];

  const HairComponent = hairStyle === 'round' ? HairRound : hairStyle === 'spiky' ? HairSpiky : HairFlat;

  return (
    <g transform={`scale(${scale})`}>
      <g transform={flipped ? 'scale(-1, 1)' : ''} className={`character character-${index}`}>
        {/* Shadow */}
        <ellipse cx="0" cy="48" rx="16" ry="4" fill="#000" opacity="0.1" />

        {/* Legs */}
        <g className="character-legs">
          <line x1="-4" y1="26" x2="-16" y2="44" stroke={c.pants} strokeWidth="7" strokeLinecap="round" />
          <line x1="6" y1="26" x2="-2" y2="44" stroke={c.pants} strokeWidth="7" strokeLinecap="round" />
          <line x1="-18" y1="44" x2="-12" y2="44" stroke="white" strokeWidth="0.8" opacity="0.6" />
          <line x1="-6" y1="44" x2="0" y2="44" stroke="white" strokeWidth="0.8" opacity="0.6" />
          <ellipse cx="-18" cy="46" rx="8" ry="3.5" fill={c.shoes} />
          <ellipse cx="-4" cy="46" rx="8" ry="3.5" fill={c.shoes} />
          <ellipse cx="-18" cy="48" rx="7" ry="1.5" fill={c.hairDark} opacity="0.3" />
          <ellipse cx="-4" cy="48" rx="7" ry="1.5" fill={c.hairDark} opacity="0.3" />
        </g>

        {/* Body */}
        <g className="character-body" transform={`rotate(${lean})`}>
          <ellipse cx="0" cy="12" rx="14" ry="16" fill={`url(#${patId})`} />
          <path d="M-5 -2 Q0 2 5 -2" stroke={c.shirtDark} strokeWidth="1.5" fill="none" />
          <ellipse cx="6" cy="16" rx="6" ry="10" fill={c.shirtDark} opacity="0.2" />
          <text x="0" y="16" textAnchor="middle" fontSize="10" fontWeight="900" fill="white" opacity="0.5" fontFamily="sans-serif">{index + 1}</text>
          <rect x="-12" y="22" width="24" height="4" rx="2" fill="#1E293B" />
          <rect x="-3" y="22.5" width="6" height="3" rx="1" fill="#D4A574" opacity="0.8" />
        </g>

        {/* Arms */}
        <g className="character-arms">
          <line x1="8" y1="6" x2="18" y2="2" stroke={c.skin} strokeWidth="5.5" strokeLinecap="round" />
          <line x1="18" y1="2" x2="28" y2="4" stroke={c.skin} strokeWidth="5" strokeLinecap="round" />
          <line x1="10" y1="1" x2="20" y2="-2" stroke={c.skin} strokeWidth="5.5" strokeLinecap="round" />
          <line x1="20" y1="-2" x2="28" y2="0" stroke={c.skin} strokeWidth="5" strokeLinecap="round" />
          <circle cx="28" cy="4" r="4" fill={c.skin} />
          <circle cx="28" cy="0" r="4" fill={c.skin} />
          <path d="M25 3 L31 3" stroke={c.skinDark} strokeWidth="0.7" opacity="0.6" />
          <path d="M25 5 L31 5" stroke={c.skinDark} strokeWidth="0.7" opacity="0.6" />
          <path d="M25 -1 L31 -1" stroke={c.skinDark} strokeWidth="0.7" opacity="0.6" />
          <path d="M25 1 L31 1" stroke={c.skinDark} strokeWidth="0.7" opacity="0.6" />
          <path d="M8 4 Q10 8 12 4" stroke={c.shirtDark} strokeWidth="1.2" fill="none" />
          <path d="M10 -1 Q12 3 14 -1" stroke={c.shirtDark} strokeWidth="1.2" fill="none" />
        </g>

        {/* Head */}
        <g className="character-head" transform={`rotate(${lean * 0.4})`}>
          <circle cx="0" cy="-16" r="14" fill={c.skin} />
          <ellipse cx="-13" cy="-14" rx="3" ry="4" fill={c.skin} />
          <ellipse cx="-13" cy="-14" rx="2" ry="3" fill={c.skinDark} opacity="0.3" />
          <ellipse cx="13" cy="-14" rx="3" ry="4" fill={c.skin} />
          <ellipse cx="13" cy="-14" rx="2" ry="3" fill={c.skinDark} opacity="0.3" />

          <HairComponent c={c} />

          {/* Eyes */}
          <ellipse cx="-5" cy="-18" rx="4" ry="4.5" fill="white" />
          <ellipse cx="5" cy="-18" rx="4" ry="4.5" fill="white" />
          <circle cx="-3.5" cy="-17.5" r="2.5" fill="#1E293B" />
          <circle cx="6.5" cy="-17.5" r="2.5" fill="#1E293B" />
          <circle cx="-3" cy="-18" r="1" fill="#000" />
          <circle cx="7" cy="-18" r="1" fill="#000" />
          <circle cx="-2" cy="-19.5" r="1" fill="white" />
          <circle cx="-4.5" cy="-17" r="0.5" fill="white" />
          <circle cx="8" cy="-19.5" r="1" fill="white" />
          <circle cx="5.5" cy="-17" r="0.5" fill="white" />

          {/* Eyebrows */}
          <path d="M-9 -24 Q-5 -26 -1 -24" stroke={c.hair} strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M1 -24 Q5 -26 9 -24" stroke={c.hair} strokeWidth="2.2" fill="none" strokeLinecap="round" />

          {/* Nose */}
          <path d="M0 -14 Q1 -11 0 -10" stroke={c.skinDark} strokeWidth="1" fill="none" opacity="0.5" />

          {/* Mouth */}
          <path d="M-5 -8 Q0 -4 5 -8" stroke="#8B4513" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <rect x="-3" y="-8" width="6" height="2.5" rx="1" fill="white" opacity="0.8" />
          <line x1="0" y1="-8" x2="0" y2="-5.5" stroke="#DDD" strokeWidth="0.5" />

          {/* Cheeks */}
          <circle cx="-10" cy="-11" r="4" fill={c.cheeks} opacity="0.35" />
          <circle cx="10" cy="-11" r="4" fill={c.cheeks} opacity="0.35" />

          {/* Sweat drop on first char */}
          {index === 0 && (
            <g className="sweat-drop">
              <path d="M13 -24 Q14 -21 13 -18 Q11 -20 13 -24Z" fill="#93C5FD" opacity="0.8" />
              <circle cx="13.2" cy="-20.5" r="0.6" fill="white" opacity="0.9" />
            </g>
          )}

          {/* Bandana on second char */}
          {index === 1 && (
            <path
              d="M-12 -26 Q0 -29 12 -26"
              stroke={team === 'blue' ? '#1D4ED8' : '#B91C1C'}
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          )}
        </g>
      </g>
    </g>
  );
}

export function Team({ team = 'blue' }) {
  const flipped = team === 'red';
  const spacing = 52;
  const startX = flipped ? spacing * 2 : 0;

  return (
    <g className={`team-${team}`}>
      {[0, 1, 2].map(i => {
        const x = flipped ? startX - i * spacing : startX + i * spacing;
        return (
          <g key={i} transform={`translate(${x}, 0)`}>
            <Character team={team} index={i} flipped={flipped} />
          </g>
        );
      })}
    </g>
  );
}

export function SVGDefs() {
  return (
    <defs>
      <pattern id="pat-blue" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="6" height="6" fill="#3B82F6" />
        <line x1="0" y1="0" x2="0" y2="6" stroke="#60A5FA" strokeWidth="2.5" />
      </pattern>
      <pattern id="pat-red" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
        <rect width="6" height="6" fill="#EF4444" />
        <line x1="0" y1="0" x2="0" y2="6" stroke="#F87171" strokeWidth="2.5" />
      </pattern>
    </defs>
  );
}

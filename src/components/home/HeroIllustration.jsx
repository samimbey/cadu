export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 480 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
      {/* Background blob */}
      <ellipse cx="255" cy="210" rx="200" ry="185" fill="#EEF2FF" />

      {/* Dashed connecting lines */}
      <path d="M200 160 Q240 130 300 120" stroke="#93A8D0" strokeWidth="1.5" strokeDasharray="5 5" fill="none"/>
      <path d="M300 120 Q360 115 370 155" stroke="#93A8D0" strokeWidth="1.5" strokeDasharray="5 5" fill="none"/>
      <path d="M200 160 Q160 200 155 250" stroke="#93A8D0" strokeWidth="1.5" strokeDasharray="5 5" fill="none"/>
      <path d="M300 120 Q330 200 320 260" stroke="#93A8D0" strokeWidth="1.5" strokeDasharray="5 5" fill="none"/>

      {/* Icon circles */}
      {/* Piggy bank - top left */}
      <circle cx="195" cy="148" r="32" fill="white" stroke="#D1D9EC" strokeWidth="1.5"/>
      <text x="195" y="157" textAnchor="middle" fontSize="22">🐷</text>

      {/* Money bill - top right */}
      <circle cx="370" cy="148" r="32" fill="white" stroke="#D1D9EC" strokeWidth="1.5"/>
      <text x="370" y="157" textAnchor="middle" fontSize="22">💵</text>

      {/* Hand with dollar - center */}
      <circle cx="295" cy="195" r="34" fill="white" stroke="#D1D9EC" strokeWidth="1.5"/>
      <text x="295" y="205" textAnchor="middle" fontSize="24">🤲</text>

      {/* Credit card - left */}
      <circle cx="148" cy="258" r="32" fill="white" stroke="#D1D9EC" strokeWidth="1.5"/>
      <text x="148" y="267" textAnchor="middle" fontSize="22">💳</text>

      {/* Coins - bottom right */}
      <circle cx="322" cy="268" r="32" fill="white" stroke="#D1D9EC" strokeWidth="1.5"/>
      <text x="322" y="277" textAnchor="middle" fontSize="22">🪙</text>

      {/* Person body */}
      {/* Legs */}
      <rect x="218" y="330" width="18" height="58" rx="9" fill="#2B4C8C"/>
      <rect x="244" y="330" width="18" height="58" rx="9" fill="#2B4C8C"/>
      {/* Shoes */}
      <ellipse cx="227" cy="388" rx="14" ry="7" fill="#1a1a2e"/>
      <ellipse cx="253" cy="388" rx="14" ry="7" fill="#1a1a2e"/>
      {/* Torso */}
      <rect x="210" y="255" width="60" height="82" rx="20" fill="#F5E6C8"/>
      {/* Raised arm */}
      <path d="M268 270 Q310 235 295 195" stroke="#F5E6C8" strokeWidth="18" strokeLinecap="round" fill="none"/>
      {/* Other arm */}
      <path d="M212 285 Q185 305 178 295" stroke="#F5E6C8" strokeWidth="16" strokeLinecap="round" fill="none"/>
      {/* Head */}
      <circle cx="240" cy="232" r="28" fill="#F5C5A3"/>
      {/* Hair */}
      <path d="M213 228 Q213 200 240 196 Q267 200 267 228 Q267 210 240 207 Q213 210 213 228Z" fill="#3a2a1a"/>
      <path d="M213 225 Q210 215 212 208 Q215 198 225 195 Q212 202 213 225Z" fill="#3a2a1a"/>
      <path d="M267 225 Q270 215 268 208 Q265 198 255 195 Q268 202 267 225Z" fill="#3a2a1a"/>
    </svg>
  );
}
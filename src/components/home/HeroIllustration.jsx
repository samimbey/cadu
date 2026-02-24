// Primary theme blue: hsl(224, 56%, 42%) ≈ #2E509A
export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 520 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
      {/* Background blob */}
      <path d="M80 120 Q60 60 150 40 Q260 10 370 50 Q460 85 450 180 Q445 270 420 340 Q390 420 300 450 Q200 480 130 420 Q50 360 60 270 Q65 195 80 120Z" fill="#E8ECF5"/>

      {/* Dashed lines connecting icons */}
      {/* piggy -> hand */}
      <path d="M230 145 Q290 155 310 210" stroke="#8FA3C8" strokeWidth="1.5" strokeDasharray="6 5" fill="none"/>
      {/* hand -> money bill */}
      <path d="M345 200 Q380 165 390 130" stroke="#8FA3C8" strokeWidth="1.5" strokeDasharray="6 5" fill="none"/>
      {/* money bill -> money bag */}
      <path d="M405 145 Q430 195 415 245" stroke="#8FA3C8" strokeWidth="1.5" strokeDasharray="6 5" fill="none"/>
      {/* money bag -> coins */}
      <path d="M400 285 Q385 330 355 355" stroke="#8FA3C8" strokeWidth="1.5" strokeDasharray="6 5" fill="none"/>
      {/* coins -> credit card */}
      <path d="M315 375 Q250 370 195 320" stroke="#8FA3C8" strokeWidth="1.5" strokeDasharray="6 5" fill="none"/>
      {/* credit card -> piggy */}
      <path d="M175 290 Q185 215 210 165" stroke="#8FA3C8" strokeWidth="1.5" strokeDasharray="6 5" fill="none"/>

      {/* Icon: Piggy bank */}
      <circle cx="220" cy="145" r="38" fill="white" stroke="#D4DCEE" strokeWidth="1.5"/>
      <text x="220" y="156" textAnchor="middle" fontSize="28">🐷</text>

      {/* Icon: Hand with dollar */}
      <circle cx="320" cy="225" r="38" fill="white" stroke="#D4DCEE" strokeWidth="1.5"/>
      <text x="320" y="236" textAnchor="middle" fontSize="26">🫴</text>
      <text x="318" y="230" textAnchor="middle" fontSize="13" fill="#2E509A" fontWeight="bold">$</text>

      {/* Icon: Money bill */}
      <circle cx="398" cy="118" r="34" fill="#2A9E5A" stroke="#D4DCEE" strokeWidth="1.5"/>
      <rect x="372" y="104" width="52" height="28" rx="4" fill="#2CBD6A"/>
      <circle cx="398" cy="118" r="9" fill="#1A8C4A"/>
      <text x="398" y="123" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">$</text>

      {/* Icon: Money bag */}
      <circle cx="418" cy="268" r="34" fill="white" stroke="#D4DCEE" strokeWidth="1.5"/>
      <text x="418" y="279" textAnchor="middle" fontSize="26">💰</text>

      {/* Icon: Coins */}
      <circle cx="338" cy="368" r="34" fill="white" stroke="#D4DCEE" strokeWidth="1.5"/>
      <text x="338" y="379" textAnchor="middle" fontSize="26">🪙</text>

      {/* Icon: Credit card */}
      <circle cx="168" cy="302" r="38" fill="white" stroke="#D4DCEE" strokeWidth="1.5"/>
      <rect x="144" y="286" width="48" height="32" rx="5" fill="#2E509A"/>
      <rect x="144" y="295" width="48" height="8" fill="#4A6CB8"/>
      <rect x="148" y="306" width="14" height="6" rx="2" fill="#FFD166"/>

      {/* ── Person ── */}
      {/* Left leg */}
      <path d="M258 415 Q252 460 245 500 Q240 510 232 510 Q222 510 220 500 L225 415Z" fill="#2E509A"/>
      {/* Right leg */}
      <path d="M282 415 Q288 460 295 500 Q300 510 308 510 Q318 510 320 500 L315 415Z" fill="#2E509A"/>
      {/* Left shoe */}
      <ellipse cx="228" cy="506" rx="16" ry="8" fill="#1a1a2e"/>
      {/* Right shoe */}
      <ellipse cx="308" cy="506" rx="16" ry="8" fill="#1a1a2e"/>
      {/* Torso */}
      <path d="M240 310 Q235 260 248 245 Q262 238 278 245 Q292 255 290 310 L285 420 L255 420Z" fill="#F5E6C8"/>
      {/* Raised right arm */}
      <path d="M285 270 Q320 230 330 210" stroke="#F5E6C8" strokeWidth="20" strokeLinecap="round" fill="none"/>
      {/* Left arm hanging */}
      <path d="M243 280 Q225 310 222 330" stroke="#F5E6C8" strokeWidth="18" strokeLinecap="round" fill="none"/>
      {/* Neck */}
      <rect x="257" y="232" width="22" height="18" rx="8" fill="#F0C8A0"/>
      {/* Head */}
      <ellipse cx="268" cy="210" rx="30" ry="32" fill="#F0C8A0"/>
      {/* Hair - dark, shoulder length */}
      <path d="M240 200 Q238 168 268 164 Q298 168 296 200 Q294 185 268 183 Q242 185 240 200Z" fill="#1a1a2e"/>
      <path d="M238 200 Q233 230 236 255 Q230 240 232 210 Q234 195 238 200Z" fill="#1a1a2e"/>
      <path d="M296 200 Q300 220 298 235 Q302 215 298 200Z" fill="#1a1a2e"/>
    </svg>
  );
}
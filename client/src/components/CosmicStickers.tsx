/**
 * Cosmic Stickers Component - Comic Book Style
 * Bold, high-contrast space-themed SVG decorations with dramatic shadows and vibrant colors
 */

interface CosmicStickerProps {
  type: 'astronaut' | 'moon' | 'planet' | 'star' | 'satellite' | 'comet';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'w-12 h-12',
  md: 'w-20 h-20',
  lg: 'w-24 h-24'
};

const positionMap = {
  'top-left': 'absolute top-2 left-2',
  'top-right': 'absolute top-2 right-2',
  'bottom-left': 'absolute bottom-2 left-2',
  'bottom-right': 'absolute bottom-2 right-2'
};

export function Astronaut() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.8" floodColor="#000" />
        </filter>
      </defs>
      {/* Helmet with bold outline */}
      <circle cx="50" cy="30" r="18" fill="#06b6d4" stroke="#0a5a6f" strokeWidth="3" filter="url(#shadow)" />
      {/* Helmet visor shine - bright */}
      <ellipse cx="48" cy="28" rx="8" ry="6" fill="#fbbf24" opacity="0.9" />
      {/* Body - bold purple */}
      <rect x="38" y="50" width="24" height="28" fill="#a855f7" stroke="#6d1b69" strokeWidth="2.5" rx="4" filter="url(#shadow)" />
      {/* Arms - vibrant pink */}
      <line x1="38" y1="58" x2="20" y2="50" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" filter="url(#shadow)" />
      <line x1="62" y1="58" x2="80" y2="50" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" filter="url(#shadow)" />
      {/* Hands */}
      <circle cx="20" cy="50" r="4" fill="#ec4899" filter="url(#shadow)" />
      <circle cx="80" cy="50" r="4" fill="#ec4899" filter="url(#shadow)" />
      {/* Legs - cyan */}
      <line x1="42" y1="78" x2="38" y2="95" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" filter="url(#shadow)" />
      <line x1="58" y1="78" x2="62" y2="95" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" filter="url(#shadow)" />
      {/* Boots */}
      <circle cx="38" cy="95" r="3.5" fill="#06b6d4" filter="url(#shadow)" />
      <circle cx="62" cy="95" r="3.5" fill="#06b6d4" filter="url(#shadow)" />
    </svg>
  );
}

export function Moon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.8" floodColor="#000" />
        </filter>
      </defs>
      {/* Moon circle - bright yellow */}
      <circle cx="50" cy="50" r="40" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" filter="url(#shadow)" />
      {/* Craters - dark and bold */}
      <circle cx="32" cy="38" r="8" fill="#92400e" filter="url(#shadow)" />
      <circle cx="58" cy="52" r="7" fill="#92400e" filter="url(#shadow)" />
      <circle cx="48" cy="68" r="6" fill="#92400e" filter="url(#shadow)" />
      {/* Crater highlights */}
      <circle cx="32" cy="38" r="8" fill="none" stroke="#fbbf24" strokeWidth="1.5" opacity="0.7" />
      {/* Glow ring */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="#fef08a" strokeWidth="3" opacity="0.5" filter="url(#shadow)" />
    </svg>
  );
}

export function Planet() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.8" floodColor="#000" />
        </filter>
      </defs>
      {/* Planet body - hot pink */}
      <circle cx="50" cy="50" r="35" fill="#ec4899" stroke="#be185d" strokeWidth="3" filter="url(#shadow)" />
      {/* Planet rings - bold and visible */}
      <ellipse cx="50" cy="50" rx="52" ry="16" fill="none" stroke="#a855f7" strokeWidth="4" filter="url(#shadow)" />
      <ellipse cx="50" cy="50" rx="52" ry="16" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.6" />
      {/* Surface details - dark spots */}
      <circle cx="38" cy="42" r="10" fill="#be185d" filter="url(#shadow)" />
      <circle cx="62" cy="58" r="8" fill="#be185d" filter="url(#shadow)" />
      {/* Atmosphere glow */}
      <circle cx="50" cy="50" r="35" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.4" filter="url(#shadow)" />
    </svg>
  );
}

export function Star() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.8" floodColor="#000" />
        </filter>
      </defs>
      {/* Outer star - golden yellow */}
      <polygon points="50,8 61,38 92,38 68,58 79,88 50,68 21,88 32,58 8,38 39,38" 
               fill="#fbbf24" stroke="#b45309" strokeWidth="2.5" filter="url(#shadow)" />
      {/* Inner star highlight - bright */}
      <polygon points="50,18 58,36 76,36 62,48 70,66 50,54 30,66 38,48 24,36 42,36" 
               fill="#fef08a" opacity="0.8" />
      {/* Sparkle effect */}
      <line x1="50" y1="2" x2="50" y2="12" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" filter="url(#shadow)" />
      <line x1="88" y1="50" x2="98" y2="50" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" filter="url(#shadow)" />
    </svg>
  );
}

export function Satellite() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.8" floodColor="#000" />
        </filter>
      </defs>
      {/* Main body - cyan */}
      <rect x="38" y="32" width="24" height="36" fill="#06b6d4" stroke="#0a5a6f" strokeWidth="2.5" rx="3" filter="url(#shadow)" />
      {/* Solar panels - purple */}
      <rect x="16" y="42" width="18" height="24" fill="#a855f7" stroke="#6d1b69" strokeWidth="2" filter="url(#shadow)" />
      <rect x="66" y="42" width="18" height="24" fill="#a855f7" stroke="#6d1b69" strokeWidth="2" filter="url(#shadow)" />
      {/* Panel details */}
      <line x1="16" y1="48" x2="34" y2="48" stroke="#6d1b69" strokeWidth="1.5" opacity="0.6" />
      <line x1="16" y1="54" x2="34" y2="54" stroke="#6d1b69" strokeWidth="1.5" opacity="0.6" />
      <line x1="66" y1="48" x2="84" y2="48" stroke="#6d1b69" strokeWidth="1.5" opacity="0.6" />
      <line x1="66" y1="54" x2="84" y2="54" stroke="#6d1b69" strokeWidth="1.5" opacity="0.6" />
      {/* Antenna - bold pink */}
      <line x1="50" y1="32" x2="50" y2="8" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" filter="url(#shadow)" />
      <circle cx="50" cy="8" r="4" fill="#ec4899" filter="url(#shadow)" />
    </svg>
  );
}

export function Comet() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.8" floodColor="#000" />
        </filter>
      </defs>
      {/* Head - golden */}
      <circle cx="72" cy="28" r="14" fill="#fbbf24" stroke="#b45309" strokeWidth="2.5" filter="url(#shadow)" />
      {/* Tail - purple gradient effect */}
      <path d="M 60 35 Q 35 55 12 78" stroke="#a855f7" strokeWidth="5" fill="none" strokeLinecap="round" filter="url(#shadow)" />
      {/* Tail accent - pink */}
      <path d="M 58 32 Q 32 50 8 75" stroke="#ec4899" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" filter="url(#shadow)" />
      {/* Tail accent - cyan */}
      <path d="M 62 38 Q 40 60 15 82" stroke="#06b6d4" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" filter="url(#shadow)" />
      {/* Glow around head */}
      <circle cx="72" cy="28" r="14" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.5" filter="url(#shadow)" />
      {/* Sparkles */}
      <circle cx="78" cy="22" r="2" fill="#fef08a" filter="url(#shadow)" />
      <circle cx="68" cy="18" r="1.5" fill="#fef08a" filter="url(#shadow)" />
    </svg>
  );
}

export function CosmicSticker({ type, position, size = 'md' }: CosmicStickerProps) {
  const Component = {
    astronaut: Astronaut,
    moon: Moon,
    planet: Planet,
    star: Star,
    satellite: Satellite,
    comet: Comet
  }[type];

  return (
    <div className={`${positionMap[position]} ${sizeMap[size]} opacity-90 hover:opacity-100 transition-opacity duration-300 cursor-pointer`}>
      <Component />
    </div>
  );
}

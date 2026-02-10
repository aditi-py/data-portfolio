/**
 * Cosmic Stickers Component
 * Space-themed SVG decorations (astronauts, moons, planets, stars)
 * Positioned in different corners of project cards
 */

interface CosmicStickerProps {
  type: 'astronaut' | 'moon' | 'planet' | 'star' | 'satellite' | 'comet';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-20 h-20'
};

const positionMap = {
  'top-left': 'absolute top-3 left-3',
  'top-right': 'absolute top-3 right-3',
  'bottom-left': 'absolute bottom-3 left-3',
  'bottom-right': 'absolute bottom-3 right-3'
};

export function Astronaut() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Helmet */}
      <circle cx="50" cy="30" r="18" fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.8" />
      {/* Helmet shine */}
      <circle cx="45" cy="25" r="5" fill="#06b6d4" opacity="0.6" />
      {/* Body */}
      <rect x="40" y="50" width="20" height="25" fill="#a469d5" opacity="0.7" rx="3" />
      {/* Arms */}
      <line x1="40" y1="55" x2="25" y2="50" stroke="#ec4899" strokeWidth="3" opacity="0.7" />
      <line x1="60" y1="55" x2="75" y2="50" stroke="#ec4899" strokeWidth="3" opacity="0.7" />
      {/* Legs */}
      <line x1="43" y1="75" x2="40" y2="90" stroke="#06b6d4" strokeWidth="3" opacity="0.7" />
      <line x1="57" y1="75" x2="60" y2="90" stroke="#06b6d4" strokeWidth="3" opacity="0.7" />
    </svg>
  );
}

export function Moon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Moon circle */}
      <circle cx="50" cy="50" r="40" fill="#fef3c7" opacity="0.9" />
      {/* Craters */}
      <circle cx="35" cy="40" r="6" fill="#f59e0b" opacity="0.5" />
      <circle cx="55" cy="50" r="5" fill="#f59e0b" opacity="0.5" />
      <circle cx="45" cy="65" r="4" fill="#f59e0b" opacity="0.5" />
      {/* Glow */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="#fef3c7" strokeWidth="2" opacity="0.3" />
    </svg>
  );
}

export function Planet() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Planet body */}
      <circle cx="50" cy="50" r="35" fill="#ec4899" opacity="0.8" />
      {/* Planet rings */}
      <ellipse cx="50" cy="50" rx="50" ry="15" fill="none" stroke="#a469d5" strokeWidth="3" opacity="0.6" />
      {/* Atmosphere glow */}
      <circle cx="50" cy="50" r="35" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.3" />
      {/* Surface details */}
      <circle cx="40" cy="45" r="8" fill="#c2185b" opacity="0.5" />
      <circle cx="60" cy="55" r="6" fill="#c2185b" opacity="0.5" />
    </svg>
  );
}

export function Star() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Star points */}
      <polygon points="50,10 61,40 90,40 68,60 79,90 50,70 21,90 32,60 10,40 39,40" fill="#fbbf24" opacity="0.9" />
      {/* Inner glow */}
      <polygon points="50,20 58,38 75,38 62,50 70,68 50,56 30,68 38,50 25,38 42,38" fill="#fef3c7" opacity="0.6" />
    </svg>
  );
}

export function Satellite() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Main body */}
      <rect x="40" y="35" width="20" height="30" fill="#06b6d4" opacity="0.8" rx="2" />
      {/* Solar panels */}
      <rect x="20" y="45" width="15" height="20" fill="#a469d5" opacity="0.7" />
      <rect x="65" y="45" width="15" height="20" fill="#a469d5" opacity="0.7" />
      {/* Antenna */}
      <line x1="50" y1="35" x2="50" y2="15" stroke="#ec4899" strokeWidth="2" opacity="0.8" />
      <circle cx="50" cy="15" r="3" fill="#ec4899" opacity="0.8" />
    </svg>
  );
}

export function Comet() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Head */}
      <circle cx="70" cy="30" r="12" fill="#fbbf24" opacity="0.9" />
      {/* Tail */}
      <path d="M 60 35 Q 40 50 20 70" stroke="#a469d5" strokeWidth="3" fill="none" opacity="0.7" />
      <path d="M 58 32 Q 35 48 15 68" stroke="#ec4899" strokeWidth="2" fill="none" opacity="0.5" />
      {/* Glow around head */}
      <circle cx="70" cy="30" r="12" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.3" />
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
    <div className={`${positionMap[position]} ${sizeMap[size]} opacity-70 hover:opacity-100 transition-opacity`}>
      <Component />
    </div>
  );
}

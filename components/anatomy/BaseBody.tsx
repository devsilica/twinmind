export function BaseBody() {
  return (
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      opacity={0.18}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Head */}
      <circle cx="150" cy="65" r="35" />

      {/* Neck */}
      <path d="M150 100 L150 120" />

      {/* Shoulders */}
      <path d="M100 145 Q150 125 200 145" />

      {/* Torso */}
      <path d="M120 145
               Q105 250 120 420
               Q150 455 180 420
               Q195 250 180 145" />

      {/* Left Arm */}
      <path d="M100 145
               Q75 210 70 310
               Q72 360 82 420" />

      {/* Right Arm */}
      <path d="M200 145
               Q225 210 230 310
               Q228 360 218 420" />

      {/* Pelvis */}
      <path d="M120 420
               Q150 445 180 420" />

      {/* Left Leg */}
      <path d="M135 440
               L120 560
               L125 665" />

      {/* Right Leg */}
      <path d="M165 440
               L180 560
               L175 665" />
    </g>
  );
}
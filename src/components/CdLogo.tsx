export default function CdLogo({ size = 36, gradId = "cd-g" }: { size?: number; gradId?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06b6d4" />
          <stop offset="1" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      {/* Background */}
      <rect width="36" height="36" rx="9" fill={`url(#${gradId})`} />
      {/* C — open arc curving around the left */}
      <path
        d="M15,9 C4,9 4,27 15,27"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* D — vertical bar + right curve */}
      <line x1="19" y1="9" x2="19" y2="27" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
      <path
        d="M19,9 C31,9 31,27 19,27"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

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
      {/* C — more square proportions, opens right */}
      <path
        d="M14,12 C6,12 6,24 14,24"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* D — vertical bar + right curve, wider gap from C */}
      <line x1="20" y1="12" x2="20" y2="24" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M20,12 C29,12 29,24 20,24"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

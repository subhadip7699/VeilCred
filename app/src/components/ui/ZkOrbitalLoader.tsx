"use client";

type LoaderSize = "xs" | "sm" | "md" | "lg" | "xl";

type ZkOrbitalLoaderProps = {
  size?: LoaderSize;
  className?: string;
  variant?: "accent" | "light" | "monochrome";
  label?: string;
};

export function ZkOrbitalLoader({
  size = "md",
  className = "",
  variant = "accent",
  label = "Loading",
}: ZkOrbitalLoaderProps) {
  const accentColor =
    variant === "light"
      ? "#ffffff"
      : variant === "monochrome"
        ? "#17181a"
        : "#3f7d58";

  const softColor =
    variant === "light"
      ? "rgba(255, 255, 255, 0.4)"
      : variant === "monochrome"
        ? "rgba(23, 24, 26, 0.3)"
        : "rgba(63, 125, 88, 0.35)";

  const glowColor =
    variant === "light"
      ? "rgba(255, 255, 255, 0.25)"
      : "rgba(63, 125, 88, 0.3)";

  if (size === "xs") {
    return (
      <span
        className={`relative inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center ${className}`}
        role="status"
        aria-label={label}
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="h-full w-full animate-zk-spin"
          aria-hidden="true"
        >
          <circle
            cx="8"
            cy="8"
            r="6"
            stroke="currentColor"
            strokeOpacity="0.18"
            strokeWidth="2"
          />
          <path
            d="M8 2a6 6 0 0 1 6 6"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }

  if (size === "sm") {
    return (
      <span
        className={`relative inline-flex h-5 w-5 shrink-0 items-center justify-center ${className}`}
        role="status"
        aria-label={label}
      >
        {/* Outer clockwise ring */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 h-full w-full animate-zk-spin"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="9.5"
            stroke="currentColor"
            strokeOpacity="0.15"
            strokeWidth="1.75"
          />
          <path
            d="M12 2.5a9.5 9.5 0 0 1 8.2 4.75"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Inner counter-rotating ring with bead */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 h-full w-full animate-zk-spin-reverse"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="5.5"
            stroke={softColor}
            strokeWidth="1.25"
            strokeDasharray="4 4"
          />
          <circle cx="12" cy="6.5" r="1.25" fill={accentColor} />
        </svg>

        {/* Center glowing core */}
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: accentColor,
            boxShadow: `0 0 6px ${accentColor}`,
          }}
          aria-hidden="true"
        />
      </span>
    );
  }

  if (size === "md") {
    return (
      <div
        className={`relative flex h-14 w-14 shrink-0 items-center justify-center ${className}`}
        role="status"
        aria-label={label}
      >
        {/* Ambient radial glow backdrop */}
        <div
          className="absolute -inset-1 rounded-full animate-zk-pulse-glow blur-sm"
          style={{
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Outer orbit with 4 cardinal tick markers */}
        <svg
          viewBox="0 0 56 56"
          fill="none"
          className="absolute inset-0 h-full w-full animate-zk-spin-slow"
          aria-hidden="true"
        >
          <circle
            cx="28"
            cy="28"
            r="25"
            stroke="currentColor"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          {/* 4 cardinal tick notches */}
          <line x1="28" y1="2" x2="28" y2="5" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="28" y1="51" x2="28" y2="54" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2" y1="28" x2="5" y2="28" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="51" y1="28" x2="54" y2="28" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
          {/* Orbiting satellite node */}
          <circle cx="28" cy="3" r="2" fill={accentColor} />
        </svg>

        {/* Middle clockwise segmented arc */}
        <svg
          viewBox="0 0 56 56"
          fill="none"
          className="absolute inset-0 h-full w-full animate-zk-spin"
          aria-hidden="true"
        >
          <circle
            cx="28"
            cy="28"
            r="19"
            stroke="currentColor"
            strokeOpacity="0.12"
            strokeWidth="1.5"
            strokeDasharray="4 5"
          />
          <path
            d="M28 9a19 19 0 0 1 17.5 11.5"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Inner counter-rotating ring */}
        <svg
          viewBox="0 0 56 56"
          fill="none"
          className="absolute inset-0 h-full w-full animate-zk-spin-reverse"
          aria-hidden="true"
        >
          <circle
            cx="28"
            cy="28"
            r="13"
            stroke={softColor}
            strokeWidth="1.25"
            strokeDasharray="6 3"
          />
          <circle cx="28" cy="15" r="1.5" fill={accentColor} />
        </svg>

        {/* Center shield emblem with keyhole */}
        <div
          className="relative flex h-6 w-6 items-center justify-center animate-zk-pulse-glow"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-full w-full"
            style={{
              filter: `drop-shadow(0 0 4px ${glowColor})`,
            }}
          >
            <path
              d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
              stroke={accentColor}
              strokeWidth="2"
              fill={variant === "light" ? "rgba(255,255,255,0.12)" : "rgba(63,125,88,0.12)"}
              strokeLinejoin="round"
            />
            <circle cx="12" cy="10" r="1.75" fill={accentColor} />
            <path d="M12 11.75v3.25" stroke={accentColor} strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    );
  }

  if (size === "lg") {
    return (
      <div
        className={`relative flex h-20 w-20 shrink-0 items-center justify-center ${className}`}
        role="status"
        aria-label={label}
      >
        {/* Soft background aura */}
        <div
          className="absolute -inset-3 rounded-full animate-zk-pulse-glow blur-md"
          style={{
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Outer degree ring */}
        <svg
          viewBox="0 0 80 80"
          fill="none"
          className="absolute inset-0 h-full w-full animate-zk-spin-slow"
          aria-hidden="true"
        >
          <circle
            cx="40"
            cy="40"
            r="37"
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
          {/* Outer cardinal beacons */}
          <circle cx="40" cy="3" r="2.5" fill={accentColor} />
          <circle cx="40" cy="77" r="1.5" fill={accentColor} fillOpacity="0.5" />
          <circle cx="3" cy="40" r="1.5" fill={accentColor} fillOpacity="0.5" />
          <circle cx="77" cy="40" r="1.5" fill={accentColor} fillOpacity="0.5" />
        </svg>

        {/* Mid-outer clockwise ring */}
        <svg
          viewBox="0 0 80 80"
          fill="none"
          className="absolute inset-0 h-full w-full animate-zk-spin"
          aria-hidden="true"
        >
          <circle
            cx="40"
            cy="40"
            r="29"
            stroke="currentColor"
            strokeOpacity="0.12"
            strokeWidth="1.5"
          />
          <path
            d="M40 11a29 29 0 0 1 27 19.5"
            stroke={accentColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="67" cy="30.5" r="2" fill={accentColor} />
        </svg>

        {/* Mid-inner counter-clockwise ring */}
        <svg
          viewBox="0 0 80 80"
          fill="none"
          className="absolute inset-0 h-full w-full animate-zk-spin-reverse"
          aria-hidden="true"
        >
          <circle
            cx="40"
            cy="40"
            r="20"
            stroke={softColor}
            strokeWidth="1.5"
            strokeDasharray="8 4"
          />
          <path
            d="M40 20a20 20 0 0 1 17.3 10"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Center Veilcred Shield */}
        <div
          className="relative flex h-8 w-8 items-center justify-center animate-zk-pulse-glow"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-full w-full"
            style={{
              filter: `drop-shadow(0 0 8px ${glowColor})`,
            }}
          >
            <path
              d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
              stroke={accentColor}
              strokeWidth="2"
              fill={variant === "light" ? "rgba(255,255,255,0.15)" : "rgba(63,125,88,0.15)"}
              strokeLinejoin="round"
            />
            <circle cx="12" cy="10" r="2" fill={accentColor} />
            <path d="M12 12v3.5" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    );
  }

  // size === "xl"
  return (
    <div
      className={`relative flex h-28 w-28 shrink-0 items-center justify-center ${className}`}
      role="status"
      aria-label={label}
    >
      {/* Deep radiant glow behind everything */}
      <div
        className="absolute -inset-6 rounded-full animate-zk-pulse-glow blur-xl"
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, rgba(63, 125, 88, 0.08) 50%, transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {/* Outermost ring with precision radar grid */}
      <svg
        viewBox="0 0 112 112"
        fill="none"
        className="absolute inset-0 h-full w-full animate-zk-spin-slow"
        aria-hidden="true"
      >
        <circle
          cx="56"
          cy="56"
          r="52"
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="1"
          strokeDasharray="3 7"
        />
        {/* Radar alignment corners */}
        <line x1="56" y1="2" x2="56" y2="7" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="56" y1="105" x2="56" y2="110" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="2" y1="56" x2="7" y2="56" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        <line x1="105" y1="56" x2="110" y2="56" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        <circle cx="56" cy="4" r="3" fill={accentColor} />
      </svg>

      {/* Outer counter-rotating dashed ring */}
      <svg
        viewBox="0 0 112 112"
        fill="none"
        className="absolute inset-0 h-full w-full animate-zk-spin-reverse"
        aria-hidden="true"
      >
        <circle
          cx="56"
          cy="56"
          r="42"
          stroke={softColor}
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
        <circle cx="56" cy="14" r="2.5" fill={accentColor} />
        <circle cx="56" cy="98" r="2" fill={accentColor} fillOpacity="0.6" />
      </svg>

      {/* Middle clockwise active arc with trail */}
      <svg
        viewBox="0 0 112 112"
        fill="none"
        className="absolute inset-0 h-full w-full animate-zk-spin"
        aria-hidden="true"
      >
        <circle
          cx="56"
          cy="56"
          r="32"
          stroke="currentColor"
          strokeOpacity="0.1"
          strokeWidth="1.5"
        />
        <path
          d="M56 24a32 32 0 0 1 30.5 22.5"
          stroke={accentColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="86.5" cy="46.5" r="3" fill={accentColor} />
      </svg>

      {/* Inner fast counter-orbit ring */}
      <svg
        viewBox="0 0 112 112"
        fill="none"
        className="absolute inset-0 h-full w-full animate-zk-spin-reverse"
        aria-hidden="true"
      >
        <circle
          cx="56"
          cy="56"
          r="22"
          stroke={softColor}
          strokeWidth="1.25"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Center Shield Emblem with Pulsing Holographic Light */}
      <div
        className="relative flex h-12 w-12 items-center justify-center animate-zk-pulse-glow"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-full w-full"
          style={{
            filter: `drop-shadow(0 0 12px ${glowColor})`,
          }}
        >
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            stroke={accentColor}
            strokeWidth="2"
            fill={variant === "light" ? "rgba(255,255,255,0.18)" : "rgba(63,125,88,0.2)"}
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="2.2" fill={accentColor} />
          <path d="M12 12.2v4.2" stroke={accentColor} strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

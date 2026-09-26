"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ZkOrbitalLoader } from "./ZkOrbitalLoader";

type LoadingStateProps = {
  label?: string;
  detail?: string;
  compact?: boolean;
  className?: string;
  showTelemetry?: boolean;
};

const ZK_PHASES = [
  "Initializing shielded witness runtime",
  "Evaluating zero-knowledge constraints",
  "Verifying Compact contract state anchor",
  "Resolving privacy-preserving credentials",
];

export function LoadingState({
  label = "Loading",
  detail,
  compact = false,
  className = "",
  showTelemetry = true,
}: LoadingStateProps) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [hashSuffix, setHashSuffix] = useState("a47b");

  useEffect(() => {
    const timer = setInterval(() => {
      setPhaseIndex((prev) => (prev + 1) % ZK_PHASES.length);
      // Generate subtle rotating cryptographic hex ticker
      const randomHex = Math.floor(Math.random() * 0xffff)
        .toString(16)
        .padStart(4, "0");
      setHashSuffix(randomHex);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  if (compact) {
    return (
      <div
        className={`inline-flex items-center gap-2.5 text-sm font-medium text-muted ${className}`}
        role="status"
        aria-live="polite"
      >
        <ZkOrbitalLoader size="sm" />
        <span className="text-primary">{label}</span>
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
      </div>
    );
  }

  return (
    <div
      className={`paper-card relative overflow-hidden border border-border-subtle bg-card/95 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm sm:p-8 ${className}`}
      role="status"
      aria-live="polite"
    >
      {/* Top ambient laser accent line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent/70 to-transparent"
        aria-hidden="true"
      />

      {/* Main header block */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        {/* Modern ZK Orbital Loader pedestal */}
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent-dim/60 shadow-[0_0_20px_rgba(63,125,88,0.1)]">
          <ZkOrbitalLoader size="md" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="eyebrow tracking-widest text-accent">ZK-Enclave Active</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-dim px-2.5 py-0.5 text-[11px] font-mono font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              SYNCHRONIZING
            </span>
          </div>

          <p className="mt-1.5 text-lg font-semibold tracking-tight text-primary">
            {label}
          </p>

          {detail && (
            <p className="mt-1.5 text-sm leading-6 text-muted">
              {detail}
            </p>
          )}
        </div>
      </div>

      {/* Dynamic Cryptographic Telemetry Track */}
      {showTelemetry && (
        <div className="mt-6 rounded-xl border border-border-subtle/80 bg-surface/70 p-3.5 backdrop-blur-xs">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-2 font-mono text-[11px] text-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-zk-beacon" />
              {ZK_PHASES[phaseIndex]}
            </span>
            <span className="font-mono text-[11px] font-medium text-accent">
              proof://0x3f..{hashSuffix}
            </span>
          </div>

          {/* High-tech segmented laser track */}
          <div className="relative mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div className="absolute inset-y-0 w-1/2 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent animate-zk-shimmer" />
          </div>
        </div>
      )}

      {/* Shimmer skeleton lines */}
      <div className="mt-4 space-y-2" aria-hidden="true">
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary/80">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-zk-shimmer" />
        </div>
        <div className="relative h-2 w-[78%] overflow-hidden rounded-full bg-secondary/80">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-zk-shimmer" />
        </div>
      </div>
    </div>
  );
}

export function PageLoadingFallback({ title = "Loading page" }: { title?: string }) {
  const [ticker, setTicker] = useState("COMPACT-ZK-SYSTEM");

  useEffect(() => {
    const list = ["COMPACT-ZK-SYSTEM", "MIDNIGHT-ENCLAVE", "PROOF-VERIFIER", "SHIELDED-STORAGE"];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % list.length;
      setTicker(list[i]);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-surface px-6 pb-24 pt-20 lg:px-10">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(63,125,88,0.10),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-xl">
        <div className="paper-card relative overflow-hidden border border-border-subtle bg-card/95 p-8 text-center shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-md sm:p-10">
          {/* Top highlight bar */}
          <div
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
            aria-hidden="true"
          />

          {/* Central large ZK orbital loader */}
          <div className="mx-auto flex justify-center">
            <ZkOrbitalLoader size="lg" />
          </div>

          <div className="mt-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-dim px-3 py-1 font-mono text-[11px] font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>{ticker}</span>
            </div>

            <h1 className="mt-4 font-display text-2xl text-primary sm:text-3xl">
              {title}
            </h1>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
              Preparing the Veilcred privacy engine, verifying route proofs, and securing session state.
            </p>
          </div>

          {/* Glowing scanner bar */}
          <div className="mt-8">
            <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div className="absolute inset-y-0 w-2/3 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent animate-zk-shimmer" />
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-wider text-faint uppercase">
              <span>Midnight Network</span>
              <span>Zero-Knowledge Proofs</span>
              <span>Shielded Mode</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

type BusyButtonContentProps = {
  busy: boolean;
  busyLabel: string;
  idleLabel: ReactNode;
  icon?: ReactNode;
};

export function BusyButtonContent({ busy, busyLabel, idleLabel, icon }: BusyButtonContentProps) {
  if (busy) {
    return (
      <span className="inline-flex items-center gap-2">
        <ZkOrbitalLoader size="sm" variant="light" label={busyLabel} />
        <span>{busyLabel}</span>
      </span>
    );
  }
  return (
    <>
      {icon}
      {idleLabel}
    </>
  );
}

export { ZkOrbitalLoader };

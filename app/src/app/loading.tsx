"use client";

import { useEffect, useState } from "react";
import { ZkOrbitalLoader } from "@/components/ui/ZkOrbitalLoader";

const STEPS = [
  "INITIALIZING ZERO-KNOWLEDGE RUNTIME",
  "COMPUTING BLINDED STATE COMMITMENTS",
  "ESTABLISHING MIDNIGHT SHIELDED ENCLAVE",
  "VERIFYING COMPACT PROOF CONSTRAINTS",
];

export default function Loading() {
  const [stepIndex, setStepIndex] = useState(0);
  const [nonce, setNonce] = useState("7f09");

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % STEPS.length);
      const nextNonce = Math.floor(Math.random() * 0xffff)
        .toString(16)
        .padStart(4, "0");
      setNonce(nextNonce);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#0e1013]/95 text-white backdrop-blur-2xl"
      role="status"
      aria-live="polite"
      aria-label="Loading Veilcred"
    >
      {/* Ambient background glow layers */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-700/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(63,125,88,0.12)_0%,transparent_65%)]"
        aria-hidden="true"
      />

      {/* Screen frame reticle corner brackets */}
      <div className="pointer-events-none absolute inset-6 flex justify-between opacity-30 sm:inset-10" aria-hidden="true">
        <div className="flex flex-col justify-between">
          <span className="font-mono text-xs text-emerald-400">┌─ [ZK-ENCLAVE]</span>
          <span className="font-mono text-xs text-emerald-400">└─</span>
        </div>
        <div className="flex flex-col justify-between text-right">
          <span className="font-mono text-xs text-emerald-400">[0xMIDNIGHT] ─┐</span>
          <span className="font-mono text-xs text-emerald-400">─┘</span>
        </div>
      </div>

      {/* Center Quantum Holographic Core */}
      <div className="relative flex flex-col items-center">
        {/* Large ZK Orbital Loader */}
        <ZkOrbitalLoader size="xl" variant="accent" label="Loading Veilcred" />

        {/* Branding & Status Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-[11px] font-mono tracking-wider text-emerald-300 shadow-[0_0_15px_rgba(63,125,88,0.25)] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-zk-beacon" />
            <span>CIRCUIT SYNCHRONIZATION</span>
          </div>

          <h1 className="mt-4 font-display text-2xl tracking-normal text-white sm:text-3xl">
            Veilcred
          </h1>

          <p className="mt-1 font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-400">
            Zero-Knowledge Privacy Vault
          </p>
        </div>

        {/* Dynamic cycling state telemetry */}
        <div className="mt-8 w-72 max-w-[85vw]">
          {/* Laser sweep progress bar */}
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-zinc-800">
            <div className="absolute inset-y-0 w-1/2 rounded-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-zk-shimmer" />
          </div>

          <div className="mt-3 flex items-center justify-between font-mono text-[11px]">
            <span className="truncate text-emerald-300">
              {STEPS[stepIndex]}
            </span>
            <span className="ml-2 shrink-0 text-zinc-500">
              0x{nonce}
            </span>
          </div>
        </div>
      </div>

      {/* Footer minimal telemetry metadata */}
      <div className="absolute bottom-6 font-mono text-[10px] tracking-wider text-zinc-600 uppercase" aria-hidden="true">
        Midnight Compact // Verifiable Zero Knowledge // Shielded Execution
      </div>
    </div>
  );
}

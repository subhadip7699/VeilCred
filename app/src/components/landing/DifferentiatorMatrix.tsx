"use client";

import { Check, ShieldCheck } from "lucide-react";
import styles from "./Landing.module.css";

interface ComparisonRow {
  feature: string;
  traditional: string;
  publicWeb3: string;
  Veilcred: string;
  VeilcredHighlight: boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Data Exposure to Verifier",
    traditional: "Full documents (Passport, Bank records, DOB)",
    publicWeb3: "Public wallet balance & full token history",
    Veilcred: "Zero bytes. Only mathematical validity.",
    VeilcredHighlight: true,
  },
  {
    feature: "Identity Linkability",
    traditional: "Permanent identity profile tracked by company",
    publicWeb3: "Permanent public address on block explorer",
    Veilcred: "Completely decoupled & unlinked via nullifiers",
    VeilcredHighlight: true,
  },
  {
    feature: "Centralized Storage Vulnerability",
    traditional: "High risk: customer records stored in SQL DB",
    publicWeb3: "Low: ledger is decentralized, but 100% public",
    Veilcred: "Zero: credentials stay on client machine",
    VeilcredHighlight: true,
  },
  {
    feature: "Replay & Double-Spend Protection",
    traditional: "Session cookies & centralized tokens",
    publicWeb3: "Transaction nonces linked to sender address",
    Veilcred: "Cryptographic nullifiers without identity trail",
    VeilcredHighlight: true,
  },
  {
    feature: "Decentralized Settlement",
    traditional: "None (Private servers)",
    publicWeb3: "Yes (Public EVM / Solana / Cardano)",
    Veilcred: "Yes (Midnight Preprod Shielded Ledger)",
    VeilcredHighlight: true,
  },
];

export function DifferentiatorMatrix() {
  return (
    <section id="comparison" className={styles.differentiatorSection}>
      <div className={styles.sectionHeaderCentered}>
        <div className={styles.sectionTag}>
          <ShieldCheck size={12} />
          <span>Protocol Comparison</span>
        </div>
        <h2 className={styles.sectionTitle}>
          How Veilcred compares to<br />
          <span className={styles.highlightText}>conventional identity and public Web3.</span>
        </h2>
        <p className={styles.sectionLead}>
          Public blockchains fix decentralization but destroy privacy. Veilcred delivers decentralized verification without sacrificing personal confidentiality.
        </p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.comparisonTable}>
          <thead>
            <tr>
              <th className={styles.thFeature}>Verification Dimension</th>
              <th className={styles.thLegacy}>Traditional KYC / OAuth</th>
              <th className={styles.thPublic}>Public Web3 Gating</th>
              <th className={styles.thVeilcred}>Veilcred on Midnight</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row) => (
              <tr key={row.feature}>
                <td className={styles.tdFeature}>{row.feature}</td>
                <td className={styles.tdLegacy}>{row.traditional}</td>
                <td className={styles.tdPublic}>{row.publicWeb3}</td>
                <td className={styles.tdVeilcred}>
                  <div className={styles.VeilcredValWrap}>
                    <Check size={15} className={styles.iconCheckGreen} />
                    <span>{row.Veilcred}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

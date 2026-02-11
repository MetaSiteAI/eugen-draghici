import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House Fenster — Montaj & Reparații Termopane",
  description:
    "Montaj și reparații termopane: reglaje iarnă/vară, garnituri, feronerie, plase țânțari. Intervenții rapide, profesioniste.",
  robots: { index: false, follow: false }, // demo pentru portofoliu
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}

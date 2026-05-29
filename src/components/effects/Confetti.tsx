import { useEffect } from "react";
import confetti from "canvas-confetti";

/**
 * Fires a celebratory confetti burst once per browser session
 * when the user first opens the portfolio.
 */
export function CelebrationConfetti() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const KEY = "portfolio-celebrated";
    if (sessionStorage.getItem(KEY)) return;
    sessionStorage.setItem(KEY, "1");

    const colors = ["#22d3ee", "#a78bfa", "#67e8f9", "#c4b5fd", "#f0abfc"];
    const duration = 2200;
    const end = Date.now() + duration;

    // Initial big burst
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.6 },
      colors,
      scalar: 1.1,
    });

    // Side cannons
    const interval = window.setInterval(() => {
      if (Date.now() > end) return clearInterval(interval);
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.7 },
        colors,
      });
    }, 220);

    return () => clearInterval(interval);
  }, []);

  return null;
}

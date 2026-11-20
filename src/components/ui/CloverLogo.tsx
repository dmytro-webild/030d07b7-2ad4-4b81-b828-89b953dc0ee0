import type { SVGProps } from "react";

export default function CloverLogo({ className = "size-8 text-[#f4d35e]", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-label="REVYVE Four-Leaf Clover Logo"
      {...props}
    >
      <g>
        {/* Top Leaf */}
        <path d="M 50 50 C 42 38, 26 30, 26 18 C 26 6, 42 6, 50 19 C 58 6, 74 6, 74 18 C 74 30, 58 38, 50 50 Z" />
        {/* Right Leaf */}
        <path d="M 50 50 C 42 38, 26 30, 26 18 C 26 6, 42 6, 50 19 C 58 6, 74 6, 74 18 C 74 30, 58 38, 50 50 Z" transform="rotate(90 50 50)" />
        {/* Bottom Leaf */}
        <path d="M 50 50 C 42 38, 26 30, 26 18 C 26 6, 42 6, 50 19 C 58 6, 74 6, 74 18 C 74 30, 58 38, 50 50 Z" transform="rotate(180 50 50)" />
        {/* Left Leaf */}
        <path d="M 50 50 C 42 38, 26 30, 26 18 C 26 6, 42 6, 50 19 C 58 6, 74 6, 74 18 C 74 30, 58 38, 50 50 Z" transform="rotate(270 50 50)" />
        {/* Stem */}
        <path d="M 50 48 Q 52 70, 60 88" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

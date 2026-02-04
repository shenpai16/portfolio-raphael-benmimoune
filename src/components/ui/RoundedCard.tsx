import React from "react";

type RoundedCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function RoundedCard({ children, className = "" }: RoundedCardProps) {
  return (
    <div
      className={`
        relative rounded-xl p-[1px]
        bg-gradient-to-br from-white/10 to-white/5
        backdrop-blur-sm
        ${className}
      `}
    >
      <div className="bg-[var(--color-dark)] rounded-xl p-6">
        {children}
      </div>
    </div>

  );
}


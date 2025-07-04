import React from "react";

type RoundedCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function RoundedCard({ children, className = "" }: RoundedCardProps) {
  return (
    <div className={`relative p-0.5 rounded-xl bg-black mt-10 ${className}`}>
      <div className="bg-[var(--color-dark)] rounded-lg p-6">
        {children}
      </div>
    </div>
  );
}


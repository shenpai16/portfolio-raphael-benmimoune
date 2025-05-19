import React from "react";

type RoundedCardProps = {
  children: React.ReactNode;
};

export default function RoundedCard({ children }: RoundedCardProps) {
  return (
    <div className="relative p-0.5 rounded-xl bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 animate-gradient-x max-w-[400px] w-full">
      <div className="bg-[var(--color-dark)] rounded-lg p-6">
        {children}
      </div>
    </div>
  );
}


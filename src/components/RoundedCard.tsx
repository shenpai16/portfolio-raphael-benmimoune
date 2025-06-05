import React from "react";

type RoundedCardProps = {
  children: React.ReactNode;
};

export default function RoundedCard({ children }: RoundedCardProps) {
  return (
    <div className="relative p-0.5 rounded-xl bg-black max-w-[400px] w-full mt-10">
      <div className="bg-[var(--color-dark)] rounded-lg p-6">
        {children}
      </div>
    </div>
  );
}

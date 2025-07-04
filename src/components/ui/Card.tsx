import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl shadow-xl bg-white p-6 ${className}`}
      style={{ backgroundColor: "#1e1e1e", color: "white" }}
    >
      {children}
    </div>
  );
}



export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`p-4 ${className}`}>{children}</div>;

}



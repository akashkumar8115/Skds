import { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-xl border border-gray-700 bg-gray-900 shadow-md", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="p-6">{children}</div>;
}

import { ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
}

export function ShimmerButton({ children, className = "" }: ShimmerButtonProps) {
  return (
    <button 
      className={`group relative overflow-hidden rounded-lg bg-blue-600 px-8 py-4 text-white transition hover:bg-blue-700 ${className}`}
    >
      <span className="relative z-10 text-sm font-medium md:text-base">{children}</span>
      <div className="absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full animate-shine-infinite justify-center blur-[12px]">
        <div className="relative h-full w-8 bg-white/30"></div>
      </div>
    </button>
  );
} 
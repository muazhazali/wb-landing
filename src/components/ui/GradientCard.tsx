import { ArrowUpRightIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useMouse } from "../../hooks/useMouse";
import { cn } from "../../lib/utils";
import { theme } from "../../styles/theme";

interface GradientCardProps {
  title: string;
  description: string;
  features?: string[];
  icon?: string;
  withArrow?: boolean;
  circleSize?: number;
  className?: string;
}

export const GradientCard = ({
  title,
  description,
  features,
  icon,
  withArrow = false,
  circleSize = 400,
  className,
}: GradientCardProps) => {
  const [mouse, parentRef] = useMouse();

  return (
    <div
      className="group relative transform-gpu overflow-hidden rounded-[20px] bg-white/10 p-2 transition-transform hover:scale-[1.01] active:scale-90"
      ref={parentRef}
    >
      {withArrow && (
        <ArrowUpRightIcon className="absolute right-2 top-2 z-10 size-5 translate-y-4 text-neutral-700 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" />
      )}
      <div
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
          mouse.elementX === null || mouse.elementY === null
            ? "opacity-0"
            : "opacity-100",
        )}
        style={{
          maskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          WebkitMaskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          background: `linear-gradient(135deg, ${theme.colors.gradient.card.from}, ${theme.colors.gradient.card.via}, ${theme.colors.gradient.card.to})`,
        }}
      />
      <div className="absolute inset-px rounded-[19px] bg-white/80" />
      <div className={cn("relative p-6", className)}>
        {icon && (
          <div className="text-4xl mb-3">{icon}</div>
        )}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-700">
                <svg className={cn("w-4 h-4 mr-2", `text-[${theme.colors.primary[500]}]`)} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}; 
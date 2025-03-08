import { cn } from "../../lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";
import { theme } from "../../styles/theme";

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, theme.animation.spring.progress);

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-1 origin-left",
        className,
      )}
      style={{
        scaleX,
        background: `linear-gradient(to right, ${theme.colors.gradient.progress.from}, ${theme.colors.gradient.progress.via}, ${theme.colors.gradient.progress.to})`,
      }}
    />
  );
} 
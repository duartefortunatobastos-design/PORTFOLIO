import { type CSSProperties, type ElementType, type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type FadeAnimation = "animate-fade-up" | "animate-fade-in" | "animate-scale-x-in";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: FadeAnimation;
  as?: ElementType;
};

const hiddenClass: Record<FadeAnimation, string> = {
  "animate-fade-up": "opacity-0 translate-y-6",
  "animate-fade-in": "opacity-0 translate-y-6",
  "animate-scale-x-in": "scale-x-0 opacity-0",
};

/** Scroll-triggered fade — same pattern as the ASAPOL site. */
export function FadeIn({
  children,
  className,
  delay = 0,
  animation = "animate-fade-up",
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined = visible ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <Tag
      ref={ref}
      className={cn(className, visible ? animation : hiddenClass[animation])}
      style={style}
    >
      {children}
    </Tag>
  );
}

type FadeInItemProps = Omit<FadeInProps, "delay"> & {
  index?: number;
  baseDelay?: number;
  step?: number;
};

/** Staggered child — delay = baseDelay + index × step (ms). */
export function FadeInItem({
  index = 0,
  baseDelay = 0,
  step = 100,
  ...props
}: FadeInItemProps) {
  return <FadeIn delay={baseDelay + index * step} {...props} />;
}

import { Children, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "blur" | "image";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  as?: ElementType;
};

const variantClass: Record<RevealVariant, string> = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  blur: "reveal-blur",
  image: "reveal-image",
};

export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  duration = 1,
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  const style = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-duration": `${duration}s`,
  } as CSSProperties;

  return (
    <Tag
      ref={ref}
      style={style}
      className={cn("reveal", variantClass[variant], inView && "reveal-visible", className)}
    >
      {children}
    </Tag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  stagger?: number;
  variant?: RevealVariant;
  duration?: number;
};

export function Stagger({
  children,
  className,
  itemClassName,
  stagger = 110,
  variant = "up",
  duration = 0.95,
}: StaggerProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          style={
            {
              "--reveal-delay": `${i * stagger}ms`,
              "--reveal-duration": `${duration}s`,
            } as CSSProperties
          }
          className={cn(
            "reveal",
            variantClass[variant],
            inView && "reveal-visible",
            itemClassName,
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

/** Wraps a full page section — children animate in as you scroll to it. */
export function ScrollSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.04, rootMargin: "0px 0px -80px 0px" });

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "scroll-section transition-opacity duration-700",
        inView ? "scroll-section-visible" : "scroll-section-hidden",
        className,
      )}
    >
      {children}
    </section>
  );
}

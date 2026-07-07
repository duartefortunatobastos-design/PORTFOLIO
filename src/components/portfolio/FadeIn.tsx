import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

export type FadeAnimation =
  | "animate-fade-up"
  | "animate-fade-in"
  | "animate-fade-left"
  | "animate-scale-x-in";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: FadeAnimation;
  /** Hero only — animates on load. Scroll sections must omit this. */
  immediate?: boolean;
  as?: ElementType;
};

/** Hidden states as plain CSS classes (not Tailwind utilities) so they always ship in the build. */
const hiddenClass: Record<FadeAnimation, string> = {
  "animate-fade-up": "fade-hidden-up",
  "animate-fade-in": "fade-hidden-in",
  "animate-fade-left": "fade-hidden-left",
  "animate-scale-x-in": "fade-hidden-scale-x",
};

/** Scroll-triggered fade — same pattern as the ASAPOL site. */
export function FadeIn({
  children,
  className,
  delay = 0,
  animation = "animate-fade-up",
  immediate = false,
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setVisible(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  const style: CSSProperties | undefined = visible ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <Tag
      ref={ref}
      style={style}
      className={cn(className, visible ? animation : hiddenClass[animation])}
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

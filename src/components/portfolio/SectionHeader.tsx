import { type ReactNode } from "react";
import { FadeIn } from "./FadeIn";

type SectionHeaderProps = {
  kicker: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  kicker,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const lineAlign = align === "center" ? "mx-auto" : "";

  return (
    <div className={`mb-10 sm:mb-12 md:mb-16 ${alignClass} ${className}`}>
      <FadeIn animation="animate-fade-in">
        <div className="section-kicker mb-3 sm:mb-4">{kicker}</div>
      </FadeIn>
      <FadeIn delay={80}>
        <h2 className="section-title">{title}</h2>
      </FadeIn>
      <FadeIn delay={160} animation="animate-scale-x-in" className={`mt-5 block w-14 max-w-full ${lineAlign}`}>
        <div className="section-line h-full w-full" aria-hidden="true" />
      </FadeIn>
      {description && (
        <FadeIn delay={240}>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/55 text-pretty sm:text-base">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}

import type { ComponentType } from "react";

type TechIconProps = { className?: string };

export function PhpIcon({ className = "size-5" }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <ellipse cx="12" cy="12" rx="10" ry="5.5" fill="#777BB4" />
      <text
        x="12"
        y="14.5"
        textAnchor="middle"
        fill="white"
        fontSize="7"
        fontWeight="700"
        fontFamily="Arial,sans-serif"
      >
        php
      </text>
    </svg>
  );
}

export function JavaScriptIcon({ className = "size-5" }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#F7DF1E" />
      <text
        x="12"
        y="15.5"
        textAnchor="middle"
        fill="#000"
        fontSize="8"
        fontWeight="700"
        fontFamily="Arial,sans-serif"
      >
        JS
      </text>
    </svg>
  );
}

export function CppIcon({ className = "size-5" }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#00599C" />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill="white"
        fontSize="7"
        fontWeight="700"
        fontFamily="Arial,sans-serif"
      >
        C++
      </text>
    </svg>
  );
}

export function CSharpIcon({ className = "size-5" }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#512BD4" />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fill="white"
        fontSize="7"
        fontWeight="700"
        fontFamily="Arial,sans-serif"
      >
        C#
      </text>
    </svg>
  );
}

export function PythonIcon({ className = "size-5" }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M11.9 2C9 2 9.2 2 8.1 2.05 6.9 2.1 6 2.6 6 4.2v2h6V5.2H8.5c.1-1.3 1.1-1.2 3.4-1.2 3.3 0 3.5.1 5.2.3v3.6c0 1.8-.3 2.1-2.3 2.3-2.1.2-3.9.2-3.9.2v1.8s.2 0 4.1-.3c2.1-.2 3.3-.7 3.5-2.8.1-1.1.1-3.3.1-3.3s0-2.6-.3-3.7C17.8 2.6 17.1 2.1 16 2.05 14.9 2 15.1 2 11.9 2Z"
        fill="#3776AB"
      />
      <path
        d="M6 13v2c0 1.6.7 2.1 1.7 2.15 1.1.05 4 .06 4 .06 3 0 3.1-.01 4.2-.06 1.1-.04 1.7-.5 1.7-2.06V13h-6v1.7h3.4c-.1 1.3-1.1 1.2-3.4 1.2-3.3 0-3.5-.1-5.2-.3v-3.6c0-1.8.3-2.1 2.3-2.3 2.1-.2 3.9-.2 3.9-.2v-1.8s-.2 0-4.1.3c-2.1.2-3.3.7-3.5 2.8-.1 1.1-.1 3.3-.1 3.3s0 2.6.3 3.7c.3 1.1.9 1.6 2.1 1.65 1.1.05 3.1.06 3.1.06Z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function HtmlCssIcon({ className = "size-5" }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M4 3h16l-1.5 16.5L12 21 5.5 19.5 4 3Z" fill="#E44D26" />
      <path d="M12 18.5l5.2-1.4L17.6 7H12v11.5Z" fill="#F16529" />
      <path d="M12 7h5.6l-.5 5.5H12V7Zm0 7h3.1l-.3 2.8L12 17.2V14Z" fill="#EBEBEB" />
      <path d="M6.5 7h5.5v2.8H8.8l-.1 1.4h3.1v2.8H9.5L9.2 16l2.8.8V7H6.5Z" fill="#fff" />
    </svg>
  );
}

const TECH_ICON_MAP: Record<string, ComponentType<TechIconProps>> = {
  PHP: PhpIcon,
  JavaScript: JavaScriptIcon,
  "C++": CppIcon,
  "C#": CSharpIcon,
  Python: PythonIcon,
  "HTML & CSS": HtmlCssIcon,
};

export function TechLanguageIcon({ name }: { name: string }) {
  const Icon = TECH_ICON_MAP[name] ?? CodeFallbackIcon;
  return <Icon className="size-5 shrink-0" />;
}

function CodeFallbackIcon({ className = "size-5" }: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m8 9-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" />
    </svg>
  );
}

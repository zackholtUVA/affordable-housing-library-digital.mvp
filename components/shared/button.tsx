"use client";

import {
  forwardRef,
  type CSSProperties,
  type ButtonHTMLAttributes,
  type PointerEvent,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md";
type ButtonElevation = "3d" | "flat";

type ButtonStyleVars = CSSProperties & {
  "--btn-face"?: string;
  "--btn-edge"?: string;
  "--btn-highlight"?: string;
  "--btn-text"?: string;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  elevation?: ButtonElevation;
  icon?: ReactNode;
};

const flatVariantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-strong)]",
  secondary:
    "bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface-3)]",
  ghost: "text-[var(--text)] hover:bg-[var(--surface-2)]",
  danger:
    "bg-[var(--danger)] text-[var(--danger-foreground)] hover:brightness-105",
};

const depthVariantStyles: Record<ButtonVariant, ButtonStyleVars> = {
  primary: {
    "--btn-face": "var(--accent)",
    "--btn-edge": "color-mix(in oklab, var(--accent) 58%, black)",
    "--btn-highlight": "color-mix(in oklab, var(--accent) 34%, white)",
    "--btn-text": "var(--accent-foreground)",
  },
  secondary: {
    "--btn-face": "color-mix(in oklab, var(--surface-2) 88%, white)",
    "--btn-edge": "color-mix(in oklab, var(--surface-3) 72%, black)",
    "--btn-highlight": "color-mix(in oklab, var(--surface-3) 22%, white)",
    "--btn-text": "var(--text)",
  },
  ghost: {
    "--btn-face": "color-mix(in oklab, var(--surface-2) 48%, transparent)",
    "--btn-edge": "color-mix(in oklab, var(--border) 76%, black)",
    "--btn-highlight": "color-mix(in oklab, var(--surface) 24%, white)",
    "--btn-text": "var(--text)",
  },
  danger: {
    "--btn-face": "var(--danger)",
    "--btn-edge": "color-mix(in oklab, var(--danger) 58%, black)",
    "--btn-highlight": "color-mix(in oklab, var(--danger) 30%, white)",
    "--btn-text": "var(--danger-foreground)",
  },
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant = "primary",
    size = "md",
    elevation = "3d",
    icon,
    children,
    style,
    onPointerMove,
    onPointerLeave,
    ...props
  },
  ref,
) {
  const handlePointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    onPointerMove?.(event);
    if (event.pointerType !== "mouse") {
      return;
    }

    const element = event.currentTarget;
    const bounds = element.getBoundingClientRect();
    const offsetX = event.clientX - bounds.left - bounds.width / 2;
    const offsetY = event.clientY - bounds.top - bounds.height / 2;

    element.style.setProperty("--btn-mx", `${offsetX * 0.07}px`);
    element.style.setProperty("--btn-my", `${offsetY * 0.1}px`);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLButtonElement>) => {
    onPointerLeave?.(event);
    event.currentTarget.style.setProperty("--btn-mx", "0px");
    event.currentTarget.style.setProperty("--btn-my", "0px");
  };

  const mergedStyle: CSSProperties =
    elevation === "3d"
      ? { ...depthVariantStyles[variant], ...style }
      : { ...style };

  return (
    <button
      ref={ref}
      className={cn(
        "magnetic-btn inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl font-semibold tracking-[0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:cursor-not-allowed disabled:opacity-50",
        elevation === "3d"
          ? "btn-3d text-[var(--btn-text)]"
          : cn("btn-flat", flatVariantClasses[variant]),
        sizeClasses[size],
        className,
      )}
      style={mergedStyle}
      data-elevation={elevation}
      data-variant={variant}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
});

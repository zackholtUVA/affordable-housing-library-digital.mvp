"use client";

import {
  forwardRef,
  type ButtonHTMLAttributes,
  type PointerEvent,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-strong)]",
  secondary:
    "bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface-3)]",
  ghost: "text-[var(--text)] hover:bg-[var(--surface-2)]",
  danger:
    "bg-[var(--danger)] text-[var(--danger-foreground)] hover:brightness-105",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant = "primary",
    size = "md",
    icon,
    children,
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

  return (
    <button
      ref={ref}
      className={cn(
        "magnetic-btn inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
});


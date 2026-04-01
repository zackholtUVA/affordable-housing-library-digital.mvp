"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";

import { cn } from "@/lib/utils";
import type { HalideHeroContent, HalideHeroLayer } from "@/lib/types";

const defaultLayers: HalideHeroLayer[] = [
  {
    id: "panel-base",
    background:
      "linear-gradient(152deg, color-mix(in oklab, var(--halide-panel-base) 82%, white) 0%, color-mix(in oklab, var(--halide-panel-base) 88%, black) 52%, color-mix(in oklab, var(--halide-panel-base) 94%, black) 100%)",
    depth: 16,
    filter: "saturate(0.72) contrast(1.04)",
    opacity: 0.94,
    blendMode: "normal",
  },
  {
    id: "panel-highlight",
    background:
      "radial-gradient(circle at 20% 22%, color-mix(in oklab, var(--halide-highlight) 68%, transparent) 0%, transparent 48%), linear-gradient(118deg, transparent 0%, color-mix(in oklab, var(--halide-highlight) 26%, transparent) 40%, transparent 78%)",
    depth: 34,
    filter: "saturate(0.92)",
    opacity: 0.72,
    blendMode: "screen",
  },
  {
    id: "panel-texture",
    background:
      "repeating-linear-gradient(100deg, color-mix(in oklab, var(--halide-panel-line) 28%, transparent) 0 1px, transparent 1px 12px), linear-gradient(150deg, color-mix(in oklab, var(--halide-panel-base) 68%, transparent) 0%, color-mix(in oklab, var(--halide-panel-base) 88%, transparent) 100%)",
    depth: 52,
    filter: "saturate(0.78)",
    opacity: 0.52,
    blendMode: "soft-light",
  },
];

type HalideLandingProps = {
  content: HalideHeroContent;
  layers?: HalideHeroLayer[];
  className?: string;
};

const HalideLanding = ({ content, layers = defaultLayers, className }: HalideLandingProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<Array<HTMLDivElement | null>>([]);

  const safeLayers = useMemo(() => (layers.length > 0 ? layers : defaultLayers), [layers]);

  useEffect(() => {
    layersRef.current = layersRef.current.slice(0, safeLayers.length);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const applyLayerTransforms = (x: number, y: number) => {
      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = safeLayers[index]?.depth ?? (index + 1) * 18;
        const moveX = x * (index + 1) * 0.16;
        const moveY = y * (index + 1) * 0.16;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      const x = (window.innerWidth / 2 - event.clientX) / 34;
      const y = (window.innerHeight / 2 - event.clientY) / 34;

      canvas.style.transform = `rotateX(${50 + y / 3}deg) rotateZ(${-18 + x / 3}deg) scale(1)`;
      applyLayerTransforms(x, y);
    };

    canvas.style.opacity = "0";
    canvas.style.transform = "rotateX(88deg) rotateZ(0deg) scale(0.84)";

    const timeout = window.setTimeout(() => {
      canvas.style.transition = "all 2.1s cubic-bezier(0.16, 1, 0.3, 1)";
      canvas.style.opacity = "1";
      canvas.style.transform = "rotateX(50deg) rotateZ(-18deg) scale(1)";
      applyLayerTransforms(0, 0);
    }, 180);

    if (!reducedMotion) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.clearTimeout(timeout);
    };
  }, [safeLayers]);

  return (
    <section
      className={cn(
        "shape-angular-lg surface-3d relative isolate min-w-0 overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]",
        className,
      )}
      aria-label="Launch hero"
    >
      <div className="halide-body">
        <svg aria-hidden="true" style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="halide-grain-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="halide-grain" aria-hidden="true" style={{ filter: "url(#halide-grain-filter)" }} />

        <div className="entry-shell">
          <div className="hero-visual" aria-hidden="true">
            <div className="viewport">
              <div className="canvas-3d" ref={canvasRef}>
                {safeLayers.map((layer, index) => (
                  <div
                    key={layer.id}
                    ref={(el) => {
                      layersRef.current[index] = el;
                    }}
                    className="layer"
                    style={{
                      backgroundImage: layer.background,
                      filter: layer.filter,
                      opacity: layer.opacity,
                      mixBlendMode: layer.blendMode ?? "normal",
                    }}
                  />
                ))}
                <div className="contours" />
              </div>
            </div>
          </div>

          <div className="hero-content">
            {content.kicker ? <p className="hero-kicker">{content.kicker}</p> : null}
            <h1 className="hero-title">{content.title}</h1>
            <p className="hero-subtitle">{content.subtitle}</p>
            <div className="hero-actions">
              <Link href={content.ctaHref} className="hero-primary-cta">
                {content.ctaLabel}
              </Link>
            </div>
            {content.secondaryCtaLabel && content.secondaryCtaHref ? (
              <Link href={content.secondaryCtaHref} className="hero-secondary-link">
                {content.secondaryCtaLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <style>{`
        .halide-body {
          --halide-bg: color-mix(in oklab, var(--surface) 84%, var(--background));
          --halide-silver: color-mix(in oklab, var(--text) 90%, white);
          --halide-title: color-mix(in oklab, var(--text) 95%, #1f2b45);
          --halide-accent: color-mix(in oklab, var(--accent) 78%, #b7dcff);
          --halide-panel-base: color-mix(in oklab, var(--surface-2) 78%, #9fa9bb);
          --halide-panel-line: color-mix(in oklab, var(--text) 12%, transparent);
          --halide-highlight: color-mix(in oklab, var(--accent) 42%, white);
          --halide-grain-opacity: 0.1;
          position: relative;
          background-color: var(--halide-bg);
          color: var(--halide-silver);
          overflow: hidden;
          width: 100%;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .halide-grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 20;
          opacity: var(--halide-grain-opacity);
        }

        .entry-shell {
          width: min(100%, 1100px);
          margin: 0 auto;
          min-height: 80vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1.25rem, 4.8vw, 4.5rem);
        }

        .hero-visual {
          position: absolute;
          inset: clamp(0.5rem, 2vw, 1rem);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.92;
          pointer-events: none;
        }

        .viewport {
          perspective: 2000px;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .canvas-3d {
          position: relative;
          width: min(92vw, 980px);
          aspect-ratio: 8 / 5;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .layer {
          position: absolute;
          inset: 0;
          border: 1px solid color-mix(in oklab, var(--halide-silver) 16%, transparent);
          transition: transform 0.5s ease;
        }

        .contours {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background-image: repeating-radial-gradient(
            circle at 50% 50%,
            transparent 0,
            transparent 40px,
            color-mix(in oklab, var(--halide-silver) 8%, transparent) 41px,
            transparent 42px
          );
          transform: translateZ(120px);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          text-align: center;
          pointer-events: none;
          animation: heroFade 460ms ease-out both;
        }

        .hero-kicker {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 0.76rem;
          color: color-mix(in oklab, var(--halide-silver) 70%, transparent);
        }

        .hero-title {
          margin: 0;
          max-width: 640px;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.024em;
          text-wrap: balance;
          color: var(--halide-title);
          text-shadow: 0 10px 28px color-mix(in oklab, var(--background) 40%, transparent);
        }

        .hero-subtitle {
          margin: 0;
          max-width: 560px;
          opacity: 0.75;
          font-size: 16px;
          line-height: 1.6;
          text-wrap: balance;
          color: var(--halide-silver);
        }

        .hero-actions {
          margin-top: 12px;
          pointer-events: auto;
        }

        .hero-primary-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--halide-accent);
          color: color-mix(in oklab, var(--halide-bg) 92%, black);
          text-decoration: none;
          padding: 12px 20px;
          font-size: 15px;
          font-weight: 500;
          border-radius: 8px;
          border: 1px solid color-mix(in oklab, var(--halide-accent) 72%, white);
          box-shadow: 0 12px 28px -16px color-mix(in oklab, var(--halide-bg) 72%, black);
          transition: transform 180ms ease, filter 180ms ease;
        }

        .hero-primary-cta:hover {
          transform: translateY(-2px);
          filter: brightness(1.03);
        }

        .hero-secondary-link {
          pointer-events: auto;
          font-size: 14px;
          color: color-mix(in oklab, var(--halide-silver) 84%, transparent);
          text-decoration: none;
          border-bottom: 1px solid color-mix(in oklab, var(--halide-silver) 52%, transparent);
        }

        .hero-secondary-link:hover {
          color: var(--halide-silver);
          border-bottom-color: color-mix(in oklab, var(--halide-silver) 80%, transparent);
        }

        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 960px) {
          .entry-shell {
            padding: clamp(1rem, 6vw, 2.5rem);
          }

          .canvas-3d {
            width: min(96vw, 640px);
          }

          .hero-content {
            gap: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .canvas-3d,
          .layer,
          .hero-content,
          .hero-primary-cta {
            transition: none !important;
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HalideLanding;

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
        const moveX = x * (index + 1) * 0.2;
        const moveY = y * (index + 1) * 0.2;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      const x = (window.innerWidth / 2 - event.clientX) / 25;
      const y = (window.innerHeight / 2 - event.clientY) / 25;

      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg) scale(1)`;
      applyLayerTransforms(x, y);
    };

    canvas.style.opacity = "0";
    canvas.style.transform = "rotateX(90deg) rotateZ(0deg) scale(0.82)";

    const timeout = window.setTimeout(() => {
      canvas.style.transition = "all 2.4s cubic-bezier(0.16, 1, 0.3, 1)";
      canvas.style.opacity = "1";
      canvas.style.transform = "rotateX(55deg) rotateZ(-25deg) scale(1)";
      applyLayerTransforms(0, 0);
    }, 220);

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
        "relative isolate overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]",
        className,
      )}
      aria-label="Launch hero"
    >
      <div className="halide-body min-h-[min(86vh,980px)]">
        <svg aria-hidden="true" style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="halide-grain-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div
          className="halide-grain"
          aria-hidden="true"
          style={{ filter: "url(#halide-grain-filter)" }}
        />

        <div className="interface-grid">
          <div style={{ fontWeight: 700 }}>
            <div>{content.kicker}</div>
            <div className="archive-label">{content.archiveLabel}</div>
          </div>
          <div
            style={{
              textAlign: "right",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              color: "var(--halide-accent)",
              fontSize: "0.7rem",
            }}
          >
            {content.telemetryLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>

          <h1 className="hero-title">{content.title}</h1>
          <p className="hero-subtitle">{content.subtitle}</p>

          <div
            style={{
              gridColumn: "1 / -1",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "1rem",
            }}
          >
            <div
              style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: "0.75rem",
              }}
            >
              {content.bottomLeftLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <Link href={content.ctaHref} className="cta-button">
              {content.ctaLabel}
            </Link>
          </div>
        </div>

        <div className="viewport" aria-hidden="true">
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

        <div className="scroll-hint" aria-hidden="true" />
      </div>

      <style jsx>{`
        .halide-body {
          --halide-bg: color-mix(in oklab, var(--surface) 84%, var(--background));
          --halide-silver: color-mix(in oklab, var(--text) 90%, white);
          --halide-title: color-mix(in oklab, var(--text) 94%, #1f2b45);
          --halide-accent: color-mix(in oklab, var(--accent) 76%, #b7dcff);
          --halide-panel-base: color-mix(in oklab, var(--surface-2) 78%, #9fa9bb);
          --halide-panel-line: color-mix(in oklab, var(--text) 12%, transparent);
          --halide-highlight: color-mix(in oklab, var(--accent) 42%, white);
          --halide-grain-opacity: 0.1;
          position: relative;
          background-color: var(--halide-bg);
          color: var(--halide-silver);
          overflow: hidden;
          width: 100%;
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
          width: min(94vw, 920px);
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

        .interface-grid {
          position: absolute;
          inset: 0;
          padding: clamp(1rem, 4vw, 4rem);
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
        }

        .hero-title {
          grid-column: 1 / -1;
          align-self: end;
          max-width: min(14ch, 92%);
          font-size: clamp(2.1rem, 8.5vw, 6.2rem);
          line-height: 0.92;
          letter-spacing: -0.038em;
          text-wrap: balance;
          text-transform: uppercase;
          color: var(--halide-title);
          text-shadow: 0 8px 28px color-mix(in oklab, var(--background) 38%, transparent);
        }

        .hero-subtitle {
          grid-column: 1 / -1;
          max-width: 62ch;
          margin-top: 0.6rem;
          text-wrap: balance;
          font-size: clamp(0.85rem, 1.8vw, 1.05rem);
          color: color-mix(in oklab, var(--halide-silver) 70%, transparent);
        }

        .archive-label {
          margin-top: 0.3rem;
          font-size: 0.68rem;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: color-mix(in oklab, var(--halide-silver) 70%, transparent);
        }

        .cta-button {
          pointer-events: auto;
          background: var(--halide-silver);
          color: var(--halide-bg);
          padding: 1rem 2rem;
          text-decoration: none;
          font-weight: 700;
          clip-path: polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%);
          transition: 0.3s;
        }

        .cta-button:hover {
          background: var(--halide-accent);
          transform: translateY(-4px);
        }

        .scroll-hint {
          position: absolute;
          bottom: 1.6rem;
          left: 50%;
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--halide-silver), transparent);
          animation: flow 2s infinite ease-in-out;
        }

        @keyframes flow {
          0%,
          100% {
            transform: scaleY(0);
            transform-origin: top;
          }
          50% {
            transform: scaleY(1);
            transform-origin: top;
          }
          51% {
            transform: scaleY(1);
            transform-origin: bottom;
          }
        }

        @media (max-width: 960px) {
          .hero-title {
            max-width: 100%;
            font-size: clamp(2rem, 12vw, 4.2rem);
          }

          .canvas-3d {
            width: min(94vw, 640px);
          }

          .interface-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 1fr auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .canvas-3d,
          .layer,
          .cta-button,
          .scroll-hint {
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

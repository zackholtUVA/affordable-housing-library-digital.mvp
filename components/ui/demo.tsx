"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";

import { cn } from "@/lib/utils";
import type { HalideHeroContent, HalideHeroLayer } from "@/lib/types";

const defaultLayers: HalideHeroLayer[] = [
  {
    id: "layer-1",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
    depth: 16,
    filter: "grayscale(1) contrast(1.22) brightness(0.52)",
    opacity: 1,
    blendMode: "normal",
  },
  {
    id: "layer-2",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200",
    depth: 32,
    filter: "grayscale(1) contrast(1.1) brightness(0.74)",
    opacity: 0.62,
    blendMode: "screen",
  },
  {
    id: "layer-3",
    imageUrl:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200",
    depth: 48,
    filter: "grayscale(1) contrast(1.28) brightness(0.86)",
    opacity: 0.44,
    blendMode: "overlay",
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

  const safeLayers = useMemo(
    () => (layers.length > 0 ? layers : defaultLayers),
    [layers],
  );

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
        <svg
          aria-hidden="true"
          style={{ position: "absolute", width: 0, height: 0 }}
        >
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

          <h1 className="hero-title">
            {content.title}
          </h1>
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
                  backgroundImage: `url(${layer.imageUrl})`,
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
          --halide-bg: color-mix(in oklab, var(--background) 94%, black);
          --halide-silver: color-mix(in oklab, var(--text) 92%, white);
          --halide-accent: color-mix(in oklab, var(--accent) 72%, #ff3c00);
          --halide-grain-opacity: 0.14;
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
          background-size: cover;
          background-position: center;
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
          max-width: min(11ch, 86%);
          font-size: clamp(2.4rem, 10vw, 9rem);
          line-height: 0.85;
          letter-spacing: -0.04em;
          text-wrap: balance;
          mix-blend-mode: difference;
          text-transform: uppercase;
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
            font-size: clamp(2rem, 12vw, 5.4rem);
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

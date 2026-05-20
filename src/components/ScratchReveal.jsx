import { useRef, useEffect, useState, useCallback } from "react";

const REVEAL_THRESHOLD = 0.45;
const CHECK_EVERY = 8;

function brushRadius() {
  return Math.max(50, Math.min(window.innerWidth * 0.055, 90));
}

export default function ScratchReveal({ onReveal }) {
  const canvasRef = useRef(null);
  const lastPos = useRef(null);
  const scratchCount = useRef(0);
  const revealedRef = useRef(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [removed, setRemoved] = useState(false);

  // Lock scroll while overlay is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#07080A";
    ctx.fillRect(0, 0, w, h);

    ctx.globalAlpha = 1;
    ctx.fillStyle = "rgba(174,186,201,0.7)";
    ctx.font = "13px Inter, ui-sans-serif, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("scratch to reveal", w / 2, h / 2);
  }, []);

  useEffect(() => {
    drawCanvas();
    const onResize = () => { if (!revealedRef.current) drawCanvas(); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [drawCanvas]);

  const getPos = (e) => {
    const src = e.touches ? e.touches[0] : e;
    return { x: src.clientX, y: src.clientY };
  };

  const checkReveal = useCallback(() => {
    if (revealedRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;
    const pixels = ctx.getImageData(0, 0, width, height).data;
    let transparent = 0;
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] < 128) transparent++;
    }
    if (transparent / (width * height) >= REVEAL_THRESHOLD) {
      revealedRef.current = true;
      document.body.style.overflow = "";
      setFadeOut(true);
      setTimeout(() => {
        setRemoved(true);
        onReveal?.();
      }, 1650);
    }
  }, [onReveal]);

  // Draw a single brush stamp at (x, y)
  const stamp = (ctx, x, y) => {
    const r = brushRadius();
    ctx.globalCompositeOperation = "destination-out";
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "rgba(0,0,0,1)");
    g.addColorStop(0.6, "rgba(0,0,0,0.9)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
  };

  const scratch = useCallback(
    (x, y) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const prev = lastPos.current;

      if (prev) {
        // Interpolate stamps along the path so fast moves leave no gaps
        const r = brushRadius();
        const dx = x - prev.x;
        const dy = y - prev.y;
        const dist = Math.hypot(dx, dy);
        const steps = Math.max(1, Math.ceil(dist / (r * 0.4)));
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          stamp(ctx, prev.x + dx * t, prev.y + dy * t);
        }
      } else {
        stamp(ctx, x, y);
      }

      lastPos.current = { x, y };
      scratchCount.current++;
      if (scratchCount.current % CHECK_EVERY === 0) checkReveal();
    },
    [checkReveal]
  );

  const handleMove = useCallback(
    (e) => {
      const { x, y } = getPos(e);
      scratch(x, y);
    },
    [scratch]
  );

  const handleLeave = useCallback(() => {
    lastPos.current = null;
  }, []);

  const handleTouchStart = useCallback(
    (e) => {
      e.preventDefault();
      lastPos.current = null;
      const { x, y } = getPos(e);
      scratch(x, y);
    },
    [scratch]
  );

  const handleTouchMove = useCallback(
    (e) => {
      e.preventDefault();
      const { x, y } = getPos(e);
      scratch(x, y);
    },
    [scratch]
  );

  const handleTouchEnd = useCallback(() => {
    lastPos.current = null;
  }, []);

  if (removed) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] touch-none"
      style={{
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? "scale(1.04)" : "scale(1)",
        transition: "opacity 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        pointerEvents: fadeOut ? "none" : "auto",
        cursor:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Ccircle cx='18' cy='18' r='14' fill='none' stroke='%23AEBAC9' stroke-width='1.5'/%3E%3Ccircle cx='18' cy='18' r='3' fill='%23AEBAC9'/%3E%3C/svg%3E\") 18 18, crosshair",
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    />
  );
}

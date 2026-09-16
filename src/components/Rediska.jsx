import { useEffect, useRef } from "react";

export default function Rediska() {
  const containerRef = useRef(null);
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const img = new Image();
    img.src = "/images/redis-sprite.webp";
    img.onload = () => {
      isLoadedRef.current = true;
      imgRef.current = img;
      handleResize();
      drawFrame(0);
    };

    let width = 0;
    let height = 0;
    const totalFrames = 100;
    const frameW = 360;
    const frameH = 346;

    const handleResize = () => {
      if (!wrap || !canvas) return;
      const rect = wrap.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawFrame = (frameIndex) => {
      if (!isLoadedRef.current || !imgRef.current || !ctx || width === 0) return;
      const f = ((frameIndex % totalFrames) + totalFrames) % totalFrames;
      const col = f % 10;
      const row = Math.floor(f / 10);
      const sx = col * frameW;
      const sy = row * frameH;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(imgRef.current, sx, sy, frameW, frameH, 0, 0, width, height);
    };

    let rafId;
    const updateMotion = () => {
      if (isLoadedRef.current && imgRef.current) {
        const scrollY = window.scrollY || window.pageYOffset || 0;
        const currentFrame = Math.floor(scrollY / 18) % totalFrames;
        drawFrame(currentFrame);

        // Redis Agency Lissajous floating path
        const vw = window.innerWidth || 1200;
        const s = 0.3 * vw;
        const a = scrollY / 9000;
        const x = s * Math.sin(2 * a * Math.PI);
        const y = (s / 3.5) * Math.sin(2 * a * Math.PI) * Math.cos(2 * a * Math.PI);
        const r = -12 + 25 * Math.sin(2 * a * Math.PI);

        if (wrap) {
          wrap.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        if (canvas) {
          canvas.style.transform = `rotate(${r}deg)`;
        }
      }
      rafId = requestAnimationFrame(updateMotion);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    rafId = requestAnimationFrame(updateMotion);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-rediska="container"
      className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center overflow-hidden select-none"
      style={{ height: "100%", minHeight: "100vh" }}
    >
      <div
        ref={wrapRef}
        data-rediska="rotate"
        className="relative will-change-transform"
        style={{
          width: "clamp(180px, 24vw, 320px)",
          aspectRatio: "360 / 346",
        }}
      >
        <canvas
          ref={canvasRef}
          data-rediska="sprite"
          className="w-full h-full will-change-transform object-contain"
        />
      </div>
    </div>
  );
}

export function calculateSmoothedVelocity(deltaY, scale, dt) {
  const effScale = Math.max(0.65, scale);
  const rawV = (deltaY / effScale) / dt;
  return Math.max(-1500, Math.min(1500, rawV));
}

export function computeCloudDrift(t, sx, px, ax) {
  return Math.sin(t * sx + px) * ax + Math.sin(t * sx * 0.45 + px * 1.5) * (ax * 0.25);
}

// Effect: Atmospheric sine wave multi-layer cloud drift physics

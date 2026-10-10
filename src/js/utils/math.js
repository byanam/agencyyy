export function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export const TWO_PI = Math.PI * 2;
export const HALF_PI = Math.PI * 0.5;

// Utility: High performance interpolation and clamping helpers

export function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

export function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

export function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

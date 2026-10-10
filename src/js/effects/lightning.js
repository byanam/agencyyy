export function calculateThunderFlash(progress) {
  if (progress < 0.08) return progress / 0.08 * 0.95;
  if (progress < 0.16) return 0.95 - (progress - 0.08) / 0.08 * 0.75;
  if (progress < 0.24) return 0.2 + (progress - 0.16) / 0.08 * 0.65;
  if (progress < 0.42) return 0.85 - (progress - 0.24) / 0.18 * 0.85;
  return 0;
}

// Effect: Procedural lightning discharge and thunder audio synchronizer

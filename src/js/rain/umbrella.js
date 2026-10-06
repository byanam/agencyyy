export function isPointInsideUmbrella(px, py, umbrellaRect) {
  const cx = umbrellaRect.x + umbrellaRect.w * 0.5;
  const cy = umbrellaRect.y + umbrellaRect.h * 0.45;
  const rx = umbrellaRect.w * 0.48;
  const ry = umbrellaRect.h * 0.38;
  const dx = (px - cx) / rx;
  const dy = (py - cy) / ry;
  return (dx * dx + dy * dy) <= 1.0;
}

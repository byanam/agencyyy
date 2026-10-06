export function findClosestSectionY(scrollY, targetIdx, stageHeight, scale) {
  const SEC = [0, 1631, 3250];
  const p = Math.floor(stageHeight * scale);
  const off = SEC[targetIdx] * scale;
  const candidates = [off, p + off, 2 * p + off];
  
  let targetY = candidates[1];
  let minDiff = Infinity;
  for (const c of candidates) {
    const diff = Math.abs(c - scrollY);
    if (diff < minDiff) {
      minDiff = diff;
      targetY = c;
    }
  }
  return targetY;
}

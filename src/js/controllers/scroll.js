export function checkInfiniteScrollWrap(scrollY, p) {
  if (scrollY >= 2 * p) {
    return { shouldWrap: true, newY: scrollY - p };
  } else if (scrollY < 0.5 * p) {
    return { shouldWrap: true, newY: scrollY + p };
  }
  return { shouldWrap: false, newY: scrollY };
}

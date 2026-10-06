# Bidirectional Infinite Loop Mechanics

## Stage Copy Layout
- **Copy 0**: `translateY(0)` — Acts as the upward loop buffer.
- **Copy 1**: `translateY(p)` — Primary interaction stage starting at Hero.
- **Copy 2**: `translateY(2p)` — Downward loop buffer.

## Hysteresis Formulation
```
p = Math.floor(H * s);
if (scrollY >= 2 * p) {
  window.scrollTo(0, scrollY - p);
} else if (scrollY < 0.5 * p) {
  window.scrollTo(0, scrollY + p);
}
```
This guarantees an invariant gap of `0.5 * p` (~2,600px), eliminating boundary oscillation.

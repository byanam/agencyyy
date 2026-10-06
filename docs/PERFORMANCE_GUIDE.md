# Performance Guide & Web Vitals Optimization

## Core Web Vitals Target Scores
- **LCP (Largest Contentful Paint)**: < 1.2s (Achieved with native `<link rel="preload">`, `fetchpriority="high"`, and eager decoding)
- **FID / INP (Interaction to Next Paint)**: < 50ms (Passive touch event listeners, requestAnimationFrame throttled loops)
- **CLS (Cumulative Layout Shift)**: 0.00 (Fixed dimensional bounding boxes, pre-allocated layout scales)

## Optimization Highlights
1. **Asset Compression**: WebP assets re-encoded using high-efficiency entropy coding with lossless alpha preservation.
2. **GPU Promotion**: Transform-based rendering with `will-change: transform` and hardware accelerated composite layers.
3. **Bidirectional Infinite Loop**: Three continuous copies with mathematical hysteresis eliminate memory leaks and layout reflows.

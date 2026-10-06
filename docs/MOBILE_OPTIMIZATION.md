# Mobile Optimization Strategy

1. **Toolbar Collapse Stability**: Gated resize listener on `document.documentElement.clientWidth` prevents address bar collapse from triggering scroll jumps.
2. **Dynamic Viewport Fit**: `viewport-fit=cover` handles iOS safe areas and notches seamlessly.
3. **Receipt Modal Centering**: Scaled dynamically (`scale(min(0.85, ...))`) with fixed backdrop dimming and dedicated close button.
4. **SVG Filter Bypass on Mobile**: Heavy turbulence filters disabled on viewports <= 768px to protect WebKit mobile GPU memory.

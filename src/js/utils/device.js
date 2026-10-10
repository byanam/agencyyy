export const isTouch = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
export const isMobile = () => window.innerWidth <= 768;
export const getDpr = () => window.devicePixelRatio || 1;

// Utility: Hardware capabilities and responsive breakpoint detection

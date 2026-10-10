export class PerformanceMonitor {
  static measure(label, fn) {
    const t0 = performance.now();
    const result = fn();
    const t1 = performance.now();
    console.debug(`[Perf] ${label}: ${(t1 - t0).toFixed(2)}ms`);
    return result;
  }
}

// Monitor: Frame rate, calculation budget, and layout shift tracking

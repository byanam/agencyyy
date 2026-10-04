const iterations = 100000;
const t0 = performance.now();
for (let i = 0; i < iterations; i++) {
  Math.sin(i);
}
const t1 = performance.now();
console.log(`✓ Benchmark: ${iterations} trig operations in ${(t1 - t0).toFixed(2)}ms`);

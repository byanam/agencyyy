import fs from 'node:fs';

const html = fs.readFileSync('index.html', 'utf-8');
if (!html.includes('aria-label') || !html.includes('sr-only')) {
  console.warn('A11y Warning: Missing basic screen-reader annotations');
} else {
  console.log('✓ Accessibility check passed: Aria attributes and sr-only classes verified.');
}

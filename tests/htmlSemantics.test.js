import fs from 'node:fs';
import assert from 'node:assert';

const html = fs.readFileSync('index.html', 'utf8');
assert(html.includes('role="main"'), 'HTML must declare role="main"');
assert(html.includes('role="navigation"'), 'HTML must declare role="navigation"');
assert(html.includes('role="dialog"'), 'HTML must declare role="dialog"');
console.log('[PASS] HTML semantics and accessibility landmarks passed');

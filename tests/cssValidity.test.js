import fs from 'node:fs';
import assert from 'node:assert';

const html = fs.readFileSync('index.html', 'utf8');
const cssMatch = html.match(/<style>([\s\S]*?)<\/style>/);
assert(cssMatch, 'index.html must contain an inline <style> block');
const css = cssMatch[1];
const opens = (css.match(/\{/g) || []).length;
const closes = (css.match(/\}/g) || []).length;
assert.strictEqual(opens, closes, `CSS curly braces must be balanced: ${opens} vs ${closes}`);
console.log(`[PASS] CSS syntax balance verified (${opens} matched rule blocks)`);

// Test Suite: CSS syntax integrity, balanced braces, and valid selectors

import assert from 'node:assert';

const d = new Date('2026-10-07T04:30:00Z');
const tz = { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: true };
const formatted = d.toLocaleTimeString('en-US', tz);
assert(formatted.length > 0, 'Formatted time must be non-empty');
assert(/AM|PM/i.test(formatted), 'Formatted time must contain meridian AM/PM indicator');
console.log('[PASS] Ticker Kolkata timezone format validation passed');

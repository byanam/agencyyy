const fs = require('fs');
const assert = require('assert');

const dir = 'public/assets';
const files = fs.readdirSync(dir);
assert(files.length > 5, 'public/assets directory must contain files');
files.forEach(f => {
  const stat = fs.statSync(`${dir}/${f}`);
  assert(stat.size > 0, `File ${f} must have non-zero size`);
});
console.log(`[PASS] All ${files.length} production assets have non-zero size`);

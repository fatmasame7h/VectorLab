// Copies the built site (dist/) one level up, i.e. to the repository root,
// so GitHub Pages ("Deploy from a branch" / root) serves the finished site.
import { cpSync, rmSync, existsSync, writeFileSync } from 'node:fs';
if (!existsSync('dist/index.html')) { console.error('Run "npm run build" first.'); process.exit(1); }
rmSync('../assets', { recursive: true, force: true });
cpSync('dist/index.html', '../index.html');
cpSync('dist/assets', '../assets', { recursive: true });
writeFileSync('../.nojekyll', '');
console.log('Site copied to the repository root.');

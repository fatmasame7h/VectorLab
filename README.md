# VectorLab

The finished website is in this folder (`index.html` + `assets/`), so GitHub Pages
(Settings → Pages → Deploy from a branch → `main` / `(root)`) serves it directly.

The full source code is in `source/`:
```bash
cd source
npm install
npm run dev            # develop
npm test               # math tests
npm run build && npm run publish-site   # rebuild the site into the repository root
```

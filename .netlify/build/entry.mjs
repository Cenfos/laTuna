import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Dp4kfwpy.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/category/_category_.astro.mjs');
const _page2 = () => import('./pages/contacto.astro.mjs');
const _page3 = () => import('./pages/galeria.astro.mjs');
const _page4 = () => import('./pages/permacultura.astro.mjs');
const _page5 = () => import('./pages/posts/_slug_.astro.mjs');
const _page6 = () => import('./pages/posts.astro.mjs');
const _page7 = () => import('./pages/posts.astro2.mjs');
const _page8 = () => import('./pages/talleres.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/category/[category].astro", _page1],
    ["src/pages/contacto.astro", _page2],
    ["src/pages/galeria.astro", _page3],
    ["src/pages/permacultura.astro", _page4],
    ["src/pages/posts/[slug].astro", _page5],
    ["src/pages/posts/index.astro", _page6],
    ["src/pages/posts.astro", _page7],
    ["src/pages/talleres.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "37e97e7d-06ae-4fe5-a39c-3448f11a06df"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

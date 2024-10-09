import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BCoJEila.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Galeria = createComponent(($$result, $$props, $$slots) => {
  const images = [
    { src: "/assets/images/Permacultura1.jpg", alt: "Huerto permacultural" },
    { src: "/assets/images/Permacultura2.jpg", alt: "Dise\xF1o de jard\xEDn comestible" },
    { src: "/assets/images/Permacultura3.jpg", alt: "Sistema de captaci\xF3n de agua" },
    { src: "/assets/images/Permacultura4.jpg", alt: "Tomates" },
    { src: "/assets/images/RioVerdugo.jpg", alt: "Rio Verdugo" },
    { src: "/assets/images/RioVerdugo2.jpg", alt: "Sendero por el rio" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galer\xEDa de Permacultura", "data-astro-cid-tvv6smhg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-tvv6smhg>Galería de Permacultura</h1> <p data-astro-cid-tvv6smhg>Explora imágenes inspiradoras de proyectos y prácticas de permacultura.</p> <div class="gallery" data-astro-cid-tvv6smhg> ${images.map((image) => renderTemplate`<div class="gallery-item" data-astro-cid-tvv6smhg> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} loading="lazy" data-astro-cid-tvv6smhg> <p data-astro-cid-tvv6smhg>${image.alt}</p> </div>`)} </div> ` })} `;
}, "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/galeria.astro", void 0);

const $$file = "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/galeria.astro";
const $$url = "/galeria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Galeria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

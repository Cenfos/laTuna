import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BCoJEila.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto", "data-astro-cid-2mxdoeuz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-2mxdoeuz>Contacto</h1> <p data-astro-cid-2mxdoeuz>¿Tienes preguntas sobre permacultura o nuestros talleres? ¡Contáctanos!</p> <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true" data-astro-cid-2mxdoeuz> <p data-astro-cid-2mxdoeuz> <label data-astro-cid-2mxdoeuz>
Email: <input type="text" name="name" data-astro-cid-2mxdoeuz> </label> </p> <p data-astro-cid-2mxdoeuz> <label data-astro-cid-2mxdoeuz>
Message: <textarea name="message" data-astro-cid-2mxdoeuz></textarea> </label> </p> <div data-netlify-recaptcha="true" data-astro-cid-2mxdoeuz></div> <p data-astro-cid-2mxdoeuz> <button type="submit" data-astro-cid-2mxdoeuz>Send</button> </p> </form> ` })} `;
}, "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

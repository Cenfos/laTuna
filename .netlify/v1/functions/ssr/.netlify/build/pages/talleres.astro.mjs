import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BCoJEila.mjs';
export { renderers } from '../renderers.mjs';

const $$Talleres = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Talleres de Permacultura" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Talleres de Permacultura</h1> <p>Descubre nuestros próximos talleres y eventos relacionados con la permacultura.</p> <section> <h2>Próximos Talleres</h2> <ul> <li> <h3>Introducción a la Permacultura</h3> <p>Fecha: 15 de julio, 2023</p> <p>Duración: 1 día</p> <p>Aprende los fundamentos de la permacultura y cómo aplicarlos en tu vida diaria.</p> </li> <li> <h3>Diseño de Sistemas de Agua</h3> <p>Fecha: 5-6 de agosto, 2023</p> <p>Duración: 2 días</p> <p>Aprende a diseñar sistemas de captación y uso eficiente del agua en tu hogar o huerto.</p> </li> </ul> </section> ` })}`;
}, "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/talleres.astro", void 0);

const $$file = "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/talleres.astro";
const $$url = "/talleres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Talleres,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

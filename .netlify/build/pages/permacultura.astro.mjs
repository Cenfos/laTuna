import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BCoJEila.mjs';
export { renderers } from '../renderers.mjs';

const $$Permacultura = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Permacultura" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Permacultura</h1> <p>La permacultura es un sistema de diseño para la creación de medioambientes humanos sostenibles. En esta página, aprenderás sobre los principios y prácticas de la permacultura.</p> <h2>Principios de la Permacultura</h2> <ul> <li>Observa e interactúa</li> <li>Captura y almacena energía</li> <li>Obtén un rendimiento</li> <li>Aplica la autorregulación y acepta la retroalimentación</li> <li>Usa y valora los recursos y servicios renovables</li> <li>Deja de producir residuos</li> <li>Diseña de los patrones a los detalles</li> <li>Integrar más que segregar</li> <li>Usa soluciones lentas y pequeñas</li> <li>Usa y valora la diversidad</li> <li>Usa los bordes y valora lo marginal</li> <li>Usa y responde creativamente al cambio</li> </ul> ` })}`;
}, "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/permacultura.astro", void 0);

const $$file = "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/permacultura.astro";
const $$url = "/permacultura";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Permacultura,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

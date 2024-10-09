import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BCoJEila.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_CRauBqj2.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({}), () => "../content/posts/*.md");
  posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Todos los Posts - Blog de Permacultura", "data-astro-cid-fjqfnjxi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-fjqfnjxi>Todos los Posts</h1> <section class="posts-grid" data-astro-cid-fjqfnjxi> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "title": post.frontmatter.title, "date": post.frontmatter.date, "slug": post.url ?? "", "excerpt": post.frontmatter.excerpt, "image": post.frontmatter.image, "category": post.frontmatter.category, "data-astro-cid-fjqfnjxi": true })}`)} </section> ` })} `;
}, "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/posts/index.astro", void 0);

const $$file = "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

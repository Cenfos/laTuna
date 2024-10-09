import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BCoJEila.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_CRauBqj2.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../content/posts/nuevo-post-18-00.md": () => import('../chunks/nuevo-post-18-00_CBGioAzo.mjs'),"../content/posts/nuevo-post-de-octubre.md": () => import('../chunks/nuevo-post-de-octubre_BUNBJbVA.mjs'),"../content/posts/talando-árboles.md": () => import('../chunks/talando-árboles_B47m2Xax.mjs'),"../content/posts/tomates-de-la-huerta.md": () => import('../chunks/tomates-de-la-huerta_CG7xR6R2.mjs')}), () => "../content/posts/*.md");
  posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
  const recentPosts = posts.slice(0, 5);
  const categories = [...new Set(posts.map((post) => post.frontmatter.category))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog de Permacultura", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-j7pv25f6>Bienvenido al Blog de Permacultura</h1> <p class="intro" data-astro-cid-j7pv25f6>Explora nuestros artículos sobre permacultura, sostenibilidad y vida en armonía con la naturaleza.</p> <nav class="categories" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Categorías:</h2> <ul data-astro-cid-j7pv25f6> ${categories.map((category) => renderTemplate`<li data-astro-cid-j7pv25f6><a${addAttribute(`/category/${category.toLowerCase()}`, "href")} data-astro-cid-j7pv25f6>${category}</a></li>`)} </ul> </nav> <section class="recent-posts" data-astro-cid-j7pv25f6> ${recentPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "title": post.frontmatter.title, "date": post.frontmatter.date, "slug": post.url, "excerpt": post.frontmatter.excerpt, "image": post.frontmatter.image, "category": post.frontmatter.category, "data-astro-cid-j7pv25f6": true })}`)} </section> <div class="view-all-container" data-astro-cid-j7pv25f6> <a href="/posts" class="view-all-button" data-astro-cid-j7pv25f6>Ver todos los posts</a> </div> ` })} `;
}, "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/index.astro", void 0);

const $$file = "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

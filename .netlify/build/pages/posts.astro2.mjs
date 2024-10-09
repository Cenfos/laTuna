import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BCoJEila.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_CRauBqj2.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../content/posts/nuevo-post-18-00.md": () => import('../chunks/nuevo-post-18-00_CBGioAzo.mjs'),"../content/posts/nuevo-post-de-octubre.md": () => import('../chunks/nuevo-post-de-octubre_BUNBJbVA.mjs'),"../content/posts/talando-árboles.md": () => import('../chunks/talando-árboles_B47m2Xax.mjs'),"../content/posts/tomates-de-la-huerta.md": () => import('../chunks/tomates-de-la-huerta_CG7xR6R2.mjs')}), () => "../content/posts/*.md");
  posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Posts" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Aquí se muestran todos los posts</h1>  ${posts.length === 0 ? renderTemplate`<p>No hay posts disponibles</p>` : renderTemplate`<section class="posts-grid"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "title": post.frontmatter.title, "date": post.frontmatter.date, "slug": post.url, "excerpt": post.frontmatter.excerpt, "image": post.frontmatter.image, "category": post.frontmatter.category })}`)} </section>`}` })}`;
}, "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/posts.astro", void 0);

const $$file = "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/posts.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Posts,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

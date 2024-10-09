import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BCoJEila.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../content/posts/nuevo-post-18-00.md": () => import('../../chunks/nuevo-post-18-00_CBGioAzo.mjs'),"../../content/posts/nuevo-post-2-probando-slug.md": () => import('../../chunks/nuevo-post-2-probando-slug_BFQAG_IW.mjs'),"../../content/posts/nuevo-post-de-octubre.md": () => import('../../chunks/nuevo-post-de-octubre_BUNBJbVA.mjs'),"../../content/posts/nuevo-post-número-1.md": () => import('../../chunks/nuevo-post-número-1_adTL99NU.mjs')}), () => "../../content/posts/*.md").then(
    (posts) => posts.find((p) => p.frontmatter.slug === slug)
  );
  if (!post) {
    throw new Error("Post no encontrado");
  }
  const { title, date, content, image, category } = post.frontmatter;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <header> <h1>${title}</h1> <p>${date}</p> <img${addAttribute(image, "src")}${addAttribute(title, "alt")}> </header> <section> <p>${content}</p> </section> </article> ` })}`;
}, "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/posts/[slug].astro", void 0);

const $$file = "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

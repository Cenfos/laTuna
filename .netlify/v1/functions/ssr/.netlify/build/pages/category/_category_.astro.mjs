import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BCoJEila.mjs';
import { $ as $$PostCard } from '../../chunks/PostCard_CRauBqj2.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const allPosts = [
    {
      title: "Introducci\xF3n a la Permacultura",
      date: "2023-06-01",
      slug: "introduccion-permacultura",
      excerpt: "Descubre los principios b\xE1sicos de la permacultura y c\xF3mo aplicarlos en tu vida diaria.",
      image: "/assets/images/Permacultura1.jpg",
      category: "Permacultura"
    },
    {
      title: "Dise\xF1o de Huertos Urbanos",
      date: "2023-06-15",
      slug: "diseno-huertos-urbanos",
      excerpt: "Aprende a dise\xF1ar y mantener un huerto urbano productivo y sostenible.",
      image: "/images/huerto-urbano.jpg",
      category: "Huertos"
    },
    {
      title: "Sistemas de Captaci\xF3n de Agua",
      date: "2023-07-01",
      slug: "sistemas-captacion-agua",
      excerpt: "Explora diferentes m\xE9todos para captar y aprovechar el agua de lluvia en tu hogar o huerto.",
      image: "/images/captacion-agua.jpg",
      category: "Sostenibilidad"
    },
    {
      title: "Compostaje Dom\xE9stico",
      date: "2023-07-15",
      slug: "compostaje-domestico",
      excerpt: "Descubre c\xF3mo crear tu propio compost y reducir tus residuos org\xE1nicos.",
      image: "/images/compostaje.jpg",
      category: "Sostenibilidad"
    },
    {
      title: "Plantas Compa\xF1eras",
      date: "2023-08-01",
      slug: "plantas-companeras",
      excerpt: "Aprende sobre las asociaciones beneficiosas entre plantas y c\xF3mo aplicarlas en tu huerto.",
      image: "/images/plantas-companeras.jpg",
      category: "Huertos"
    }
  ];
  const uniqueCategories = [...new Set(allPosts.map((post) => post.category))];
  return uniqueCategories.map((category) => {
    const filteredPosts = allPosts.filter((post) => post.category === category);
    return {
      params: { category: category.toLowerCase() },
      props: { category, posts: filteredPosts }
    };
  });
}
const $$category = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category, posts = [] } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Posts de ${category} - Blog de Permacultura`, "data-astro-cid-l6gs42ny": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-l6gs42ny>Posts de ${category}</h1> <section class="category-posts" data-astro-cid-l6gs42ny> ${posts.length > 0 ? posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "title": post.title, "date": post.date, "slug": post.slug, "excerpt": post.excerpt, "image": post.image, "category": post.category, "data-astro-cid-l6gs42ny": true })}`) : renderTemplate`<p data-astro-cid-l6gs42ny>No hay posts disponibles en esta categoría.</p>`} </section> ` })} `;
}, "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/category/[category].astro", void 0);

const $$file = "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/pages/category/[category].astro";
const $$url = "/category/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

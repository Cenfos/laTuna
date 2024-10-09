import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */

const $$Astro = createAstro();
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { title, date, slug, excerpt, image, category } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="post-card" data-astro-cid-iyiqi2so> <div class="post-image" data-astro-cid-iyiqi2so> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} data-astro-cid-iyiqi2so> </div> <div class="post-content" data-astro-cid-iyiqi2so> <h2 data-astro-cid-iyiqi2so> <a${addAttribute(`/posts/${slug}`, "href")} data-astro-cid-iyiqi2so>${title}</a> </h2> <p class="date" data-astro-cid-iyiqi2so>${new Date(date).toLocaleDateString()}</p> <!-- Formateo de fecha --> <p class="category" data-astro-cid-iyiqi2so>${category}</p> <p class="excerpt" data-astro-cid-iyiqi2so>${excerpt}</p> <a${addAttribute(`/posts/${slug}`, "href")} class="read-more" data-astro-cid-iyiqi2so>Ver post</a> </div> </article> `;
}, "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/components/PostCard.astro", void 0);

export { $$PostCard as $ };

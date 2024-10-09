import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A﻿quí un huerto de lo más ecológico :)</p>";

				const frontmatter = {"title":"Nuevo post de Octubre","date":"2024-10-09T12:41:55.110Z","category":"Huertos","image":"/images/permacultura1.jpg","excerpt":"Huerto ecológico!"};
				const file = "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/content/posts/nuevo-post-de-octubre.md";
				const url = undefined;
				function rawContent() {
					return "A﻿quí un huerto de lo más ecológico :)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

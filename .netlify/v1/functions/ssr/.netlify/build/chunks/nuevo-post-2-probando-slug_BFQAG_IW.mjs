import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A﻿qui unos paisanos con el sacho a reventarlo todo .)</p>";

				const frontmatter = {"title":"Nuevo post 2 probando slug","date":"2024-10-09T16:47:34.702Z","category":"Huertos","image":"/images/Permacultura3.jpg","excerpt":"Sachando duramente"};
				const file = "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/content/posts/nuevo-post-2-probando-slug.md";
				const url = undefined;
				function rawContent() {
					return "A﻿qui unos paisanos con el sacho a reventarlo todo .)";
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

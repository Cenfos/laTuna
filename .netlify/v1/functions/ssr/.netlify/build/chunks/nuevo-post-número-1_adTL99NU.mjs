import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>E﻿Ste sera el nuevo logoooo</p>";

				const frontmatter = {"title":"Nuevo post número 1","date":"2024-10-09T16:21:03.150Z","category":"Sintrópica","image":"/images/eiradoLogo.webp","excerpt":"Nuevo logo de la web"};
				const file = "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/content/posts/nuevo-post-número-1.md";
				const url = undefined;
				function rawContent() {
					return "E﻿Ste sera el nuevo logoooo";
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

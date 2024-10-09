import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>S﻿in mas!</p>";

				const frontmatter = {"title":"Nuevo post 18:00","date":"2024-10-09T16:00:07.917Z","category":"Talleres","image":"/images/RioVerdugo.jpg","excerpt":"Orillas del rio Verdugo"};
				const file = "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/content/posts/nuevo-post-18-00.md";
				const url = undefined;
				function rawContent() {
					return "S﻿in mas!";
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

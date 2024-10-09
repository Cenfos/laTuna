import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>M﻿enudo río el Verdugo, como baja!!!</p>";

				const frontmatter = {"title":"Talando árboles","date":"2024-10-09T12:43:29.846Z","category":"Sostenibilidad","image":"/images/rioverdugo4.jpg","excerpt":"Vamos a cortar todo!"};
				const file = "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/content/posts/talando-árboles.md";
				const url = undefined;
				function rawContent() {
					return "M﻿enudo río el Verdugo, como baja!!!";
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

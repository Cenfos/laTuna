import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DpEYlbkM.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>D﻿e la huertaaaa</p>";

				const frontmatter = {"title":"Tomates de la huerta!","date":"2024-10-09T12:44:45.784Z","category":"Huertos","image":"/images/permacultura4.jpg","excerpt":"Se venden tomates!"};
				const file = "C:/Users/cami_/Desktop/ProyectosWeb/eirado/src/content/posts/tomates-de-la-huerta.md";
				const url = undefined;
				function rawContent() {
					return "D﻿e la huertaaaa";
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

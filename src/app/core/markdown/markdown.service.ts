import { Injectable } from "@angular/core";
import * as Marked from 'marked';
import * as hljs from 'highlight.js';


@Injectable()
export class MarkdownService {
  index = {};
    constructor(
    ) {
        Marked.setOptions({
            renderer: this.getRenderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            // langPrefix: 'lang-',
        });
    }

    getRenderer() {
        let renderer = new Marked.Renderer();
        // renderer.heading = (text: string, level: number, raw) => {
        //     let id = `${level}-${this.shareService.uuid(8, 16)}`;
        //     this.index[id] = {active: false, text: text};
        //     return `<h${level} class="${id} heading">${text}</h${level}>`;
        // }
        renderer.code = (code: string, language: string) => {
            // highlight.configure({
            //     classPrefix: language
            // });
            let value = hljs.highlightAuto(code, [language]).value;
            return `<pre><code class="hljs">${value}</code></pre>`;
        }
        return renderer;
    }

    markdown(value: string) {
        return Marked(value);
    }
}
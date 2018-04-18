import { Injectable } from '@angular/core';
import * as Marked from 'marked';
import * as hljs from 'highlight.js';

@Injectable()
export class MarkdownService {
  i = 0;
  headerList = [];
  constructor() {
    Marked.setOptions({
      renderer: this.getRenderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
      // langPrefix: 'lang-',
    });
  }

  getRenderer() {
    const renderer = new Marked.Renderer();
    renderer.heading = (text: string, level: number) => {
      const id = `header-${this.i}`;
      this.headerList.push({ id, active: false, text });
      this.i++;
      return `<h${level} class="heading" id="${id}">${text}</h${level}>`;
    };
    renderer.code = (code: string, language: string) => {
      // highlight.configure({
      //     classPrefix: language
      // });
      const value = hljs.highlightAuto(code, [language]).value;
      return `<pre><code class="hljs">${value}</code></pre>`;
    };
    return renderer;
  }

  markdown(value: string) {
    return Marked(value);
  }
}

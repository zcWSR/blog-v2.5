import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MarkdownService } from './markdown.service';

@Component({
  selector: 'app-markdown',
  template: `<div class="markdown-body" [innerHTML]="innerHTML"></div>`,
  providers: [
    MarkdownService
  ]
})
export class MarkdownComponent implements OnInit {
  _content: string = '';
  innerHTML = this.domSanitizer.bypassSecurityTrustHtml('');
  @Input('content')
  get content() {
      return this._content;
  }
  set content(c: string) {
      this.innerHTML = this.domSanitizer.bypassSecurityTrustHtml(this.mdService.markdown(c || ''));
      this._content = c;
  }

  constructor(
      private mdService: MarkdownService,
      private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() { }

}

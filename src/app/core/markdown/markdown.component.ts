import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';
import { MarkdownService } from './markdown.service';

@Component({
  selector: 'app-markdown',
  template: `<div class="markdown-body" [innerHTML]="innerHTML"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownComponent implements OnInit {
  _content: string = '';
  innerHTML = ''
  @Input('content')
  get content() {
      return this._content;
  }
  set content(c: string) {
      this.innerHTML = this.mdService.markdown(c || '');
      this._content = c;
  }

  constructor(
      private mdService: MarkdownService
  ) { }

  ngOnInit() { }

}

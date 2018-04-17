import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MarkdownService } from './markdown.service';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { observable, computed } from 'mobx-angular';

@Component({
  selector: 'app-markdown',
  template: `<div *mobxAutorun #ref class="markdown-body" [innerHTML]="innerHTML"></div>`,
  providers: [
    MarkdownService
  ]
})
export class MarkdownComponent implements OnInit {
  @ViewChild('ref') ref: ElementRef;
  _content = '';
  innerHTML: any = '';
  @Input('content')
  get content() {
    return this._content;
  }
  set content(c) {
    this._content = c;
    const content = this.mdService.markdown(c);
    this.innerHTML = this.domSanitizer.bypassSecurityTrustHtml(content || '');
    this.onPostNavLoad.emit(this.mdService.index);
  }

  @Output() onPostNavLoad = new EventEmitter<{}>();
  @Input() withIndex = false;

  constructor(
      private mdService: MarkdownService,
      private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() { }
}

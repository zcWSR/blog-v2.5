import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MarkdownService } from './markdown.service';

@Component({
  selector: 'app-markdown',
  template: `<div *mobxAutorun #ref class="markdown-body" [innerHTML]="innerHTML"></div>`,
  // styleUrls: ['./markdown.components.scss'],
  providers: [MarkdownService]
})
export class MarkdownComponent implements OnInit {
  @ViewChild('ref') ref?: ElementRef;
  contentInner = '';
  innerHTML: any = '';

  @Output() headerListLoad = new EventEmitter<{}>();
  @Input() withHeaderList = false;
  @Input('content')
  get content(): string {
    return this.contentInner;
  }
  set content(c) {
    this.contentInner = c;
    const content = this.mdService.markdown(c);
    this.innerHTML = this.domSanitizer.bypassSecurityTrustHtml(content || '');
    if (this.withHeaderList && this.mdService.headerList.length) {
      this.headerListLoad.emit(this.mdService.headerList);
    }
  }

  constructor(
    private mdService: MarkdownService,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void { }
}

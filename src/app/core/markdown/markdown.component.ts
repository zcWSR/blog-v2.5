import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownComponent implements OnInit {
  @Input('content') content;

  constructor() {
  }

  ngOnInit() {
  }

}

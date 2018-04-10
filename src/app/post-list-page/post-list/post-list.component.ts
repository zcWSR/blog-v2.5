import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';

import { IPost } from '../../modules/post';

@Component({
  selector: 'app-post-list',
  template: `
  <app-post-card  *ngFor="let post of postList" [post]="post"></app-post-card>
  `,
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {
  @Input() postList: IPost[] = [];
  constructor() { }

  ngOnInit() {
  }

}

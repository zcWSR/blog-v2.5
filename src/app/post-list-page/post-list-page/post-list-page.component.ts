import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PostListPageStore } from '../post-list-page.store';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListPageComponent implements OnInit {

  constructor(
    private store: PostListPageStore
  ) { }

  ngOnInit() {
  }

}

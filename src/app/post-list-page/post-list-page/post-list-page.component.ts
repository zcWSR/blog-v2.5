import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PostListPageStore } from '../post-list-page.store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListPageComponent implements OnInit {

  constructor(
    private store: PostListPageStore,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.children[0].params
      .subscribe(params => {
        this.store.curPage = +params.page || 1;
      });
  }

}

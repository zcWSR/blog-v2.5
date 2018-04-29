import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PostListPageStore } from '../post-list-page.store';
import { ActivatedRoute } from '@angular/router';
import { AppStore } from '../../app.store';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListPageComponent implements OnInit {

  constructor(
    private appStore: AppStore,
    private store: PostListPageStore,
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle(this.appStore.pageTitle);
    this.route.children[0].params
      .subscribe(params => {
        this.store.curPage = +params.page || 1;
        if (this.store.curPage !== 1) {
          this.appStore.isHeaderTransparent = false;
        }
      });
  }

}

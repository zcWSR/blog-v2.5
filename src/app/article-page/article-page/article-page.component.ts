import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlePageStore } from '../article-page.store';
import { AppStore } from '../../app.store';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlePageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private store: ArticlePageStore,
    private appStore: AppStore
  ) {
    this.appStore.isHeaderTransparent = false;
  }

  ngOnInit() {
    this.route.params.subscribe(({ shortName }) => {
      if (shortName) {
        this.store.fetchArticle(shortName);
      }
    });
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  transition,
  style,
  trigger,
  animate,
  state
} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { ArticlePageStore } from '../article-page.store';
import { AppStore } from '../../app.store';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('enterLeave', [
      state('initial', style({ opacity: 0, transform: 'translateY(10px)' })),
      state('ready', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('initial => ready', [animate(`.25s 1s linear`)])
    ])
  ]
})
export class ArticlePageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public store: ArticlePageStore,
    private appStore: AppStore,
    private title: Title
  ) {
    this.appStore.isHeaderTransparent = false;
  }

  ngOnInit() {
    this.route.params.subscribe(({ routeName }) => {
      this.title.setTitle('loading...');
      if (routeName) {
        const article = this.appStore.articles.find(a => a.route === routeName);
        if (article) {
          this.store.fetchArticle(article.id);
        } else {
          this.title.setTitle('文章不存在');
        }
      } else {
        this.title.setTitle('文章不存在');
      }
    });
  }
}

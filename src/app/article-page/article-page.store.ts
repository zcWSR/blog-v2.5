import { Injectable } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { HttpClient, HttpParams } from '@angular/common/http';
import { observable, computed, action } from 'mobx-angular';
import { IArticle } from '../models/article';
import { IJsonReturn } from '../models/json-return';
import { environment } from '../../environments/environment';
import { AppStore } from '../app.store';

@Injectable()
export class ArticlePageStore {
  constructor(
    private http: HttpClient,
    private appStore: AppStore,
    private title: Title
  ) {}

  defaultArticle: IArticle = {
    id: 0,
    route: '',
    shortName: '',
    title: 'Loading...',
    createAt: '',
    content: '',
    bgUrl: '',
    bgColor: ''
  };

  @observable loading = false;
  @observable article: IArticle = this.defaultArticle;

  @computed
  get pageUrl() {
    return `${location.protocol}//${location.host}${location.pathname}`;
  }

  @action('fetch article')
  fetchArticle(articleId) {
    this.loading = true;
    const url = `${environment.api_host}/blog/article/${articleId}`;
    this.http
      .jsonp(url, 'callback')
      .subscribe((meta: IJsonReturn<IArticle>) => {
        if (meta.ret) {
          this.article = meta.data;
          this.title.setTitle(
            `${this.article.title} - ${this.appStore.pageTitle}`
          );
          this.reportView(this.article.id);
        } else {
        }
        this.loading = false;
      });
  }

  reportView(articleId) {
    const url = `${environment.api_host}/blog/article/report/${articleId}`;
    this.http.jsonp(url, 'callback').subscribe(() => {}, err => {});
  }
}

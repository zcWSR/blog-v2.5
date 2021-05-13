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
  ) { }

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
  get pageUrl(): string {
    return `${location.protocol}//${location.host}${location.pathname}`;
  }

  @action('fetch article')
  fetchArticle(articleId: number): void {
    this.loading = true;
    const url = `/api/blog/article/${articleId}`;
    this.http.get<IJsonReturn<IArticle>>(url).
      subscribe((meta) => {
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

  reportView(articleId: number): void {
    this.http.get(`/api/article/report/${articleId}`).subscribe();
  }
}

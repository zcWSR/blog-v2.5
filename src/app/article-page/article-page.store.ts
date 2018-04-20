import { Injectable } from '@angular/core';
import { observable, computed, action } from 'mobx-angular';
import { IArticle } from '../models/article';

@Injectable()
export class ArticlePageStore {
  @observable loading = false;
  @observable article: IArticle;

  constructor() {}

  @action('fetch article')
  fetchArticle(articleId) {
    console.log(articleId);
  }
}

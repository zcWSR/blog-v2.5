import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';
import { IArticle } from './models/article';

@Injectable()
export class AppStore {
  // @observable blogName = '';
  // @observable slogen = '';
  // @observable hostBg = '';
  // @observable hostBgMainColor = '';
  // @observable postListPageSize = 0;
  // @observable articals = [];
  blogName = '';
  slogen = '';
  bgColor = '';
  bgUrl = '';
  hostBgMainColor = '';
  postListPageSize = 0;
  articles: IArticle[] = [];
  @observable isHeaderTransparent = true;
}

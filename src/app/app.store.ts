import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';
import { IArticle } from './models/article';
import { IBaseConfig } from './models/baseConfig';

@Injectable()
export class AppStore implements IBaseConfig {
  // @observable blogName = '';
  // @observable slogen = '';
  // @observable hostBg = '';
  // @observable hostBgMainColor = '';
  // @observable postListPageSize = 0;
  // @observable articals = [];
  pageTitle = '';
  blogName = '';
  slogen = '';
  bgColor = '';
  bgUrl = '';
  hostBgMainColor = '';
  postListPageSize = 0;
  articles: IArticle[] = [];

  weiboLink = '';
  githubLink = '';
  mailLink = '';
  footer = '';
  footerLink = '';
  topIconUrl = '';

  @observable isHeaderTransparent = true;
}

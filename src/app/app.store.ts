import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';
import { IImg } from './modules/img';

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
  hostBg: IImg;
  hostBgMainColor = '';
  postListPageSize = 0;
  articles = [];
  @observable isHeaderTransparent = true;
}

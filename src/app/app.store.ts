import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';

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
  hostBg = '';
  hostBgMainColor = '';
  postListPageSize = 0;
  articles = [];
  @observable isHeaderTransparent = true;
}

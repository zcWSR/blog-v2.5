import { Injectable } from '@angular/core';
import { observable, computed, action } from 'mobx-angular';
import { IPost } from '../modules/post';
import { AppStore } from '../app.store';
@Injectable()
export class PostListPageStore {
  @observable curPage = 1;
  @observable totalCount = 0;
  @observable pageSize = this.appStore.postListPageSize;
  @observable postList: IPost[] = null;
  @observable loading = false;

  constructor(private appStore: AppStore) {}

  @computed
  get showJumb() {
    return this.curPage === 1;
  }

  @computed
  get showList() {
    return !this.loading;
  }

  @computed
  get hasList() {
    if (this.postList === null) { return true; }
    return this.postList.length;
  }

  @action('click change page button')
  changePage(page) {
    this.curPage = page;
  }
}

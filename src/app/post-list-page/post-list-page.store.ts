import { Injectable } from '@angular/core';
import { observable, computed, action } from 'mobx-angular';
import { IPost } from '../models/post';
import { AppStore } from '../app.store';
@Injectable()
export class PostListPageStore {
  @observable curPage = 1;
  @observable totalCount = 0;
  @observable pageSize = this.appStore.postListPageSize;
  @observable postList: IPost[] = [];
  @observable loading = false;

  constructor(private appStore: AppStore) { }

  @computed
  get showJumb(): boolean {
    return this.curPage === 1;
  }

  @computed
  get showList(): boolean {
    return !this.loading;
  }

  @computed
  get hasList(): boolean {
    if (this.postList === null) { return true; }
    return !!this.postList.length;
  }

  @action('click change page button')
  changePage(page: number): void {
    this.curPage = page;
  }
}

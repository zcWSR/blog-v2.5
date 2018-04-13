import { Injectable } from "@angular/core";
import { observable, computed, action } from 'mobx-angular'; 
import { IPost } from "../modules/post";
@Injectable()
export class PostListPageStore {
  @observable curPage = 1;
  @observable totalCount = 1000;
  @observable pageSize = 5;
  @observable postList: IPost[] = [];
  @observable loading = false;

  @computed
  get showJumb() {
    return this.curPage === 1;
  }

  @computed
  get showList() {
    return !this.loading;
  }

  @action('click change page button')
  changePage(page) {
    this.curPage = page;
  }
  
}
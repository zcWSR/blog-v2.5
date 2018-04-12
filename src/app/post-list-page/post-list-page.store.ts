import { Injectable } from "@angular/core";
import { observable, computed, action } from 'mobx-angular'; 
@Injectable()
export class PostListPageStore {
  @observable curPage = 1;
  @observable totalCount = 1000;
  @observable pageSize = 5;

  @action('click change page button')
  changePage(page) {
    this.curPage = page;
  }
}
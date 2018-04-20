import { Injectable } from '@angular/core';
import { observable, computed, action } from 'mobx-angular';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { IJsonReturn } from '../models/json-return';
import { IPost } from '../models/post';
import { AppStore } from '../app.store';

@Injectable()
export class SearchPageStore {
  @observable searchType;
  @observable searchContent;
  @observable resultList: IPost[] = [];
  @observable loading = 0; // 1: loading, 2: no more, 0: done, -1: error
  page = 1;
  constructor(
    private http: HttpClient,
    private appStore: AppStore
  ) {}

  @action('do search')
  search(isNew = false) {
    if (!this.searchContent) { return; } // 无内容直接跳过
    if (isNew) { // 更换搜索内容的时候从第一页开始
      this.page = 1;
      this.resultList = [];
      this.loading = 0;
    }
    if (this.loading === 2) { return; } // 上次就没有更多了直接跳过
    this.loading = 1;
    let search = new HttpParams();
    search = search.append('page', this.page + '')
            .set('pageSize', this.appStore.postListPageSize + '');
    this.http.jsonp(
      `${environment.api_host}/blog/search/${this.searchType}/${this.searchContent}?${search.toString()}`,
      'callback')
        .subscribe((meta: IJsonReturn<IPost[]>) => {
          if (meta.ret) {
            if (meta.data.length) {
              // 假设一页显示5个, 当返回数list数量小于5时, 则可判断已经没有更多了
              if (meta.data.length === this.appStore.postListPageSize) {
                this.loading = 0;
                this.page++; // 下次非新搜索条件加载的时候page + 1
              } else {
                this.loading = 2;
              }
              this.resultList.push(...meta.data);
              this.page++;
            } else {
              this.loading = 2;
            }
          } else {
            this.resultList = [];
          }
        });
  }
}

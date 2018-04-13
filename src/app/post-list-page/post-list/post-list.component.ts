import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { IPost } from '../../modules/post';
import { PostListPageStore } from '../post-list-page.store';
import { environment } from '../../../environments/environment';
import { IPostList } from '../../modules/post-list';
import { enterLeave } from '../../animates/enter-leave';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-post-list',
  template: `
  <div [ngStyle]="{ transition: 'opacity .5s ease-in-out', opacity: store.loading ? 0.1 : 1 }">
    <app-post-card  *ngFor="let post of store.postList" [post]="post" ></app-post-card>
  </div>
  `,
  styleUrls: ['./post-list.component.scss'],
  animations: [
    // enterLeave
  ],
  // host: {
  //   '[@enterLeave]': ''
  // }
})
export class PostListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private store: PostListPageStore,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const page = params.page || 1;
      let search = new HttpParams();
      search = search.set('page', page);
      const url = `${environment.api_host}/blog/posts?${search.toString()}`;
      this.store.loading = true;
      this.http.jsonp(url, 'callback')
        .subscribe((meta: { data?: IPostList, errmsg?: string, errcode: number, ret: boolean }) => {
          if (meta.ret) {
            this.store.postList = meta.data.list;
            this.store.pageSize = meta.data.pageSize;
            this.store.totalCount = meta.data.totalCount;
            if (page !== 1) {
              window.location.hash = 'top';
            }
          } else {
          }
          this.store.loading = false;
        });
    });
  }

}

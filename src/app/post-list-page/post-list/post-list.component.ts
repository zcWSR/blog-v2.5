import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { transition, style, trigger, animate, state, query, stagger } from '@angular/animations';

import { IPost } from '../../models/post';
import { PostListPageStore } from '../post-list-page.store';
import { environment } from '../../../environments/environment';
import { IPostList } from '../../models/post-list';
import { HostBinding } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-post-list',
  template: `
  <div *mobxAutorun>
    <app-post-card *ngFor="let post of store.postList" [post]="post" [@showHideList]></app-post-card>
    <h1 [style.marginTop]="'1em'" *ngIf="!store.hasList">没有文章</h1>
  </div>
  `,
  styleUrls: ['./post-list.component.scss'],
  animations: [
  trigger('showHideList', [
    transition(':enter', [
      query('.card-flat', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 }))
      ], { optional: true })
    ])
  ])
  ]
})
export class PostListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public store: PostListPageStore,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const page = params.page || 1;
      let search = new HttpParams();
      search = search
        .set('page', page)
        .set('pageSize', this.store.pageSize + '');
      const url = `${environment.api_host}/blog/posts?${search.toString()}`;
      this.store.loading = true;
      this.http.jsonp(url, 'callback')
        .subscribe((meta: { data?: IPostList, errmsg?: string, errcode: number, ret: boolean }) => {
          if (meta.ret) {
            this.store.postList = [];
            this.store.postList = meta.data.list;
            this.store.pageSize = meta.data.pageSize;
            this.store.totalCount = meta.data.totalCount;
            if (params.page) {
              if (+params.page !== 1) {
                window.location.hash = 'top';
              } else {
                  window.location.hash = 'main-content-top';
                }
            }
          } else {
          }
          this.store.loading = false;
        });
    });
  }

}

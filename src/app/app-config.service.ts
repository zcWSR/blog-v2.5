import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppStore } from './app.store';
import { environment } from '../environments/environment';
import { IJsonReturn } from './models/json-return';
import { IBaseConfig } from './models/baseConfig';

@Injectable()
export class AppConfigSerivce {
  error: string;
  constructor(private http: HttpClient, private appStore: AppStore) {}

  loadAppConfig() {
    return new Promise((resolve, reject) => {
      console.log('loading config befor start...');
      this.http.jsonp(`${environment.api_host}/blog/config`, 'callback')
      .subscribe((meta: IJsonReturn<IBaseConfig>) => {
        if (meta.ret) {
          const data = meta.data;
          this.appStore.pageTitle = data.pageTitle;
          this.appStore.blogName = data.blogName;
          this.appStore.slogen = data.slogen;
          this.appStore.bgUrl = data.bgUrl;
          this.appStore.bgColor = data.bgColor;
          this.appStore.postListPageSize = data.postListPageSize;
          this.appStore.articles = data.articles;
          this.appStore.weiboLink = data.weiboLink;
          this.appStore.githubLink = data.githubLink;
          this.appStore.mailLink = data.mailLink;
          this.appStore.footer = data.footer;
          this.appStore.footerLink = data.footerLink;
          this.appStore.topIconUrl = data.topIconUrl;
          console.log('config loaded...');
          resolve(true);
        } else {
          this.error = meta.errmsg;
          console.log('config loading failed...');
          console.error(meta.errmsg);
          reject(meta.errmsg);
        }
      });
    });
  }
}

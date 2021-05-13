import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppStore } from './app.store';
import { IJsonReturn } from './models/json-return';
import { IBaseConfig } from './models/baseConfig';

@Injectable()
export class AppConfigService {
  error?: string;
  constructor(private http: HttpClient, private appStore: AppStore) { }

  loadAppConfig(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      console.log('loading config before start...');
      this.http.get<IJsonReturn<IBaseConfig>>('/api/config').subscribe(
        (meta) => {
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

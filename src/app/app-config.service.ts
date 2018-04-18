import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppStore } from "./app.store";
import { environment } from "../environments/environment";
import { IJsonReturn } from './modules/json-return';
import { IBaseConfig } from './modules/baseConfig';

@Injectable()
export class AppConfigSerivce {
  error: string;
  constructor(
    private http: HttpClient,
    private appStore: AppStore
  ) { }

  loadAppConfig() {
    return new Promise((resolve, reject) => {
      // this.http.jsonp()
      console.log('loading config befor start...');
      this.http.jsonp(`${environment.api_host}/blog/config`, 'callback')
        .subscribe((meta: IJsonReturn<IBaseConfig>) => {
          if (meta.ret) {
            const data = meta.data;
            this.appStore.blogName = data.blogName;
            this.appStore.slogen = data.slogen;
            this.appStore.hostBg = data.hostBg;
            this.appStore.postListPageSize = data.postListPageSize;
            this.appStore.articles = data.articles;
            console.log('config loaded...');
            resolve(true);
          } else {
            this.error = meta.errmsg;
            console.log('load failed...');
            console.error(meta.errmsg);
            reject(meta.errmsg);
          }
        });
    });
  }
}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppStore } from "./app.store";

@Injectable()
export class AppConfigSerivce {
  appConfig;
  constructor(
    private http: HttpClient,
    private appStore: AppStore
  ) { }

  loadAppConfig() {
    return new Promise((resolve, reject) => {
      // this.http.jsonp()
      console.log('loading config befor start...');
      const data = {
        blogName: 'zcWSR',
        slogen: '靡不有初, 鲜克有终',
        hostBg: 'http://files.zcwsr.com/server-backstage-v2/src/imgs/bg5.jpg',
        hostBgMainColor: '#4e7cb4',
        postListPageSize: 5,
        articles: [
          { id: 1, route: 'resume', shortName: 'resume' },
          { id: 2, route: 'aboutme', shortName: '关于我' }
        ]
      }
      console.log('config loaded...');
      this.appStore.blogName = data.blogName;
      this.appStore.slogen = data.slogen;
      this.appStore.hostBg = data.hostBg;
      this.appStore.hostBgMainColor = data.hostBgMainColor;
      this.appStore.postListPageSize = data.postListPageSize;
      this.appStore.articles = data.articles;
      
      resolve(true);
    })
  }
}
import 'rxjs/add/operator/map';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { observable, computed, action } from "mobx-angular";
import { runInAction } from 'mobx';
import { DomSanitizer } from '@angular/platform-browser';

import { environment } from '../../../environments/environment';
import { IJsonReturn } from '../../modules/json-return';
import { IImg } from '../../modules/img';

@Injectable()
export class JumbotronStore {
  constructor(
    private domSanitizer: DomSanitizer,
    private http: HttpClient
  ) {}
  @observable showBg = false;
  @observable frontBgStyle: any = '';
  @observable baseBgStyle: any = '';

  @action('loadBg')
  loadBg() {
    this.showBg = false;
    const bg = new Image();
    bg.onload = () => {
      runInAction(() => {
        this.baseBgStyle = this.domSanitizer.bypassSecurityTrustStyle(`url('${bg.src}')`);
        this.showBg = true;
      });
    };
    const url = `${environment.api_host}/blog/imgs`;
    this.http.jsonp(url, 'callback')
      .subscribe((meta: IJsonReturn<IImg[]>) => {
        if (meta.ret) {
          const data = meta.data;
          const fileInfo = data[Math.floor(Math.random() * data.length)];
          this.frontBgStyle = this.domSanitizer.bypassSecurityTrustStyle(`#${fileInfo.color}`);
          bg.src = `${environment.api_host}/blog/imgs/${fileInfo.name}`;
        }
      });
  }
}

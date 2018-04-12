import 'rxjs/add/operator/map';
import { Injectable } from "@angular/core";
import { observable, computed, action } from "mobx-angular";
import { runInAction } from 'mobx';
import { Jsonp } from "@angular/http";
import { DomSanitizer } from '@angular/platform-browser';

import { environment } from '../../../environments/environment';

@Injectable()
export class JumbotronStore {
  constructor(
    private jsonp: Jsonp,
    private domSanitizer: DomSanitizer
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

    this.jsonp
      .get(`${environment.blog_api_host}/imgs?callback=JSONP_CALLBACK`)
      .map(res => res.json())
      .subscribe(({ data }) => {
        const fileInfo = data[Math.floor(Math.random() * data.length)];
        this.frontBgStyle = this.domSanitizer.bypassSecurityTrustStyle(`#${fileInfo.color}`);
        bg.src = `${environment.blog_api_host}/imgs/${fileInfo.name}`;
      });
  }
}

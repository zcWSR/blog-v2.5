import 'rxjs/add/operator/map';
import { Injectable } from "@angular/core";
import { observable, computed, action } from "mobx-angular";
import { runInAction } from 'mobx';
import { Jsonp } from "@angular/http";
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class JumbotronStore {
  constructor(
    private jsonp: Jsonp,
    private domSanitizer: DomSanitizer
  ) {}
  @observable showBg = false;
  @observable bgStyle: any = '';

  @action('loadBg')
  loadBg() {
    this.showBg = false;
    const bg = new Image();
    bg.onload = () => {
      runInAction(() => {
        this.bgStyle = this.domSanitizer.bypassSecurityTrustStyle(`url('${bg.src}') center / cover`);
        this.showBg = true;
      });
    };

    this.jsonp
      .get("http://blog-api.zcwsr.com/imgs?callback=JSONP_CALLBACK")
      .map(res => res.json())
      .subscribe(({ result }: { result: [number] }) => {
        const filename = result[Math.floor(Math.random() * result.length)];
        bg.src = `http://blog-api.zcwsr.com/imgs/${filename}`;
      });
  }
}

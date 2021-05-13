import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { observable, action } from 'mobx-angular';
import { runInAction } from 'mobx';

import { AppStore } from '../../app.store';

@Injectable()
export class JumbotronStore {
  constructor(private domSanitizer: DomSanitizer, private appStore: AppStore) { }
  @observable showBg = false;
  @observable baseBgStyle: any = '';

  @action('loadBg')
  loadBg(): void {
    this.showBg = false;
    const bg = new Image();
    bg.onload = () => {
      runInAction(() => {
        this.baseBgStyle = this.domSanitizer.bypassSecurityTrustStyle(
          `url('${bg.src}')`
        );
        this.showBg = true;
      });
    };
    bg.src = this.appStore.bgUrl;
  }
}

import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { observable, computed, action } from 'mobx-angular';
import { runInAction } from 'mobx';
import { DomSanitizer } from '@angular/platform-browser';

import { environment } from '../../../environments/environment';
import { IJsonReturn } from '../../modules/json-return';
import { IImg } from '../../modules/img';
import { AppStore } from '../../app.store';

@Injectable()
export class JumbotronStore {
  constructor(
    private domSanitizer: DomSanitizer,
    private appStore: AppStore
  ) {}
  @observable showBg = false;
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
    bg.src = this.appStore.hostBg;
  }
}

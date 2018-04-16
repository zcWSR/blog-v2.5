import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';

@Injectable()
export class AppStore {
  @observable title: any = 'zcWSR';
  @observable isHeaderTransparent = true;
}

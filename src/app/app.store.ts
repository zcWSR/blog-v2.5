import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';

@Injectable()
export class AppStore {
  @observable title: any = 'zcWSR';

  @action('change Time')
  changeTime() {
    this.title = new Date().getMilliseconds();
  }
}

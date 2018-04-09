import { Injectable } from "@angular/core";
import { observable, action } from 'mobx-angular';

@Injectable()
export class CoreStore {
  @observable title: any = '';
  
  @action('change Time')
  changeTime() {
    this.title = new Date().getMilliseconds();
  }
}
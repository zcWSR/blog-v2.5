import { Injectable } from '@angular/core';
import { observable, computed, action } from 'mobx-angular';

@Injectable()
export class SelectStore {
  @observable show = false;
  @observable options: any[] = [];

  @computed
  get label(): string {
    // console.log('selectedOption', [...this.options]);
    const index = this.options.findIndex(item => item.active);
    return this.options[index === -1 ? 0 : index].name;
  }

  @action('select')
  select(index: number): void {
    const optionsBefore = [...this.options];
    optionsBefore.forEach(item => item.active = false);
    optionsBefore[index].active = true;
    this.options = optionsBefore;
    this.show = false;
  }
}

import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { AppStore } from '../../app.store';;
import { JumbotronStore } from './jumbotron.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
  providers: [
    JumbotronStore
  ]
})
export class JumbotronComponent implements OnInit {

  constructor(
    private appStore: AppStore,
    private store: JumbotronStore
  ) {}

  ngOnInit() {
    this.store.loadBg();
    console.log('aaaa');
  }
}

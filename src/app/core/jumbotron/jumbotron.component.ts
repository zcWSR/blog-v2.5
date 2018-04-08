import { Component, OnInit } from '@angular/core';
import { CoreStore } from '../core.store';
import {} from 'mobx';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  constructor(
    private coreStore: CoreStore
  ) {
  }

  ngOnInit() {
    // setInterval(() => {
    //   this.coreStore.changeTime();
    // }, 1000);
  }
}

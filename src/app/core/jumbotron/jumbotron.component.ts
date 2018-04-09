import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CoreStore } from '../core.store';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
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
    private coreStore: CoreStore,
    private store: JumbotronStore
  ) {}

  ngOnInit() {
    this.store.loadBg();
  }
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStore } from '../../app.store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  constructor(
    private appStore: AppStore
  ) { }

  ngOnInit() {
    this.appStore.isHeaderTransparent = false;
  }

}

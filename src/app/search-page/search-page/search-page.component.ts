import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';

import { SearchPageStore } from '../search-page.store';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
  ]
})
export class SearchPageComponent implements OnInit, AfterViewInit, OnDestroy {
  io = new IntersectionObserver(([entry]) => this.loadMore(entry));
  constructor(
    private store: SearchPageStore
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.io.observe(document.getElementsByTagName('footer')[0]);
  }

  ngOnDestroy(): void {
    this.io.disconnect();
  }

  loadMore(entry: IntersectionObserverEntry): void {
    if (entry.isIntersecting && entry.intersectionRatio > 0 && entry.intersectionRatio < 1) {
      this.store.search();
    }
  }
}

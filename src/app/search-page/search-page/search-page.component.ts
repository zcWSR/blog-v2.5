import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

import { SearchPageStore } from '../search-page.store';
import { AfterContentChecked, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

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
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.io.observe(document.getElementsByTagName('footer')[0]);
  }

  ngOnDestroy() {
    this.io.disconnect();
  }

  loadMore(entry) {
    if (entry.isIntersecting && entry.intersectionRatio > 0 && entry.intersectionRatio < 1) {
      this.store.search();
    }
  }
}

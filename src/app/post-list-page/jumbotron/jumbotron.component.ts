import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { AppStore } from '../../app.store';
import { JumbotronStore } from './jumbotron.store';
import { Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
  providers: [
    JumbotronStore
  ]
})
export class JumbotronComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('jumbotron') ref?: ElementRef;
  io = new IntersectionObserver(([entry]) => this.cross(entry), { threshold: [0.000001] });
  constructor(
    private appStore: AppStore,
    private store: JumbotronStore,
  ) { }

  ngOnInit(): void {
    this.store.loadBg();
  }

  ngAfterViewInit(): void {
    this.io.observe(this.ref?.nativeElement);
  }

  ngOnDestroy(): void {
    this.io.unobserve(this.ref?.nativeElement);
  }

  cross(entry: IntersectionObserverEntry): void {
    if (entry.intersectionRatio > 0) {
      // 可见
      this.appStore.isHeaderTransparent = true;
    } else {
      // 不可见
      this.appStore.isHeaderTransparent = false;
    }
  }
}

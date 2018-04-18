import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

import { AppStore } from '../../app.store';;
import { JumbotronStore } from './jumbotron.store';
import { Input } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  providers: [
    JumbotronStore
  ]
})
export class JumbotronComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('jumbotron') ref: ElementRef;
  io = new IntersectionObserver(([entry]) => this.cross(entry), { threshold: [0.000001] });
  constructor(
    private appStore: AppStore,
    private store: JumbotronStore,
  ) { }

  ngOnInit() {
    this.store.loadBg();
  }
  
  ngAfterViewInit() {
    this.io.observe(this.ref.nativeElement);
  }

  ngOnDestroy() {
    this.io.unobserve(this.ref.nativeElement);
  }

  cross(entry) {
    if (entry.intersectionRatio > 0) {
      // 可见
      this.appStore.isHeaderTransparent = true;
    } else {
      // 不可见
      this.appStore.isHeaderTransparent = false;
    }
  }
  
}

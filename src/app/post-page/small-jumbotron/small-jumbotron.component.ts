import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { PostPageStore } from '../post-page.store';
import { AppStore } from '../../app.store';

@Component({
  selector: 'app-small-jumbotron',
  templateUrl: './small-jumbotron.component.html',
  styleUrls: ['./small-jumbotron.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallJumbotronComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('jumbotron') ref: ElementRef;
  io = new IntersectionObserver(([entry]) => this.cross(entry), { threshold: [0.000001] });
  constructor(
    private appStore: AppStore,
    private store: PostPageStore
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.io.observe(this.ref.nativeElement);
  }

  ngOnDestroy() {
    this.io.unobserve(this.ref.nativeElement);
  }

  cross (entry) {
    if (entry.intersectionRatio > 0) {
      this.appStore.isHeaderTransparent = true;
    } else {
      this.appStore.isHeaderTransparent = false;
    }
  }

}

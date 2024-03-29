import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Input,
  ChangeDetectorRef,
  ɵSafeStyle,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppStore } from '../../app.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-small-jumbotron',
  template: ` <div #jumbotron class="jumbotron small">
    <div
      class="jumbotron-background front dark"
      [class.vanish]="showBg"
      [style.backgroundColor]="bgColor"
    ></div>
    <div
      class="jumbotron-background dark"
      [style.backgroundPosition]="showBg || 'center'"
      [style.backgroundImage]="bgStyle"
    ></div>
    <div class="post-title">
      <h1 class="title" *ngIf="title">{{ title }}</h1>
      <p class="date" *ngIf="date">{{ date | dateX }}</p>
      <div class="info" *ngIf="category || (labels && labels.length)">
        <div class="label-group" *ngIf="category">
          <div class="label-icon"><i class="fa fa-clipboard"></i></div>
          <div class="label">{{ category }}</div>
        </div>
        <div class="label-group" *ngIf="labels && labels.length">
          <div class="label-icon"><i class="fa fa-tag"></i></div>
          <div class="label" *ngFor="let label of labels">{{ label }}</div>
        </div>
      </div>
    </div>
  </div>`,
})
export class SmallJumbotronComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @Input() title = '';
  @Input() date = '';
  @Input() category = '';
  @Input() labels = '';
  @Input() bgColor = '';
  bgUrlInner = '';
  showBg = false;
  bgStyle?: ɵSafeStyle;
  @Input('bgUrl')
  get bgUrl(): string {
    return this.bgUrlInner;
  }
  set bgUrl(b) {
    this.bgUrlInner = b;
    if (b) {
      this.loadBg(b);
    }
  }
  @ViewChild('jumbotron') ref?: ElementRef;
  io = new IntersectionObserver(([entry]) => this.cross(entry), {
    threshold: [0.000001],
  });
  constructor(
    private appStore: AppStore,
    private domSanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.io.observe(this.ref?.nativeElement);
  }

  ngOnDestroy(): void {
    this.io.unobserve(this.ref?.nativeElement);
  }

  cross(entry: IntersectionObserverEntry): void {
    if (entry.intersectionRatio > 0) {
      this.appStore.isHeaderTransparent = true;
    } else {
      this.appStore.isHeaderTransparent = false;
    }
  }

  loadBg(bgUrl: string): void {
    this.showBg = false;
    const bg = document.createElement('img');
    bg.onload = () => {
      this.bgStyle = this.domSanitizer.bypassSecurityTrustStyle(
        `url("${bgUrl}")`
      );
      this.showBg = true;
      this.cdr.detectChanges();
    };
    bg.src = bgUrl;
  }
}

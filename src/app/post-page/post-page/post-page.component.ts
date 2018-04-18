import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  HostBinding,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';
import {
  transition,
  style,
  trigger,
  animate,
  state
} from '@angular/animations';
import { PostPageStore } from '../post-page.store';
import { ActivatedRoute } from '@angular/router';
import { runInAction } from 'mobx';
import { action } from 'mobx-angular';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('enterLeave', [
      state('initial', style({ opacity: 0, transform: 'translateY(10px)' })),
      state('ready', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('initial => ready', [animate(`.25s 1s linear`)])
    ])
  ]
})
export class PostPageComponent implements OnInit, OnDestroy {
  @ViewChild('indexContainer') indexContainerRef: ElementRef;
  io = new IntersectionObserver(([entry]) => this.cross([entry]), {
    threshold: [0, 1],
    rootMargin: '-50px 0px -70% 0px'
  });
  constructor(private store: PostPageStore, private route: ActivatedRoute) {
    this.store.setDefault();
  }

  ngOnInit() {
    this.route.params.subscribe(({ postId }) => {
      if (postId) {
        this.store.getPost(postId);
      }
    });
  }

  ngOnDestroy() {
    this.io.disconnect();
  }

  onHeadListLoad(headerList: any[]) {
    this.store.headerList = headerList;
    setTimeout(() => {
      this.startObserve(headerList);
    }, 500);
  }

  startObserve(headerList) {
    headerList.forEach(header => {
      this.io.observe(document.getElementById(header.id));
    });
  }

  setIndexStatus(isActive, indexEle) {
    if (isActive) {
      this.setIndexEleInView(indexEle);
    }
    return isActive;
  }

  scrollToHeader(headerId, offset, indexEle) {
    this.setIndexEleInView(indexEle);
    this.scrollToTop(headerId, offset);
  }

  setIndexEleInView(indexEle) {
    const containerEle = this.indexContainerRef.nativeElement;
    containerEle.scrollTop = indexEle.offsetTop - containerEle.clientHeight / 2;
  }

  scrollToTop(elementId, offset) {
    const element = document.getElementById(elementId);
    const position =
      element.offsetTop +
      document.getElementsByClassName('jumbotron')[0].clientHeight -
      offset;
    this.store.scrollTo(position, 500);
  }

  cross(entry) {
    entry = entry[entry.length - 1];
    if (entry.intersectionRatio < 1 && entry.intersectionRatio) {
      this.store.activeIndex(entry.target.id);
    }
  }
}

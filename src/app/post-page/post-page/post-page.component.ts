import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  HostBinding,
  HostListener,
  ElementRef,
  ViewChild,
  Renderer2
} from '@angular/core';
import {
  transition,
  style,
  trigger,
  animate,
  state
} from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { PostPageStore } from '../post-page.store';
import { ActivatedRoute } from '@angular/router';
import { Catalog } from 'src/app/models/catalog';

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
  @ViewChild('indexContainer') indexContainerRef?: ElementRef;
  io = new IntersectionObserver(([entry]) => this.cross([entry]), {
    threshold: [0, 1],
    rootMargin: '-50px 0px -80% 0px'
  });
  constructor(public store: PostPageStore, private route: ActivatedRoute, private renderer: Renderer2, private title: Title) {
    this.store.setDefault();
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ postId }) => {
      this.title.setTitle('loading...');
      if (postId) {
        this.store.getPost(postId);
      } else {
        this.title.setTitle('文章不存在');
      }
    });
  }

  ngOnDestroy(): void {
    this.io.disconnect();
  }

  headerListLoad(headerList: Catalog): void {
    this.store.headerList = headerList;
    setTimeout(() => {
      this.startObserve(headerList);
    }, 500);
  }

  startObserve(headerList: Catalog): void {
    headerList.forEach(header => {
      this.io.observe(document.getElementById(header.id) as HTMLElement);
    });
  }

  setIndexStatus(isActive: boolean, indexEle: HTMLElement): boolean {
    if (isActive) {
      this.setIndexEleInView(indexEle);
    }
    return isActive;
  }

  scrollToHeader(headerId: string, offset: number, indexEle: HTMLElement): void {
    this.setIndexEleInView(indexEle);
    this.scrollToTop(headerId, offset);
  }

  setIndexEleInView(indexEle: HTMLElement): void {
    const containerEle = this.indexContainerRef?.nativeElement;
    containerEle.scrollTop = indexEle.offsetTop - containerEle.clientHeight / 2;
  }

  scrollToTop(elementId: string, offset: number): void {
    const element = document.getElementById(elementId);
    const position =
      (element?.offsetTop || 0) +
      document.getElementsByClassName('jumbotron')[0].clientHeight -
      offset;
    this.store.scrollTo(position, 500);
  }

  cross(entry: IntersectionObserverEntry[]): void {
    const end = entry[entry.length - 1];
    if (end.intersectionRatio < 1 && end.intersectionRatio) {
      this.store.activeIndex(end.target.id);
    }
  }

  // loadShareLinkScript() {
  //   console.log('load share script');
  //   const container = this.shareLinkContainerRef.nativeElement;
  //   const script1 = this.renderer.createElement('script');
  //   script1.type = 'text/javascript';
  //   script1.charset = 'urf-8';
  //   script1.src = 'http://static.bshare.cn/b/buttonLite.js#style=-1&amp;uuid=&amp;pophcol=1&amp;lang=zh';
  //   const script2 = this.renderer.createElement('script');
  //   script2.type = 'text/javascript';
  //   script2.charset = 'urf-8';
  //   script2.src = 'http://static.bshare.cn/b/bshareC0.js';
  //   this.renderer.appendChild(this.renderer., script1);
  //   this.renderer.appendChild(container, script2);
  // }
}

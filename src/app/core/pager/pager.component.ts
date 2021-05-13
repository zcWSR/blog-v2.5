import {
  Component,
  OnInit,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit, OnChanges {
  @Input() linkPrefix = '/post-list/page';
  @Input() curPage = 1;
  @Input() totalCount = 0;
  @Input() pageSize = 1;
  pagerItems: { [key: number]: boolean } = {};

  isShowPager(): number {
    return this.totalCount;
  }

  getPagerItems(): void {
    const items: { [key: number]: boolean } = {};
    const itemCount = 5;
    const pageCount = Math.ceil(this.totalCount / this.pageSize);
    // 总页数 < item数的时候, 直接全部渲染
    if (pageCount <= itemCount) {
      for (let i = 1; i <= pageCount; i++) {
        items[i] = false;
      }
    } else {
      if (this.curPage < Math.ceil(itemCount / 2)) {
        for (let i = 1; i <= itemCount; i++) {
          items[i] = false;
        }
      } else {
        if (this.curPage > pageCount - Math.floor(itemCount / 2)) {
          for (let i = 0; i < itemCount; i++) {
            items[pageCount - i] = false;
          }
        } else {
          const half = Math.floor(itemCount / 2);
          for (let i = 0; i < itemCount; i++) {
            items[this.curPage - half + i] = false;
          }
        }
      }
    }

    items[this.curPage] = true;
    this.pagerItems = items;
  }

  canGoPrev(): boolean {
    return this.curPage !== 1;
  }

  canGoNext(): boolean {
    return this.curPage !== Math.ceil(this.totalCount / this.pageSize);
  }

  constructor() { }

  ngOnInit(): void {
    this.getPagerItems();
  }

  ngOnChanges(): void {
    this.getPagerItems();
  }

  getLink(page: number | string): string {
    return `${this.linkPrefix}/${page}`;
  }

  goPage(page: number): void {
    this.curPage = page;
    this.getPagerItems();
  }

  goPrev(): void {
    this.curPage--;
    this.getPagerItems();
  }

  goNext(): void {
    this.curPage++;
    this.getPagerItems();
  }
}

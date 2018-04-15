import { Component, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent implements OnInit, OnChanges {
  @Input() linkPrefix = '/post-list/page';
  @Input() curPage = 1;
  @Input() totalCount = 0;
  @Input() pageSize = 1;
  pagerItems: { [key: number]: boolean } = {};

  isShowPager() {
    return this.totalCount;
  }

  getPagerItems() {
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
          for (let i = 0; i < itemCount ; i++) {
            items[this.curPage - half + i] = false;
          }
        }
      }
    }

    items[this.curPage] = true;
    this.pagerItems = items;
  }

  canGoPrev() {
    return this.curPage !== 1;
  }

  canGoNext() {
    return this.curPage !== Math.ceil(this.totalCount / this.pageSize);
  }

  constructor(
    // private store: PagerStore
  ) {}

  ngOnInit() {
    this.getPagerItems();
  }

  ngOnChanges() {
    this.getPagerItems();
  }

  getLink(page) {
    return `${this.linkPrefix}/${page}`;
  }

  goPage(page) {
    this.curPage = page;
    this.getPagerItems();
  }

  goPrev() {
    this.curPage--;
    this.getPagerItems();
  }

  goNext() {
    this.curPage++;
    this.getPagerItems();
  }

}

import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStore } from '../../app.store';
import { Router } from '@angular/router';
import { SearchPageStore } from '../search-page.store';

@Component({
  selector: 'app-search',
  template: `
  <div class="col s24 m10 l6 push-l2">
    <app-select [options]="options" (selected)="changeSearchType($event)"></app-select>
  </div>
  <div class="col s24 m14 l14 push-l2">
    <input
      #inputRef
      class="text-input" type="text" placeholder="关键字"
      (keyup)="inputChange($event)"
    >
  </div>
  `,
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  debonce;
  options: any[] = [
    { name: '文章', value: 'post' },
    { name: '类别', value: 'category' },
    { name: '标签', value: 'label' }
  ];
  @ViewChild('inputRef') inputRef: ElementRef;
  constructor(
    private appStore: AppStore,
    private store: SearchPageStore,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.appStore.isHeaderTransparent = false;
    this.route.url.subscribe(([type, value]) => {
      this.store.searchType = type.path;
      this.store.searchContent = value ? value.path : '';
      this.inputRef.nativeElement.value = this.store.searchContent;
      const index = this.options.findIndex(item => item.value === type.path);
      this.options[index].active = true;
      this.store.search(true);
    });
  }

  changeSearchType(type) {
    this.store.searchType = type.value;
    this.router.navigate(['search', type.value]);
  }

  inputChange(event) {
    if (this.debonce) {
      clearTimeout(this.debonce);
    }
    this.debonce = setTimeout(() => {
      this.store.searchContent = event.target.value.trim();
      if (this.store.searchContent) {
        this.router.navigate(['search', this.store.searchType, this.store.searchContent]);
      }
    }, 500);
  }
}

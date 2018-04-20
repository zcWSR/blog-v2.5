import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStore } from '../../app.store';
import { Router } from '@angular/router';
import { SearchPageStore } from '../search-page.store';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-search',
  template: `
  <div class="col s24 m10 l6 push-l2">
    <app-select #selectRef [options]="options" (selected)="changeSearchType($event)"></app-select>
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
    { name: '文章', value: 'post', active: false },
    { name: '类别', value: 'category', active: false },
    { name: '标签', value: 'label', active: false }
  ];
  @ViewChild('inputRef') inputRef: ElementRef;
  @ViewChild('selectRef') selectRef: SelectComponent;
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
      console.log(this.store.searchContent);
      this.inputRef.nativeElement.value = this.store.searchContent;

      const optionsClone = [...this.options];
      optionsClone.forEach(item => item.active = false);
      const index = this.options.findIndex(item => item.value === type.path);
      optionsClone[index].active = true;
      this.options = optionsClone;
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

import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-simple-card',
  template: `
  <div class="card-simple" [style.marginTop]="'2em'">
  <div class="card-header">
      <p><a
        routerLink="{{ '/post/' + post.id }}"
        [innerHTML]="keywordType === 'post' ? highlight(post.title) : post.title"
      ></a></p>
  </div>
  <div class="card-info with-border">
      <ul>
          <li>
              <i class="fa fa-calendar"></i>
              <ul><li>{{ (post.createAt | dateX) }}</li></ul>
          </li>
          <li>
              <i class="fa fa-clipboard"></i>
              <ul><li
                [innerHTML]="keywordType === 'category' ? highlight(post.category) : post.category"
              ></li></ul>
          </li>
          <li>
              <i class="fa fa-tag"></i>
              <ul><li
                *ngFor="let tag of post.labels"
                [innerHTML]="keywordType === 'label' ? highlight(tag) : tag"
              >{{ tag }}</li></ul>
          </li>
      </ul>
  </div>
</div>
`,
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {
  @Input() keywordType;
  @Input() keyword;
  @Input() post;
  constructor() {}

  ngOnInit() {}

  highlight(meta: string) {
    const keyIndex = meta.toLocaleLowerCase().indexOf(this.keyword);
    if (keyIndex === -1) {
      return meta;
    }
    const splited = meta.split('');
    splited.splice(keyIndex, 0, `<p class="highlight">`);
    splited.splice(keyIndex + this.keyword.length + 1, 0, '</p>');
    return splited.join('');
  }
}

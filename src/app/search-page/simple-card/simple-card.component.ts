import { Component, OnInit, Input } from "@angular/core";
import { IPost } from "../../models/post";

@Component({
  selector: "app-simple-card",
  template: `
    <div class="card-simple" [style.marginTop]="'2em'">
      <div class="card-header">
        <p>
          <a
            routerLink="{{ '/post/' + post.id }}"
            [innerHTML]="
              keywordType === 'title' ? highlight(post.title) : post.title
            "
          ></a>
        </p>
      </div>
      <div class="card-info with-border">
        <ul>
          <li>
            <i class="fa fa-calendar"></i>
            <ul>
              <li>{{ post.createAt | dateX }}</li>
            </ul>
          </li>
          <li>
            <i class="fa fa-clipboard"></i>
            <ul>
              <li
                [innerHTML]="
                  keywordType === 'category'
                    ? highlight(post.category)
                    : post.category
                "
              ></li>
            </ul>
          </li>
          <li>
            <i class="fa fa-tag"></i>
            <ul>
              <li
                *ngFor="let tag of post.labels"
                [innerHTML]="keywordType === 'label' ? highlight(tag) : tag"
              >
                {{ tag }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ["./simple-card.component.scss"],
})
export class SimpleCardComponent implements OnInit {
  @Input() keywordType: string = '';
  @Input() keyword: string = '';
  @Input() post: IPost = {};
  constructor() {}

  ngOnInit() {}

  highlight(meta: string) {
    const keyIndex = meta.toLocaleLowerCase().indexOf(this.keyword);
    console.log(keyIndex);
    if (keyIndex === -1) {
      return meta;
    }
    const splited = meta.split("");
    splited.splice(keyIndex, 0, `<p class="highlight">`);
    splited.splice(keyIndex + this.keyword.length + 1, 0, "</p>");
    return splited.join("");
  }
}

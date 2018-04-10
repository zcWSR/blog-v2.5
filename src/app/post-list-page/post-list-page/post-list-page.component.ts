import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';
import { IPost } from '../../modules/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent implements OnInit {
  @Input() post: IPost;
  constructor() { }

  ngOnInit() {
  }

}

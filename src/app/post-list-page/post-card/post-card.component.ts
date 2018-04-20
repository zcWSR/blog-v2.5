import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IPost } from '../../models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post: IPost;
  constructor() { }

  ngOnInit() {
  }

}

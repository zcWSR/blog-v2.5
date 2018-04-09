import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListComponent } from './post-list/post-list.component';
import { PostCardComponent } from './post-card/post-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PostCardComponent,
    PostListComponent
  ]
})
export class PostListModule { }

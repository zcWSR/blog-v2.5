import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobxAngularModule } from 'mobx-angular';

import { PostListPageRoutingModule } from './post-list-page-routing.module';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostListPageComponent } from './post-list-page/post-list-page.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    MobxAngularModule,
    CoreModule,
    PostListPageRoutingModule
  ],
  declarations: [
    PostCardComponent,
    PostListComponent,
    JumbotronComponent,
    PostListPageComponent,
  ],
  exports: [
    PostListPageComponent
  ]
})
export class PostListPageModule { }

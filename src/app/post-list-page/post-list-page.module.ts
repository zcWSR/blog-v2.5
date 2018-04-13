import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MobxAngularModule } from 'mobx-angular';

import { PostListPageRoutingModule } from './post-list-page-routing.module';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostListPageComponent } from './post-list-page/post-list-page.component';
import { CoreModule } from '../core/core.module';
import { PostListPageStore } from './post-list-page.store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MobxAngularModule,
    HttpClientModule,
    HttpClientJsonpModule,
    CoreModule,
    PostListPageRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    PostListPageStore
  ],
  declarations: [
    PostCardComponent,
    PostListComponent,
    JumbotronComponent,
    PostListPageComponent
  ],
  exports: [
    PostListPageComponent
  ]
})
export class PostListPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DisqusModule } from 'ngx-disqus';
import { MobxAngularModule } from 'mobx-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticlePageStore } from './article-page.store';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MobxAngularModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    RouterModule,
    DisqusModule.forRoot('zcwsr')
  ],
  providers: [
    ArticlePageStore
  ],
  declarations: [
    ArticlePageComponent
  ],
  exports: [
    ArticlePageComponent
  ]
})
export class ArticlePageModule {}

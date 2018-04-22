import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DisqusModule } from 'ngx-disqus';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticlePageStore } from './article-page.store';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule,
    CoreModule,
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

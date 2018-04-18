import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MobxAngularModule } from 'mobx-angular';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PagerComponent } from './pager/pager.component';
import { DateXPipe } from './date-x.pipe';
import { MarkdownComponent } from './markdown/markdown.component';
import { WithKeyPipe } from './with-key.pipe';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToArrayPipe } from './to-array.pipe';

@NgModule({
  imports: [
    CommonModule,
    MobxAngularModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    PagerComponent,
    LoadingComponent,
    DateXPipe,
    MarkdownComponent,
    WithKeyPipe,
    ToArrayPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PagerComponent,
    LoadingComponent,
    DateXPipe,
    MarkdownComponent,
    WithKeyPipe,
    ToArrayPipe
  ]
})
export class CoreModule {}

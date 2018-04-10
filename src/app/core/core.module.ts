import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MobxAngularModule } from 'mobx-angular';
import { JsonpModule } from '@angular/http';
import { PagerComponent } from './pager/pager.component';
import { DateXPipe } from './date-x.pipe';
import { MarkdownComponent } from './markdown/markdown.component';

@NgModule({
  imports: [
    CommonModule,
    MobxAngularModule,
    JsonpModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    PagerComponent,
    DateXPipe,
    MarkdownComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PagerComponent,
    DateXPipe,
    MarkdownComponent
  ]
})
export class CoreModule { }

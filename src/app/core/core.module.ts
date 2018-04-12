import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MobxAngularModule } from 'mobx-angular';
import { JsonpModule } from '@angular/http';
import { PagerComponent } from './pager/pager.component';
import { DateXPipe } from './date-x.pipe';
import { MarkdownComponent } from './markdown/markdown.component';
import { WithKeyPipe } from './with-key.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MobxAngularModule,
    JsonpModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    PagerComponent,
    DateXPipe,
    MarkdownComponent,
    WithKeyPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PagerComponent,
    DateXPipe,
    MarkdownComponent,
    WithKeyPipe
  ]
})
export class CoreModule { }

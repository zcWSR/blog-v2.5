import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchPageComponent } from './search-page/search-page.component';
import { SearchComponent } from './search/search.component';
import { SelectComponent } from './select/select.component';
import { SearchPageRoutingModule } from './search-page.routing';
import { CoreModule } from '../core/core.module';
import { MobxAngularModule } from 'mobx-angular';
import { SearchPageStore } from './search-page.store';
import { SimpleCardComponent } from './simple-card/simple-card.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MobxAngularModule,
    CoreModule,
    RouterModule,
    SearchPageRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [SearchPageComponent, SearchComponent, SelectComponent, SimpleCardComponent],
  providers: [SearchPageStore],
  exports: [
    SearchPageComponent
  ]
})
export class SearchPageModule { }

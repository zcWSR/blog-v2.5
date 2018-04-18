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

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    CoreModule,
    RouterModule,
    SearchPageRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [SearchPageComponent, SearchComponent, SelectComponent],
  exports: [
    SearchPageComponent
  ]
})
export class SearchPageModule { }

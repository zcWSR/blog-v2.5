import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SearchPageComponent } from './search-page/search-page.component';
import { SearchComponent } from './search/search.component';
import { SelectComponent } from './select/select.component';
import { SearchPageRoutingModule } from './search-page.routing';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule,
    SearchPageRoutingModule
  ],
  declarations: [SearchPageComponent, SearchComponent, SelectComponent],
  exports: [
    SearchPageComponent
  ]
})
export class SearchPageModule { }

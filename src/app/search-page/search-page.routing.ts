import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
    path: 'search',
    component: SearchPageComponent,
    children: [
      { path: '', component: SearchComponent },
      { path: 'post/:content', component: SearchComponent },
      { path: 'category/:content', component: SearchComponent },
      { path: 'label/:content', component: SearchComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchPageRoutingModule {}

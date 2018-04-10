import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListPageComponent } from './post-list-page/post-list-page.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
    path: 'post-list',
    component: PostListPageComponent,
    children: [
      { path: '', component: PostListComponent },
      { path: 'page/:page', component: PostListComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostListPageRoutingModule {}
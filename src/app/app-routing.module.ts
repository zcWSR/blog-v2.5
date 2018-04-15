import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListPageComponent } from './post-list-page/post-list-page/post-list-page.component';
import { PostListComponent } from './post-list-page/post-list/post-list.component';
import { PostPageComponent } from './post-page/post-page/post-page.component';

const routes: Routes = [
  {
    path: '',
    component: PostListPageComponent,
    children: [
      { path: '', component: PostListComponent }
    ],
    data: { animation: 'root' }
  }, {
    path: 'post/:postId',
    component: PostPageComponent,
    data: { animation: 'post' }
  },
  {
    path: 'post-list',
    component: PostListPageComponent,
    data: { animation: 'post-list' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

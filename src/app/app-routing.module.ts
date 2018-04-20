import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListPageComponent } from './post-list-page/post-list-page/post-list-page.component';
import { PostListComponent } from './post-list-page/post-list/post-list.component';
import { PostPageComponent } from './post-page/post-page/post-page.component';
import { SearchPageComponent } from './search-page/search-page/search-page.component';
import { ArticlePageComponent } from './article-page/article-page/article-page.component';

const routes: Routes = [
  {
    path: '',
    component: PostListPageComponent,
    children: [
      { path: '', component: PostListComponent }
    ],
    data: { animation: 'post' }
  }, {
    path: 'post/:postId',
    component: PostPageComponent,
    data: { animation: 'post' }
  },
  // {
  //   path: 'article',
  //   component: ArticlePageComponent,
  //   data: { animation: 'article' }
  // },
  {
    path: 'post-list',
    component: PostListPageComponent,
    data: { animation: 'post-list' }
  },
  {
    path: 'search',
    component: SearchPageComponent,
    data: { animation: 'search' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

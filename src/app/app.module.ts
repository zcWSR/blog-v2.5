import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PostListPageModule } from './post-list-page/post-list-page.module';
import { PostPageModule } from './post-page/post-page.module';
import { SearchPageModule } from './search-page/search-page.module';
import { ArticlePageModule } from './article-page/article-page.module';

import { AppStore } from './app.store';
import { AppConfigSerivce } from './app-config.service';
import { APP_INITIALIZER } from '@angular/core';


export function appConfigServiceFactory(service: AppConfigSerivce) {
  return () => service.loadAppConfig();
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    CoreModule,
    PostListPageModule,
    PostPageModule,
    SearchPageModule,
    ArticlePageModule,
    AppRoutingModule
  ],
  providers: [
    AppStore,
    AppConfigSerivce,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigServiceFactory,
      deps: [AppConfigSerivce],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

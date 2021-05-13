import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PostListPageModule } from './post-list-page/post-list-page.module';
import { PostPageModule } from './post-page/post-page.module';
import { SearchPageModule } from './search-page/search-page.module';
import { ArticlePageModule } from './article-page/article-page.module';

import { AppStore } from './app.store';
import { AppConfigService } from './app-config.service';
import { APP_INITIALIZER } from '@angular/core';


export function appConfigServiceFactory(service: AppConfigService): () => Promise<boolean> {
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
    FormsModule,
    PostListPageModule,
    PostPageModule,
    SearchPageModule,
    ArticlePageModule,
    AppRoutingModule
  ],
  providers: [
    AppStore,
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigServiceFactory,
      deps: [AppConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

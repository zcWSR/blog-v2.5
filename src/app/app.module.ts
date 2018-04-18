import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PostListPageModule } from './post-list-page/post-list-page.module';
import { AppStore } from './app.store';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { SmallJumbotronComponent } from './post-page/small-jumbotron/small-jumbotron.component';
import { PostPageComponent } from './post-page/post-page/post-page.component';
import { PostPageModule } from './post-page/post-page.module';
import { AppConfigSerivce } from './app-config.service';
import { APP_INITIALIZER } from '@angular/core';
import { SearchPageModule } from './search-page/search-page.module';


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

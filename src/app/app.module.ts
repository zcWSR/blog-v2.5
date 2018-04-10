import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PostListPageModule } from './post-list-page/post-list-page.module';
import { AppStore } from './app.store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    PostListPageModule,
    AppRoutingModule
  ],
  providers: [
    AppStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

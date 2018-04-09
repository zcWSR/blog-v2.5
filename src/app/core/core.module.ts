import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';
import { CoreStore } from './core.store';
import { MobxAngularModule } from 'mobx-angular';
import { JsonpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    MobxAngularModule,
    JsonpModule
  ],
  declarations: [
    HeaderComponent,
    JumbotronComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    JumbotronComponent,
    FooterComponent
  ],
  providers: [
    CoreStore
  ]
})
export class CoreModule { }

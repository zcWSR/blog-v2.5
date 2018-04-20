import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DisqusModule } from 'ngx-disqus';
import { CoreModule } from '../core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobxAngularModule } from 'mobx-angular';
import { PostPageComponent } from './post-page/post-page.component';
import { PostPageStore } from './post-page.store';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MobxAngularModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    RouterModule,
    DisqusModule.forRoot('zcwsr')
  ],
  providers: [
    PostPageStore
  ],
  declarations: [
    PostPageComponent
  ],
  exports: [
    PostPageComponent
  ]
})
export class PostPageModule { }

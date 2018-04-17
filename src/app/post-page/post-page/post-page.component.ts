import { Component, OnInit, ChangeDetectionStrategy, HostBinding, HostListener } from '@angular/core';
import { transition, style, trigger, animate, state } from '@angular/animations';
import { PostPageStore } from '../post-page.store';
import { ActivatedRoute } from '@angular/router';
import { runInAction } from 'mobx';
import { action } from 'mobx-angular';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('enterLeave', [
      state('initial', style({ opacity: 0, transform: 'translateY(10px)' })),
      state('ready', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('initial => ready', [
        animate(`.25s 1s linear`)
      ])
    ])
  ]
})
export class PostPageComponent implements OnInit {

  constructor(
    private store: PostPageStore,
    private route: ActivatedRoute
  ) {
    this.store.setDefault();
  }

  ngOnInit() {
    this.route.params.subscribe(({ postId }) => {
      if (postId) {
        this.store.getPost(postId);
      }
    });
  }

  onPostNavLoad(index: any[]) {
    this.store.setIndexList(index)
  }

  scrollToTop(elementId, offset) {
    const element = document.getElementById(elementId);
    let position = element.offsetTop
         + document.getElementsByClassName('jumbotron')[0].clientHeight - offset;
    console.log('position', position);
    this.store.scrollTo(position, 500);
  }
}

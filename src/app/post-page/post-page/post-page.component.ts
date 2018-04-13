import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PostPageStore } from '../post-page.store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostPageComponent implements OnInit {

  constructor(
    private store: PostPageStore,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(({ postId }) => {
      if (postId) {
        this.store.getPost(postId);
      }
    })
  }

}

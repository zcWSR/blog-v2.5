import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PostPageStore } from '../post-page.store';

@Component({
  selector: 'app-small-jumbotron',
  templateUrl: './small-jumbotron.component.html',
  styleUrls: ['./small-jumbotron.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallJumbotronComponent implements OnInit {

  constructor(
    private store: PostPageStore
  ) { }

  ngOnInit() {
  }

}

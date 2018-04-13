import { Component, OnInit, Input } from '@angular/core';
import { transition, style, trigger, animate, state } from '@angular/animations';

@Component({
  selector: 'app-loading',
  template: `
  <div class="loading-container" [class.dark]="dark">
    <div class="spinner">
      <div class="item-wrapper">
          <div class="item"></div>
      </div>
      <div class="item-wrapper">
          <div class="item"></div>
      </div>
      <div class="item-wrapper">
          <div class="item"></div>
      </div>
      <div class="item-wrapper">
          <div class="item"></div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./loading.component.scss'],
  animations: [
    trigger('showHide', [
      state('*', style({ opacity: 0.9 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('.5s ease-in-out')
      ]),
      transition('* => void', [
        animate('.5s ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ],
  host: {
    '[@showHide]': ''
  }
})
export class LoadingComponent implements OnInit {
  @Input() dark = false;
  constructor() { }

  ngOnInit() {
  }

}
